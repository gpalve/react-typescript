import { ReactNode, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: String) => void;
  children: ReactNode;
}

function ListGroup({ items, heading, onSelectItem, children }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //   const getMessages = () => {
  //     return items.length === 0 ? <p>No items </p> : null;
  //   };
  //items = [];

  //   const handleClick = (event: MouseEvent) => {console.log(event)};
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No Item Found</p>}
      {/* {getMessages()} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
            {children}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
