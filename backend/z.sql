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

-- 10 筆正在進行中（startDate ≤ 2025-04-28 12:00:00 且 endDate > 2025-04-28 12:00:00）
INSERT INTO events (title, description, imageUrl, startDate, endDate, createdAt, updatedAt)
VALUES
  ('春季花展',      '花團錦簇的戶外展覽',             'https://example.com/images/event1.jpg', '2025-03-01 10:00:00', '2025-05-01 18:00:00', '2025-02-01 09:00:00', '2025-02-01 09:00:00'),
  ('城市音樂夜',    '街頭藝人演出與DJ打碟',          'https://example.com/images/event2.jpg', '2025-04-20 19:00:00', '2025-05-10 22:00:00', '2025-03-15 11:30:00', '2025-03-15 11:30:00'),
  ('咖啡品鑑會',    '小農精品咖啡杯測分享',          'https://example.com/images/event3.jpg', '2025-04-01 14:00:00', '2025-05-01 16:00:00', '2025-03-01 08:00:00', '2025-03-01 08:00:00'),
  ('夏季電影節',    '戶外大銀幕經典上映',            'https://example.com/images/event4.jpg', '2025-04-15 18:00:00', '2025-06-15 23:00:00', '2025-03-10 13:00:00', '2025-03-10 13:00:00'),
  ('書展',          '年度書香閱讀盛會',              'https://example.com/images/event5.jpg', '2025-02-15 09:00:00', '2025-05-15 19:00:00', '2025-01-10 10:00:00', '2025-01-10 10:00:00'),
  ('美食嘉年華',    '全台特色小吃與甜點大集合',      'https://example.com/images/event6.jpg', '2025-03-20 11:00:00', '2025-04-30 21:00:00', '2025-02-20 12:00:00', '2025-02-20 12:00:00'),
  ('陶藝工作坊',    '親手捏揉屬於自己的陶杯',      'https://example.com/images/event7.jpg', '2025-04-10 09:30:00', '2025-05-10 12:30:00', '2025-03-05 14:00:00', '2025-03-05 14:00:00'),
  ('公益演唱會',    '為偏鄉學童募集音樂教具',        'https://example.com/images/event8.jpg', '2025-04-25 18:00:00', '2025-05-25 22:00:00', '2025-04-01 15:00:00', '2025-04-01 15:00:00'),
  ('攝影展',        '捕捉城市光影之美',              'https://example.com/images/event9.jpg', '2025-04-05 10:00:00', '2025-05-05 18:00:00', '2025-03-02 09:00:00', '2025-03-02 09:00:00'),
  ('瑜伽靜修',      '晨曦中的海邊瑜伽體驗',          'https://example.com/images/event10.jpg','2025-04-27 06:00:00', '2025-05-27 08:00:00', '2025-04-10 07:00:00', '2025-04-10 07:00:00');
