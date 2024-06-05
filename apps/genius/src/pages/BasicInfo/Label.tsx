// Label.tsx
import React from "react";
import * as Styles from "./BasicInfoStyle";

interface LabelProps {
  labelText: string;
  inputType: string; // text | select | number | textarea
  name: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

const Label: React.FC<LabelProps> = ({
  labelText,
  inputType,
  name,
  value,
  onChange,
  placeholder,
  options
}) => {
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    onChange(e);
  };

  const handleNumberChange = (newValue: number) => {
    onChange({
      target: { name, value: newValue }
    } as unknown as React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >);
  };

  return (
    <Styles.Label>
      <Styles.Number>{labelText}</Styles.Number>
      <Styles.Img />
      {inputType === "select" ? (
        <Styles.Select value={value as string} onChange={handleChange}>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </Styles.Select>
      ) : inputType === "textarea" ? (
        <Styles.TextArea
          name={name}
          value={value as string}
          onChange={handleChange}
          placeholder={placeholder}
        />
      ) : inputType === "number" ? (
        <Styles.AgeContainer>
          <Styles.Button
            type="button"
            onClick={() => handleNumberChange((value as number) - 1)}
            disabled={(value as number) <= 1}
          >
            -
          </Styles.Button>
          <Styles.AgeInput
            type="number"
            name={name}
            value={value}
            onChange={handleChange}
          />
          <Styles.Button
            type="button"
            onClick={() => handleNumberChange((value as number) + 1)}
          >
            +
          </Styles.Button>
        </Styles.AgeContainer>
      ) : (
        <Styles.Input
          type={inputType}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      )}
    </Styles.Label>
  );
};

export default Label;
