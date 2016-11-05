FROM docker.io/metadatapoc/spark

MAINTAINER Zak Hassan zak.hassan1010@gmail.com

RUN mkdir -p /app
ADD ./target/recommend-mllib-1.0.0-SNAPSHOT-jar-with-dependencies.jar   /app
ADD ./runSparkJob.sh   /app
WORKDIR /app

EXPOSE 8080

ENTRYPOINT ["./runSparkJob.sh"]