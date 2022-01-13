import React from "react";

export default function Label({ label, action = false }) {
  return (
    <span className="label" style={{ backgroundColor: label.color }}>
      {label.content}
      {action ? (
        <span
          className="close-label"
          onClick={(e) => {
            e.target.closest(".label").remove();
          }}
        >
          &times;
        </span>
      ) : (
        ""
      )}
    </span>
  );
}
