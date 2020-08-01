import React, { useState } from 'react';
import Map from "./map"
import Filter from "./Layout/Filter"
import DistrictPollutionInfo from "./Layout/DistrictPollutionInfo";

const Home = () => {
    const [isOpen,setisOpen]=useState(false);
    const [leftdrawerclass, setLeftDrawerClass] = useState('side-drawer-left');
    const [drawerclass, setDrawerClass] = useState('side-drawer');
   

    return (
        <div>
            <div style={{ position: 'absolute', top: "25%",zIndex:"200",left:"10px" }}>
                <div style={isOpen?{display:"none"}:{}} className="filter-container" onClick={() => {
                    setLeftDrawerClass("side-drawer-left open")
                    setisOpen(true);
                }}>
                    <i className="material-icons myfilter">filter_list</i>
                </div>
            </div>
            <DistrictPollutionInfo drawerclass={drawerclass} setDrawerClass={setDrawerClass} />
            <Filter leftdrawerclass={leftdrawerclass} setLeftDrawerClass={setLeftDrawerClass} setisOpen={setisOpen} />
            <Map setDrawerClass={setDrawerClass}/>
           
        </div>
    )
}
export default Home;