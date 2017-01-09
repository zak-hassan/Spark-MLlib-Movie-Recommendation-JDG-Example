FROM docker.io/radanalyticsio/openshift-spark

MAINTAINER Zak Hassan zak.hassan1010@gmail.com

#ENV SPARK_MASTER_URL spark://zhassan.yyz.redhat.com:7077
#ENV RECOMMEND_SERVICE_SERVICE_HOST zhassan.yyz.redhat.com

#RUN mkdir -p /opt/spark
#RUN apk update
#RUN apk add bash curl tar unzip nodejs

ADD ./target/recommend-mllib-1.0.0-SNAPSHOT-jar-with-dependencies.jar   /opt

ADD ./entrypoint.sh   /opt

#ADD ./spark-2.0.1-bin-hadoop2.7 /opt/spark

WORKDIR /opt

EXPOSE 8080

ENTRYPOINT ["./entrypoint.sh"]
