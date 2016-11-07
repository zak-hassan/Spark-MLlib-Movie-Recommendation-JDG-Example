import java.util.Properties
import org.infinispan.spark.rdd.InfinispanRDD
import org.apache.spark.mllib.recommendation.{ALS, MatrixFactorizationModel, Rating}
val config = new Properties
config.put("infinispan.rdd.cacheName","default")
config.put("infinispan.client.hotrod.server_list","infinispan1:11222")
val infinispanRDD = new InfinispanRDD[Int, Rating](sc,  config)
