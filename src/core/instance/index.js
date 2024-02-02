/*
 * @Date: 2019-02-04 23:57:04
 * @LastEditors: Carlos 2899952565@qq.com
 * @LastEditTime: 2023-11-20 10:49:42
 * @FilePath: /vue-2.6/src/core/instance/index.js
 * @description: 构造函数的入口文件
 */
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// 构造函数的入口
function Vue(options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
// vm 的 _init() 方法，初始化 vm
initMixin(Vue)
// 响应式 $data/$props/$set/$delete/$watch
stateMixin(Vue)
// eventbus $on/$once/$off/$emit
eventsMixin(Vue)
// 生命周期钩子 _update/$forceUpdate/$destroy
lifecycleMixin(Vue)
// render函数 $nextTick/render
renderMixin(Vue)

export default Vue
