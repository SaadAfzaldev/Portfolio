
import Hero from "@/components/main/Hero";
import {FloatingNav} from "@/components/ui/floating-navbar";

import {FaHome} from "react-icons/fa";
import Grid from "@/components/ui/Grid";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";
export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero/>
          <FloatingNav navItems={navItems} />
          <Grid/>
          <RecentProjects/>
          </div> 
      </main>
    </>
  );
}

