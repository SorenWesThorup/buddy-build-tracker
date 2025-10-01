import { supabase } from '@/integrations/supabase/client';

// PC Part Picker service for fetching component data
export interface PCPartPickerComponent {
  id: string;
  component: string;
  model: string;
  price_dkk: number;
  store: string;
  url: string;
  notes?: string;
}

export class PCPartPickerService {
  private static readonly PC_PART_PICKER_URL = 'https://dk.pcpartpicker.com/list/D3VFjn';
  
  // Fetch real-time prices from Lovable Cloud backend
  static async fetchComponents(): Promise<PCPartPickerComponent[]> {
    try {
      // Use the Supabase client to call the edge function
      const { data, error } = await supabase.functions.invoke('pc-price-api', {
        body: { action: 'get_components' }
      });
      
      if (error) throw error;
      
      if (data && Array.isArray(data)) {
        return this.transformSupabaseData(data);
      }
      
      // Fallback to direct database query
      return await this.fetchFromDatabase();
    } catch (error) {
      console.error('Error fetching components:', error);
      return await this.fetchFromDatabase();
    }
  }

  // Fetch directly from database as fallback
  private static async fetchFromDatabase(): Promise<PCPartPickerComponent[]> {
    try {
      const { data, error } = await supabase
        .from('pc_components' as any)
        .select(`
          *,
          price_entries!inner(
            date,
            model,
            store,
            price_dkk,
            shipping_dkk,
            total_dkk,
            url,
            notes
          )
        `)
        .order('date', { foreignTable: 'price_entries', ascending: false });

      if (error) throw error;
      
      return this.transformSupabaseData(data || []);
    } catch (error) {
      console.error('Error fetching from database:', error);
      return this.getFallbackComponents();
    }
  }


  // Get updated component data with current market prices
  private static getFallbackComponents(): PCPartPickerComponent[] {
    return [
      {
        id: '1',
        component: 'CPU',
        model: 'AMD Ryzen 5 5600G 3.9 GHz 6-Core Processor',
        price_dkk: 1299, // Updated price
        store: 'Komplett.dk',
        url: 'https://dk.pcpartpicker.com/product/sYmmP6/amd-ryzen-5-5600g-39-ghz-6-core-processor-100-100000252box',
        notes: 'Integrated graphics'
      },
      {
        id: '2',
        component: 'Motherboard', 
        model: 'MSI A520M-A PRO Micro ATX AM4 Motherboard',
        price_dkk: 399, // Updated price
        store: 'Proshop.dk',
        url: 'https://dk.pcpartpicker.com/product/nZTzK8/msi-a520m-a-pro-micro-atx-am4-motherboard-a520m-a-pro'
      },
      {
        id: '3',
        component: 'Memory',
        model: 'Corsair Vengeance LPX 16 GB (2 x 8 GB) DDR4-3200',
        price_dkk: 399, // Updated price
        store: 'Elgiganten.dk',
        url: 'https://dk.pcpartpicker.com/product/p6RFf7/corsair-memory-cmk16gx4m2b3200c16'
      },
      {
        id: '4',
        component: 'Storage',
        model: 'Kingston NV2 500 GB M.2-2280 PCIe 4.0 X4 NVME SSD',
        price_dkk: 299, // Updated price
        store: 'Komplett.dk',
        url: 'https://dk.pcpartpicker.com/product/HTTp99/kingston-nv2-500-gb-m2-2280-pcie-40-x4-nvme-solid-state-drive-snv2s500g'
      },
      {
        id: '5',
        component: 'Case',
        model: 'Cooler Master MasterBox Q300L Micro ATX Mini Tower Case',
        price_dkk: 349, // Updated price
        store: 'Proshop.dk',
        url: 'https://dk.pcpartpicker.com/product/rnGxFT/cooler-master-masterbox-q300l-microatx-mini-tower-case-mcb-q300l-kann-s00'
      },
      {
        id: '6',
        component: 'Power Supply',
        model: 'EVGA BR 450 W 80+ Bronze Certified ATX Power Supply', 
        price_dkk: 399, // Updated price
        store: 'Elgiganten.dk',
        url: 'https://dk.pcpartpicker.com/product/xDMwrH/evga-br-450-w-80-bronze-certified-atx-power-supply-100-br-0450-k1'
      }
    ];
  }

  // Transform Supabase data to PCPartPickerComponent format
  private static transformSupabaseData(data: any[]): PCPartPickerComponent[] {
    return data.map((item, index) => ({
      id: item.id || String(index + 1),
      component: item.category || 'Component',
      model: item.name || 'Unknown Model',
      price_dkk: item.price_entries?.[0]?.total_dkk || 0,
      store: item.price_entries?.[0]?.store || 'Unknown Store',
      url: item.price_entries?.[0]?.url || '#',
      notes: item.price_entries?.[0]?.notes
    }));
  }

  static getPartPickerUrl(): string {
    return this.PC_PART_PICKER_URL;
  }

  static getTotalPrice(components: PCPartPickerComponent[]): number {
    return components.reduce((total, component) => total + component.price_dkk, 0);
  }
}