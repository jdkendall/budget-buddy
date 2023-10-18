# Budget Buddy Backend

## Introduction

Budget Buddy's backend is a Spring Boot application aimed at providing robust financial management and budget tracking capabilities. This document serves as an overview for developers maintaining and enhancing this application.

## Key Dependencies

### Core Functionality:

- **spring-boot-starter-web**: Foundation for building web applications, including RESTful services.
  
  Configuration:
  ```properties
  server.port=8080
  server.servlet.context-path=/api
  ```

- **spring-boot-starter-data-jpa**: Enables JPA-based data access layers.

  Configuration:
  ```properties
  spring.datasource.url=${DB_URL}
  spring.datasource.username=${DB_USERNAME}
  spring.datasource.password=${DB_PASSWORD}
  ```
  [More on JPA Configuration](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-configure-datasource)

- **spring-boot-starter-validation**: Provides validation capabilities.

  Configuration is usually done via annotations in your domain models. For more details, refer to [JSR-303 documentation](https://beanvalidation.org/2.0/spec/).

### Security:

- **spring-boot-starter-security**: Provides authentication and authorization.

  Configuration:
  ```properties
  spring.security.user.name=admin
  spring.security.user.password=secret
  ```
  [More on Security Configuration](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-security)

- **spring-boot-starter-oauth2-client**: Offers OAuth2 client-side support.

  Configuration:
  ```properties
  spring.security.oauth2.client.registration.[client-name].client-id=YOUR_CLIENT_ID
  spring.security.oauth2.client.registration.[client-name].client-secret=YOUR_CLIENT_SECRET
  ```
  [More on OAuth2 Client Configuration](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#boot-features-security-oauth2-client)

### Monitoring & Management:

- **spring-boot-starter-actuator**: Offers monitoring and management features.

  Configuration:
  ```properties
  management.endpoints.web.exposure.include=*
  management.endpoint.health.show-details=always
  ```
  [More on Actuator Configuration](https://docs.spring.io/spring-boot/docs/current/reference/html/production-ready-features.html)

- **io.micrometer:micrometer-tracing-bridge-brave**: Bridges metrics to Brave's tracing system.

  [Micrometer with Brave Configuration Documentation](https://micrometer.io/docs/registry/brave)

### Development Tools:

- **org.projectlombok:lombok**: Reduces boilerplate code. Ensure you have the Lombok plugin installed in your IDE.

  No specific properties configuration, but annotations are used directly in the code. [Lombok Documentation](https://projectlombok.org/features/all)

- **spring-boot-devtools**: Offers development tools with auto-reload capabilities.

  Configuration:
  ```properties
  spring.devtools.restart.enabled=true
  spring.devtools.livereload.enabled=true
  ```

### Database:

- **org.postgresql:postgresql**: JDBC driver for PostgreSQL.

  Already covered under `spring-boot-starter-data-jpa` configuration.

### Testing:

- **spring-boot-starter-test**: Offers testing utilities and classes.

  General testing configurations are usually done within the testing code itself. [Testing Documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-testing)

- **spring-security-test**: Provides utilities to test Spring Security components.

  [Spring Security Testing Documentation](https://docs.spring.io/spring-security/site/docs/current/reference/html/test.html)

## Configuring Spring Data Source via Environment Variables

To configure the data source using environment variables in your Spring Boot application:

### Setting the Environment Variables

| Variable    | Description                                                                                   |
|-------------|-----------------------------------------------------------------------------------------------|
| DB_URL      | The jdbc URL for the database to connect to<br/>(Postgres, or others with additional drivers) |
| DB_USERNAME | The username to connect to the database                                                       |
| DB_PASSWORD | The password to connect to the database                                                       |


**Running locally**
   ```shell
   export DB_URL=jdbc:postgresql://your-database-endpoint:5432/your-db-name
   export DB_USERNAME=your-db-username
   export DB_PASSWORD=your-db-password
   # etc
   ```

**Running in Docker**
```shell
docker run \
    -e DB_URL=jdbc:postgresql://your-database-endpoint:5432/your-db-name \
    -e DB_USERNAME=your-db-username \
    -e DB_PASSWORD=your-db-password \
    # etc \
    [..rest of command..]
```

These correspond with the configuration for different values such as `spring.datasource.*` in the [application.properties](src/main/resources/application.properties) file.

Ensure these environment variables are set before starting your application. This keeps database credentials secure and out of the codebase.
