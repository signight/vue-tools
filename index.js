import Cell from '../components/cell'
import Icon from '../components/icon'
import Swipe from '../components/swipe'
import Alert from '../components/alert'
import Modal from '../components/modal'
import Popup from '../components/popup'
import Toast from '../components/toast'
import Videos from '../components/video'
import Layout from '../components/layout'
import Headers from '../components/header'
import Loading from '../components/loading'
import Confirm from '../components/confirm'
import Infinite from '../components/infinite'
import Validator from '../components/validator'

import wx from '../plugins/wx'
import env from '../plugins/env'
import ajax from '../plugins/ajax'
import alert from '../plugins/alert'
import toast from '../plugins/toast'
import confirm from '../plugins/confirm'
import loading from '../plugins/loading'
import eventBus from '../plugins/eventBus'

function plugin(Vue) {
    if(plugin.installed) {
        return
    }

    for(let key of Object.keys(plugin.plugins)) {
        Vue.use(plugin.plugins[key])
    }

    for(let key of Object.keys(plugin.components)) {
        Vue.component(key, plugin.components[key])
    }
}

plugin.plugins = {
    wx,
    env,
    ajax,
    alert,
    toast,
    confirm,
    loading,
    eventBus
}
plugin.components = {
    Cell,
    Icon,
    Alert,
    Modal,
    Popup,
    Swipe,
    Toast,
    Videos,
    Layout,
    Headers,
    Loading,
    Confirm,
    Infinite,
    Validator
}

if(typeof window !== 'undefined' && window.Vue){
    window.Vue.use(plugin)
}

module.exports = plugin
