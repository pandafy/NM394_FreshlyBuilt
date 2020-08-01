import React,{useReducer,useContext} from 'react';
import MapContext from "./mapContext";
import MapReducer from "./mapReducer";
import axios from 'axios';
import AlertContext from "../Alert/alertContext"
import {
    MAP_LOADING,
    LOAD_GEODATA,
    LAYER_LOADING,
    SET_FILTER,
    LOAD_DIST_INFO,
    SET_TYPE
} from "../types"

const MapState=(props)=>{
    const initialState={
      loading:false,
      geodata:{},
      type:"CO",
      layerLoading:false,
      filter:{
        week:1,
        month:"January",
        year:2020,
        pollutant:"CO"
      },
      distInfo:[]
    }
    const alertContext=useContext(AlertContext);

    const [state,dispatch]=useReducer(MapReducer,initialState);

    const setLoading=(isLoading)=>{
		dispatch({type:MAP_LOADING,payload:isLoading});
    }

    const setLayerLoading=(isLoading)=>{
      dispatch({type:LAYER_LOADING,payload:isLoading})
    }

    const setFilter=(f)=>{
      dispatch({type:SET_FILTER,payload:f});
    }

    const loadDistInfo=async(district,state)=>{
      const response=await axios.get(`http://localhost:3000/api/distinfo?state=${state}&district=${district}`)
      console.log(district,state);
      console.log(response.data)
      dispatch({type:LOAD_DIST_INFO,payload:response.data});
    }

    const setType=(t)=>{
    dispatch({type:SET_TYPE,payload:t});
    }

    const loadGeodata=async(week,month,year,type)=>{
      setLayerLoading(true);
      setLoading(true);
      const response=await axios.get('http://localhost:3000/api?week='+week+"&month="+month+"&year="+year+"&type="+type)
      const data=response.data;
      console.log(response);
      if(data==="Invalid Request"){
      alertContext.setalert(data,"danger");
      setLoading(false);
      dispatch({type:LOAD_GEODATA,payload:{}})
      }else if(response.data.features.length==0){
      alertContext.setalert("No Data Found","danger");
      setLoading(false);
      dispatch({type:LOAD_GEODATA,payload:data})
      }
        else{
       dispatch({type:LOAD_GEODATA,payload:data})
       setTimeout(()=>{
        setLoading(false);
       },3000)
      }

    }

    return (<MapContext.Provider value={{
        loading:state.loading,
        layerLoading:state.layerLoading,
        geodata:state.geodata,
        filter:state.filter,
        distInfo:state.distInfo,
        type:state.type,
        setLayerLoading,
        setLoading,
        loadGeodata,
        setFilter,
        loadDistInfo,
        setType
			}}>
            {props.children}
	</MapContext.Provider>)
}
export default MapState;