import React from 'react';
import { LocaleProvider } from 'antd'; //全局配置国际化方案
import zhCN from 'antd/lib/locale-provider/zh_CN'; //简体中文
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { IndexPage } from "./page";
import Search from "./page/search";

export class MainRouter extends React.Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <BrowserRouter>
          <Switch>
            <Route exact path={'/'} component={IndexPage}/>
            <Route path="/Search" component={Search}/>
          </Switch>
        </BrowserRouter>
      </LocaleProvider>
    );
  }
}