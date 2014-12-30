#!/bin/bash
echo __ deploying maker site to godaddy
ssh eb702445@taylordyoung.com <<'ENDSSH'
. ~/.bashrc
cd html/wild
echo __ pulling from maker.out
git reset --hard
git pull origin master
echo __ all done! ^_^
ENDSSH