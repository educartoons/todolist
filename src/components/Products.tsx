import { useSelector } from "react-redux";

export default function Products() {
  const store = useSelector((state) => state.products);
  return (
    <ul>
      {store.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
