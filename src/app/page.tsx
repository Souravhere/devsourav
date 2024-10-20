
import { RecentProjectsDemo } from "@/Components/AnimatedPinDemo"
import EnhancedAnimatedHeroWithGrid from "@/Components/NewHeroSec"



export default function Home() {
  return (
    <div className="w-full mx-auto">
        <EnhancedAnimatedHeroWithGrid/>
        <RecentProjectsDemo/>
      <div className="w-full h-[200vh] bg-red-400"></div>
    </div>
  );
}
