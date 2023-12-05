import { useState } from "react";
export default function useLocalStorage(key, value) {
  const storeKey = localStorage.getItem(key);
  const initialValue = storeKey ? JSON.parse(storeKey) : value;

  const [state, setState] = useState(initialValue);

  const setStoredKeyValue = (newValue) => {
    setState(newValue);
    localStorage.setItem(key, JSON.parse(newValue));
  };

  return [state, setStoredKeyValue];
}
