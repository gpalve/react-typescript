interface Props {
  cartItems: string[];
  onClear: () => void;
  onAddToCart: () => void;
}

const Cart = ({ cartItems, onClear, onAddToCart }: Props) => {
  return (
    <div>
      {cartItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={onClear} className="btn btn-warning">
        Clear Cart
      </button>{" "}
      &nbsp;
      <button onClick={onAddToCart} className="btn btn-success">
        Fill Cart
      </button>
    </div>
  );
};

export default Cart;
