package controllers

import javax.inject._

import org.apache.spark.mllib.recommendation.Rating
import org.infinispan.client.hotrod.{RemoteCache, RemoteCacheManager}
import org.infinispan.client.hotrod.configuration.ConfigurationBuilder
import play.api._
import play.api.mvc._
import org.slf4j.LoggerFactory
import play.api.libs.json.{JsValue, Json, Writes}

import scala.collection.mutable.ListBuffer
/**
  * Create a Rating wrapper when returning json results to allow for providing total items in cache
  * for ui to process.
  */
case class RatingWrapper(ratings:List[Rating], totalPages:Int )
@Singleton
class MovieController @Inject() extends Controller with RatingJSONWritable {
  /**
    * Create an Action to render an HTML page with a welcome message.
    * The configuration in the `routes` file means that this method
    * will be called when the application receives a `GET` request with
    * a path of `/`.
    */
  private val logger = LoggerFactory.getLogger("application")


  def index = Action {
    Ok(views.html.index())
  }

  def Ratings(id:Long)= Action{
    logger.info(s"request resource with id: $id")
    val cache: RemoteCache[Int, Array[Rating]] = fetchRemoteCache
    val list=ListBuffer.empty[Rating]
    if(cache.size()!=0)
    list.appendAll(cache.get(id.toInt).toList)
    val size = cache.size()
    logger.info(s"Size of cache: $size")
    Ok(Json.toJson(RatingWrapper(list.toList,size)))
  }

  def fetchRemoteCache: RemoteCache[Int, Array[Rating]] = {

    val builder = new ConfigurationBuilder();
    val JdgIp = sys.env.get("JDG_HOST_IP").mkString("")
    builder.addServer().host(JdgIp).port(11222);
    val cacheManager = new RemoteCacheManager(builder.build())
    val cache = cacheManager.getCache[Int, Array[Rating]]()
    cache
  }

  def Admin()=Action{
    logger.info("forbidden url")
    Forbidden("error")
  }

}
