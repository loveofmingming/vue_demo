import {RECEIVE_FOCUS_LIST} from "./mutation-types";
import {RECEIVE_CATEGORYL1_LIST} from "./mutation-types";
import {RECEIVE_HEADCATE_LIST} from "./mutation-types";
import {RECEIVE_HOME,RECEIVE_INDEX} from "./mutation-types";


import {reqFocuslist} from "../api/index";
import {reqCategoryL1List} from "../api/index"
import {reqHeadCateList} from "../api/index"
import {reqHome} from "../api/index"


export default {
  async getFocusList ({commit},cb){
    const result = await reqFocuslist()
    if (result.code ===0 ){
      const focusList = result.data
      commit(RECEIVE_FOCUS_LIST,{focusList})
      cb && cb()
    }
  },
  async getCategoryL1List ({commit,state},cb){

    const result = await reqCategoryL1List()
    if (result.code ===0 ){
      const categoryL1List = result.data.categoryL1List

      console.log(categoryL1List)
      commit(RECEIVE_CATEGORYL1_LIST,{categoryL1List})
      cb && cb()
    }
  },

  async getHeadCateList ({commit},cb){
    const result = await reqHeadCateList()
    if (result.code ===0 ){
      const headCateList = result.data

      commit(RECEIVE_HEADCATE_LIST,{headCateList})
      cb && cb()
    }
  },
  async getHome ({commit}){
    const result = await reqHome()
    if (result.code ===0 ){
      const home = result.data

      commit(RECEIVE_HOME,{home})

    }
  }

}
