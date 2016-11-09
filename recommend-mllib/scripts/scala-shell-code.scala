import java.util.Properties
import org.infinispan.spark.rdd.InfinispanRDD
import org.apache.spark.mllib.recommendation.{ALS, MatrixFactorizationModel, Rating}
val config = new Properties
config.put("infinispan.rdd.cacheName","default")
config.put("infinispan.client.hotrod.server_list","127.0.0.1:11222")
val infinispanRDD = new InfinispanRDD[Int, Array[Rating]](sc,  config)
//infinispanRDD.values.foreach(r => println(s" Users : ${r.user}  Products : ${r.product} Ratings : ${r.rating}"))
