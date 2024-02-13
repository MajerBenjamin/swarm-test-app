import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import hexagon from "../images/clients/shape_hexagon.png"
import Draggable, { DraggableCore } from "react-draggable";
import WebsocetComponent from '../components/WebsocetComponent';

const clientImage = {
    height: 700,
    width: 700,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    paddingLeft: 70
} as React.CSSProperties

const SwarmPage = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', }}>
            <NavBar />

            <div>
                <WebsocetComponent />
            </div>

            <div style={clientImage} className="overflow-hidden flex justify-center">
                <img src={hexagon} style={{ alignSelf: "center" }} alt="hexagon" />
                <Draggable>
                    <div style={{ width: 70, height: 70, borderRadius: 50 }} className="bg-blue-900 shadow-xl" />
                </Draggable>
            </div>


        </div>
    )
}

export default SwarmPage;

