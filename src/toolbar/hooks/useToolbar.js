import { useEffect, useRef } from "react";
import Toolbar from "../toolbarLogic";

export const useToolbar = (props) => {
  const domRef = useRef(null);
  const toolbarRef = useRef(null);

  useEffect(() => {
    if (domRef.current) {
      console.log('domRef');
      toolbarRef.current = new Toolbar();
    }

    return () => {
      console.log('toolbar hook dispose');
    }
  }, [])

  return [domRef, toolbarRef];
}