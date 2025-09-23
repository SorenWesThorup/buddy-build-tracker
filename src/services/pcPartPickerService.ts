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
  
  // Mock data based on typical PC Part Picker structure
  // In a real implementation, this would fetch from the actual URL
  static async fetchComponents(): Promise<PCPartPickerComponent[]> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return [
      {
        id: '1',
        component: 'CPU',
        model: 'AMD Ryzen 5 5600X 3.7 GHz 6-Core Processor',
        price_dkk: 1299,
        store: 'Komplett.dk',
        url: 'https://www.komplett.dk/product/1234567',
        notes: 'In stock'
      },
      {
        id: '2',
        component: 'Motherboard',
        model: 'MSI B550 TOMAHAWK ATX AM4 Motherboard',
        price_dkk: 899,
        store: 'Proshop.dk',
        url: 'https://www.proshop.dk/product/1234567'
      },
      {
        id: '3',
        component: 'Memory',
        model: 'Corsair Vengeance LPX 16 GB (2 x 8 GB) DDR4-3200',
        price_dkk: 449,
        store: 'Elgiganten.dk',
        url: 'https://www.elgiganten.dk/product/1234567'
      },
      {
        id: '4',
        component: 'Storage',
        model: 'Samsung 970 EVO Plus 1 TB M.2-2280 PCIe 3.0 X4 NVME SSD',
        price_dkk: 699,
        store: 'Komplett.dk',
        url: 'https://www.komplett.dk/product/1234568'
      },
      {
        id: '5',
        component: 'Video Card',
        model: 'MSI GAMING X GeForce RTX 3060 Ti 8 GB Video Card',
        price_dkk: 3299,
        store: 'Proshop.dk',
        url: 'https://www.proshop.dk/product/1234569'
      },
      {
        id: '6',
        component: 'Case',
        model: 'Fractal Design Define 7 ATX Mid Tower Case',
        price_dkk: 899,
        store: 'Komplett.dk',
        url: 'https://www.komplett.dk/product/1234570'
      },
      {
        id: '7',
        component: 'Power Supply',
        model: 'Corsair CV650 650 W 80+ Bronze Certified ATX Power Supply',
        price_dkk: 549,
        store: 'Elgiganten.dk',
        url: 'https://www.elgiganten.dk/product/1234571'
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