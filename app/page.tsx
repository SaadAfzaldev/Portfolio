
import Hero from "@/components/main/Hero";
import {FloatingNav} from "@/components/ui/floating-navbar";
import {FaHome} from "react-icons/fa";
import Grid from "@/components/ui/Grid";
export default function Home() {
  return (
    <>
      <main className="h-full w-full">
        <div className="flex flex-col gap-20 h-[850px]">
            <Hero/>
            <FloatingNav navItems={[{name: "Home",link: "/", icon: <FaHome/>}]} />
            <Grid/>
        </div>
      </main>
    </>
  );
}

