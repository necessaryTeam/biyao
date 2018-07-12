import React, { Component } from 'react';

import {connect} from 'react-redux';
// css
import './detailFooter.scss'

// 组件 



class XdetailFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        // console.log(this.props)
    }
    render() {
        return (
            <div id="footer">
                <div className="footer-l">
                    <div><i className="iconfont icon-xiaoxi"></i>客服</div>
                    <div><i className="iconfont icon-gouwuche"></i>购物车</div>
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
