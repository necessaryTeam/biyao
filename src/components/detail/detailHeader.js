import React, { Component } from 'react';

import {connect} from 'react-redux';
// css
import './detailHeader.scss'

// 组件



class Xheader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        // console.log(this.props)
    }
    render() {
        return (
            <div id="header">
                <div className="back">
                    <i className="iconfont icon-houtui"></i>
                </div>
                <div className="content">
                    <ul>
                        <li>商品</li>
                        <li>评价</li>
                        <li>详细</li>
                        <li>推荐</li>
                    </ul>
                </div>
                <div className="more">
                    <i className="iconfont icon-sandian"></i>
                </div>
            </div>
        );
    }
}

export default Xheader;
