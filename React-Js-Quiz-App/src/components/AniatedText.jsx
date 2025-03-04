import React, { useEffect, useState } from 'react';

const AnimatedText = () => {
  const [textToType, setTextToType] = useState("")
  

  useEffect(() => {
    setTimeout(() => {
      setTextToType("T");
    }, 100);
    setTimeout(() => {
      setTextToType("Te");
    }, 200);
    setTimeout(() => {
      setTextToType("Tes");
    }, 300);
    setTimeout(() => {
      setTextToType("Test");
    }, 400);
    setTimeout(() => {
      setTextToType("Test ");
    }, 500);
    setTimeout(() => {
      setTextToType("Test y");
    }, 600);
    setTimeout(() => {
      setTextToType("Test yo");
    }, 700);
    setTimeout(() => {
      setTextToType("Test you");
    }, 800);
    setTimeout(() => {
      setTextToType("Test your");
    }, 900);
    setTimeout(() => {
      setTextToType("Test your ");
    }, 1000);
    setTimeout(() => {
      setTextToType("Test your l");
    }, 1100);
    setTimeout(() => {
      setTextToType("Test your li");
    }, 1200);
    setTimeout(() => {
      setTextToType("Test your lim");
    }, 1300);
    setTimeout(() => {
      setTextToType("Test your limi");
    }, 1400);
    setTimeout(() => {
      setTextToType("Test your limit");
    }, 1500);
    setTimeout(() => {
      setTextToType("Test your limits");
    }, 1600);
    setTimeout(() => {
      setTextToType("Test your limits,");
    }, 1700);
    setTimeout(() => {
      setTextToType("Test your limits, ");
    }, 1800);
    setTimeout(() => {
      setTextToType("Test your limits, c");
    }, 1900);
    setTimeout(() => {
      setTextToType("Test your limits, ch");
    }, 2000);
    setTimeout(() => {
      setTextToType("Test your limits, cha");
    }, 2100);
    setTimeout(() => {
      setTextToType("Test your limits, chall");
    }, 2200);
    setTimeout(() => {
      setTextToType("Test your limits, challe");
    }, 2300);
    setTimeout(() => {
      setTextToType("Test your limits, challeng");
    }, 2400);
    setTimeout(() => {
      setTextToType("Test your limits, challenge");
    }, 2500);
    setTimeout(() => {
      setTextToType("Test your limits, challenge ");
    }, 2600);
    setTimeout(() => {
      setTextToType("Test your limits, challenge y");
    }, 2700);
    setTimeout(() => {
      setTextToType("Test your limits, challenge yo");
    }, 2800);
    setTimeout(() => {
      setTextToType("Test your limits, challenge you");
    }, 2900);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your");
    }, 3000);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your m");
    }, 3100);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mi");
    }, 3200);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your min");
    }, 3300);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind");
    }, 3400);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind,");
    }, 3500);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, ");
    }, 3600);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, a");
    }, 3700);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, an");
    }, 3800);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and");
    }, 3900);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and ");
    }, 4000);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and l");
    }, 4100);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and le");
    }, 4200);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let");
    }, 4300);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let ");
    }, 4400);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let t");
    }, 4500);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let th");
    }, 4600);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the");
    }, 4700);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the l");
    }, 4800);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the le");
    }, 4900);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the lea");
    }, 5000);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the lear");
    }, 5100);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the learn");
    }, 5200);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the learni");
    }, 5300);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the learnin");
    }, 5400);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the learning");
    }, 5500);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the learning ");
    }, 5600);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the learning b");
    }, 5700);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the learning be");
    }, 5800);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the learning beg");
    }, 5900);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the learning begi");
    }, 6000);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the learning begin");
    }, 6100);
    setTimeout(() => {
      setTextToType("Test your limits, challenge your mind, and let the learning begin!");
    }, 6200);
}, []);


  return (
    <div className="animated-text">
      <p>
        {textToType} 
      </p>
    </div>
  );
};

export default AnimatedText;
