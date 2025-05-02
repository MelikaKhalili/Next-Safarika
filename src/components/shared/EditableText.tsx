import React, { useEffect, useRef, useState } from "react";

interface EditableTextProps {
  value: string | number;
  onSave: (newValue: string) => void;
  className?: string;
  type?: "text" | "number";
  min?: number;
  max?: number;
}

const EditableText: React.FC<EditableTextProps> = ({
  value,
  onSave,
  className = "",
  type = "text",
  min,
  max,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value.toString());
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setInputValue(value.toString());
  }, [value]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    if (type === "number") {
      const numValue = Number(inputValue);
      if (min !== undefined && numValue < min) {
        setInputValue(min.toString());
      } else if (max !== undefined && numValue > max) {
        setInputValue(max.toString());
      }
    }
    onSave(inputValue);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleBlur();
    } else if (e.key === "Escape") {
      setInputValue(value.toString());
      setIsEditing(false);
    }
  };

  return (
    <div className={className}>
      {isEditing ? (
        <input
          ref={inputRef}
          type={type}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          min={min}
          max={max}
          className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ) : (
        <span
          onDoubleClick={handleDoubleClick}
          className="cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
        >
          {value}
        </span>
      )}
    </div>
  );
};

export default EditableText;
