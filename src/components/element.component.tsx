// import React, { ElementType, HTMLAttributes, FC } from 'react';

import React from "react";
import { AllHTMLAttributes } from "react";

function ElementComponent<T extends AllHTMLAttributes<HTMLElement>>(
  props: T & { as?: string },
) {
  const { as = 'div', ...otherProps } = props
  return React.createElement(as, otherProps)
}

export default ElementComponent;