# COMP-518-Cloud-Services
Assignments for Cloud Services course (COMP-518) at TUC

Run with: 
.\build.bat on windows
build.sh on linux

You need docker desctop running

Stop local instance with 
    docker stop $(docker ps -a -q)

Bugs:
    changing product name (Disabled) does not update image file
    register user doesn't work (no permissions of ADMIN token)