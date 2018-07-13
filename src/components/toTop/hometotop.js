import React, { Component } from 'react';

import {connect} from 'react-redux';
// css
import './toTop.scss';

// 组件



class HomeToTop extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        // console.log(this.props)
    }
    componentDidMount(){
        var curBox = document.querySelector('.zhomeCenter')
        curBox.addEventListener('scroll',this.props.rollToTop)
        //回到头部
        document.querySelector("#ToTop").onclick=function(){
            var time = setInterval(function(){
                var scrollY = curBox.scrollTop;
                var speed = scrollY/5;
                curBox.scrollBy(0,-speed)

                if(curBox.scrollTop<=0 || speed<2){
                    clearInterval(time);
                    curBox.scrollTo(0,0);
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
            var curBox = document.querySelector('.zhomeCenter')
            var fatherTop = parseInt(curBox.scrollTop);
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
})(HomeToTop);
