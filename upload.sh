#!/bin/bash

rootPath=$PWD

npm run build
echo '已打包'

sleep 1

# 上传 dist/* 到远程
scp -r ${rootPath}/dist/* root@43.129.244.212:/var/www/lyric@3
echo '已更新'