<h1>Freedom Link</h1>

<h2>Table of Contents</h2>

 * [Introduction](#introduction)
 * [Installation](#installation)
   * Front-end
   * Back-end
   * Deployment Tools
 * [Development](#development)
 * [Deployment](#deployment)
 * [Maintainers](#maintainers)
 
 ## Introduction

Freedom Link is a web application that helps people through starting the petition process for those seeking early release of loved ones from the Illinois Department of corrections. Currently, the platform is focused on those who may be eligible for release during the COVID-19 pandemic. 

## Installation

<h4>React front-end</h4>

In order to begin working on the front end, you'll need to perform the following steps:

1. Install [node.js](https://nodejs.org/en/download/)

2. ```git clone https://github.com/cs394-s20/freedom-generator.git```

3. ```cd freedom-generator```

4. ```npm i```


<h3>Python Lambda Function back-end</h3>
To begin working on the API:

1. Install [Python >=3.7](https://www.python.org/downloads/)

2. ```cd freedom-generator/api```

3. ```pip install virtualenv```

4. ```virtualenv env```

5. On Windows run:
  ```env\Scripts\activate```
  
  Otherwise run:
  ```source env/bin/activate```
  
6. ```pip install -r requirements.txt```

<h3>Deployment tools installation</h3>
Follow the instructions below to gain the ability to deploy the front-end and the back-end

1. Get AWS Credentials from the AWS root account owner for this project (see [Maintainers](#maintainers)). If there is not a maintainer who owns the AWS root account, the AWS resources should be set up as described [here](#maintainers).

2. Set up the [AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html) (CLI) using the credentials from step 1

3. ```cd freedom-generator/deploy```

4. If you have completed the installation for API development, skip to step 7.

5. Install [Python >=3.7](https://www.python.org/downloads/)

6. ```pip install virtualenv ```

7.  ```virtualenv env```

8. On Windows run:
  ```env\Scripts\activate```
  
  Otherwise run:
  ```source env/bin/activate```
  
9. ```pip install -r requirements.txt```


## Development

<h3>Front-end development</h3>

If you're not testing the integration between the API and the front-end, use ```npm run start:production``` to start the React App with API requests to the live API

Otherwise, to test integration with an updated API (served on localhost:3001) use ```npm start```


<h3>API development</h3>

To start development:

1. ```cd freedom-generator/api```

2. On Windows run:
  ```env\Scripts\activate```
  
  Otherwise run:
  ```source env/bin/activate```

The functionality is contained within [idoc.py](https://github.com/cs394-s20/freedom-generator/blob/master/api/idoc.py), while the Lambda function is in [idoc_lambda_func.py](idoc_lambda_func.py). In order to test locally, call:

```
python api_server.py
```

This will start a Python Flask server on http://localhost:3001 that has the same paths as the live AWS API Gateway resource.

## Deployment

To deploy the front-end:

```
cd freedom-generator/
npm run deploy-web
```

To deploy the API:

```
cd freedom-generator/
npm run deploy-api
```

## Maintainers 

<h3>Developers:</h3>
  
* John Laboe
* Rochelle (Chelly) Compendio

<h3>AWS root account owner:</h3> 

John Laboe

