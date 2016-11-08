package com.movie.recommendation.model

import org.apache.spark.mllib.recommendation.Rating

/**
  * Created by zhassan on 2016-11-08.
  */
case class RatingWrapper (val rating:List[Rating], val totalRecords:Int, val totalPages:Int)

