import Image from "next/image";

export function OtherProject() {
  return (
    <div className="w-full mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold py-2 text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-gray-900 via-gray-700 to-gray-600">Other Projects</h1>
         <div className="w-80 mx-auto">
        <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
          <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative cursor-pointer">
            <Image
              src={blogContent.image}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
              className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
            />
          </div>
          <div className=" p-4">
            <h2 className="font-bold my-4 text-lg text-zinc-700">
              {blogContent.title}
            </h2>
            <h2 className="font-normal my-4 text-sm text-zinc-500">
              {blogContent.description}
            </h2>
            <div className="flex flex-row justify-between items-center mt-10">
              <span className="text-sm text-gray-500">{blogContent.date}</span>
              <div className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Read More
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}

const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Sourav",
  date: "28th March, 2024",
  title: "Veggie Smart",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/demo/thumbnail.png",
  authorAvatar: "/manu.png",
};

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <Image
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
