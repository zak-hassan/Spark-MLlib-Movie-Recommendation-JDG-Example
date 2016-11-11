package services

import org.apache.spark.mllib.recommendation.Rating
import play.api.Logger

/**
  * Created by zhassan on 2016-11-11.
  */
object RatingService {
  def save(rating:Rating): Unit ={

    Logger.info(s" Saving Rating - Users : ${rating.user}  Products : ${rating.product} Ratings : ${rating.rating}")

  }
}
