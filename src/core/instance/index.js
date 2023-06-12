/*
 * @Date: 2019-02-04 23:57:04
 * @LastEditors: 李鹏玺 2899952565@qq.com
 * @LastEditTime: 2023-06-12 17:49:12
 * @FilePath: /vue-2.6.0/src/core/instance/index.js
 * @description: 构造函数的入口文件
 */
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 构造函数的入口
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

// init方法 初始化
initMixin(Vue)
// 响应式
stateMixin(Vue)
// eventbus
eventsMixin(Vue)
// 生命周期钩子
lifecycleMixin(Vue)
// render函数 nextTick
renderMixin(Vue)

export default Vue
