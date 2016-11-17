package services

import org.apache.spark.mllib.recommendation.Rating
import play.api.Logger
import repository.RatingRepo

/**
  * Created by zhassan on 2016-11-11.
  */
object RatingService {

  //TODO: Implement a custom location for user and allow fo custom filename
  def exportRatings() = {
    RatingRepo.exportRatingsFromMongo()
    Logger.info(s"RatingService.exportRatingsFromMongo: ")
  }


  def save(rating:Rating): Unit ={
     RatingRepo.save(rating)
    Logger.info(s"RatingService.save: Status: Persisted Saving Rating - Users : ${rating.user}  Products : ${rating.product} Ratings : ${rating.rating}")
  }

  //TODO: Need to implement
  def getByUser(ratingId:Int): Unit ={
    Logger.info(s" Saving Rating - Users : ${ratingId} ")
  }



}
