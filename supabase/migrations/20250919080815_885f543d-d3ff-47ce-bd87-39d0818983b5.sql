-- Fix function search path security issue
-- Update the calculate_component_targets function to have a fixed search path
CREATE OR REPLACE FUNCTION public.calculate_component_targets()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
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
$function$;