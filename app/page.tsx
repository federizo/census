import BentoGridDemo from "@/components/bento";
import { EnvVarWarning } from "@/components/env-var-warning";
import Hero from "@/app/(home)/components/Hero";
import { Layout } from "@/components/layout-grid";
import { ThemeSwitcher } from "@/components/theme-switcher";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import { BentoGrid } from "@/components/ui/bento-grid";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import HeaderAuth from "@/components/header-auth";
import { CardsCarousel } from "@/components/carousel";
import { TracingBeamDemo } from "@/components/tracing-beams";
import { ThemeProvider } from "next-themes";
import Navbar from "./(home)/components/Navbar";
import FloatingNavbar from "./(home)/components/FloatingNabvar";
import { FocusCardsDemo } from "@/components/cards";
import { CardDemo } from "@/components/card-demo";
import { Carousel } from "@/components/ui/apple-cards-carousel";
import Footer from "@/components/footer";
import { DirectionAwareHoverDemo } from "@/components/hover-card";
import CardsMappingV3 from "@/components/CardsV3/CardsMappingV3"
import { CardsmappingV2 } from "@/components/CardsV2/CardsmappingV2";
export default async function Index() {
  return (
    <div className="relative w-screen h-screen flex flex-col overflow-y-hidden ">
      <header className="flex overflow-hidden flex-col w-full">
        <FloatingNavbar />
      </header>

      <div className="z-0 w-full h-full overflow-y-auto items-center  grid-col overflow-hidden">
        <Hero />
        <CardsMappingV3/>
        
        <CardsmappingV2/>
        <Footer />
      </div>
    </div>
  );
}
