package com.movie.recommendation.rest

import akka.actor.Props
import com.movie.recommendation.actor.RatingServiceActor
import spray.http.MediaTypes
import spray.routing.HttpService
import com.movie.recommendation.actor.RatingService._
import spray.httpx.SprayJsonSupport._
import spray.json.DefaultJsonProtocol._
/**
  * RecommendMovieService <br>
  *
  * Web service route to generate movie recommendation
  *
  *  @author Zak Hassan <zak.hassan@redhat.com>
  */
trait RecommendMovieService extends HttpService {
  val route =
    pathPrefix("api") {
      path("movieservice" /Segment ) {
        (page)=>{
            get {
              respondWithMediaType(MediaTypes.`application/json`) {
                requestContext =>
                  val movieservice = actorRefFactory.actorOf(Props(new RatingServiceActor(requestContext)))
                  val resp = movieservice ! GetMovieRatings(page.toInt)
              }

            }
        }
      }
    }
}
