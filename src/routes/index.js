import asyncComponent from '../components/AsyncComponent'
import Home from './Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'

// `import()` 异步加载模块，魔法注释写chunkName
const AsyncCounter = asyncComponent(() => import(
  /* webpackChunkName: "counter" */
  './Counter'))
const AsyncZen = asyncComponent(() => import(
  /* webpackChunkName: "zen" */
  './Zen'))
const AsyncElapse = asyncComponent(() => import(
  /* webpackChunkName: "elapse" */
  './Elapse'))
const AsyncRoute = asyncComponent(() => import(
  /* webpackChunkName: "route" */
  './Route'))
const AsyncPageNotFound = asyncComponent(() => import(
  /* webpackChunkName: "pageNotFound" */
  './PageNotFound'))
const AsyncDemo = asyncComponent(() => import(
  /* webpackChunkName: "demo" */
  './demo'
))

// 所有路由
const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/counter" component={AsyncCounter} />
    <Route path="/zen" component={AsyncZen} />
    <Route path="/elapse" component={AsyncElapse} />
    <Route path="/route/:id" component={AsyncRoute} />
    <Route path="/demo" component={AsyncDemo} />
    <Route path="/404" component={AsyncPageNotFound} />
    <Redirect from="*" to="/404" />
  </Switch>
)

export default Routes
