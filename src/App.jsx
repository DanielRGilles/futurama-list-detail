import { Route, Switch, Link } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./views/Home/Home";
import List from "./views/List/List";


export default function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route >
        <Route path='/characters'>
          <List/>
        </Route>
        <Route path='/characters/:id'>
          <Detail/>
        </Route>
      </Switch>
      </>
  )
}
