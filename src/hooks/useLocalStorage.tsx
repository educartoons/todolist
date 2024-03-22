import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, defaultValue: T) {
  const [state, setState] = useState<T>(defaultValue);

  useEffect(() => {
    try {
      if (state === defaultValue) {
        const list = window.localStorage.getItem(key);
        if (list) {
          const listObj = JSON.parse(list);
          setState(listObj);
        }

        // useState, useEffect, memo
      } else {
        window.localStorage.setItem(key, JSON.stringify(state));
      }
    } catch {
      console.error("Your browser does not support local storage");
    }
  }, [state]);

  return [state, setState];
}

export { useLocalStorage };

// useState, useEffect, memo, custom hook, composition
