import { AcheiveMore, Create, Hero, Integrations, Process, Save, Testimonial } from "components";

const HomeView = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AcheiveMore />
      <Integrations />
      <Save />
      <Process />
      <Testimonial />
      <Create />
    </div>
  );
};
export default HomeView;
