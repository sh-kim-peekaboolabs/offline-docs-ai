-- Remove unused LinkedIn columns from email_signups table
ALTER TABLE public.email_signups 
DROP COLUMN IF EXISTS linkedin_campaign_group_id,
DROP COLUMN IF EXISTS linkedin_campaign_group_name,
DROP COLUMN IF EXISTS linkedin_campaign_id,
DROP COLUMN IF EXISTS linkedin_ad_name;