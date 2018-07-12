import React, { Component } from 'react';

import {connect} from 'react-redux';
// css
import './detailHeader.scss'

// 组件



class Xheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerList:[{title:"商品",id:"#commodity"},{title:"评价",id:"#comment"},{title:"详细",id:"#detail"},{title:"推荐",id:"#recommend"}]
        };
        // console.log(this.props)
    }
    render() {
        return (
            <div id="header">
                <div className="back">
                    <a href="http://localhost:3000/classify" style={{color:"#7D7D7D"}}><i className="iconfont icon-houtui"></i></a>
                </div>
                <div className="content">
                    <ul>
                        {
                            (function(self){
                                return self.state.headerList.map(function(item,idx){
                                    return <li key={idx}><a className={self.props.lightHeaderIdx==idx?"light":""}
                                        href={item.id}>{item.title}</a></li>
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
