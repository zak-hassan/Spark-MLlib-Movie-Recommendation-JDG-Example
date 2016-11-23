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

  val DB_NAME=scala.util.Properties.envOrElse("MONGODB_DATABASE","mydb")
  val DB_TABLE="test"

  def connect(mc:MongoClient) = {
    val db = mc.getDatabase(DB_NAME)
    val collection = db.getCollection(DB_TABLE)
    collection
  }

  val getMongoURI:String={
    var host = scala.util.Properties.envOrElse("RECOMMEND_SERVICE_SERVICE_HOST","localhost")
    var username= scala.util.Properties.envOrElse("MONGODB_PASSWORD","")
    var password = scala.util.Properties.envOrElse("MONGODB_PASSWORD","")
    if(! username.isEmpty() && ! password.isEmpty())
    s"mongodb://$username:$password@$host:27017"
    else
      s"mongodb://$host:27017"

  }
  /**
    * Save logic for persisting mongodb records
    * @param rating
    * @return
    */
  def save(rating: Rating): Unit = {
    //TODO: Need to inject configurations instead of hardcoded localhost mongo


    val mc = MongoClient(getMongoURI)
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
    val mc = MongoClient(getMongoURI)
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

  // Display first 10 results:

  def DisplayCustomRatings(): List[Rating] ={
    val mc = MongoClient(getMongoURI)
    //TODO: should make these lazy val's
    val collection= connect(mc)

    collection.find().results()
      .map((x) => Rating(x.get("user").get.asInt32().getValue,
        x.get("product").get.asInt32().getValue,
        x.get("rating").get.asDouble().getValue)).toList

  }

  def RateToDocument(r : Rating): Document  ={
    Document( "user" -> r.user , "product" -> r.product,
      "rating" -> r.rating)
  }

}
