-- Rename utm_campaign column to utm_campaign_name in email_signups table
ALTER TABLE public.email_signups 
RENAME COLUMN utm_campaign TO utm_campaign_name;