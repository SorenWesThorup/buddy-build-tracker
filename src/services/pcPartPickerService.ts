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
  
  // 4500 DKK budget gaming PC components from PC Part Picker
  // Budget-friendly components for Minecraft & Fortnite
  static async fetchComponents(): Promise<PCPartPickerComponent[]> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [
      {
        id: '1',
        component: 'CPU',
        model: 'AMD Ryzen 5 5600G 3.9 GHz 6-Core Processor',
        price_dkk: 1399,
        store: 'Komplett.dk',
        url: 'https://dk.pcpartpicker.com/product/sYmmP6/amd-ryzen-5-5600g-39-ghz-6-core-processor-100-100000252box',
        notes: 'Integrated graphics'
      },
      {
        id: '2',
        component: 'Motherboard',
        model: 'MSI A520M-A PRO Micro ATX AM4 Motherboard',
        price_dkk: 449,
        store: 'Proshop.dk',
        url: 'https://dk.pcpartpicker.com/product/nZTzK8/msi-a520m-a-pro-micro-atx-am4-motherboard-a520m-a-pro'
      },
      {
        id: '3',
        component: 'Memory',
        model: 'Corsair Vengeance LPX 16 GB (2 x 8 GB) DDR4-3200',
        price_dkk: 449,
        store: 'Elgiganten.dk',
        url: 'https://dk.pcpartpicker.com/product/p6RFf7/corsair-memory-cmk16gx4m2b3200c16'
      },
      {
        id: '4',
        component: 'Storage',
        model: 'Kingston NV2 500 GB M.2-2280 PCIe 4.0 X4 NVME SSD',
        price_dkk: 349,
        store: 'Komplett.dk',
        url: 'https://dk.pcpartpicker.com/product/HTTp99/kingston-nv2-500-gb-m2-2280-pcie-40-x4-nvme-solid-state-drive-snv2s500g'
      },
      {
        id: '5',
        component: 'Case',
        model: 'Cooler Master MasterBox Q300L Micro ATX Mini Tower Case',
        price_dkk: 399,
        store: 'Proshop.dk',
        url: 'https://dk.pcpartpicker.com/product/rnGxFT/cooler-master-masterbox-q300l-microatx-mini-tower-case-mcb-q300l-kann-s00'
      },
      {
        id: '6',
        component: 'Power Supply',
        model: 'EVGA BR 450 W 80+ Bronze Certified ATX Power Supply',
        price_dkk: 449,
        store: 'Elgiganten.dk',
        url: 'https://dk.pcpartpicker.com/product/xDMwrH/evga-br-450-w-80-bronze-certified-atx-power-supply-100-br-0450-k1'
      }
    ];
  }

  static getPartPickerUrl(): string {
    return this.PC_PART_PICKER_URL;
  }

  static getTotalPrice(components: PCPartPickerComponent[]): number {
    return components.reduce((total, component) => total + component.price_dkk, 0);
  }
}