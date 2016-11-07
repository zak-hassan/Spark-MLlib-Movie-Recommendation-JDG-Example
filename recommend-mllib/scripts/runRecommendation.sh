
/usr/local/spark/bin/spark-submit --master spark://0.0.0.0:7077 --class com.example.data.analytics.App ../recommend-mllib-1.0.0-SNAPSHOT-jar-with-dependencies.jar --rank 5 --numIterations 5 --lambda 1.0 --infinispanHost infinispan1 --kryo /usr/local/spark/data/mllib/sample_movielens_data.txt
