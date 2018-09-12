//使用mock.js提供mock数据接口
import Mock from 'mockjs'
import Category from './data/category.json'
import Home from './data/home.json'
import Topic from './data/topic.json'

Mock.mock('/category',{code:0,data:Category})
Mock.mock('/home',{code:0,data:Home})
Mock.mock('/topic',{code:0,data:Topic})
Mock.mock('/focusList', {code: 0, data: Home.focusList})
Mock.mock('/headCateList', {code: 0, data: Home.headCateList})

