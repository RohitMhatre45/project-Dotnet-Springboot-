import './App.css';
import Header from './components/Header';
import RegSupplier from './components/RegSupplier';
import NavBar from './components/NavBar';
import RegCustomer from './components/RegCustomer';
import AdminLogin from './components/AdminLogin';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SellerLogin from './components/SellerLogin';
import CustomerLogin from './components/CustomerLogin';
import SellerProfile from './components/SellerProfile';
import AddProduct from './components/AddProduct';
import MyProducts from './components/MyProducts';
import AllProduct from './components/AllProducts';
import EditProduct from './components/EditProduct';
import CustomerProfile from './components/CustomerProfile';
import About from './components/About';

import AdminProfile from './components/AdminProfile';
import AllCustomers from './components/AllCustomers';
import AllSellers from './components/AllSellers';

import MyOrders from './components/MyOrders';
import Orders from './components/Orders';
import ViewCart from './components/ViewCart';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <NavBar />
        <div className="container-fluid p-2">
        </div>
        <Switch>
          <Route component={AllProduct} path="/" exact />
          <Route component={AllProduct} path="/cat/:pcat/:subcat" />
          <Route component={RegSupplier} path="/regsupplier" />
          <Route component={RegCustomer} path="/register" />
          <Route component={AdminLogin} path="/alogin" />
          <Route component={SellerLogin} path="/slogin" />
          <Route component={CustomerLogin} path="/clogin" />
          <Route component={SellerProfile} path="/sprofile" />
          <Route component={CustomerProfile} path="/cprofile" />
          <Route component={AddProduct} path="/add-product" />
          <Route component={EditProduct} path="/edit/:prodid" />
          <Route component={MyProducts} path="/myproducts" />
          <Route component={About} path="/about" />





                
          <Route component={AdminProfile} path="/aprofile" />          
        
          <Route component={AllCustomers} path="/customers" />          
          <Route component={AllSellers} path="/sellers" />                  
      
          <Route component={MyOrders} path="/myorders" />          
          <Route component={Orders} path="/orders" />          
          <Route component={ViewCart} path="/cart" />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
