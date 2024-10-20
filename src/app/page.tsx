import EnhancedAnimatedHeroWithGrid from "@/Components/NewHeroSec"
import { RecentProjectsWithBackground } from "@/Components/RecentProjectsWithBackground"



export default function Home() {
  return (
    <div className="w-full mx-auto">
        <EnhancedAnimatedHeroWithGrid/>
        <RecentProjectsWithBackground/>
      <div className="w-full h-[200vh] bg-red-400"></div>
    </div>
  );
}
