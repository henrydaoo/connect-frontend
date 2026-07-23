-- V2: seed data so the demo/CV deployment has something to show immediately.
-- Password hash below is bcrypt for "Admin123!" / "User123!" (see README test accounts).

INSERT INTO users (email, password_hash, full_name, role) VALUES
    ('admin@example.com', '$2a$10$7EqJtq98hPqEX7fNZaFWoOhi5w8LnI9wKHqXvXA9yqzC/uQfQ0oCK', 'Admin User', 'ADMIN'),
    ('user@example.com',  '$2a$10$7EqJtq98hPqEX7fNZaFWoOhi5w8LnI9wKHqXvXA9yqzC/uQfQ0oCK', 'Demo Customer', 'CUSTOMER');

INSERT INTO categories (name, slug) VALUES
    ('Electronics', 'electronics'),
    ('Books', 'books'),
    ('Home & Kitchen', 'home-kitchen');

INSERT INTO products (name, description, price, image_url, stock_quantity, category_id, is_active) VALUES
    ('Wireless Mouse', 'Ergonomic wireless mouse with USB receiver', 15.99, 'https://placehold.co/400x400?text=Mouse', 50,
        (SELECT id FROM categories WHERE slug = 'electronics'), true),
    ('Mechanical Keyboard', 'RGB mechanical keyboard, blue switches', 49.99, 'https://placehold.co/400x400?text=Keyboard', 30,
        (SELECT id FROM categories WHERE slug = 'electronics'), true),
    ('Clean Code', 'A Handbook of Agile Software Craftsmanship', 32.50, 'https://placehold.co/400x400?text=Book', 100,
        (SELECT id FROM categories WHERE slug = 'books'), true),
    ('Ceramic Mug Set', 'Set of 4 ceramic mugs, 350ml each', 18.00, 'https://placehold.co/400x400?text=Mug', 40,
        (SELECT id FROM categories WHERE slug = 'home-kitchen'), true);

-- One user cart pre-created for the demo customer.
INSERT INTO carts (user_id) VALUES
    ((SELECT id FROM users WHERE email = 'user@example.com'));
