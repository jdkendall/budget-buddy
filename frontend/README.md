# Budget Buddy Frontend

Budget Buddy's frontend is developed using Angular, providing a modular and reactive interface. The application is structured around several core routes, each serving a distinct purpose. The landing page offers an overview of the platform's features, while the dashboard integrates various data visualization components to represent financial data. Firebase integration ensures secure authentication, allowing users to sign in using multiple methods, including email/password and Google OAuth2.

## Budget Buddy Routes

Budget Buddy provides a user-friendly interface to help users manage their finances. Here's an overview of the available routes and their respective functionalities:

### Table of Routes

| Route        | Description                                                                                    | Requires Authorization |
|--------------|------------------------------------------------------------------------------------------------|------------------------|
| `/`          | Landing page introducing Budget Buddy and its features.                                        | No                     |
| `/dashboard` | User's main hub, showcasing financial overviews, graphs, charts, and access to other features. | Yes                    |
| `/login`     | Entry point for user authentication via Firebase, supporting email/password and Google OAuth2. | No                     |

### Route Descriptions

#### Home Page (`/`)

The home page serves as the first touchpoint for new users. It offers a detailed introduction to Budget Buddy and its core functionalities, explaining how the platform assists users in managing and understanding their finances. This page is open to everyone and doesn't require any form of authentication.

#### Dashboard (`/dashboard`)

The dashboard is the heart of the Budget Buddy experience for registered users. Once logged in, users can navigate through an assortment of features that help them get insights into their spending habits. This includes graphical representations, tables, and other visuals that depict their current financial situation. Given the sensitive nature of the data displayed, this route requires users to be logged in.

#### Login Page (`/login`)

The login page is the gateway for users to access the Budget Buddy platform's full features. Here, users can authenticate using Firebase with the available providers, currently supporting email/password and Google OAuth2. Upon successful authentication, they are redirected to the dashboard to start their financial journey. This page is publicly accessible to cater to both new and returning users.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
