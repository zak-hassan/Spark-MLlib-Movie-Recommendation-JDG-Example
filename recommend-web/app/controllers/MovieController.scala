package controllers

import javax.inject._
import play.api._
import play.api.mvc._
import org.slf4j.LoggerFactory
/**
  * Created by zhassan on 2016-11-08.
  */
@Singleton
class MovieController @Inject() extends Controller {
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
    Ok(s" ID: $id")
  }

}
