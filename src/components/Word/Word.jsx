import { memo } from "react";
import "./word.css";
const Word = memo(function Word({ word, active, correct, keyId }) {
  return (
    <span
      className={`${keyId < active && correct ? "green" : ""} 
      ${keyId < active && !correct ? "red" : ""}
      ${active === keyId ? "white" : "gray"} `}
    >
      {word}{" "}
    </span>
  );
});

import PropTypes from "prop-types";

Word.propTypes = {
  word: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired,
  active: PropTypes.number.isRequired,
  keyId: PropTypes.number.isRequired,
};

export default Word;
