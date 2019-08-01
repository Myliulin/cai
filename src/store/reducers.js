import {ADD_STU,DEL_STU} from './actionTypes'
// 数据管理
let stroreDoat = {
    username: '',
    stulist: []
}
export default (state = stroreDoat, action) => {
    //不能直接修改redux 里面的数据
    let newStoreData = {};
    switch (action.type) {
        case ADD_STU:
            //对象深度赋值
            newStoreData = JSON.parse(JSON.stringify(state));
            newStoreData.stulist.push(action.value);
            return newStoreData;
            break;
        case DEL_STU:
            newStoreData = newStoreData = JSON.parse(JSON.stringify(state));
            newStoreData.stulist.splice(action.value, 1);
            return newStoreData;
            break;
         default: break;
    }


    return state
}