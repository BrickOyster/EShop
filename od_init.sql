CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    products JSONB NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'Pending',
    usertoken VARCHAR(255) NOT NULL
);

-- INSERT INTO orders (products, total_price, status) VALUES
--     ([
--             { "title": "Brush", "amount": 1, "product_id": 1 },
--             { "title": "Cat Bed", "amount": 1, "product_id": 2 },
--             { "title": "DNA Test", "amount": 1, "product_id": 5 },
--             { "title": "Catnip Toy", "amount": 2, "product_id": 3 },
--             { "title": "Food Bowl", "amount": 1, "product_id": 6 },
--             { "title": "Pellet ECO", "amount": 1, "product_id": 9 },
--             { "title": "Hammock", "amount": 1, "product_id": 7 },
--             { "title": "Dryer", "amount": 1, "product_id": 12 },
--             { "title": "Orchid Toy", "amount": 2, "product_id": 8 },
--             { "title": "Scratching Post", "amount": 2, "product_id": 10 }
--         ],
--         "total_price": "880.59",
--         "status": "Pending")