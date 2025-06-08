import TextSlider from "./TextSlider";

const HeroVideo = () => {
  return (
    <div className="h-dvh overflow-hidden relative flex">
      <video className="w-dvw h-dvh object-cover absolute" autoPlay muted loop>
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <TextSlider>DECENTRLIZE YOUR WORLD</TextSlider>
    </div>
  );
};

export default HeroVideo;
