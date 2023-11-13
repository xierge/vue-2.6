## 初始化

入口函数：vue-2.6.0/src/core/instance/index.js

```javascript
// 构造函数的入口
function Vue (options) {
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
```



## 收获

### 1.构造函数声明只让new加判断

```
function Test(){
    if(!(this instanceof Test)){
        console.log('[Test warn]:Test is a constructor and should be called with the `new` keyword')
    }
}
```





