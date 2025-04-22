-- Active: 1742191591229@@127.0.0.1@3306@first_project
CREATE DATABASE `first_project`

USE `first_project`

INSERT INTO products (name, description, price, stock, imageUrl, category, createdAt, updatedAt)
VALUES 
('Wireless Bluetooth Headphones', 'High-quality wireless Bluetooth headphones with noise cancellation and long battery life.', 99, 150, 'https://example.com/images/headphones.jpg', 'Electronics', NOW(), NOW()),
('Smart Watch', 'A smart watch with heart rate monitoring, GPS, and customizable watch faces.', 150, 100, 'https://example.com/images/smartwatch.jpg', 'Electronics', NOW(), NOW()),
('Yoga Mat', 'Eco-friendly and non-slip yoga mat for all levels of practice.', 25, 200, 'https://example.com/images/yogamat.jpg', 'Fitness', NOW(), NOW()),
('Gaming Laptop', 'High-performance laptop with 16GB RAM, 512GB SSD, and RTX 3060 graphics card.', 1200, 50, 'https://example.com/images/laptop.jpg', 'Electronics', NOW(), NOW()),
('Bluetooth Speaker', 'Portable Bluetooth speaker with 360-degree sound and water-resistant design.', 75, 120, 'https://example.com/images/speaker.jpg', 'Electronics', NOW(), NOW()),
('Mountain Bike', 'Durable mountain bike designed for rugged trails and off-road adventures.', 350, 80, 'https://example.com/images/bike.jpg', 'Sports', NOW(), NOW()),
('Digital Camera', 'DSLR camera with 24MP resolution and 4K video recording capabilities.', 499, 60, 'https://example.com/images/camera.jpg', 'Photography', NOW(), NOW()),
('Kitchen Blender', 'Multi-speed blender with stainless steel blades for smoothies and soups.', 50, 150, 'https://example.com/images/blender.jpg', 'Home Appliances', NOW(), NOW()),
('Smartphone', 'Latest model smartphone with OLED display, 128GB storage, and advanced camera features.', 800, 200, 'https://example.com/images/smartphone.jpg', 'Electronics', NOW(), NOW()),
('Electric Toothbrush', 'Rechargeable electric toothbrush with smart timer and multiple brushing modes.', 45, 300, 'https://example.com/images/toothbrush.jpg', 'Health & Personal Care', NOW(), NOW()),
('Running Shoes', 'Lightweight running shoes with breathable mesh and cushioned sole.', 60, 150, 'https://example.com/images/runningshoes.jpg', 'Sports', NOW(), NOW()),
('Air Fryer', 'Healthy air fryer with adjustable temperature control for crispy cooking without oil.', 90, 200, 'https://example.com/images/airfryer.jpg', 'Home Appliances', NOW(), NOW()),
('Leather Wallet', 'Genuine leather wallet with multiple card slots and a sleek design.', 40, 500, 'https://example.com/images/wallet.jpg', 'Accessories', NOW(), NOW()),
('Smart TV', '4K Ultra HD smart TV with voice control and streaming apps.', 600, 70, 'https://example.com/images/smarttv.jpg', 'Electronics', NOW(), NOW()),
('Camera Lens', 'Wide-angle camera lens for professional photography with superior clarity.', 250, 45, 'https://example.com/images/cameralens.jpg', 'Photography', NOW(), NOW()),
('Electric Kettle', 'Stainless steel electric kettle with rapid boiling and automatic shut-off feature.', 35, 180, 'https://example.com/images/kettle.jpg', 'Home Appliances', NOW(), NOW()),
('Leather Backpack', 'Stylish leather backpack with laptop compartment and multiple pockets.', 120, 100, 'https://example.com/images/backpack.jpg', 'Accessories', NOW(), NOW()),
('Weighted Blanket', 'Ultra-soft weighted blanket designed to promote relaxation and improve sleep quality.', 80, 150, 'https://example.com/images/blanket.jpg', 'Home Goods', NOW(), NOW()),
('Portable Charger', 'Compact portable charger with fast charging capabilities for all your devices.', 25, 220, 'https://example.com/images/charger.jpg', 'Electronics', NOW(), NOW()),
('Wristband', 'Comfortable wristband for fitness tracking and daily activity monitoring.', 15, 300, 'https://example.com/images/wristband.jpg', 'Fitness', NOW(), NOW()),
('Food Processor', 'Multi-functional food processor with chopping, slicing, and grating capabilities.', 70, 110, 'https://example.com/images/foodprocessor.jpg', 'Home Appliances', NOW(), NOW()),
('Vacuum Cleaner', 'Lightweight vacuum cleaner with strong suction power and HEPA filtration.', 150, 90, 'https://example.com/images/vacuum.jpg', 'Home Appliances', NOW(), NOW()),
('Fitness Tracker', 'Wearable fitness tracker with step counter, heart rate monitor, and sleep tracking.', 40, 250, 'https://example.com/images/fitnesstracker.jpg', 'Fitness', NOW(), NOW()),
('Cookware Set', 'Non-stick cookware set with durable pans and pots for easy cooking.', 130, 180, 'https://example.com/images/cookware.jpg', 'Home Goods', NOW(), NOW()),
('Coffee Maker', 'Programmable coffee maker with 12-cup capacity and automatic shut-off.', 55, 170, 'https://example.com/images/coffeemaker.jpg', 'Home Appliances', NOW(), NOW()),
('Smart Thermostat', 'Wi-Fi enabled smart thermostat for controlling home temperature remotely.', 120, 140, 'https://example.com/images/thermostat.jpg', 'Home Appliances', NOW(), NOW()),
('Workout Mat', 'Extra-thick workout mat for yoga, pilates, and floor exercises.', 30, 220, 'https://example.com/images/workoutmat.jpg', 'Fitness', NOW(), NOW()),
('Tennis Racket', 'Professional-grade tennis racket with lightweight frame and superior grip.', 90, 110, 'https://example.com/images/tennisracket.jpg', 'Sports', NOW(), NOW()),
('Cordless Drill', 'Powerful cordless drill with multiple speed settings and a durable design.', 60, 120, 'https://example.com/images/drill.jpg', 'Tools', NOW(), NOW()),
('Stand Mixer', 'Heavy-duty stand mixer with multiple speed settings and various attachments.', 180, 90, 'https://example.com/images/mixer.jpg', 'Home Appliances', NOW(), NOW()),
('Portable Air Conditioner', 'Compact portable air conditioner with remote control and adjustable fan speed.', 250, 80, 'https://example.com/images/airconditioner.jpg', 'Home Appliances', NOW(), NOW()),
('Home Theater System', 'Surround sound home theater system with Bluetooth connectivity and HD compatibility.', 350, 60, 'https://example.com/images/hometheater.jpg', 'Electronics', NOW(), NOW()),
('Nail Polish Set', 'Set of 12 nail polishes in various colors with long-lasting shine.', 25, 300, 'https://example.com/images/nailpolish.jpg', 'Beauty', NOW(), NOW()),
('Self-Cleaning Litter Box', 'Automatic self-cleaning litter box with odor control for pets.', 180, 50, 'https://example.com/images/litterbox.jpg', 'Pets', NOW(), NOW()),
('Smart Bulbs', 'Smart light bulbs that can be controlled via smartphone and voice assistants.', 30, 200, 'https://example.com/images/smartbulbs.jpg', 'Home Goods', NOW(), NOW()),
('Pet Carrier', 'Comfortable pet carrier for travel with ventilation holes and adjustable straps.', 40, 160, 'https://example.com/images/petcarrier.jpg', 'Pets', NOW(), NOW()),
('Leather Gloves', 'Genuine leather gloves with a warm fleece lining, perfect for cold weather.', 25, 250, 'https://example.com/images/gloves.jpg', 'Accessories', NOW(), NOW()),
('Electric Griddle', 'Non-stick electric griddle with adjustable temperature and a large cooking surface.', 70, 130, 'https://example.com/images/griddle.jpg', 'Home Appliances', NOW(), NOW()),
('Portable Speaker', 'Waterproof portable speaker with deep bass and 12 hours of playtime.', 60, 150, 'https://example.com/images/portablespeaker.jpg', 'Electronics', NOW(), NOW()),
('Office Chair', 'Ergonomic office chair with lumbar support and adjustable height.', 120, 110, 'https://example.com/images/officechair.jpg', 'Furniture', NOW(), NOW()),
('Smart Refrigerator', 'Smart refrigerator with touchscreen, voice control, and energy-saving features.', 2000, 30, 'https://example.com/images/refrigerator.jpg', 'Home Appliances', NOW(), NOW()),
('Electric Grill', 'Compact electric grill with non-stick surface for grilling indoors.', 80, 140, 'https://example.com/images/electricgrill.jpg', 'Home Appliances', NOW(), NOW());

SELECT * FROM products WHERE `productId`=1;

UPDATE pios
SET status = 'unpaid'
WHERE status = 'pending';
