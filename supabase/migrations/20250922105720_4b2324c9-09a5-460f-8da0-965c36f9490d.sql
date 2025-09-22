-- Make components table publicly accessible by updating RLS policies
-- Drop existing authentication-required policies
DROP POLICY IF EXISTS "Authenticated users can view components" ON public.components;
DROP POLICY IF EXISTS "Authenticated users can insert components" ON public.components;
DROP POLICY IF EXISTS "Authenticated users can update components" ON public.components;
DROP POLICY IF EXISTS "Authenticated users can delete components" ON public.components;

-- Create public access policies
CREATE POLICY "Public read access to components" 
ON public.components 
FOR SELECT 
USING (true);

CREATE POLICY "Public insert access to components" 
ON public.components 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Public update access to components" 
ON public.components 
FOR UPDATE 
USING (true);

CREATE POLICY "Public delete access to components" 
ON public.components 
FOR DELETE 
USING (true);