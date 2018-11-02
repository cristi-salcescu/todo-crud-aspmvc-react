Open the index.html.
All bundles are already generated, there is no need to run any extra tasks.


# GruntJS
The application uses GruntJS to run tasks.

How install GruntJS:
- Execute from command prompt:
`npm install -g grunt-cli`
- Execute from command prompt:
`npm install`

How to run GruntJS
- Execute from command prompt:
`grunt`
- In order to start the watch, execute from command prompt:
`grunt watch`

GruntJS is used to bundle all modules together, concatenate css files, linting.

# Architecture
The application is split in 3 layers:
- presentation: the "components" folder
- stores : the "stores" folder
- data access: the "dataacess" folder

Data Access objects make ajax requests.
Models keep and manage state.
Components render data and manage user interation.
The app.js builds all the necesary objects and mounts the page

Components access models, which in turn access data access objects.

# Tests
The modules functionality is tested using QUnit.
Open tests/tests.html to run all the tests.

# Styles
All styles are in the "css" folder.
