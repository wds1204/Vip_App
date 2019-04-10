'use strict';

import *as types from '../constants/FitnessType'

function armFitness(){//手臂
  return {

    type:types.ARMS

  }
}
function sixPackFitness(){//腹
  return{
    type:types.SIXPACK
  }
}
function pecsFitness(){//胸
  return{
    type:types.PECTORALIS
  }
}
function latisFitness(){//背阔肌
  return{
    type:types.LATISSIMUS
  }
}
function TrapFitness(){//斜方肌（肩）
  return{
    type:types.TRAPEZIUS
  }
}
function LegFitness(){
  return{
    type:types.LEGMUSCLES
  }
}

module.exports={
  armFitness,
  sixPackFitness,
  pecsFitness,
  latisFitness,
  TrapFitness,
  LegFitness,
}
