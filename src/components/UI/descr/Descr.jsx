import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const Desc = ({ isPrimary, isSecondary, className, children, ...attrs }) => {
  const classes = classnames("ui-text", className, {
    isPrimary,
    isSecondary,
  });
  return (
    <p
      className={classes}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      {...attrs}
    >
      {children}
    </p>
  );
};

Desc.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  className: propTypes.string,
  children: propTypes.node.isRequired,
};
Desc.defaultProps = {
  isPrimary: false,
  isSecondary: false,
  className: "",
};

export default Desc;
