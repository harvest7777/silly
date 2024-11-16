import {createClient} from "@supabase/supabase-js";

const SUPABASE_URL = "https://trvlnvtksqbtkqlzfstz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydmxudnRrc3FidGtxbHpmc3R6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3OTE0MDAsImV4cCI6MjA0NzM2NzQwMH0.DSc9xwoqsxdIOQgRyToRDX7z__bIHCEFtYL4uunAjsI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);