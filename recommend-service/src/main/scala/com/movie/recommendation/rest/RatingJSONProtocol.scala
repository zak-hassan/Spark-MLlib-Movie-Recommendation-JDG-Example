package com.movie.recommendation.rest

import com.movie.recommendation.model.Rating
import spray.json.{DefaultJsonProtocol, RootJsonFormat}

/**
  * RatingJSONProtocol <br>
  *
  * Used to format results into json format for webservice this is required for spray-json.
  *
  *  @author Zak Hassan <zak.hassan@redhat.com>
  */
object RatingJSONProtocol extends DefaultJsonProtocol {
  implicit def ratingJsonFormat: RootJsonFormat[Rating] = jsonFormat3(Rating.apply)
}

