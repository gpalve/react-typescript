import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Shorter from "./components/Shorter";
import Form from "./components/Form";
import ExpenseList from "./expense_tracker/components/ExpenseList";
import CategoryFilter from "./expense_tracker/components/CategoryFilter";
import CardWrapper from "./components/CardWrapper";
import ExpenseForm from "./expense_tracker/components/ExpenseForm";

export const categories = ["Traveling", "Billing", "Entertainment", "Food"];

function App() {
  const [visible, setVisible] = useState(false);
  const [liked, setLiked] = useState(false);

  const [cartItems, setCartItems] = useState([
    "prod4",
    "prod5",
    "prod6",
    "prod1",
    "prod2",
    "prod3",
  ]);

  const [expItems, setExpItems] = useState([
    { id: 1, expense: "New Watch", amount: 21, category: "Entertainment" },
    { id: 2, expense: "New PC", amount: 3, category: "Billing" },
    { id: 3, expense: "Berries", amount: 32, category: "Traveling" },
    { id: 4, expense: "Strwa", amount: 32, category: "Food" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpItems =
    selectedCategory === ""
      ? expItems
      : expItems.filter((item) => item.category === selectedCategory);

  // const handleSelectItem = (item:String) => {
  //   console.log(item)
  // }
  const handleClear = () => {
    setCartItems([]);
  };

  // return <div><ListGroup items={items} heading="ListGroup" onSelectItem={handleSelectItem}>&nbsp;<b>I am good Child</b></ListGroup></div>;
  //return <Alert> Hello there how are you I am fine you tell </Alert>
  return (
    <>
      <h4>React+Typescript Building Blocks</h4> <hr />
      <CardWrapper color="warning" heading="React TS CRUD">
        <ExpenseForm
          onSubmit={
            (postData) =>
              setExpItems([
                ...expItems,
                { ...postData, id: expItems.length + 1 },
              ])
            //console.log(postData)
          }
        ></ExpenseForm>

        <CategoryFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></CategoryFilter>

        <ExpenseList
          expense={visibleExpItems}
          onDelete={(id) =>
            setExpItems(expItems.filter((exp) => exp.id !== id))
          }
        ></ExpenseList>
      </CardWrapper>
      <CardWrapper color="info" heading="React TS Form">
        <Form></Form> <br />
      </CardWrapper>
      <CardWrapper heading="React TS Shortner">
        <Shorter maxChar={100}>
          Ganesh Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Explicabo, impedit? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatibus ab voluptate, soluta est repellat saepe natus dicta
          earum vitae necessitatibus ex distinctio laboriosam ipsam unde odio
          nesciunt? Assumenda, iure autem.
        </Shorter>
      </CardWrapper>
      <CardWrapper heading="React TS Cart and CartCount">
        <NavBar cartCount={cartItems.length}></NavBar>
        <br />
        <Cart
          cartItems={cartItems}
          onAddToCart={() =>
            setCartItems(["prod4", "prod5", "prod6", "prod1", "prod2", "prod3"])
          }
          onClear={handleClear}
        ></Cart>
        <br />
      </CardWrapper>
      <CardWrapper heading="React TS Like">
        <Like
          color={"red"}
          like={liked}
          onClick={() => {
            setLiked(!liked);
            console.log("clicked");
          }}
        ></Like>
      </CardWrapper>
      <CardWrapper heading="React TS Alert onClick">
        {visible && <Alert onClose={() => setVisible(false)}>Hello</Alert>}
        <Button
          color="danger"
          children="Show Alert "
          handleClick={() => setVisible(true)}
        />
      </CardWrapper>
    </>
  );
}

export default App;
