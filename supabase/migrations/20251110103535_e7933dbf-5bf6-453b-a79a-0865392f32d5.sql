-- Add page_source column to email_signups table to track which page the signup came from
ALTER TABLE public.email_signups 
ADD COLUMN page_source text;

-- Add index for better query performance
CREATE INDEX idx_email_signups_page_source ON public.email_signups(page_source);