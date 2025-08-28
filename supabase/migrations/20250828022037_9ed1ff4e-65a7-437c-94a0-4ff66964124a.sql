-- Add missing LinkedIn tracking columns to email_signups table
ALTER TABLE email_signups 
ADD COLUMN IF NOT EXISTS linkedin_campaign_group_id TEXT,
ADD COLUMN IF NOT EXISTS linkedin_campaign_group_name TEXT,
ADD COLUMN IF NOT EXISTS linkedin_campaign_id TEXT,
ADD COLUMN IF NOT EXISTS linkedin_ad_name TEXT;