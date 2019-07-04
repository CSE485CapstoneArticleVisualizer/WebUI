# Arvisui - Article Visualizer User Interface

Social media is a broad topic that is being discussed in many academic fields. Many authors only cite articles in their own field, which creates field-level bubbles. Our intention of this project is to build a tool to help map, analyze, and visualize those bubbles. The tool uses imported metadata to construct a graph that maps relationships between articles, and it will be used to research the relationships and fragmentation in those field-level bubbles.

## Prerequisites

Before you begin, make sure your development environment includes Node.js® and an npm package manager.

### Node.js

Angular requires Node.js version 10.9.0 or later.
- To check your version, run node -v in a terminal/console window.
- To get Node.js, go to [nodejs.org](https://nodejs.org/en/).

### npm package manager

Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as [npm packages](https://docs.npmjs.com/getting-started/what-is-npm). To download and install npm packages, you must have an npm package manager.

This setup guide uses the [npm client](https://docs.npmjs.com/cli/install) command line interface, which is installed with Node.js by default.

To check that you have the npm client installed, run npm -v in a terminal/console window.

### Install the Angular CLI

You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

Install the Angular CLI globally.

To install the CLI using npm, open a terminal/console window and enter the following command:
```
npm install -g @angular/cli
```
For more information on how to setup the local environment and workspace, please refer to [Angular Setup](https://angular.io/guide/setup-local).

## Installing packages
To install the basic packages, run the following command:
```
npm install
```

## Development server

To run the Angular application on a dev server, run one of the following commands:
```
ng serve
```
or
```
npm start
```
Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files. Use `Ctrl C` to stop running.

## Build

To build the project, run one of the following commands:
```
ng build
```
or
```
npm run build
```
The build artifacts will be stored in the `dist/` directory. You may also use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
