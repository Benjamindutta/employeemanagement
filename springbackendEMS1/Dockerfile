FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package

# Stage 2: Create the final Docker image
FROM openjdk:17-alpine
WORKDIR /app
COPY --from=build /app/target/Emsbackend.jar ./app.jar
CMD ["java", "-jar", "app.jar"]