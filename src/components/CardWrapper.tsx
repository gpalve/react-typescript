import React from "react";

interface Props {
  heading: string;
  children: React.ReactNode;
  color?: string;
}

const CardWrapper = ({ heading, children, color = "info" }: Props) => {
  const cust = `card-header bg-${color}`;
  return (
    <div>
      <div className="card mb-3">
        <div className={cust}>
          <b>{heading}</b>
        </div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default CardWrapper;
