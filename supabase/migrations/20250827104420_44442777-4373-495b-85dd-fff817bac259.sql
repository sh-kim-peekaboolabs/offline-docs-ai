-- 임시로 INSERT 정책을 더 명확하게 수정
DROP POLICY IF EXISTS "Anyone can insert email signups" ON public.email_signups;

-- 새로운 INSERT 정책 생성 (더 명확한 조건)
CREATE POLICY "Allow public email signups" 
ON public.email_signups 
FOR INSERT 
TO public 
WITH CHECK (
  email IS NOT NULL 
  AND email != '' 
  AND consent = true
);