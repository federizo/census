import DashboardLayout from "@/components/admin/components/Dashboard";
import DashboardContent from "@/components/admin/components/DashboardContent";
import BarChart from "@/components/barchart";
import Navbar from "@/components/navbar";
import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { authCreateClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = authCreateClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="relative w-screen h-screen flex flex-col gap-12 overflow-x-hidden">
      <div className="w-full h-full">
        <Navbar />
        <DashboardLayout>
          <DashboardContent />
        </DashboardLayout>
      </div>
    </div>
  );
}
