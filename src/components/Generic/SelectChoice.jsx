import React from "react";

export default function SelectChoice({ _name, _id, iterable }) {
  return (
    <select name={_name} id={_id}>
      {iterable.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}
