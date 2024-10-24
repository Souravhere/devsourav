import { FeaturesSectionDemo } from "@/Components/FunProject";
import { CoverDemo } from "@/Components/Intractivetext";
import EnhancedAnimatedHeroWithGrid from "@/Components/NewHeroSec"
import OurServices from "@/Components/Ourservices";

import { RecentProjects } from "@/Components/RecentProjects";



export default function Home() {
  return (
    <div className="w-full mx-auto">
        <EnhancedAnimatedHeroWithGrid/>
        <OurServices/>
        <RecentProjects/>
        <CoverDemo/>
        <FeaturesSectionDemo/>
      <div className="w-full h-[100vh] bg-red-400 flex items-center justify-center text-3xl">
        new comp soon
      </div>
    </div>
  );
}
