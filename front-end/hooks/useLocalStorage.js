import { useState } from "react";

export default function useLocalStorage(key, initialValue){
  // Set a new localeStorage item.
  const [state, setState] = useState( () => {
    try {
      const value = window.localStorage.getItem(key);

      // check if value is already exist if don´t exist initialize white the initial value.
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.error(error)
    }
  })

  const setValue = state => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setValue(value)
    } catch (error) {
      console.error(error)
    }
  }

  return [state, setValue];

}