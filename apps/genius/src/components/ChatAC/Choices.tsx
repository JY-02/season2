import React from "react";
import * as Styles from "./ChoicesStyle";

const Choices: React.FC<{
  choices: string[];
  onSelect: (choice: string) => void;
}> = ({ choices, onSelect }) => {
  const handleSelect = (choice: string) => {
    onSelect(choice);
  };

  return (
    <div style={{ textAlign: "left" }}>
      <Styles.ChoiceContainer>
        {choices.map((choice, index) => (
          <Styles.ChoiceButton key={index} onClick={() => handleSelect(choice)}>
            {choice}
          </Styles.ChoiceButton>
        ))}
      </Styles.ChoiceContainer>
    </div>
  );
};
export default Choices;
