import { subtitle } from "./primitives";

interface SectionTitleProps {
  heading: string;
  subHeading: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center mb-4">
      <h3 className="text-3xl uppercase py-2 shadow-md text-orange-400 border-y-2 border-yellow-900">
        {heading}
      </h3>
      <p className={subtitle()}>{subHeading}</p>
    </div>
  );
};

export default SectionTitle;
