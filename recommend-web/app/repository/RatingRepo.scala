package repository


 import org.apache.spark.mllib.recommendation.Rating
 import org.mongodb.scala._
 import org.mongodb.scala.bson.collection.immutable.Document
 import repository.Helpers._
import java.io._
/**
  * Created by zhassan on 2016-11-15.
  */
object RatingRepo {

  val DB_NAME="mydb"
  val DB_TABLE="test"
  val DB_MONGO_URI="mongodb://localhost:27017"

  def connect(mc:MongoClient) = {
    val db = mc.getDatabase(DB_NAME)
    val collection = db.getCollection(DB_TABLE)
    collection
  }

  /**
    * Save logic for persisting mongodb records
    * @param rating
    * @return
    */
  def save(rating: Rating): Unit = {
    //TODO: Need to inject configurations instead of hardcoded localhost mongo
    val mc = MongoClient(DB_MONGO_URI)
    //TODO: should make these lazy val's
    val collection= connect(mc)
    val doc: Document = RateToDocument(rating)
    collection.insertOne(doc).results()
//    collection.find.first().printResults()
    mc.close()
  }


  /**
    * Exports all ratings from internal table to an csv file which we will use to run our machine learning on.
    */
  def exportRatingsFromMongo(): Unit ={
    val mc = MongoClient(DB_MONGO_URI)
    //TODO: should make these lazy val's
    val collection= connect(mc)
    val ratings=collection.find().results().map((x) => x )

    val pw = new PrintWriter(new File("/tmp/custom_ratings.txt"))
    ratings.foreach(x => {
      val user= x.get("user").get.asInt32().getValue
      val product=x.get("product").get.asInt32().getValue
      val rating=x.get("rating").get.asDouble().getValue
      val ln=sys.props("line.separator")
      pw.write(s"$user::$product::$rating$ln")
    })
    pw.close()
  }


  def RateToDocument(r : Rating): Document  ={
    Document( "user" -> r.user , "product" -> r.product,
      "rating" -> r.rating)
  }

  def main(args: Array[String]): Unit = { val rating=  Rating(2,2,2.0223)
    save(rating)
    println("Here\n")
  }

}
