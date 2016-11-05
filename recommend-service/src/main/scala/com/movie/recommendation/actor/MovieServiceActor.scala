package com.movie.recommendation.actor

import akka.actor.{Actor, ActorLogging, ActorRefFactory}
import com.movie.recommendation.rest.RecommendMovieService
import spray.routing.{ExceptionHandler, RejectionHandler, RoutingSettings}
import spray.util.LoggingContext


/**
  * MovieServiceActor <br>
  *
  * Main actor responsible for setting up web service route and initial wiring
  *
  *  @author Zak Hassan <zak.hassan@redhat.com>
  */
class MovieServiceActor extends Actor with RecommendMovieService with ActorLogging {
  implicit val system = context.system
  override def receive: Receive = runRoute(route)(ExceptionHandler.default, RejectionHandler.Default, context,
    RoutingSettings.default, LoggingContext.fromActorRefFactory)
  override implicit def actorRefFactory: ActorRefFactory = context
}


