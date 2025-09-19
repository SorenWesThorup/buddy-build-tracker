import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

type Component = Database['public']['Tables']['components']['Row'];

export const useComponents = () => {
  const [components, setComponents] = useState<Component[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComponents = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
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

  useEffect(() => {
    fetchComponents();
  }, []);

  return {
    components,
    isLoading,
    error,
    refetch: fetchComponents
  };
};