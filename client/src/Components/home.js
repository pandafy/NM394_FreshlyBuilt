import React, { useState ,useContext} from 'react';
import Map from "./map"
import MapContext from "../Context/Map/mapContext"
import Filter from "./Layout/Filter"
import DistrictPollutionInfo from "./Layout/DistrictPollutionInfo";

const Home = () => {
    const [isOpen,setisOpen]=useState(false);
    const [leftdrawerclass, setLeftDrawerClass] = useState('side-drawer-left');
    const [drawerclass, setDrawerClass] = useState('side-drawer');
    const [layer,setLayer]=useState("PolygonLayer");
   const mapContext=useContext(MapContext);
   const {setLayerLoading}=mapContext;

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
            <div style={{position:'absolute',top:"85%",zIndex:"200",left:"30px"}}>
                <button onClick={()=>{
                setLayer("hotspot")
            }} className="change-layer">Hotspots</button>
                {/* <button onClick={()=>setLayer("coldspot")} className="change-layer">Coldspots</button> */}
                <button onClick={()=>setLayer("PolygonLayer")} className="change-layer">Pollutant Distribution </button>
            </div>
            <Map setDrawerClass={setDrawerClass} layer={layer}/>
           
        </div>
    )
}
export default Home;