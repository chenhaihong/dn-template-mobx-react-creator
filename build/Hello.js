import { observable, computed, autorun } from 'mobx';

export default class Hello  {
  // 监听属性示例
  @observable id = 0;
  @observable username = '';

  // 计算属性示例
  @computed get pure_username() {
    const reg = /s+/ig;
    return this.username.replace(reg, '');
  } 
};

// 衍生：自动运行函数示例
autorun(() => {
  const name = Hello .username;
  console.log(name);
});