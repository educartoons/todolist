import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, defaultValue: T) {
  const [state, setState] = useState<T>(defaultValue);

  useEffect(() => {
    try {
      if (state === defaultValue) {
        try {
          const list = window.localStorage.getItem(key);
          if (list) {
            const listObj = JSON.parse(list);
            setState(listObj);
          }
        } catch {
          throw new Error("You need to allow Local Storage Feature");
        }

        // useState, useEffect, memo
      } else {
        try {
          window.localStorage.setItem(key, JSON.stringify(state));
        } catch {
          throw new Error("You need to allow Local Storage Feature");
        }
      }
    } catch {
      console.error("Your browser does not support local storage");
    }
  }, [state]);

  return [state, setState];
}

export { useLocalStorage };

// useState, useEffect, memo, custom hook, composition
