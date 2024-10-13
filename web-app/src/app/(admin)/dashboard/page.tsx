import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import UnderConstruction from "@/components/template/UnderConstruction";

export default async function page() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return <UnderConstruction />;
}
