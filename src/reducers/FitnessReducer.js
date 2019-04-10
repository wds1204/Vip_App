import *as types from '../constants/FitnessType'
import Datas from '../data/FitnessArtsData.json';


const initalState={
  artDatas:[],
}

function Fitness(state=initalState,action) {

  switch (action.type) {

    case types.ARMS:
      return{
        ...state,
        artDatas:Datas.arms
      }
      break;
    case types.SIXPACK:
      return{
        ...state,
        artDatas:Datas.sixpack
      }
      break;
    default:
      console.log("Fitness =="+JSON.stringify(state));
      return state;

  }

}

module.exports = Fitness;
