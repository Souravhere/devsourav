import { FeaturesSectionDemo } from "@/Components/FunProject";
import { CoverDemo } from "@/Components/Intractivetext";
import EnhancedAnimatedHeroWithGrid from "@/Components/NewHeroSec"
import { OtherProject } from "@/Components/Otherprojects";
import OurServices from "@/Components/Ourservices";

import { RecentProjects } from "@/Components/RecentProjects";
import TrustedCompanies from "@/Components/TrustedCompanies";



export default function Home() {
  return (
    <div className="w-full mx-auto">
        <EnhancedAnimatedHeroWithGrid/>
        <OurServices/>
        <RecentProjects/>
        <CoverDemo/>
        <FeaturesSectionDemo/>
        <TrustedCompanies/>
        <OtherProject/>
        <div className="px-7 py-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold py-2 text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600">Coming Soon</h1>
          <p className="text-center text-black">I am working hard to bring more components soon. Bookmark this page to stay tuned!</p>
        </div>
    </div>
  );
}
