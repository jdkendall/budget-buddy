# Use the official Gradle image to create a build artifact
FROM gradle:8-jdk21 AS build

# Set the working directory in docker
WORKDIR /app

# Copy the gradle files first to download dependencies
COPY backend/build.gradle backend/settings.gradle ./
COPY backend/src ./src

# Extract the JAR for layering in the final image
RUN gradle bootJar --no-daemon -x test 
RUN java -Djarmode=layertools -jar ./build/libs/*.jar extract --destination ./build/extracted

# Use the official OpenJDK 21 image as the base image
FROM openjdk:21-slim

# Copy the jar file from the build stage
VOLUME /tmp
ARG EXTRACTED=/app/build/extracted
COPY --from=build ${EXTRACTED}/dependencies/ ./
COPY --from=build ${EXTRACTED}/spring-boot-loader/ ./
COPY --from=build ${EXTRACTED}/snapshot-dependencies/ ./
COPY --from=build ${EXTRACTED}/application/ ./
ENTRYPOINT ["java","org.springframework.boot.loader.JarLauncher"]

# Expose the port
EXPOSE 8080

# Command to run the application
CMD ["java", "-jar", "app.jar"]

