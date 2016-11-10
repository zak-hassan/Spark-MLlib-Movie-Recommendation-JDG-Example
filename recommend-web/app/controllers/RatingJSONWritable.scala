package controllers

import org.apache.spark.mllib.recommendation.Rating
import play.api.libs.json.{JsValue, Json, Writes}

/**
  * Created by zhassan on 2016-11-10.
  */
trait RatingJSONWritable {
  implicit val ratingWritable= new Writes[Rating]
  {
    override def writes(r: Rating): JsValue = {
      Json.obj("user"->r.user.asInstanceOf[Int],
        "product"-> r.product.asInstanceOf[Int],
        "rating"-> r.rating.asInstanceOf[Double])
    }
  }

  implicit val ratingWrapperWritable= new Writes[RatingWrapper] {
    override def writes(o: RatingWrapper): JsValue = {
      Json.obj("ratings"-> o.ratings,
        "totalPages"->o.totalPages)
    }
  }
}
