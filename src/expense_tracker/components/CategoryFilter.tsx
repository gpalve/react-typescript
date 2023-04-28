import { categories } from "../../App";

interface Props {
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <div className="mb-3">
        <select
          name=""
          id=""
          className="form-select"
          onChange={(event) => onSelectCategory(event.target.value)}
        >
          <option value="">Select Filter Category</option>
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;
