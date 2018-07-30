import plus from "./plus"
const plugin = {
    install (Vue) {
        Vue.prototype.$getPlus = plus;
    }
}

export default plugin
export const install = plugin.install