-- 13 筆未來活動（startDate > 2025-04-28 12:00:00）
-- 10 筆正在進行中（startDate ≤ 2025-04-28 12:00:00 且 endDate > 2025-04-28 12:00:00），description 均超過 100 字
INSERT INTO events (title, description, imageUrl, startDate, endDate, createdAt, updatedAt)
VALUES
  ('春季花展',       '本次春季花展特別匯集全球知名園藝設計師的精品植栽創作，展館內將展示多種珍稀品種，並搭配互動式投影與聲光效果，讓參觀者沉浸在繽紛花海中，還能參與專業講座與工作坊，體驗親手栽種的樂趣，深入了解花卉生長與環境保育的重要意義。',  'https://example.com/images/event1.jpg',  '2025-03-01 10:00:00', '2025-05-01 18:00:00', '2025-02-01 09:00:00', '2025-02-01 09:00:00'),
  ('城市音樂夜',     '本次城市音樂夜活動將在市中心主要廣場舉辦，匯集多組風格多元的街頭藝人與 DJ 派對，夜晚舞台配備最新燈光音響技術，現場還將提供特色小吃與手作飲品攤位，讓民眾在音樂律動中放鬆身心，並體驗沉浸式視覺與聽覺饗宴。',      'https://example.com/images/event2.jpg',  '2025-04-20 19:00:00', '2025-05-10 22:00:00', '2025-03-15 11:30:00', '2025-03-15 11:30:00'),
  ('咖啡品鑑會',     '咖啡品鑑會專為咖啡愛好者與業界人士設計，邀請國際知名咖啡烘豆師與烘焙大師親臨現場示範，從豆種挑選、烘焙過程到萃取技術，帶領參與者品嘗多款單品與混合豆風味，並安排互動問答與杯測環節，深入探索咖啡風味輪與口感層次的奧秘，還有輕食甜點搭配體驗。', 'https://example.com/images/event3.jpg',  '2025-04-01 14:00:00', '2025-05-01 16:00:00', '2025-03-01 08:00:00', '2025-03-01 08:00:00'),
  ('夏季電影節',     '露天夏季電影節將在遼闊公園草地舉辦多場經典影片重現放映，搭配舒適休閒座椅與戶外投影大螢幕，現場提供爆米花與特色飲品，並邀請導演與演員現身導演座談，與影迷近距離交流，感受電影藝術的魅力與夏夜微風的浪漫氛圍。',   'https://example.com/images/event4.jpg',  '2025-04-15 18:00:00', '2025-06-15 23:00:00', '2025-03-10 13:00:00', '2025-03-10 13:00:00'),
  ('書展',           '年度大型書展邀請超過百家出版社與獨立書店參展，從文學小說、藝術插畫到科普專業圖書應有盡有，特設簽書會、作家講座與主題論壇，並搭配親子閱讀互動區及二手書交流攤位，讓書迷在沉浸式書香空間中探索閱讀的無限可能。', 'https://example.com/images/event5.jpg',  '2025-02-15 09:00:00', '2025-05-15 19:00:00', '2025-01-10 10:00:00', '2025-01-10 10:00:00'),
  ('美食嘉年華',     '美食嘉年華匯集全台各地特色小吃與國際美食，超過五十家攤位同場競技，並設置街頭廚房示範區，由知名主廚現場烹飪料理，還有互動美食品鑑票選活動，讓參觀者品嘗多樣風味同時參與投票選出最佳人氣美食，享受視覺與味覺的雙重饗宴。', 'https://example.com/images/event6.jpg',  '2025-03-20 11:00:00', '2025-04-30 21:00:00', '2025-02-20 12:00:00', '2025-02-20 12:00:00'),
  ('陶藝工作坊',     '陶藝工作坊由資深陶藝家帶領，教導學員從基本揉土、拉坯、修坯到上釉燒製的完整流程，並安排創意主題挑戰，鼓勵參加者發揮個人風格打造獨特陶藝作品，並在工作坊結束後獲得專業建議，讓每一件作品都成為獨一無二的藝術收藏。', 'https://example.com/images/event7.jpg',  '2025-04-10 09:30:00', '2025-05-10 12:30:00', '2025-03-05 14:00:00', '2025-03-05 14:00:00'),
  ('公益演唱會',     '年度公益演唱會旨在為偏鄉學童募集教育資源，邀請多組知名歌手與樂團熱情獻唱，音樂舞台搭配精心設計的燈光秀，並融合紀錄片播放與現場訪談，讓觀眾了解偏鄉教育現況，多元互動攤位同步舉辦慈善義賣，整場活動兼具娛樂與公益意義。', 'https://example.com/images/event8.jpg',  '2025-04-25 18:00:00', '2025-05-25 22:00:00', '2025-04-01 15:00:00', '2025-04-01 15:00:00'),
  ('攝影展',         '攝影展聚焦都市光影美學，展示超過百幅攝影師在街頭、建築與人文題材中的精湛作品，並設置現場攝影教學與即拍即印互動區，參觀者可透過導覽講解更深入理解每張作品背後的故事，並親自嘗試構圖拍攝，感受攝影藝術的魅力與瞬間詩意。', 'https://example.com/images/event9.jpg',  '2025-04-05 10:00:00', '2025-05-05 18:00:00', '2025-03-02 09:00:00', '2025-03-02 09:00:00'),
  ('瑜伽靜修',       '瑜伽靜修課程在晨曦海邊舉辦，邀請國際級瑜伽大師指導，從呼吸調息到高階體式演練，並結合冥想與聲頻治療，讓學員在自然景致中調整身心平衡，課程結束附有營養早餐與茶道體驗，提供一整天的身心療癒與探索自我內在的契機。', 'https://example.com/images/event10.jpg','2025-04-27 06:00:00','2025-05-27 08:00:00','2025-04-10 07:00:00','2025-04-10 07:00:00');


