import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom';
import { container } from 'tsyringe';
import Foo from './test';

const instance = container.resolve(Foo);

console.log(instance);

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
