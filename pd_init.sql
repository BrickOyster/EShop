CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    quantity INT NOT NULL DEFAULT 0,
    usertoken VARCHAR(255) NOT NULL
);

INSERT INTO products (title, image, description, price, quantity, usertoken) VALUES
    ('Brush', 'brush.png', 'Soft antistress brush for cats', 7.23, 200, 'user1'),
    ('Cat Bed', 'cat_bed.png', 'Cozy soft bed for cats', 24.90, 30, 'user1'),
    ('Catnip Toy', 'catnip_toy.png', 'A fun toy filled with catnip', 11.98, 100, 'user1'),
    ('Catoon Tunnel', 'catoon_tunnel.png', 'A tunnel for your cat to play in', 10.59, 100, 'user1'),
    ('DNA Test', 'dna_test.png', 'Take a DNA test to know more about your cat', 150.09, 80, 'user2'),
    ('Dryer', 'dryer.png', 'Cat drying station. With great air circulation', 436.95, 30, 'user2'),
    ('Food Bowl', 'food_bowl.png', 'A sturdy deep food bowl (1000ml)', 25.59, 50, 'user1'),
    ('Hammock', 'hammock.png', 'A confy hammock bed (Eden)', 89.97, 40, 'user1'),
    ('Orchid Toy', 'orchid_toy.png', 'A vibrant flufy toy for play-time', 24.50, 50, 'user2'),
    ('Pellet ECO', 'pellet_eco.png', '5kg of non stick pellets. Excelent smell', 11.50, 60, 'user1'),
    ('Scratching Post', 'scratching_post.png', 'Sturdy wall mounted post for scratching', 30.70, 50, 'user2');