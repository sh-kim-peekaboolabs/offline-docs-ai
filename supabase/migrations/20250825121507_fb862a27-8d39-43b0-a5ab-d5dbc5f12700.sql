-- Add UTM tracking fields to email_signups table
ALTER TABLE public.email_signups 
ADD COLUMN utm_source text,
ADD COLUMN utm_medium text,
ADD COLUMN utm_campaign text,
ADD COLUMN utm_content text;