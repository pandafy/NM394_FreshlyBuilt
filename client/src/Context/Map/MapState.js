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
    SET_TYPE,
    GET_HOTSPOT,
    DIST_INFO_LOADING
} from "../types"

const MapState=(props)=>{
    const initialState={
      loading:false,
      geodata:{},
      type:"NO2",
      layerLoading:true,
      distInfoLoading:false,
      filter:{
        week:1,
        month:"January",
        year:2020,
        pollutant:"CO"
      },
      hotspot:[],
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

    const loadDistInfo=async(lat,long)=>{
      const response=await axios.get(`/api/distinfo?lat=${lat}&long=${long}`)
      dispatch({type:LOAD_DIST_INFO,payload:response.data});
      set_distInfoLoading(false);
    }

    const setType=(t)=>{
    dispatch({type:SET_TYPE,payload:t});
    }

    const loadGeodata=async(week,month,year,type)=>{
      setLayerLoading(true);
      console.log("hgfsdhgfg")
      setLoading(true);
      const response=await axios.get('/api?week='+week+"&month="+month+"&year="+year+"&type="+type)
      const data=JSON.parse(response.data);
      console.log(response);
      if(data==="Invalid Request"){
      alertContext.setalert(data,"danger");
      setLoading(false);
      dispatch({type:LOAD_GEODATA,payload:{}})
      }else if(response.data.features.length==0){
      alertContext.setalert("No Data Found","danger");
      setLoading(false);
      dispatch({type:LOAD_GEODATA,payload:data})
      console.log(state.geodata)
      }
        else{
       dispatch({type:LOAD_GEODATA,payload:data})
       setLayerLoading(false)
       setTimeout(()=>{
        setLoading(false);
       },3000)
      }

    }
    const get_hotspot=async()=>{
      const response=await axios.get("/api/hotspot");
      dispatch({type:GET_HOTSPOT,payload:response.data})
      console.log(state.distInfo)
    }
    const set_distInfoLoading=(v)=>{
      dispatch({type:DIST_INFO_LOADING,payload:v})
    }

    return (<MapContext.Provider value={{
        loading:state.loading,
        layerLoading:state.layerLoading,
        geodata:state.geodata,
        filter:state.filter,
        distInfo:state.distInfo,
        type:state.type,
        hotspot:state.hotspot,
        distInfoLoading:state.distInfoLoading,
        set_distInfoLoading,
        setLayerLoading,
        setLoading,
        loadGeodata,
        setFilter,
        loadDistInfo,
        setType,
        get_hotspot
			}}>
            {props.children}
	</MapContext.Provider>)
}
export default MapState;