-- 13 筆未來活動（startDate > 2025-04-28 12:00:00），description 均超過 100 字
INSERT INTO events (title, description, imageUrl, startDate, endDate, createdAt, updatedAt)
VALUES
  ('夏日音樂會',     '夏日音樂會定於海岸露天舞台舉行，邀請國內外知名音樂人帶來多元曲風演出，舞台配備環繞音響與燈光秀，並設立 VIP 互動區與後台體驗，演出間還安排樂團跨界合作演出曲目，讓觀眾在海風徐徐中享受高質感音樂饗宴與視覺饗宴。',         'https://example.com/images/event11.jpg','2025-05-05 19:00:00','2025-06-05 22:00:00','2025-04-15 10:00:00','2025-04-15 10:00:00'),
  ('海邊露營',       '海邊露營活動提供全套露營裝備與專業教練服務，參加者可在黃昏後搭建帳篷，夜間圍繞營火分享故事並觀賞絢麗星空，翌日清晨還能參與瑜伽與沖浪體驗課程，並品嚐由營隊廚師烹製的當地特色料理，享受與自然共處的戶外冒險樂趣。',     'https://example.com/images/event12.jpg','2025-05-10 16:00:00','2025-06-10 11:00:00','2025-04-16 11:00:00','2025-04-16 11:00:00'),
  ('科技展',         '年度科技展集結人工智慧、物聯網、區塊鏈與虛擬實境等最新技術展示，主題館內設置互動講座、動態體驗區與創新成果競賽，並邀請業界專家與新創團隊現場示範產品應用案例，讓參觀者實際感受科技對未來生活的深遠影響與無限可能。', 'https://example.com/images/event13.jpg','2025-06-01 09:00:00','2025-07-01 17:00:00','2025-04-20 12:00:00','2025-04-20 12:00:00'),
  ('露天舞蹈',       '露天舞蹈派對邀請國內外知名舞團及編舞家現場表演，並結合裝置藝術與沉浸式光影投影互動，觀眾可以加入開放式舞池體驗自由律動，現場另設影像直播區與即時互動留言牆，打造身臨其境的多感官藝術饗宴。',             'https://example.com/images/event14.jpg','2025-05-20 17:00:00','2025-06-20 21:00:00','2025-04-18 14:00:00','2025-04-18 14:00:00'),
  ('手工藝市集',     '手工藝市集匯聚在地與國際設計師的限量手作精品，包含皮革飾品、編織布作、金屬工藝與陶瓷造型等多元風格，現場設置 DIY 體驗攤位，參與者可在專業指導下親手製作獨特紀念品，並透過創作者講座了解每件作品背後的創意靈感來源。',           'https://example.com/images/event15.jpg','2025-05-15 10:00:00','2025-06-15 18:00:00','2025-04-17 13:00:00','2025-04-17 13:00:00'),
  ('電影回顧展',     '電影回顧展將播放不同時代的經典影片，從無聲電影到現代名導作品，搭配專家學者主題講座與觀影後座談，並設置影片資料庫與時代互動區，讓影迷了解電影工業的發展脈絡與技術演進，並透過現場討論激盪出新的觀察視角。',    'https://example.com/images/event16.jpg','2025-06-10 19:00:00','2025-07-10 22:00:00','2025-04-22 15:00:00','2025-04-22 15:00:00'),
  ('高峰研討會',     '高峰研討會邀請各領域頂尖專家、學者與企業代表，針對人工智慧、綠色能源與數位經濟等議題進行深度對話，議程涵蓋主題演講、圓桌論壇與專題工作坊，並安排商業配對與創新創業展區，促進跨界協作與產學研聯盟。',             'https://example.com/images/event17.jpg','2025-06-20 09:00:00','2025-07-20 17:00:00','2025-04-25 16:00:00','2025-04-25 16:00:00'),
  ('公益跑步',       '城市公益跑步活動規劃 10 公里與半馬兩種路線，途經城市地標與沿海步道，現場設置慈善攤位與急救服務站，並邀請公益大使與知名運動員共同參與，所有報名費將捐贈給弱勢社群，並於終點舉辦音樂派對及頒獎典禮，為健康與愛心加油。',       'https://example.com/images/event18.jpg','2025-07-01 06:00:00','2025-08-01 12:00:00','2025-04-26 07:00:00','2025-04-26 07:00:00'),
  ('露天音樂夜',     '露天音樂夜在復古倉庫區打造多元舞台，邀請獨立樂團、電子音樂 DJ 與民謠歌手輪番演出，還設有現場音樂製作工作坊與設備體驗區，讓民眾了解創作流程，並可與音樂人互動交流，現場酒吧區供應手工調酒與特色小食，打造微醺樂活氛圍。', 'https://example.com/images/event19.jpg','2025-05-25 19:30:00','2025-06-25 22:30:00','2025-04-18 17:30:00','2025-04-18 17:30:00'),
  ('瑜伽深耕',       '瑜伽深耕課程為專業進階系列，針對體式矯正、核心力量與呼吸調整進行高強度訓練，並引入多國瑜伽流派融合課程，安排身心靈療癒工作坊與冥想靜心環節，讓學員在專業指導下挑戰自我極限，同時探索自我內在潛能與身心連結。', 'https://example.com/images/event20.jpg','2025-06-05 05:00:00','2025-07-05 07:00:00','2025-04-21 09:30:00','2025-04-21 09:30:00'),
  ('書香閱讀會',     '書香閱讀會邀請當紅作家與新銳插畫家共同參與，以新書發表、主題分享與現場簽書的形式展開，並設置多元文化閱讀專區與兒童故事角，讓不同年齡層的讀者都能參與互動，透過跨界對談與閱讀工作坊激發更多創意與思考。',     'https://example.com/images/event21.jpg','2025-05-30 09:00:00','2025-06-30 18:00:00','2025-04-23 10:30:00','2025-04-23 10:30:00'),
  ('深夜星空',       '深夜星空觀測活動結合天文望遠鏡與數位投影技術，專業天文導覽員現場講解星座與天體故事，並安排星軌攝影體驗教學，參加者可親自操作相機捕捉夜空奇景，活動過程中還提供熱飲與輕食，讓大家在寧靜夜色中與宇宙對話。', 'https://example.com/images/event22.jpg','2025-05-18 20:00:00','2025-06-18 23:00:00','2025-04-19 21:00:00','2025-04-19 21:00:00'),
  ('美食工作坊',     '美食工作坊邀請米其林星廚與在地名廚合作，開設多場實作料理課程，涵蓋西式糕點、道地家常菜與創新分子料理，並搭配品酒專家講解葡萄酒與料理的完美搭配，學員可親自動手參與，結束後帶回自己製作的美味成果，提升廚藝技巧。',     'https://example.com/images/event23.jpg','2025-06-15 14:00:00','2025-07-15 17:00:00','2025-04-24 12:30:00','2025-04-24 12:30:00');

```😘



UPDATE pios
SET status = 'unpaid'
WHERE status = 'pending';
