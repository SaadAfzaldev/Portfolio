
import Hero from "@/components/main/Hero";
import {FloatingNav} from "@/components/ui/floating-navbar";

import Grid from "@/components/ui/Grid";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";
import Client from "@/components/ui/client";
import Encryption from "@/components/ui/Encryption";
import Footer from "@/components/ui/Footer";
import Approach from "@/components/ui/approach";
export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 text-white flex justify-center items-center flex-col mx-auto sm:px-10 px-5 py-10 overflow-clip">
        <div className="max-w-7xl w-full space-y-10"> {/* Added space-y-10 for consistent vertical spacing */}
          <Hero />
          <FloatingNav navItems={navItems} />
          <Grid />
          <RecentProjects />
          <Encryption />
          <Client />
          <Approach/>
          <Footer/>
        </div>
      </main>
    </>
  );
}

