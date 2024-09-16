import React, { forwardRef } from "react";
import { sprinkles } from "./Frame.css.mjs";
import cn from "classnames";
const fixedForwardRef = forwardRef;
const FrameComponent = (props, ref) => {
  const { as, children, ...rest } = props;
  const Component = as || "div";
  const { className, style, otherProps } = sprinkles(rest);
  return /* @__PURE__ */ React.createElement(
    Component,
    {
      ...otherProps,
      style: { ...style, ...otherProps.style },
      className: cn(className, otherProps.className),
      ref
    },
    children
  );
};
const Frame = fixedForwardRef(FrameComponent);
export {
  Frame,
  fixedForwardRef
};
