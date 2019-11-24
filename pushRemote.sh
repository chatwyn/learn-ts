#!/bin/bash

if [ ! -n "$1" ] ;then
echo "请输入commit的更改信息 比如 sh pushRemote.sh 添加了文章"
exit 1
fi

git add .
git commit -m "$1"
git pull --rebase
git push
