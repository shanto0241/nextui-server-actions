import HeroAbout from "@/components/about/hero-about";
import HeroBlog from "@/components/blog/hero-blog";
import FeaturedGallery from "@/components/gallery/featured-gallery";
import SectionTitle from "@/components/section-title";
import { BlogItems } from "@/config/blogItems";

export function HomeSections() {
  const { blogs } = BlogItems;
  const popular = blogs.filter((item) => item.category === "offered");

  return (
    <>
      {/* Section for Glimps for About */}
      <div className="my-10">
        <SectionTitle heading="About Me" subHeading="Destined to Feature" />
        <HeroAbout />
      </div>
      {/* Section for Gallery feature */}
      <div className="my-10">
        <SectionTitle heading="Favorites" subHeading="Alligned visions" />
        <FeaturedGallery />
      </div>
      {/* Section for Blogs feature */}
      <div className="my-10">
        <SectionTitle heading="Blogs" subHeading="Descriptive Fiction" />
        <div className="grid md:grid-cols-2 gap-4 mt-10 mb-20">
          {popular.map((blog) => (
            <HeroBlog key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}
