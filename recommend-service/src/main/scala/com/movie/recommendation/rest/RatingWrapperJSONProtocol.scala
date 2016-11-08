package com.movie.recommendation.rest

import com.movie.recommendation.model.RatingWrapper
import org.apache.spark.mllib.recommendation.Rating
import spray.json.{DefaultJsonProtocol, RootJsonFormat}

/**
  * Created by zhassan on 2016-11-08.
  */
//object RatingWrapperJSONProtocol extends DefaultJsonProtocol {
//  implicit def ratingJsonFormat: RootJsonFormat[RatingWrapper] = jsonFormat(RatingWrapper,"")
//}
