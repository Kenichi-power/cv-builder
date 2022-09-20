import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1rem;
  button {
    display: inline-block;
    transition: 0.1s all ease;
    opacity: 0 !important;
  }
  &:hover button {
    opacity: 1 !important;
  }
  p {
    display: inline-block;
    margin-bottom: 0;
  }
`;
const Title = ({
  size,
  isUppercase,
  isShowButton,
  className,
  onClick,
  children,
  ...attrs
}) => {
  const classes = classnames(`ui-title-${size}`, className, { isUppercase });
  return (
    <Wrapper>
      <p
        className={classes}
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        {...attrs}
      >
        {children}
      </p>
      {isShowButton && (
        <button className="ui-button isLink" onClick={onClick}>
          +
        </button>
      )}
    </Wrapper>
  );
};

Title.propTypes = {
  size: propTypes.oneOf(["1", "2", "3"]),
  isShowButton: propTypes.bool,
  isUppercase: propTypes.bool,
  className: propTypes.string,
  onClick: propTypes.func,
  children: propTypes.node.isRequired,
};
Title.defaultProps = {
  size: "1",
  isShowButton: false,
  isUppercase: false,
  className: "",
  onClick: () => {},
};

export default Title;
