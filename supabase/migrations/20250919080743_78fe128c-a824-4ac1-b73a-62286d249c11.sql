-- Fix security vulnerability: Update RLS policies to require authentication
-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Components are viewable by everyone" ON public.components;
DROP POLICY IF EXISTS "Components can be updated by anyone" ON public.components;

-- Create secure policies that require authentication
CREATE POLICY "Authenticated users can view components" 
ON public.components 
FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Authenticated users can insert components" 
ON public.components 
FOR INSERT 
TO authenticated 
WITH CHECK (true);

CREATE POLICY "Authenticated users can update components" 
ON public.components 
FOR UPDATE 
TO authenticated 
USING (true);

CREATE POLICY "Authenticated users can delete components" 
ON public.components 
FOR DELETE 
TO authenticated 
USING (true);