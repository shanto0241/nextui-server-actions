import { subtitle, title } from "../primitives";

const HeroAbout = () => {
  return (
    <div className="text-center mb-4">
      <h3 className={title()}>
        Thahnan Ferdous,
        <span className="md:hidden">
          <br />
        </span>{" "}
        Travel Photographer of Bangladesh
      </h3>
      <p className={subtitle()}>
        Thahnan Ferdous is a self taught travel photographer who likes to travel
        and discover new essence of life through travel photography. As a
        freelance photographer his passion is to explore & study the different
        aspects of human life, witness different cultures and document the
        colorful side of it.
      </p>
    </div>
  );
};

export default HeroAbout;
