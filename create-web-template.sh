# !/bin/bash

# @authors: Cotbert

if [ $1 == "--help" ] || [ $1 == "-h" ]; then
    echo "Usage: create-web-template.sh [project-name] [path-to-project]"
    exit 1
fi


if [ -z $1 ] || [ -z $2 ]; then
    echo "Please provide the name of the project and the path to the project"
    exit 1
fi

cd $2


mkdir $1
cd $1

mkdir css assets assets/img

echo "<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/styles.css">
    <title>Document</title>
</head>
<body>
    
</body>
</html>" > index.html

touch css/styles.css