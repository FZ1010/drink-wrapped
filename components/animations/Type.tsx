import React from "react";

const Type = ({ text = "Typing Effect", speed = 200 }) => {
  const [displayedText, setDisplayedText] = React.useState("");
  const [i, setI] = React.useState(0);

  React.useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, speed);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i, text, speed]);

  return <span>{displayedText}</span>;
};

export default Type;
