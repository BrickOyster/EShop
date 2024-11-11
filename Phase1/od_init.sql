CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    products JSONB NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'Pending'
);

-- INSERT INTO orders (products, total_price, status) VALUES
--     ('Catnip Toy', 'catnip_toy.png', 'A fun toy filled with catnip', 11.98, 100),
--     ('Scratching Post', 'scratching_post.png', 'Sturdy wall mounted post for scratching', 30.70, 50),
--     ('Cat Bed', 'cat_bed.png', 'Cozy soft bed for cats', 24.90, 30);