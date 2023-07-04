import React from "react";

interface CreateProps {
  Title: string;
  Description: string;
  DueDate: string;
  Priority: string;
  Status: string;
}

const Create: React.FC<CreateProps> = ({
  Title,
  Description,
  DueDate,
  Priority,
  Status,
}) => {
  return (
    <div>
      <text>{Title}</text>
      <text>{Description}</text>
      <text>{DueDate}</text>
      <text>{Priority}</text>
      <text>{Status}</text>
    </div>
  );
};

export default Create;
