-- Remove utm_content column and rename utm_source to utm_campaign_id
ALTER TABLE public.email_signups DROP COLUMN utm_content;
ALTER TABLE public.email_signups RENAME COLUMN utm_source TO utm_campaign_id;

-- Add new Facebook ad tracking columns
ALTER TABLE public.email_signups ADD COLUMN utm_adset_id text;
ALTER TABLE public.email_signups ADD COLUMN utm_adset_name text;
ALTER TABLE public.email_signups ADD COLUMN utm_ad_id text;
ALTER TABLE public.email_signups ADD COLUMN utm_ad_name text;