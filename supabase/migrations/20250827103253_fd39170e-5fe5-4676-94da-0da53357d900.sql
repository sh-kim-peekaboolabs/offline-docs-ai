-- Add LinkedIn ad tracking columns to email_signups table
ALTER TABLE public.email_signups 
ADD COLUMN linkedin_campaign_group_id text,
ADD COLUMN linkedin_campaign_group_name text,
ADD COLUMN linkedin_campaign_id text,
ADD COLUMN linkedin_campaign_name text,
ADD COLUMN linkedin_ad_id text,
ADD COLUMN linkedin_ad_name text;