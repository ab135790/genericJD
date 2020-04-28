import state from './moduleBase/state';
import getters from './moduleBase/getters';
import mutation from './moduleBase/mutation';
import action from './moduleBase/actions';
export default {
    namespaced: true,
    state,
    getters,
    mutation,
    action
};
