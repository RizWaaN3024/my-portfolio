import React from "react";

const AboutMe = () => {
  return (
    <div className="container mx-auto">
        <div></div>
      <div className="text-center mt-[60px] border-b-2 border-black">
        <h2 className="text-[62px] font-bold">About Me</h2>
      </div>
      <div className="pt-[24px]">
        <p className="text-[36px] text-center overflow-hidden">
          Hey there!!👋 I'm Rizwaan, your friendly neighbourhood Full-Stack
          Developer, coding my way through the web like Spider-Man swings
          through the city.🕸️
        </p>
      </div>
      <div className=" pt-[44px]">
        <h3 className="text-[42px] font-bold text-center border-b-2 border-black">The Short Story</h3>
        <p className="text-[36px] text-center pt-[24px] overflow-hidden">
          By day, I'm a mild-mannered coder, crafting seamless user experiences
          and robust back-end systems. By night, I'm...well, still a coder. But
          with more snacks and bad puns.
        </p>
      </div>
      <div className=" pt-[44px]">
        <h3 className="text-[42px] font-bold text-center border-b-2 border-black">The Origin Story</h3>
        <p className="text-[36px] text-center pt-[24px] overflow-hidden">
          Once upon a time, in a land filled with syntax errors and 404 pages, I
          embarked on a quest to master the mystical arts of HTML, CSS and
          Javascript. After surviving countless caffeine-fueled nights and
          heroic battles against bugs, I emerged as a Full-Stack Developer,
          ready to save the digital world from outdated designs and spaghetti
          code.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
