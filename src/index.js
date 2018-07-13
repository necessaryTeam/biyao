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
import Classify from './pages/classify/classify';
import Fenlei from './pages/fenlei/fenlei';
import ShopCar from './pages/shopCar/shopcar';
import FenleiList from './pages/fenleilist/FenleiList';
import ShopList from './pages/shopList/shoplist';






//redux  Providershi是把store用在所有组件中
import {Provider} from 'react-redux';
// createStore 是创建仓库的方法
import {createStore} from 'redux';

// Store  创建仓库 类似Vuex的 store
const store = createStore((state = {
    count: 0,
    isShowGallery:false,
    gallertImg:[],
    showGalleryNum:0,
    allCarGoodsNum:0,
    fenleiIdx: 0,
    lightHeaderIdx:0,
    allPrice:0,
    realAllSelect:false,
    ToTopOpacity:0,
    detailChooseBtn:1,
    SizeColorChooseBottom:"-440px",
    isShowChoose:false,
}, action) => {
  const count = state.count
  switch (action.type) {
  	// 触发的动作（动作名字/触发的暗号）
    case 'allPriceCompute':
      return Object.assign({}, state, {
          allPrice: action.allPrice,
      });
    case 'allSelect':
      return Object.assign({}, state, {
          realAllSelect: action.realAllSelect
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
              gallertImg: action.gallertImg,
              showGalleryNum:action.showGalleryNum
          });
      case 'lightHeader':
          return Object.assign({}, state, {
              lightHeaderIdx: action.lightHeaderIdx
          });
      case 'showToTop':
          return Object.assign({}, state, {
              ToTopOpacity: action.ToTopOpacity
          });
      case 'ShowWhoBtnNum':
          return Object.assign({}, state, {
              detailChooseBtn: action.detailChooseBtn
          });
      case 'ShowChoose':
          return Object.assign({}, state, {
              isShowChoose:action.isShowChoose

          });
      case 'ChooseBottom0':
          return Object.assign({}, state, {
              SizeColorChooseBottom:action.SizeColorChooseBottom

          });
      case 'HideChoose':
          return Object.assign({}, state, {
              isShowChoose:action.isShowChoose
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
        <Route path="/classify" component={Classify}/>
      <Route path="/fenlei" component={Fenlei}/>
      <Route path='/shopcar' component={ShopCar}/>
      <Route path='/fenleilist' component={FenleiList}/>
      <Route path='/shoplist' component={ShopList}/>
  	</div>
  </Provider>
</Router>
	, document.getElementById('root'));
registerServiceWorker();
