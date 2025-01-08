docker compose down
echo y | docker system prune
echo y | docker volume prune
echo y | docker image prune
echo y | docker builder prune
docker volume rm eshop_order_db eshop_product_db eshop_keycloak-db-data eshop_keycloak-realm-data

cls
docker compose up -d --build
echo "Connect on http://localhost:1337/"