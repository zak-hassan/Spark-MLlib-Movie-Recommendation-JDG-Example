FROM docker.io/java:8-jdk-alpine

MAINTAINER Zak Hassan zak.hassan1010@gmail.com
ENV SBT_VERSION 0.13.11
ENV SBT_HOME /usr/local/sbt
ENV PATH ${PATH}:${SBT_HOME}/bin

RUN mkdir -p /app
RUN apk update
RUN apk add bash curl tar unzip nodejs
RUN  /usr/bin/npm install  && /usr/bin/npm install -g bower && /usr/bin/bower install --allow-root && curl -sL "http://dl.bintray.com/sbt/native-packages/sbt/$SBT_VERSION/sbt-$SBT_VERSION.tgz" | gunzip | tar -x -C /usr/local
WORKDIR /app
RUN /usr/local/sbt/bin/sbt package
EXPOSE 9000
ENTRYPOINT ["/usr/local/sbt/bin/sbt", "run"]
