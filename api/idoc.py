import requests
from bs4 import BeautifulSoup

URL = "https://www.idoc.state.il.us/subsections/search/ISinms2.asp?idoc="

def getIdocProfile(idoc):
    out = {}
    html = BeautifulSoup(requests.post(URL + str(idoc)).content, 'html.parser')

    name_tag = html.find('font', attrs={'size':'4'})
    name = [text.replace(' ', '') for text in name_tag.text.split('-')[1].split(',')]
    out["name"] = {
        "first": name[1],
        "last": name[0]
    }

    #next_table = name_tag.find_parent('table').next_sibling()
    #rows=next_table.find_all('tr')

    return out
