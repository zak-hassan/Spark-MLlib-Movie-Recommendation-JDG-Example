#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
SHOME=/opt/spark
$SHOME/bin/spark-submit  --master  $SPARK_MASTER_URL --class com.example.data.analytics.App /opt/recommend-mllib-1.0.0-SNAPSHOT-jar-with-dependencies.jar  --rank 5 --numIterations 5 --lambda 1.0 --infinispanHost $RECOMMEND_SERVICE_SERVICE_HOST --kryo $SHOME/data/mllib/sample_movielens_data.txt
