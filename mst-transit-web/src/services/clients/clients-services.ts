import { createClient } from "@supabase/supabase-js";
import { environment } from "../../environment";

const supabase = createClient(environment.dev.hostUrl, environment.dev.anonKey);

const getClients = async () => {
  const { data, error } = await supabase.from("clients").select("*");
  if (error) {
    throw error;
  }
  return data;
};

export { getClients };
