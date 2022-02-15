import React, { Children, useEffect, useState } from "react";
import Bounding from "../helper/Bounding";
import usePrevious from "../hooks/usePrevious";

const Animate = ({ children }) => {
  const [boundingBox, setBoundingBox] = useState({});
  const [prevBoundigBox, setPrevBoundigBox] = useState({});

  const prevChildren = usePrevious(children);

  useEffect(() => {
    const newBoundingBox = Bounding(children);
    setBoundingBox(newBoundingBox);
  }, [children]);

  useEffect(() => {
    const prevBoundingBox = Bounding(prevChildren);
    setPrevBoundigBox(prevBoundingBox);
  }, [prevChildren]);
  useEffect(() => {
    const hasPrevBoundingBox = Object?.keys(prevBoundigBox)?.length;

    if (hasPrevBoundingBox) {
      Children.forEach(children, (child) => {
        const domNode = child.ref.current;
        const firstBox = prevBoundigBox[child.key];
        const lastBox = boundingBox[child.key];
        const changeInX = firstBox?.top - lastBox?.top;
        if (changeInX) {
          requestAnimationFrame(() => {
            domNode.style.transform = `translateY(${changeInX}px)`;
            domNode.style.transition = "transform 0s";

            // cancelAnimationFrame  tip : cancel method animation

            requestAnimationFrame(() => {
              domNode.style.transform = "";
              domNode.style.transition = "transform 1000ms";
            });
          });
        }
      });
    }
  }, [boundingBox, children, prevBoundigBox]);

  return <div className="list">{children}</div>;
};

export default Animate;
