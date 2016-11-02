# Spark-Machine-Learning-Example
Still in development DO NOT USE!

## Prerequisite:

Download the following:
[jboss-datagrid-7.0.0-server link](https://developers.redhat.com/download-manager/file/jboss-datagrid-7.0.0-server.zip)



1. Download Spark
2. Set SPARK_HOME=/usr/local/spark

## Use spark shell to query infinispan for results:

3. Run:
```bash

  $SPARK_HOME/bin/spark-shell --packages org.infinispan:infinispan-spark_2.11:0.4

```

Run the following commands to query by user predictions:
```bash
scala>   import java.util.Properties

scala>   import org.infinispan.spark.rdd.InfinispanRDD

scala> import org.apache.spark.mllib.recommendation.{ALS, MatrixFactorizationModel, Rating}

scala> val config = new Properties

scala> config.put("infinispan.rdd.cacheName","my-cache")

scala> config.put("infinispan.client.hotrod.server_list","127.0.0.1:11522")

scala>  val infinispanRDD = new InfinispanRDD[Int, Rating](sc,  config)

scala> infinispanRDD.values.filter(r=> r.user==2).foreach(r => println(s" Users : ${r.user}  Products : ${r.product} Ratings : ${r.rating}"))
 Users : 2  Products : 8 Ratings : 1.3990524748486712
 Users : 2  Products : 30 Ratings : 1.4887507806414213
 Users : 2  Products : 32 Ratings : 1.6079293676360829
 Users : 2  Products : 23 Ratings : 1.4410303271349525
 Users : 2  Products : 90 Ratings : 1.4678702193703934
```


## To Run Demo:


```bash

cd recommendation
mvn clean install
$SPARK_HOME/sbin/start-all.sh
$SPARK_HOME/bin/spark-submit  --master  spark://localhost:7077 --class com.example.data.analytics.App target/recommedation-engine-1.0.0-SNAPSHOT-jar-with-dependencies.jar --rank 5 --numIterations 5 --lambda 1.0 --kryo /usr/local/spark/data/mllib/sample_movielens_data.txt

```
 
