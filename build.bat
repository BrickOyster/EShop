docker compose down
echo y | docker system prune
docker volume rm eshop_order_db eshop_product_db
cls
docker compose up -d --build
@REM docker stop $(docker ps -a -q) ; ./build.bat