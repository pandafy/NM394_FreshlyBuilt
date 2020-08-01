import React, { useState, useContext } from 'react';
import MapContext from "../../Context/Map/mapContext"
import CanvasJSReact from "../../assets/canvasjs.react"
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const DistrictPollutionInfo = ({ drawerclass, setDrawerClass }) => {
  const mapContext = useContext(MapContext);
  const { distInfo } = mapContext;
  var options_CO = {
    theme:"dark2",
    animationEnabled: true,
    title: {
      text: "CO"
    },
    axisY: {
      title: "CO concentration(molec/m2)",
      includeZero: false
    },
    toolTip: {
      shared: true
    },
  }

  var options_NO2 = {
    theme:"dark2",
    animationEnabled: true,
    title: {
      text: "NO2"
    },
    axisY: {
      title: "NO2 concentration(molec/m2)",
      includeZero: false
    },
    toolTip: {
      shared: true
    },
  }

  var options_SO2 = {
    theme:"dark2",
    animationEnabled: true,
    title: {
      text: "SO2"
    },
    axisY: {
      title: "SO2 concentration(molec/m2)",
      includeZero: false
    },
    toolTip: {
      shared: true
    },
  }

  var options_O3 = {
    theme:"dark2",
    animationEnabled: true,
    title: {
      text: "O3"
    },
    axisY: {
      title: "O3 concentration(molec/m2)",
      includeZero: false
    },
    toolTip: {
      shared: true
    },
  }


  var data_CO = [];
  var data_SO2 = [];
  var data_NO2 = [];
  var data_O3 = [];

  if (distInfo.length !== 0) {
    
    // every gas needs to have 3 data which has datapoints for each week
   
    for (var i = 0; i < distInfo.length; i++) {
      if (i == 0) {
        data_CO.push(
          {
            type: "spline",
            name: "MIN_CO",
            showInLegend: true,
            dataPoints: [{
              y: distInfo[i].MIN_CO,
              label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
            }]
          },
          {
            type: "spline",
            name: "MAX_CO",
            showInLegend: true,
            dataPoints: [{
              y: distInfo[i].CO,
              label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
            },]
          },
          {
            type: "spline",
            name: "MEAN_CO",
            showInLegend: true,
            dataPoints: [{
              y: distInfo[i].MEAN_CO,
              label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
            },]
          }
        )
        data_SO2.push(
          {
            type: "spline",
            name: "MIN_SO2",
            showInLegend: true,
            dataPoints: [{
              y: distInfo[i].MIN_CO,
              label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
            }]
          },
          {
            type: "spline",
            name: "MAX_SO2",
            showInLegend: true,
            dataPoints: [{
              y: distInfo[i].SO2,
              label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
            },]
          },
          {
            type: "spline",
            name: "MEAN_SO2",
            showInLegend: true,
            dataPoints: [{
              y: distInfo[i].MEAN_SO2,
              label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
            },]
          }
        );
        data_NO2.push({
          type: "spline",
          name: "MIN_NO2",
          showInLegend: true,
          dataPoints: [{
            y: distInfo[i].MIN_NO2,
            label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
          }]
        },
          {
            type: "spline",
            name: "MAX_NO2",
            showInLegend: true,
            dataPoints: [{
              y: distInfo[i].NO2,
              label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
            },]
          },
          {
            type: "spline",
            name: "MEAN_NO2",
            showInLegend: true,
            dataPoints: [{
              y: distInfo[i].MEAN_NO2,
              label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
            },]
          }
        );
        data_O3.push({
          type: "spline",
          name: "MIN_O3",
          showInLegend: true,
          dataPoints: [{
            y: distInfo[i].MIN_O3,
            label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
          }]
        },
          {
            type: "spline",
            name: "MAX_O3",
            showInLegend: true,
            dataPoints: [{
              y: distInfo[i].O3,
              label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
            },]
          },
          {
            type: "spline",
            name: "MEAN_O3",
            showInLegend: true,
            dataPoints: [{
              y: distInfo[i].MEAN_O3,
              label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
            },]
          }
        )
      } else {
        data_CO[0]["dataPoints"].push({
          y: distInfo[i].MIN_CO,
          label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
        })
        data_CO[1]["dataPoints"].push({
          y: distInfo[i].CO,
          label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
        });
        data_CO[2]["dataPoints"].push({
          y: distInfo[i].MEAN_CO,
          label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
        })

        data_NO2[0]["dataPoints"].push({
          y: distInfo[i].MIN_NO2,
          label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
        })
        data_NO2[1]["dataPoints"].push({
          y: distInfo[i].NO2,
          label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
        });
        data_NO2[2]["dataPoints"].push({
          y: distInfo[i].MEAN_NO2,
          label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
        })

        data_SO2[0]["dataPoints"].push({
          y: distInfo[i].MIN_SO2,
          label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
        })
        data_SO2[1]["dataPoints"].push({
          y: distInfo[i].SO2,
          label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
        });
        data_SO2[2]["dataPoints"].push({
          y: distInfo[i].MEAN_SO2,
          label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
        })

        data_O3[0]["dataPoints"].push({
          y: distInfo[i].MIN_O3,
          label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
        })
        data_O3[1]["dataPoints"].push({
          y: distInfo[i].O3,
          label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
        });
        data_O3[2]["dataPoints"].push({
          y: distInfo[i].MEAN_O3,
          label: distInfo[i].week + " " + distInfo[i].month + distInfo[i].year
        })
      }

    }
  }
  options_CO["data"]=data_CO;
  options_NO2["data"]=data_NO2;
  options_SO2["data"]=data_SO2;
  options_O3["data"]=data_O3;

  return (
    <div className={drawerclass}>
      <div className="info-data">
        <span className="info-heading">
          <span>
            {distInfo.length === 0 ? "Data Not Found" : distInfo[0].district.charAt(0).toUpperCase() +
              distInfo[0].district.substring(1) + "," + distInfo[0].state.charAt(0).toUpperCase() + distInfo[0].state.substring(1)}</span>
          <span className="info-close">
            <i onClick={
              () => {
                setDrawerClass("side-drawer")
              }
            } className="material-icons">close</i>
          </span>
        </span>
        <div className="content">
        <div className="plot">
        <CanvasJSChart  options = {options_CO}/>
        </div>
         <div className="plot">
        <CanvasJSChart options = {options_NO2}/>
        </div>
        <div className="plot">
        <CanvasJSChart  options = {options_SO2}/>
        </div>
        <div className="plot">
        <CanvasJSChart options = {options_O3}/>
        </div>
      </div>
      </div>
    </div>
  )

}
export default DistrictPollutionInfo;