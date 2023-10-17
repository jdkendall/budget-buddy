# Budget Buddy

Budget Buddy is a web-based budget tracking application built with Java, Spring Boot, and Angular. It allows users to monitor their financial transactions, set budget goals, and get insights into their spending habits. Written both for personal use and to brush up on the latest developments in Java-land the Angular-chipelago. (Sorry, that one was a bit of a stretch.)

[![Build](https://github.com/jdkendall/budget-buddy/actions/workflows/main.yml/badge.svg)](https://github.com/jdkendall/budget-buddy/actions)

## Features

 _In the works!_

## Planned Features

- **Transaction Tracking**: Log daily transactions and categorize them for better financial management.
- **Budget Goals**: Set monthly or yearly budget goals and track your progress.
- **Spending Insights**: Visualize your spending habits with intuitive charts and graphs.
- **Alerts & Notifications**: Get notified when you're close to your budget limit or when unusual spending is detected.
- **User Profiles**: Personalized user profiles with transaction history, saved goals, and more.

## Getting Started

### Prerequisites

- Java 21 (OpenJDK preferred)
- Gradle
- Node.js and Angular CLI

### Installation

1. Clone the repository:

```sh
git clone https://github.com/jdkendall/budget-buddy.git
```

2. Navigate to the backend directory and build the project:

```sh
cd budget-buddy/backend
gradle bootRun
```

3. In a separate terminal, navigate to the frontend directory and start the Angular app:

```sh
cd budget-buddy/frontend
ng serve
```

4. Open a web browser and navigate to `http://localhost:4200` to access the application.

## Docker Deployment

### Building the Docker Image

To build the Docker image for Budget Buddy:

~~~
docker build -t budget-buddy:latest .
~~~

This will create an image named `budget-buddy` with the tag `latest`. The Dockerfile is set up to build both the backend and frontend, and package them into a single image.

### Running the Docker Container

Once the image is built, you can run Budget Buddy using:

~~~
docker run -p 8080:8080 budget-buddy:latest
~~~

Access the application by navigating to `http://localhost:8080` in your web browser.

## Continuous Integration with GitHub Actions

Budget Buddy uses GitHub Actions for Continuous Integration. Every push to the repository triggers the CI process, which includes:

- Building the Angular frontend.
- Building the Spring Boot backend.
- Running tests for both frontend and backend.
- Building the Docker image.

You can view the CI workflow details in the `.github/workflows` directory in the repository.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to my awesome spouse Micah for keeping me inspired and motivated.
