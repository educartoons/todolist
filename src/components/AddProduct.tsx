import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/productsSlice";

export default function AddProduct() {
  const [product, setProduct] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProduct(event.target.value);
  };

  const handleClick = () => {
    dispatch(addProduct(product));
  };

  return (
    <div>
      <input
        value={product}
        onChange={handleChange}
        className="bg-fuchsia-300"
        type="text"
      />
      <button
        onClick={handleClick}
        className="bg-slate-700 text-white py-2 px-4"
      >
        Add
      </button>
    </div>
  );
}
