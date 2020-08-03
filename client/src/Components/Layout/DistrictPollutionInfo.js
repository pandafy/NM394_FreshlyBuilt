import React, { useState, useContext, useEffect } from 'react';
import axios from "axios"

import MapGL from 'react-map-gl';
import MapContext from "../../Context/Map/mapContext"
import CanvasJSReact from "../../assets/canvasjs.react"
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;




const DistrictPollutionInfo = ({ drawerclass, setDrawerClass }) => {
  const mapContext = useContext(MapContext);
  const { distInfo } = mapContext;
  console.log(distInfo)

  var options_NO2 = {
    theme:"dark2",
    animationEnabled: true,
    title: {
      text: "NO2"
    },
    axisY: {
      title: "NO2 concentration(molec/m2)*10^20",
      includeZero: false
    },
    toolTip: {
      shared: true
    },
  }

  
  var data_NO2 = [];

  if (distInfo.length !== 0) {
    
    // every gas needs to have 3 data which has datapoints for each week
   
    for (var i = 0; i < distInfo.length; i++) {
      if (i == 0) {
        data_NO2.push({
          type: "spline",
          name: "MIN_NO2",
          showInLegend: true,
          dataPoints: [{
            y: distInfo[i].MIN_NO2,
            label: distInfo[i].week + " " + distInfo[i].month + " "+distInfo[i].year
          }]
        },
          {
            type: "spline",
            name: "MAX_NO2",
            showInLegend: true,
            dataPoints: [{
              y: distInfo[i].NO2,
              label: distInfo[i].week + " " + distInfo[i].month + " "+distInfo[i].year
            },]
          },
          {
            type: "spline",
            name: "MEAN_NO2",
            showInLegend: true,
            dataPoints: [{
              y: distInfo[i].MEAN_NO2,
              label: distInfo[i].week + " " + distInfo[i].month + " "+distInfo[i].year
            },]
          }
        );
      } else {
          data_NO2[0]["dataPoints"].push({
          y: distInfo[i].MIN_NO2,
          label: distInfo[i].week + " " + distInfo[i].month + " " +distInfo[i].year
        })
        data_NO2[1]["dataPoints"].push({
          y: distInfo[i].NO2,
          label: distInfo[i].week + " " + distInfo[i].month + " "+ distInfo[i].year
        });
        data_NO2[2]["dataPoints"].push({
          y: distInfo[i].MEAN_NO2,
          label: distInfo[i].week + " " + distInfo[i].month +" "+ distInfo[i].year
        })
      }

    }
  }
  options_NO2["data"]=data_NO2;
  const [viewport, setViewport] = useState({
    latitude: 28.7041,
    longitude: 77.1025,
    zoom: 5,
    bearing: 0,
    pitch: 0
  });
  const [location,setLocation]=useState({
    state:"",
    district:""
  })
  useEffect(()=>{
   async function myfunc(){
     if(distInfo.length!=0){
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" +distInfo.lat+ "," + distInfo.long + ".json?types=district&access_token=pk.eyJ1IjoidXJ2YXNoaTA3IiwiYSI6ImNqeWVnczJvOTAxMHAzY3FpMzR1YXNyangifQ.90CUMwZJnAtdjZAyQwc5sw"
    const res = await axios.get(url);
    setLocation({
      district:res.data.features[0].text,
      state:res.data.features[0]["context"][0].text
    })
  }
    //   const district = res.data.features[0].text;
    //   const state = res.data.features[0]["context"][0].text;
   }
   myfunc();
  },[])

  return (
    <div className={drawerclass}>
      <div className="info-data">
        <span className="info-heading">
  <span>{location.state+" ,"+location.district}</span>
          <span className="info-close">
            <i onClick={
              () => {
                setDrawerClass("side-drawer")
              }
            } className="material-icons">close</i>
          </span>
        </span>
        <div className="content">
        {/* <div className="plot">
        <CanvasJSChart  options = {options_CO}/>
        </div> */}
         <div className="plot">
        <CanvasJSChart options = {options_NO2}/>
        </div>
        {/* <div className="plot">
        <CanvasJSChart  options = {options_SO2}/>
        </div>
        <div className="plot">
        <CanvasJSChart options = {options_O3}/>
        </div> */}
        <MapGL {...viewport}
        width="100wh"
        height="40vh"
        mapStyle= "mapbox://styles/mapbox/dark-v9"
        onViewportChange={nextViewport => setViewport(nextViewport)}
        mapboxApiAccessToken="pk.eyJ1IjoidXJ2YXNoaTA3IiwiYSI6ImNqeWVnczJvOTAxMHAzY3FpMzR1YXNyangifQ.90CUMwZJnAtdjZAyQwc5sw"
      />
      </div>
      </div>
    </div>
  )

}
export default DistrictPollutionInfo;