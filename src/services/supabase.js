import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yghnoqaxqfvigkabflbt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnaG5vcWF4cWZ2aWdrYWJmbGJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM2MzQ0NjksImV4cCI6MjAwOTIxMDQ2OX0.cxnh6nwKZUoDqTTgzLfmt5dQ2uNJaT4ipGpsn8gpHF8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
