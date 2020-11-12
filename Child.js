import React, { useContext } from 'react';
import { SampleContext } from "./index";

export default () => {
  const ctx = useContext(SampleContext);
  const handleChange = e => {
    e.preventDefault();
    ctx.update(e.target.value);
  };
  
  return (
    <div>
      <span>current: {ctx.value}</span>
      <div>
        <input type="text" value={ctx.value} onChange={handleChange} />
      </div>
    </div>
  );
};
