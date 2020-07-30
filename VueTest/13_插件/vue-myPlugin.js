(function (window) {
  // 需要向外暴露的插件对象
  const MyPlugin = {}
  // 插件对象必须要有一个install()方法
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      console.log('Vue函数对象的myGlobalMethod()')
    }

    // 2. 添加全局资源
    Vue.directive('my-directive', function (el, binding) {
      el.textContent = 'my-directive----' + binding.value
    })

    // 4. 添加实例方法（用$区分实例对象方法和上面的函数对象方法）
    Vue.prototype.$myMethod = function () {
      console.log('Vue实例对象的方法，vm.$myMethod()')
    }
  }
  window.MyPlugin = MyPlugin
})(window)
