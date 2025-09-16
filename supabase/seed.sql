-- Seed data based on your Excel file

-- Insert components from your Excel
INSERT INTO pc_components (category, name, target_price_dkk, alert_threshold_dkk, is_alternative) VALUES
('CPU/APU', 'Ryzen 5 5600G', 980, 780, false),
('CPU/APU', 'Ryzen 5 5500G', 0, null, true),
('Motherboard', 'B550 mATX (M.2 + HDMI)', 850, 650, false),
('Motherboard', 'A520 mATX', 500, 300, true),
('RAM', '16GB (2x8) DDR4-3200 CL16', 450, 250, false),
('RAM', '16GB DDR4-3600 CL16', 650, 450, true),
('SSD', '1TB NVMe', 550, 350, false),
('SSD', '500GB NVMe', 400, 200, true),
('PSU', '650W 80+ Gold (semi-modular)', 850, 650, false),
('PSU', '550W 80+ Bronze', 500, 300, true),
('Case', 'DUTZO C830 Panorama ARGB', 699, 499, false),
('Case', 'airflow mATX/ATX (similar)', 600, 400, true),
('Wi-Fi', 'TP-Link Archer T3U / T3U Plus', 170, null, false);

-- Insert sample price entries from your Excel
INSERT INTO price_entries (component_id, date, model, store, price_dkk, shipping_dkk, url, notes)
SELECT 
  (SELECT id FROM pc_components WHERE name = 'Ryzen 5 5600G'),
  '2025-09-16',
  'Ryzen 5 5600G (boxed)',
  'Elgiganten',
  980,
  0,
  '',
  'At target';

INSERT INTO price_entries (component_id, date, model, store, price_dkk, shipping_dkk, url, notes)
SELECT 
  (SELECT id FROM pc_components WHERE name = 'B550 mATX (M.2 + HDMI)'),
  '2025-09-16',
  'Gigabyte B550M DS3H',
  'Proshop',
  648,
  39,
  '',
  'Good deal; under target';

-- Create a default build configuration
INSERT INTO build_configs (name, description, total_budget_dkk) VALUES
('Main Build', 'Ryzen 5 5600G budget build for søn', 4500);