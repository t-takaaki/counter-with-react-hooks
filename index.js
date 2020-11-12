import React, { createContext, useState } from 'react';
import { render } from 'react-dom';
import App from './App';

export const SampleContext = createContext();

const Wapper = () => {
  const [sample, setSample] = useState("hogehoge");
  const context = {
    value: sample,
    update: setSample,
  }
  return (
    <SampleContext.Provider value={context}>
      <App />
    </SampleContext.Provider>
  );
};

render(<Wapper />, document.getElementById('root'));
