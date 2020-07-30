function Watcher(vm, exp, cb) {
  this.cb = cb;  // callback
  this.vm = vm;
  this.exp = exp; // 表达式
  this.depIds = {};  // {0: d0, 1: d1, 2: d2}包含所有相关的dep的容器对象
  this.value = this.get(); // 保存表达式的初始值
}

Watcher.prototype = {
  update: function () {
    this.run();
  },
  run: function () {
    // 得到最新的值
    var value = this.get();
    // 得到旧值
    var oldVal = this.value;
    // 如果不相同
    if (value !== oldVal) {
      this.value = value;
      // 调用回调函数更新对应的界面
      this.cb.call(this.vm, value, oldVal);
    }
  },
  addDep: function (dep) {
    // 判断dep与watcher的关系是否已经建立
    if (!this.depIds.hasOwnProperty(dep.id)) {
      // 将watcher添加到dep，用于更新
      dep.addSub(this);
      // 将dep添加到watcher，用于防止重复建立关系
      this.depIds[dep.id] = dep;
    }
  },
  get: function () {
    // 给dep指定当前的watcher
    Dep.target = this;
    // 获取当前表达式的值, 内部会调用data属性的get（建立dep与watcher的关系）
    var value = this.getVMVal();
    // 去除dep中指定的当前watcher
    Dep.target = null;
    return value;
  },
  // 得到表达式的值
  getVMVal: function () {
    var exp = this.exp.split('.');
    var val = this.vm._data; // data对象
    exp.forEach(function (k) {
      val = val[k]; // 触发表达式中有的属性的get（建立属性对应的dep与当前watcher的关系）
    });
    return val;
  }
};
/*

const obj1 = {id: 1}
const obj12 = {id: 2}
const obj13 = {id: 3}
const obj14 = {id: 4}

const obj2 = {}
const obj22 = {}
const obj23 = {}
// 双向1对1
// obj1.o2 = obj2
// obj2.o1 = obj1

// obj1: 1:n
obj1.o2s = [obj2, obj22, obj23]

// obj2: 1:n
obj2.o1s = {
  1: obj1,
  2: obj12,
  3: obj13
}
*/

