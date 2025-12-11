-- Create waitlist table for email collection
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  consent BOOLEAN NOT NULL DEFAULT false,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_term TEXT,
  utm_content TEXT,
  utm_campaign_id TEXT,
  linkedin_campaign_name TEXT,
  linkedin_creative_id TEXT,
  linkedin_campaign_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public waitlist)
CREATE POLICY "Anyone can insert into waitlist"
ON public.waitlist
FOR INSERT
WITH CHECK (true);

-- Create policy to allow only admins to view waitlist
CREATE POLICY "Only admins can view waitlist"
ON public.waitlist
FOR SELECT
USING (false);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON public.waitlist(created_at DESC);