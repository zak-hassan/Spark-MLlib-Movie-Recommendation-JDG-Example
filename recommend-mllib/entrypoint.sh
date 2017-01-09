#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
SPARK_HOME=/opt/spark

cat /etc/passwd > /tmp/passwd
echo "$(id -u):x:$(id -u):$(id -g):dynamic uid:$SPARK_HOME:/bin/false" >> /tmp/passwd

export NSS_WRAPPER_PASSWD=/tmp/passwd
# NSS_WRAPPER_GROUP must be set for NSS_WRAPPER_PASSWD to be used
export NSS_WRAPPER_GROUP=/etc/group

export LD_PRELOAD=libnss_wrapper.so

$SPARK_HOME/bin/spark-submit  --master  $SPARK_MASTER_URL --class com.example.data.analytics.App /opt/recommend-mllib-1.0.0-SNAPSHOT-jar-with-dependencies.jar  --rank 5 --numIterations 5 --lambda 1.0 --infinispanHost $RECOMMEND_SERVICE_SERVICE_HOST --kryo $SPARK_HOME/data/mllib/sample_movielens_data.txt
