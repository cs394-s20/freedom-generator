<h1>Freedom Link</h1>

<h2>Table of Contents</h2>

 * Introduction
 * Installation
   * Front-end
   * Back-end
   *Deployment Tools
 * Development
 * Deployment
 * Testing
 * Troubleshooting
 * FAQ
 * Maintainers
 
 <h2>Introduction</h2>

Freedom Link is a web application that helps people through starting the petition process for those seeking early release of loved ones from the Illinois Department of corrections. Currently, the platform is focused on those who may be eligible for release during the COVID-19 pandemic. 

<h2>Installation</h2>

<h4>React front-end</h4>
In order to begin working on the front end, you'll need to perform the following steps:

1. Install node.js

2. ```git clone https://github.com/cs394-s20/freedom-generator.git```

3. ```cd freedom-generator```

4. ```npm i```


<h4>Python Lambda Function back-end</h4>
To begin working on the API:

1. Install Python >=3.7

2. ```cd freedom-generator/api```

3. ```pip install virtualenv```

4. ```virtualenv env```

5. On Windows run:
  ```env\Scripts\activate```
  
  Otherwise run:
  ```source env/bin/activate```
  
6. ```pip install -r requirements.txt```

<h4>Deployment tools installation</h4>
Follow the instructions below to gain the ability to deploy the front-end and the back-end

1. Get AWS Credentials from the AWS root account owner for this project (see Maintainers). If there is not a maintainer who owns the AWS root account, the AWS resources should be set up as described here.

2. Set up the AWS Command Line Interface (CLI) using the credentials from step 1

3. ```cd freedom-generator/deploy```

4. If you have completed the installation for API development, skip to step 7.

5. Install Python >=3.7

6. ```pip install virtualenv ```

7.  ```virtualenv env```

8. On Windows run:
  ```env\Scripts\activate```
  
  Otherwise run:
  ```source env/bin/activate```
  
9. ```pip install -r requirements.txt```


<h2>Development</h2>

