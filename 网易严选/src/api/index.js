


import ajax from './ajax'

export const reqFocuslist = ()=>ajax('/focusList')
export const reqCategoryL1List = ()=>ajax('/category')
export const reqHeadCateList = ()=>ajax('/headCateList')
export const reqHome = ()=>ajax('/home')

///focusList 指向数据库接口

/*获取短信验证码
* */

export const reqSendCode = tele => ajax('./api/sendcode',(tele))

/*短信验证码登录
* */
export const reqMsgLogin = (tele,code) => ajax('./api/login_sms',(tele,code))

/*用户名邮箱登录
* */

export const reqPwdLogin = (name,pwd) => ajax('./api/login_sms',{name,pwd},'POST')
