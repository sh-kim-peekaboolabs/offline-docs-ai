-- Add a SELECT policy that restricts access to email signup data
-- Only allow authenticated users with proper permissions to read email signups
CREATE POLICY "Restrict email signup access" 
ON public.email_signups 
FOR SELECT 
USING (false);  -- No one can select email signup data

-- This ensures email addresses cannot be harvested by spammers
-- while still allowing the INSERT policy for signups to work