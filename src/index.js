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
<<<<<<< HEAD
import Fenlei from './pages/fenlei/fenlei';
=======
import ShopCar from './pages/shopCar/shopcar'
>>>>>>> 6c4f899e3916beee4ca8f8c5c9efc476866f5101









//redux  Providershi是把store用在所有组件中
import {Provider} from 'react-redux';
// createStore 是创建仓库的方法
import {createStore} from 'redux';

// Store  创建仓库 类似Vuex的 store
const store = createStore((state = {
    count: 0,
    isShowGallery:false,
    gallertImg:[],
    fenleiIdx: 0,
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
    //分类页面左侧点击高亮函数
    case 'fenleiNavChecked':
      return Object.assign({}, state, {
        fenleiIdx: action.fenleiIdx
      });
    case 'hideGallery':
      return Object.assign({}, state, {
          isShowGallery: action.isShowGallery,
          gallertImg: action.gallertImg
      });
      case 'showGallery':
          return Object.assign({}, state, {
              isShowGallery: action.isShowGallery,
              gallertImg: action.gallertImg
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
<<<<<<< HEAD
      <Route path="/fenlei" component={Fenlei}/>
=======
        <Route path='/shopcar' component={ShopCar}/>
>>>>>>> 6c4f899e3916beee4ca8f8c5c9efc476866f5101
  	</div>
  </Provider>
</Router>
	, document.getElementById('root'));
registerServiceWorker();
