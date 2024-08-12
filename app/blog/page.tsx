import { BlogSectionPage } from "@/components/blog/blogs";
import SectionTitle from "@/components/section-title";

export default function BlogPage() {
  return (
    <div>
      <SectionTitle heading="Blogs" subHeading="My Day to Day Upbringings" />
      <BlogSectionPage />
    </div>
  );
}
