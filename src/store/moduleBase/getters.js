/*
包含多个基于state的getter计算属性的对象
 */
const getters = {
    getCurNav: state => { // 是否显示底部菜单
        return state.curNav;
    },
    getCurNavNum: state => { // 当前底部菜单索引
        return state.curNavNum;
    }
};
export default getters;
