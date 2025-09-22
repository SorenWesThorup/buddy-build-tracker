import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type Component = Database['public']['Tables']['components']['Row'];
type ComponentInsert = Database['public']['Tables']['components']['Insert'];

export const useComponents = () => {
  const [components, setComponents] = useState<Component[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComponents = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // No authentication required - public access
      const { data, error: supabaseError } = await supabase
        .from('components')
        .select('*')
        .order('created_at', { ascending: false });

      if (supabaseError) {
        throw supabaseError;
      }

      setComponents(data || []);
    } catch (err) {
      console.error('Error fetching components:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const addComponent = async (componentData: ComponentInsert) => {
    try {
      const { data, error } = await supabase
        .from('components')
        .insert([componentData])
        .select()
        .single();

      if (error) throw error;
      
      await fetchComponents(); // Refresh the list
      return data;
    } catch (err) {
      console.error('Error adding component:', err);
      throw err;
    }
  };

  useEffect(() => {
    fetchComponents();
  }, []);

  return {
    components,
    isLoading,
    error,
    refetch: fetchComponents,
    addComponent
  };
};