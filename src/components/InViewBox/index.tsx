import useSectionInView from "@/hooks/useSectionInView";

interface InviewBoxProps {
  section: string;
}

const InviewBox: React.FC<InviewBoxProps> = ({ section }) => {
  const sectionRef = useSectionInView(section);

  return <div className="id-view" ref={sectionRef} />;
};

export default InviewBox;
