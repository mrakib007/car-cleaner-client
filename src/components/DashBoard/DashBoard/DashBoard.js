import React from 'react';
import { Col } from 'react-bootstrap';
import SideBar from '../SIdeBar/SideBar';


const containerStyle = {
    backgroundColor: '#F4FDFB',
    // border : '1px solid red'
}
const DashBoard = () => {
    return (
        <div>
            <div className="row" style={containerStyle}>
                <Col className = "p-0" md={3}>
                    <SideBar></SideBar>
                    </Col>
            </div>
        </div>
    );
};

export default DashBoard;