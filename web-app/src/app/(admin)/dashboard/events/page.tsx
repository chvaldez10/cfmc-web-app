import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { AdminUnderConstruction } from "@/components/template";

export default async function page() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  return <AdminUnderConstruction />;
}
