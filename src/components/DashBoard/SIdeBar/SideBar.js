import React from 'react';
import './SideBar.css';
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height : '100vh'}}>
            <ul className ="list-unstyled">
                <li>
                    <Link to= '/dashBoard'><span>Dashboard</span></Link>
                </li>
                <li>
                    <Link to= '/'><span>Home</span></Link>
                </li>
                <li>
                    <Link to= '/booking'><span>Booking List</span></Link>
                </li>
                <li>
                    <Link to= '/manage'><span>Manage Service</span></Link>
                </li>
                <li>
                    <Link to= '/makeAdmin'><span>Make Admin</span></Link>
                </li>
                <li>
                    <Link to= '/serviceBooking'><span>Book Service</span></Link>
                </li>
                <li>
                    <Link to= '/showBooking'><span>Show Bookings</span></Link>
                </li>
                <li>
                    <Link to= '/review'><span>Review</span></Link>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;