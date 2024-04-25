import { About, ContactHero, Follow, Subscribe } from "components";

const ContainerView = () => {
  return (
    <div className="bg-white">
      <ContactHero />
      <Follow />
      <About />
      <Subscribe />
    </div>
  );
};

export default ContainerView;
