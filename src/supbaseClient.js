import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://xsprirnoerturuxxvrfn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_hmRJCH2x-2KdJNJh78w9Gg_yeZ_aoCm'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
