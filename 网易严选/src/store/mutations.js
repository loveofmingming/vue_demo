import {RECEIVE_FOCUS_LIST} from "./mutation-types";
import {RECEIVE_CATEGORYL1_LIST} from "./mutation-types";
import {RECEIVE_HEADCATE_LIST} from "./mutation-types";
import {RECEIVE_HOME,RECEIVE_INDEX} from "./mutation-types";




export default {
  [RECEIVE_FOCUS_LIST] (state, {focusList}){
    state.focusList = focusList
  },
  [RECEIVE_CATEGORYL1_LIST] (state, {categoryL1List}){
    state.categoryL1List = categoryL1List
    // state.cateList = cateList
  },
  [RECEIVE_HEADCATE_LIST] (state, {headCateList}){
    state.headCateList = headCateList
  },
  [RECEIVE_HOME] (state, {home}){
    state.home = home
  },
  // [RECEIVE_INDEX] (state,{currentIndex}){
  //   state.currentIndex = currentIndex
  //   console.log(currentIndex,'6666')
  // }

}
