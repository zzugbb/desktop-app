import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter} from 'react-router-dom';
import { MainRouter } from "./router";

ReactDom.render(
  <HashRouter>
    <MainRouter/>
  </HashRouter>,
  document.getElementById('root')
);
