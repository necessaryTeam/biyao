import React, { Component } from 'react';
import {Link,hashHistory} from 'react-router-dom';

import {connect} from 'react-redux';
// css
import './detailFooter.scss'

// 组件 



class XdetailFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CarGoodsTotal:0
        };
        // console.log(this.props)
    }
    componentDidMount(){

        var goodList = JSON.parse(window.localStorage.getItem("shopCar"));
        if(goodList!==null){
                var total = 0;
                goodList.forEach((item)=>{
                    total += item.sum
                })
                this.setState({
                    CarGoodsTotal:total
                })
        }


    }
    render() {
        return (
            <div id="footer">
                <div className="footer-l">
                    <div><a href="#"><i className="iconfont icon-xiaoxi"></i><span>客服</span></a></div>
                    <div><Link to={{pathname:'/shopcar',state:{idx:2}}} ><i className="iconfont icon-gouwuche"></i><span>购物车</span><em>{this.state.CarGoodsTotal}</em></Link></div>
                    {/*<div><a href="http://localhost:3000/shopcar"><i className="iconfont icon-gouwuche"></i><span>购物车</span><em>{this.state.CarGoodsTotal}</em></a></div>*/}
                </div>
                <div className="footer-r">
                    <div className="buy-shopcar" onClick={this.props.isShowChooseDiv.bind(this)}>加入购物车</div>
                    <div className="buy-now" onClick={this.props.isShowChooseDiv.bind(this)}>立即购买</div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    // 他把store的state全部放到该组件的props里面
    return state
}, (dispatch) => {
    return {
        isShowChooseDiv: () => {
            //可以触发多个
            dispatch({
                type: 'ShowChoose',
                isShowChoose:true
            });
            dispatch({
                type: 'ShowWhoBtnNum',
                detailChooseBtn:1
            });
            setTimeout(()=>{
                dispatch({
                    type: 'ChooseBottom0',
                    SizeColorChooseBottom:"0"
                })
            },50)
        }
    }
})(XdetailFooter);
