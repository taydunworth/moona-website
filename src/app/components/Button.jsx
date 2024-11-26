"use client";

export default function Button({ text, onClick, variant = "primary" }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${variant === "secondary" ? "btn-secondary" : "btn-primary"}`}
    >
      {text}
    </button>
  );
}
