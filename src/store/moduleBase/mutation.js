/*
直接更新state的多个方法的对象
 */
import {
    GETCURFOOTERNUM
} from './mutation-types';

const mutation = {
    [GETCURFOOTERNUM]: (state, index) => {
        state.curFooterNum = index;
    }
    // [RECEIVE_NEWHOUSE](state, {newHouse}) {
    //     state.newHouse = newHouse
    // },
};
export default mutation;
