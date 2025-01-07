"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import OtherProjects from "@/components/OtherProjects";
import Approach from "@/components/Approach";
import EdAndProgress from "@/components/EdAndProgress";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <OtherProjects />
        <EdAndProgress />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
