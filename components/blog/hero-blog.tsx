interface Blog {
  image: string;
  name: string;
  recipe: string;
}

interface HeroBlogProps {
  blog: Blog;
}

export default function HeroBlog({ blog }: HeroBlogProps) {
  const { image, name, recipe } = blog;

  return (
    <div className="flex space-x-4 p-2">
      <img
        alt=""
        className="w-[120px]"
        src={image}
        style={{ borderRadius: "5px" }}
      />
      <div>
        <h3 className="uppercase font-bold">{name}</h3>
        <p>{recipe}</p>
      </div>
    </div>
  );
}
