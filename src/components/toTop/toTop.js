import React, { Component } from 'react';

import {connect} from 'react-redux';
// css
import './toTop.scss';

// 组件



class XtoTop extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        // console.log(this.props)
    }
    componentDidMount(){
        window.addEventListener('scroll',this.props.rollToTop)
        //回到头部
        document.querySelector("#ToTop").onclick=function(){
            var time = setInterval(function(){
                var scrollY = window.scrollY;
                var speed = scrollY/5;
                window.scrollBy(0,-speed)

                if(window.scrollY<=0 || speed<2){
                    clearInterval(time);
                    window.scrollTo(0,0);
                }

            },20)
        };
    }
    render() {
        return (
            <div id="ToTop" style={{opacity:this.props.ToTopOpacity}}>
                <i className="iconfont icon-xiala"></i>
            </div>
        );
    }
}

export default connect((state) => {
    // 他把store的state全部放到该组件的props里面
    return state
}, (dispatch) => {
    return {
            // 回到顶部
        rollToTop:()=>{
            var fatherTop = parseInt(window.scrollY);
            if(fatherTop >= window.innerHeight){
                dispatch({
                    type: 'showToTop',
                    ToTopOpacity:1
                })
            }else{
                dispatch({
                    type: 'showToTop',
                    ToTopOpacity:0
                })
            }
        }
    }
})(XtoTop);
