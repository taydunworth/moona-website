"use client";

import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({ text, onClick, variant = "default" }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["default", "primary", "secondary"]),
};
