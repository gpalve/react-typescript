import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface Props {
  color: string;
  like: boolean;
  onClick: () => void;
}

const Like = ({ color, like, onClick }: Props) => {
  return (
    <div>
      {like ? (
        <AiFillHeart color={color} onClick={onClick}></AiFillHeart>
      ) : (
        <AiOutlineHeart color={color} onClick={onClick}></AiOutlineHeart>
      )}
    </div>
  );
};

export default Like;


