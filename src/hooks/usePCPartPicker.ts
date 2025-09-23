import { useState, useEffect } from 'react';
import { PCPartPickerService, type PCPartPickerComponent } from '@/services/pcPartPickerService';

export const usePCPartPicker = () => {
  const [components, setComponents] = useState<PCPartPickerComponent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComponents = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const data = await PCPartPickerService.fetchComponents();
      setComponents(data);
    } catch (err) {
      console.error('Error fetching PC Part Picker components:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComponents();
  }, []);

  const totalPrice = PCPartPickerService.getTotalPrice(components);
  const partPickerUrl = PCPartPickerService.getPartPickerUrl();

  return {
    components,
    isLoading,
    error,
    totalPrice,
    partPickerUrl,
    refetch: fetchComponents
  };
};