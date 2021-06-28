import "bootstrap/dist/css/bootstrap.min.css";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookingList from "./components/Customer/BookingList/BookingList";
import BookService from "./components/Customer/BookService/BookService";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard";
import Review from "./components/Customer/Review/Review";
import HomePage from "./components/HomePage/HomePage/HomePage";
import NavBar from "./components/HomePage/NavBar/NavBar";
import LogIn from "./components/LogIn/LogIn/LogIn";
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin";
import AddService from "./components/Admin/AddService/AddService";
import ManageService from "./components/Admin/ManageService/ManageService";
import Book from "./components/Customer/Book/Book";
import OrderList from "./components/Admin/OrderList/OrderList";
import ManageReview from "./components/Admin/ManageReview/ManageReview";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(false);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/dashBoard">
            <DashBoard></DashBoard>
          </Route>

          <Route path="/book/:_id">
            <Book></Book>
          </Route>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/serviceBooking">
            <BookService></BookService>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/orderList">
        <OrderList></OrderList>
          </Route>

          <Route path="/makeAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/manageService">
            <ManageService></ManageService>
          </Route>
          <Route path="/manageReview">
            <ManageReview></ManageReview>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
