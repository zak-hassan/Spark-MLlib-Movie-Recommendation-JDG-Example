#!/bin/sh
VERSION="1.0.0-SNAPSHOT"
MAINTAINERS="Zak Hassan"
COMPONENT="recommend-service"


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

echo " "
echo "Maintainers: $MAINTAINERS"
echo " "
echo "Version: $VERSION"
echo " "
echo "Component: $COMPONENT"
echo " "
echo "Building Containers and pushing docker images to docker registry"
echo " "
docker   build  --rm -t  recommend-mllib  .

docker tag  recommend-mllib  docker.io/metadatapoc/recommend-mllib
docker push  docker.io/metadatapoc/recommend-mllib
