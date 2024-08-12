import { Image } from "@nextui-org/image";

export default function AboutImage() {
  return (
    <Image
      isBlurred
      alt="NextUI Album Cover"
      className="m-5"
      src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
      width={400}
    />
  );
}
