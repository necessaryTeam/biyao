import React, { Component } from 'react';

import {connect} from 'react-redux';
// css
import './detailHeader.scss'

// 组件



class Xheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerList:["商品","评价","详细","推荐"]
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
                        {
                            (function(self){
                                return self.state.headerList.map(function(item,idx){
                                    return <li key={idx} className={self.props.lightHeaderIdx==idx?"light":""}>{item}</li>
                                })
                            })(this)
                        }
                    </ul>
                </div>
                <div className="more">
                    <i className="iconfont icon-sandian"></i>
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

    }
})(Xheader);
