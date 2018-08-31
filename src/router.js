import React from 'react';
import { LocaleProvider } from 'antd'; //全局配置国际化方案
import zhCN from 'antd/lib/locale-provider/zh_CN'; //简体中文
import {Route, Switch } from 'react-router-dom';
import Index from "./page/index";
import Search from "./page/search";

export class MainRouter extends React.Component {
  render() {
    return (
      <LocaleProvider locale={zhCN}>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route path="/Search" component={Search}/>
        </Switch>
      </LocaleProvider>
    );
  }
}