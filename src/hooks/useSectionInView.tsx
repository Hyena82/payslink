import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { setCurrentSection } from "@/state/systemSlice";

const useSectionInView = (section: string) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInView) {
      dispatch(setCurrentSection(section));
    }
  }, [isInView, dispatch, section]);

  return ref;
};

export default useSectionInView;
