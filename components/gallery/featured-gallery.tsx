import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
    width: 800,
    height: 600,
    alt: "Laptop on a desk",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    width: 300,
    height: 400,
    alt: "Mountains during sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    width: 800,
    height: 600,
    alt: "Beautiful sunset over the ocean",
  },

  {
    src: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd",
    width: 600,
    height: 800,
    alt: "Snow-covered mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    width: 800,
    height: 600,
    alt: "Field of sunflowers",
  },
  {
    src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
    width: 1200,
    height: 800,
    alt: "Books on a shelf",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    width: 300,
    height: 400,
    alt: "Mountains during sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    width: 800,
    height: 600,
    alt: "Beautiful sunset over the ocean",
  },

  {
    src: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd",
    width: 600,
    height: 800,
    alt: "Snow-covered mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    width: 800,
    height: 600,
    alt: "Field of sunflowers",
  },
];

export default function FeaturedGallery() {
  return (
    <MasonryPhotoAlbum
      componentsProps={{
        container: {
          style: { marginBottom: 20 },
        },
        image: {
          style: {
            border: 2,
            borderColor: "black",
            borderRadius: 2,
            borderStyle: "solid",
            boxShadow: "rgba(0, 0, 0, 0.2)",
          },
        },
      }}
      photos={photos}
      sizes={{
        size: "1168px",
        sizes: [
          { viewport: "(max-width: 767px)", size: "calc(100vw - 32px)" },
          { viewport: "(max-width: 1279px)", size: "calc(100vw - 288px)" },
        ],
      }}
      skeleton={<div style={{ width: "100%", minHeight: 800 }} />}
    />
  );
}
