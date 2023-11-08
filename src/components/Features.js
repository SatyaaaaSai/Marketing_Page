import KeyFeatures from "./KeyFeatures";

const Features = () => {
  return (
    <div className="featues-conatiner">
      <KeyFeatures
        Feature1="Real-time Collaboration"
        descr1=" Enable users to collaborate on documents or projects in real-time, making it easy for teams to work together no matter where they are"
        Feature2="Customizable Themes"
        descr2="Allow users to personalize the appearance of their profiles, websites, or apps with a variety of customizable themes an0d templates."
        Feature3="Gamification"
        descr3="Introduce gamification elements like badges, points, or leaderboards to engage users and make the experience more fun and competitive."
      />
    </div>
  );
};

export default Features;
