import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../../DashBoard/SIdeBar/SideBar';
import { UserContext } from '../../../App';

const Book = () => {
    const {_id} = useParams();
    const [booking, setBooking] = useState([]);
    const [order, setOrder] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                        <SideBar></SideBar>
                        </div>
                        <div className="col-md-9">
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Book;