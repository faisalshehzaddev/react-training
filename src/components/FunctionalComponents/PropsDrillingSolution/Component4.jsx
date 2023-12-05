import { useContext } from "react";
import { DataContext } from "./MainContext";

export default function Component4() {
  const data = useContext(DataContext)
  return (
    <>
      <h4>Component4</h4>
      <h4>Hello {data}</h4>
    </>
  );
}
