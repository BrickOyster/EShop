CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image TEXT,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL
);

INSERT INTO products (title, image, description, price, quantity) VALUES
    ('Catnip Toy', 'catnip_toy.png', 'A fun toy filled with catnip', 11.98, 100),
    ('Scratching Post', 'scratching_post.png', 'Sturdy wall mounted post for scratching', 30.70, 50),
    ('Cat Bed', 'cat_bed.png', 'Cozy soft bed for cats', 24.90, 30);