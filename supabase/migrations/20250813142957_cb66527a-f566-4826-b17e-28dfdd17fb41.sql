-- Fix security vulnerability: Remove public SELECT access to email_signups table
-- This prevents email harvesting while maintaining signup functionality

DROP POLICY IF EXISTS "Users can view their own email signup" ON public.email_signups;

-- Email signups should only be insertable, not readable by users
-- Only authenticated admin users or server functions should access this data
-- The INSERT policy remains unchanged to allow signups