import React, { useEffect, useState } from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: ${(props) => (props.isSquare ? "10px" : "50%")};
  background-color: #bfbfbf;

  input {
    display: none;
  }
  label,
  label div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10rem;
    height: 10rem;
    border-radius: ${(props) => (props.isSquare ? "10px" : "50%")};
  }
`;

const Avatar = ({ isSquare }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const objectUrl = selectedFile && URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <Wrapper isSquare={isSquare}>
      <input
        id="Avatar"
        type="file"
        value=""
        onChange={(e) => setSelectedFile(e.target.files[0])}
      />
      <label htmlFor="Avatar">
        {preview ? (
          <div
            style={{
              backgroundImage: `url(${preview}`,
              backgroundSize: `cover`,
              height: `100%`,
            }}
          />
        ) : (
          "upload image"
        )}
      </label>
    </Wrapper>
  );
};

Avatar.propTypes = {
  isSquare: propTypes.bool,
  onClick: propTypes.func,
};
Avatar.defaultProps = {
  isSquare: false,
  onclick: () => {},
};

export default Avatar;
