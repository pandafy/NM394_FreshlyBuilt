import {MAP_LOADING,LAYER_LOADING, LOAD_GEODATA,SET_FILTER, LOAD_DIST_INFO, SET_TYPE} from '../types'

export default (state,action)=>{
  switch(action.type){
      case MAP_LOADING:
          return {
              ...state,
              loading:action.payload
          }
      case LAYER_LOADING:
        return{
          ...state,
          layerLoading:action.payload
        }
      case LOAD_GEODATA:
        return{
          ...state,
          geodata:action.payload,
          layerLoading:false
        }
      case SET_FILTER:
        return{
          ...state,
          filter:action.payload
        }
      case SET_TYPE:
        return{
          ...state,
          type:action.payload
        }
      case LOAD_DIST_INFO:
        return{
          ...state,
          distInfo:action.payload
        }
      default:
       console.log("default")
        return state;
  }
}