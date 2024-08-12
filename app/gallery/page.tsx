import AlbumTabs from "@/components/gallery/albums-tab";
import SectionTitle from "@/components/section-title";

export default function GalleryPage() {
  return (
    <div>
      <SectionTitle heading="Albums" subHeading="Sequencing Life" />
      <AlbumTabs />
    </div>
  );
}
