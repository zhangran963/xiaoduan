#!/bin/bash

rootPath=$PWD

pnpm run build
echo '已打包'

sleep 1

# 上传 dist/* 到远程
scp -r ${rootPath}/dist/* ubuntu@43.129.244.212:/home/ubuntu/lyric-vue3
echo '已更新'