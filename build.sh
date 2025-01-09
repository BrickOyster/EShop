sudo docker compose down > logdown
echo y | sudo docker system prune > logprune
echo y | sudo docker volume prune >> logprune
echo y | sudo docker image prune >> logprune
echo y | sudo docker builder prune >> logprune
sudo docker volume rm eshop_order_db eshop_product_db eshop_keycloak-db-data eshop_keycloak-realm-data >> logprune

sleep 2
clear
sudo docker compose up -d --build > logup