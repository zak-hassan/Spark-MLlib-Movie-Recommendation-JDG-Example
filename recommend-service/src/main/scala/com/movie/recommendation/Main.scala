package com.movie.recommendation

import akka.actor.{ActorSystem, Props}
import akka.event.Logging
import akka.io.IO
import akka.pattern.ask
import akka.util.Timeout
import com.movie.recommendation.actor.MovieServiceActor
import spray.can.Http

import scala.concurrent.duration._

/**
  * The class bootstraps Spray web application and starts up the app.
  *
  * @author Zak Hassan <zak.hassan@redhat.com>
  */
object Main extends App {
  implicit val system = ActorSystem("movie-recommender-web")
  val log = Logging(system, getClass)
  val service = system.actorOf(Props[MovieServiceActor], "movie-recommend-service")
  implicit val timeout = Timeout(5.seconds)
  IO(Http) ? Http.Bind(service, interface = "0.0.0.0", port = 18080)
}
