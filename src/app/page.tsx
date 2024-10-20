import EnhancedAnimatedHeroWithGrid from "@/Components/NewHeroSec"
import { OurServices } from "@/Components/Ourservices";
import { RecentProjects } from "@/Components/RecentProjects";

import { RecentProjectsWithBackground } from "@/Components/RecentProjectsWithBackground"



export default function Home() {
  return (
    <div className="w-full mx-auto">
        <EnhancedAnimatedHeroWithGrid/>
        <OurServices/>
        <RecentProjects/>
        <RecentProjectsWithBackground/>
      <div className="w-full h-[200vh] bg-red-400"></div>
    </div>
  );
}
