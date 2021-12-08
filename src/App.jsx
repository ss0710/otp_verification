import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import SignIn from './components/auth/SignIn';
import { Switch, Route } from "react-router-dom";

const App = () => {
  return(
    <>
    <Switch>
        <Route exact path="/" component={SignIn}/>
        <Route path="/home" component={Home}/>
        <Route path="/cart" component={Cart}/>
    </Switch>
    </>
  );
};

export default App;