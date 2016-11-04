
spark-submit  --master  spark://zhassan.yyz.redhat.com:7077 --class com.example.data.analytics.App target/recommedation-engine-1.0.0-SNAPSHOT-jar-with-dependencies.jar --rank 5 --numIterations 5 --lambda 1.0 --kryo /usr/local/spark/data/mllib/sample_movielens_data.txt
