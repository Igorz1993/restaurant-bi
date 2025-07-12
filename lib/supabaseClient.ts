import { createClient } from '@supabase/supabase-js';

// обращаемся к переменным среды, которые ты уже добавил в Vercel
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);