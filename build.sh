sudo docker compose down
echo y | sudo docker system prune
echo y | sudo docker volume prune
echo y | sudo docker image prune
echo y | sudo docker builder prune
sudo docker volume rm eshop_order_db eshop_product_db eshop_keycloak-db-data eshop_keycloak-realm-data

sleep 2
clear
sudo docker compose up -d --build