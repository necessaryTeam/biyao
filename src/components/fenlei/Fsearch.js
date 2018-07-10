import React, { Component } from 'react';

import {connect} from 'react-redux';
import './css/Fsearch.scss';

// 组件 



class Fsearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        // console.log(this.props)
    }
    render() {
        return (
            <div className="fsearchTop">
                <div className="searchBox">
                    <i className="iconfont icon-sousuo"></i>
                    <input type="text" placeholder="请输入您想要的商品" />
                </div>
            </div>
        );
    }
}

export default Fsearch;
 
