import SectionTitle from "@/components/section-title";
import StoryAlbumPage from "@/components/stories/story-album";

export default function StoriesPage() {
  return (
    <div>
      <SectionTitle
        heading="Stories"
        subHeading="Photobook: A Narrative Story"
      />
      <StoryAlbumPage />
    </div>
  );
}
