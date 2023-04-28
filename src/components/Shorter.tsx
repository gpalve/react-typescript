import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}

const Shorter = ({ children, maxChar = 10 }: Props) => {
  const [visible, setVisible] = useState(false);

  if (children.length <= maxChar) return <p>{children}</p>;

  const text = visible
    ? children + "..."
    : children.substring(0, maxChar) + "...";

  return (
    <div>
      {text}
      <button
        onClick={() => setVisible(!visible)}
        className="btn btn-sm btn-primary"
      >
        {visible ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Shorter;
