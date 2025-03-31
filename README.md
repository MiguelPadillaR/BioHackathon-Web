# Synbio CATaLyST Web Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Requisites:
Please follow this [Angular installation guide](https://angular.dev/installation) for any issues. In short, all you need is:

- Node.js - [v^18.19.1 or newer](https://angular.dev/reference/versions).
- Terminal or Command Line - Required for running Angular CLI commands.

In order to install all necessary packages used by the project, run `npm install`.

Use `ng serve` to deploy the project in development mode and see all changes in real time.

## Project Guide
A list of useful commands to build the project and test the code.
<details>
  <summary><strong>Expand</strong></summary>

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help
To get more help on the Angular CLI use `ng help` or check out the [Angular CLI Overview and Command Reference](https://angular.io/cli).

</details>

## Deployment Guide

<details>
  <summary><strong>Expand</strong></summary>

### 1. Install the ´AngularCLI gh-pages´:
Use the following commands on your Terminal:
 ```
npm i angular-cli-ghpages
ng add angular-cli-ghpages
 ```
 ### 2. Deploy the project:
 Use the `ng deploy --base-href=/PROJECT_NAME/` command. Keep the `/` in. If you don't know the name of your project, look into the `tsconfig.json` file of your project. In our case, it will be

 ```
ng deploy --base-href=/BioHackathon-Web/
 ```

 ### 3. Go to the url:
 In our case is:
 - [https://miguelpadillar.github.io/BioHackathon-Web/](https://miguelpadillar.github.io/BioHackathon-Web/)

  </details>
