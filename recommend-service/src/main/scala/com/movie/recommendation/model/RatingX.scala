package com.movie.recommendation.model

/**
  * Rating <br>
  *
  * Modeled after the Rating class found in apache spark mllib. No need to import mllib here
  *
  *  @author Zak Hassan <zak.hassan@redhat.com>
  */
case class RatingX(user: Int, product: Int, rating: Double)

