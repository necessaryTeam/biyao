import React, { Component } from 'react';

import {connect} from 'react-redux';
// css
import './detailFooter.scss'

// 组件 



class Xdetail extends Component {
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
                    <div className="buy-shopcar">加入购物车</div>
                    <div className="buy-now">立即购买</div>
                </div>
            </div>
        );
    }
}

export default Xdetail;
