#!/bin/bash
echo __ generating site with --env static
docpad generate --env static
echo __ copying files to ../wild.out
grunt copy
echo __ commiting changes to wild.out
cd ../wild.out
# date=$(eval date +%Y%m%d:%H:%M)
# git add -A
# git commit -a -m "build - $date"
# git push
#!/bin/bash
# echo __ deploying wild site to godaddy - http://wild.taylordyoung.com/
# ssh eb702445@taylordyoung.com <<'ENDSSH'
# . ~/.bashrc
# cd ~/html
# echo __ pulling from wild.out
# # git reset --hard
# git pull origin master
# echo __ all done! ^_^
# ENDSSH