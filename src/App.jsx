import { Route, Switch } from "react-router-dom";
import Header from "./components/Layout/Header";
import Detail from "./views/Detail/Detail";
import Home from "./views/Home/Home";
import List from "./views/List/List";
import './App.css'

export default function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path='/characters/:id'>
          <Detail/>
        </Route>
        <Route path='/characters'>
          <List/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route >
      </Switch>
      </>
  )
}
