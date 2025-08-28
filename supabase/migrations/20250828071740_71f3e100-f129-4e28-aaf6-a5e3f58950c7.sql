-- Add utm_source column to email_signups table
ALTER TABLE public.email_signups 
ADD COLUMN utm_source text;