## 初始化

入口函数：vue-2.6.0/src/core/instance/index.js

```javascript
// 构造函数的入口
function Vue(options) {
  if (process.env.NODE_ENV !== "production" && !(this instanceof Vue)) {
    warn("Vue is a constructor and should be called with the `new` keyword");
  }
  this._init(options);
}

// vm 的 _init() 方法，初始化 vm
initMixin(Vue);
// 响应式 $data/$props/$set/$delete/$watch
stateMixin(Vue);
// eventbus $on/$once/$off/$emit
eventsMixin(Vue);
// 生命周期钩子 _update/$forceUpdate/$destroy
lifecycleMixin(Vue);
// render函数 $nextTick/render
renderMixin(Vue);
```

### initMixin

Vue构造函数原型上增加方法： _init

```
export function initMixin (Vue: Class<Component>) {
  Vue.prototype._init = function (options?: Object) {
    // new Vue 的实例对象
    const vm: Component = this
    // a uid
    vm._uid = uid++

    let startTag, endTag

    // 如果是 Vue 实例不需要被 observe
    vm._isVue = true
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm)
    } else {
      vm._renderProxy = vm
    }
    // expose real self
    vm._self = vm
    // vm 的生命周期相关变量初始化 $children/$parent/$root/$refs
    initLifecycle(vm)
    // vm 的事件监听初始化, 父组件绑定在当前组件上的事件
    initEvents(vm)
    // vm 的编译render初始化  $slots/$scopedSlots/_c/$createElement/$attrs/$listeners
    initRender(vm)
    // beforeCreate 生命钩子的回调
    callHook(vm, 'beforeCreate')
    // 把 inject 的成员注入到 vm 上
    initInjections(vm) // resolve injections before data/props
    // 初始化状态 vm 的 _props/methods/_data/computed/watch
    initState(vm)
    // 初始化 provide
    initProvide(vm) // resolve provide after data/props
    // created 生命钩子的回调
    callHook(vm, 'created')

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`vue ${vm._name} init`, startTag, endTag)
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}
```



## 收获

### 1.构造函数声明只让 new 加判断

```
function Test(){
    if(!(this instanceof Test)){
        console.log('[Test warn]:Test is a constructor and should be called with the `new` keyword')
    }
}
```
