
cat << 'EOF'

       ______                     ____        __        ______     _     __   _____
      / / __ )____  __________   / __ \____ _/ /_____ _/ ____/____(_)___/ /  /__  /    __
 __  / / __  / __ \/ ___/ ___/  / / / / __ `/ __/ __ `/ / __/ ___/ / __  /     / /  __/ /_
/ /_/ / /_/ / /_/ (__  |__  )  / /_/ / /_/ / /_/ /_/ / /_/ / /  / / /_/ /     / /  /_  __/
\____/_____/\____/____/____/  /_____/\__,_/\__/\__,_/\____/_/  /_/\__,_/     /_/    /_/
   _____                  __      __  _____    ___ __
  / ___/____  ____ ______/ /__   /  |/  / /   / (_) /_
  \__ \/ __ \/ __ `/ ___/ //_/  / /|_/ / /   / / / __ \
 ___/ / /_/ / /_/ / /  / ,<    / /  / / /___/ / / /_/ /
/____/ .___/\__,_/_/  /_/|_|  /_/  /_/_____/_/_/_.___/
    /_/

EOF

echo "Welcome to infinispan Spark ML lib demo with Movie Ratings dataset "

while true; do
    read -p "Start up docker containers preinstalled with Infinispan/JDG and Spark 2.0.0? " yn
    case $yn in
        [Yy]* ) docker-compose up -d; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done
echo " "

while true; do
    read -p "Display number of entries in JDG cache ? " yn
    case $yn in
        [Yy]* ) docker-compose exec infinispan1 infinispan-server/bin/ispn-cli.sh  -c --controller=localhost:9990 --command="/subsystem=datagrid-infinispan/cache-container=clustered/distributed-cache=default:read-attribute(name=number-of-entries)" ; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done

echo " "
while true; do
    read -p "Run movie lens spark mllib demo against spark and cache results in JDG ? " yn
    case $yn in
        [Yy]* ) docker-compose exec sparkMaster  /usr/local/spark/bin/spark-submit --master spark://0.0.0.0:7077 --class com.example.data.analytics.App /usr/local/code/recommend-mllib-1.0.0-SNAPSHOT-jar-with-dependencies.jar --rank 5 --numIterations 5 --lambda 1.0 --infinispanHost infinispan1 --kryo /usr/local/spark/data/mllib/sample_movielens_data.txt ; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done
echo " "
while true; do
    read -p " Display number of entries in JDG cache (again after spark run)? " yn
    case $yn in
        [Yy]* ) docker-compose exec infinispan1 infinispan-server/bin/ispn-cli.sh  -c --controller=localhost:9990 --command="/subsystem=datagrid-infinispan/cache-container=clustered/distributed-cache=default:read-attribute(name=number-of-entries)" ; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done

echo " "
while true; do
    read -p " Run Spark Shell Interactive to Query JDG? " yn
    case $yn in
        [Yy]* ) docker-compose exec sparkMaster /usr/local/spark/bin/spark-shell --packages org.infinispan:infinispan-spark_2.11:0.4   -i  /usr/local/code/scripts/scala-shell-code.scala; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done


echo " "
while true; do
    read -p " End demo and shutdown spark/jdg docker containers? " yn
    case $yn in
        [Yy]* ) docker-compose down; docker-compose rm ; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done
