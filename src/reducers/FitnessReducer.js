import *as types from '../constants/FitnessType'
import ArmsData from '../data/ArmsData.json';


const initalState={
  armDatas:[],
}

function Fitness(state=initalState,action) {

  switch (action.type) {

    case types.ARMS:
      console.log("Fitness  taype is ="+JSON.stringify(ArmsData.arms));

      return{
        ...state,
        armDatas:ArmsData.arms
      }
      break;
    default:
      console.log("Fitness =="+JSON.stringify(state));
      return state;

  }

}

module.exports = Fitness;
