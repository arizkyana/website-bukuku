import { SUPABASE_ANON_KEY, SUPABASE_URL } from '@/keys/supabase';
import { createClient } from '@supabase/supabase-js';

const database = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export default database;
