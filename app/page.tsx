
import Hero from "@/components/main/Hero";
import {FloatingNav} from "@/components/ui/floating-navbar";
import StarsCanvasWrapper from "@/components/main/starBackgroundWapper";
import {FaHome} from "react-icons/fa";
import Grid from "@/components/ui/Grid";
export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero/>
          <FloatingNav navItems={[{name: "Home",link: "/", icon: <FaHome/>}]} />
          <Grid/>
          </div>
      </main>
    </>
  );
}

