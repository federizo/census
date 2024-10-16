import BentoGridDemo from "@/components/bento";
import { EnvVarWarning } from "@/components/env-var-warning";
import Hero from "@/components/hero";
import { Layout } from "@/components/layout-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { BentoGrid } from "@/components/ui/bento-grid";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import HeaderAuth from "@/components/header-auth";


export default async function Index() {
  return (
    <main className="flex flex-col w-full h-full">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
          <div className="flex gap-5 items-center font-semibold">
            <ThemeSwitcher />

            <div className="flex items-center gap-2"></div>
          </div>
          
        </div>
      </nav>
      {/* <div className="w-[90%]">
        <Hero />
      </div> */}

      {/* <Layout /> */}
    </main>
  );
}
