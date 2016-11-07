package com.movie.recommendation.actor

import akka.actor.Actor
import akka.event.Logging
import com.movie.recommendation.model.RatingX
import com.movie.recommendation.rest.RatingJSONProtocol
import org.apache.spark.mllib.recommendation.Rating
import org.infinispan.client.hotrod.{RemoteCache, RemoteCacheManager}
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
      import RatingJSONProtocol._
      import spray.httpx.SprayJsonSupport.sprayJsonMarshaller
      // TODO: Replace stubs with JDG query code to pull ratings.
      log.info("Get movie ratings")
     // val conf = new SparkConf().setAppName("SparkInfinispan").setMaster("spark://master:7077")

      val builder = new ConfigurationBuilder();

      builder.addServer().host("127.0.0.1").port(11222);

      val cacheManager = new RemoteCacheManager(builder.build())
      val cache= cacheManager.getCache[Int, Rating]()
      val list=ListBuffer.empty[Rating]

      log.info(s"page: $page ")


      for( i <- (0 to 5)){
        list+=cache.get(i)
        log.info(s"Num: $i")
      }

      requestContext.complete(list.toList)
      //requestContext.complete(list.collect())
      context.stop(self)
    }
    case _ => {

      log.info("Unsupported method")
    }
  }
}

