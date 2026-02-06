-- Create email_signups table for collecting launch notification emails
CREATE TABLE public.email_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.email_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert emails (for public signup)
CREATE POLICY "Anyone can insert email signups" 
ON public.email_signups 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow viewing own email (for future user verification)
CREATE POLICY "Users can view their own email signup" 
ON public.email_signups 
FOR SELECT 
USING (true);

-- Create index on email for faster lookups
CREATE INDEX idx_email_signups_email ON public.email_signups(email);

-- Create index on created_at for sorting
CREATE INDEX idx_email_signups_created_at ON public.email_signups(created_at DESC);