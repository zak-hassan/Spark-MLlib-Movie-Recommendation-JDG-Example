FROM docker.io/java:8-jdk-alpine

MAINTAINER Zak Hassan zak.hassan1010@gmail.com

RUN mkdir -p /app
ADD ./target/recommendation-service-1.0.0-SNAPSHOT-shaded.jar /app
WORKDIR /app

EXPOSE 8080

ENTRYPOINT ["java","-jar", "recommendation-service-1.0.0-SNAPSHOT-shaded.jar"]