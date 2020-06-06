import boto3
import shutil
import zipfile
import os
from os.path import basename
 
def zipdir(path, ziph):
    # ziph is zipfile handle
    for root, dirs, files in os.walk(path):
        for file in files:
            ziph.write(os.path.join(root, file), arcname=os.path.join(root, file).replace(path, ""))


zipf = zipfile.ZipFile('./api/deployment.zip', 'w', zipfile.ZIP_DEFLATED)
zipdir('./api/deployment', zipf)
for file in os.listdir('./api'):
    if file.endswith(".py"):
        zipf.write(os.path.join('./api/' + file), arcname=file)
zipf.close()

client = boto3.client('lambda', region_name='us-east-2')
with open('./api/deployment.zip', 'rb') as f:
    client.update_function_code(
        FunctionName='idocData',
        ZipFile=f.read()
    )