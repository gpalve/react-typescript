interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' ;
  handleClick: () => void;
}

const Button = ({ children, color = "secondary", handleClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
