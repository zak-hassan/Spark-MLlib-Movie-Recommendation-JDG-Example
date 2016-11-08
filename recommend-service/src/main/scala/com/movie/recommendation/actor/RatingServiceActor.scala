package com.movie.recommendation.actor

import akka.actor.Actor
import akka.event.Logging
import org.apache.spark.mllib.recommendation.Rating
import org.infinispan.client.hotrod.RemoteCacheManager
import org.infinispan.client.hotrod.configuration.ConfigurationBuilder
import spray.routing.RequestContext

import scala.collection.mutable.ListBuffer

/**
  * RatingServiceActor<br>
  *
  * Rating service will fetch movie recommendations from JDG cache.
  *
  * @author Zak Hassan <zak.hassan@redhat.com>
  */

object RatingService {
  case class GetMovieRatings(page:Int)
}
class RatingServiceActor(requestContext: RequestContext) extends Actor {
  import RatingService._

  implicit val system = context.system

  val log = Logging(system, getClass)


  override def receive: Receive = {
    case GetMovieRatings(page) => {
//      import com.movie.recommendation.rest.RatingWrapperJSONProtocol._
      // TODO: Replace stubs with JDG query code to pull ratings.
      log.info("Get movie ratings")
     // val conf = new SparkConf().setAppName("SparkInfinispan").setMaster("spark://master:7077")

      val builder = new ConfigurationBuilder();
      val JdgIp= sys.env.get("JDG_HOST_IP").mkString("")

       builder.addServer().host(JdgIp).port(11222);
      val cacheManager = new RemoteCacheManager(builder.build())
      val cache= cacheManager.getCache[Int, Rating]()
      val list=ListBuffer.empty[Rating]


      val size = cache.size()
      var start=0
      var end=0


      //If its the first page I will check if ratings are
      if(size == 1){
        start = 0
        if(size <= 10)
          end = size
        else
          end = 10
      }else{
        end=page * 10
        if(end >= size)
          end=size-1
        start=end-9
      }

      log.info(s"page: $page ")

      if(size != 0 && end <=size && page >=1 ){
       for( i <- (start to end)){
          log.info(s"Num: $i")
          list+=cache.get(i)
        }
      }

      requestContext.complete(list.toList)
      context.stop(self)
    }
    case _ => {

      log.info("Unsupported method")
    }
  }
}

