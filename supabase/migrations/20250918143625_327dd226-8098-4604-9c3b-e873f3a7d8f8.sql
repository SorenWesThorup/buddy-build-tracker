-- Create components table for PC build tracking
CREATE TABLE public.components (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  component TEXT NOT NULL,
  model TEXT NOT NULL,
  store TEXT NOT NULL,
  price_dkk INTEGER NOT NULL,
  shipping_dkk INTEGER NOT NULL DEFAULT 0,
  total_dkk INTEGER NOT NULL,
  url TEXT,
  notes TEXT,
  target_dkk INTEGER NOT NULL,
  vs_target_dkk INTEGER NOT NULL,
  vs_target_percent DECIMAL(5,4),
  alert TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.components ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (anyone can view components)
CREATE POLICY "Components are viewable by everyone" 
ON public.components 
FOR SELECT 
USING (true);

-- Create policy for API updates (for now, allow all updates - can be restricted later)
CREATE POLICY "Components can be updated by anyone" 
ON public.components 
FOR ALL
USING (true);

-- Create function to automatically calculate vs_target values
CREATE OR REPLACE FUNCTION public.calculate_component_targets()
RETURNS TRIGGER AS $$
BEGIN
  NEW.vs_target_dkk = NEW.total_dkk - NEW.target_dkk;
  NEW.vs_target_percent = (NEW.total_dkk - NEW.target_dkk)::DECIMAL / NEW.target_dkk;
  
  -- Set alert if under target by 15% or 200 DKK
  IF NEW.vs_target_dkk <= -200 OR NEW.vs_target_percent <= -0.15 THEN
    NEW.alert = '✅ Alert: Under target ≥15% or ≥200 DKK';
  ELSE
    NEW.alert = NULL;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic calculations
CREATE TRIGGER calculate_component_targets_trigger
BEFORE INSERT OR UPDATE ON public.components
FOR EACH ROW
EXECUTE FUNCTION public.calculate_component_targets();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_components_updated_at
BEFORE UPDATE ON public.components
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial component data
INSERT INTO public.components (component, model, store, price_dkk, shipping_dkk, total_dkk, url, notes, target_dkk) VALUES
('CPU/APU: Ryzen 5 5600G', 'AMD Ryzen 5 5600G (Tray)', 'Proshop', 834, 39, 873, 'https://www.proshop.dk/CPU/AMD-Ryzen-5-5600G-CPU-APU-37-GHz-AMD-AM4-6-kerner-12-Traade-35-MB-Cache/3118480', 'Tray version, in stock', 980),
('Motherboard: B550 mATX (M.2 + HDMI)', 'ASRock B550M-HDV', 'Prisjagt (DK shops)', 546, 39, 585, 'https://www.prisjagt.dk/product.php?p=5550248', 'HDMI+M.2 confirmed', 850),
('RAM: 16GB (2x8) DDR4-3200 CL16', 'G.Skill Ripjaws V 16GB (2x8)', 'Computersalg', 334, 39, 373, 'https://www.computersalg.dk/i/7793139/g-skill-ripjaws-v-ddr4-3200mhz-16gb-2x8gb-cl16', 'In stock', 450),
('SSD: 1TB NVMe', 'Kingston NV3 1TB NVMe', 'Proshop', 419, 39, 458, 'https://www.proshop.dk/SSD/Kingston-NV3-SSD-1TB-M2-2280-PCI-Express-40-x4-NVMe/3206176', 'In stock', 550),
('PSU: 650W 80+ Gold (semi-modular)', 'Seasonic G12 GM-650 (DEMO)', 'Proshop', 577, 39, 616, 'https://www.proshop.dk/Strømforsyning/Seasonic-G12-GM-650-Strømforsyning-650-watt-120-mm-80-Plus-Gold-certificeret/3006058', 'DEMO unit', 850),
('Case: DUTZO C830 Panorama ARGB', 'DUTZO C321 Mesh TG ARGB', 'Proshop', 499, 39, 538, 'https://www.proshop.dk/Kabinet/DUTZO-C321-Mesh-TG-ARGB-Mid-Tower-Tower-ATX-Kabinet-Gennemsigtig/3185680', 'Alternative airflow case', 699),
('Wi‑Fi: TP‑Link Archer T3U / T3U Plus', 'TP-Link Archer T3U Nano', 'Proshop', 107, 39, 146, 'https://www.proshop.dk/Netvaerksadapter/TP-Link-Archer-T3U-Nano-Network-adapter-USB-20/2804974', 'In stock', 170);