import React from 'react';
import ReactDOM from 'react-dom';
// 引入路由
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
// 公共基础css
import './static/css/base.css';
import './static/font/iconfont.css';
import registerServiceWorker from './registerServiceWorker';





// 引入页面
import Home from './pages/home/xhome';
import Detail from './pages/detail/xdetail';









//redux  Providershi是把store用在所有组件中
import {Provider} from 'react-redux';
// createStore 是创建仓库的方法
import {createStore} from 'redux';

// Store  创建仓库 类似Vuex的 store
const store = createStore((state = {
    count: 0,
    isShowGallery:false,
}, action) => {
  const count = state.count
  switch (action.type) {
  	// 触发的动作（动作名字/触发的暗号）
    case 'isxiejie':
      return Object.assign({}, state, {
      	isShowGallery: action.isShowGallery
      });
    case 'isfuquan':
      return Object.assign({}, state, {
        isShowGallery: action.isShowGallery
      });
    case 'isjiawen':
      return Object.assign({}, state, {
        idxShowMyNav: action.idxShowMyNav
      });
    case 'isjiaming':
      return Object.assign({}, state, {
        idxShowMyNav: action.idxShowMyNav
      });
    default:
      return state
  }
});



ReactDOM.render(
<Router>
  <Provider store={store}>
  	<div>
  		<Route exact path="/" component={Home}/>
  		<Route path="/detail" component={Detail}/>
  	</div>
  </Provider>
</Router>
	, document.getElementById('root'));
registerServiceWorker();
