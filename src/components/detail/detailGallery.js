import React , { Component } from 'react';

import {connect} from 'react-redux';
//css
import './detailGallery.scss'
import '../../static/css/swiper.min.css';
//jq
import $ from 'jquery';
//引入Swiper
import Swiper from 'swiper'
import ReactSwipe from 'react-swipe';


class Xgallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            showPicNum:null
        }
    }
    componentDidMount() {
        var self = this;
        var mySwiper2 = new Swiper('#swiper2', {
            freeMode : false,//是否一直滑动  false为一张张的滑
            freeModeMomentum : true,
            loop:false,//是否无缝
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            initialSlide:self.state.showPicNum,//显示点击时的那样图片
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            }
        })


    }
    componentWillReceiveProps (){
        var newNum = this.props.showGalleryNum
        this.setState({
            showPicNum:newNum
        })
    }
    render() {
        return (
            <div className="D-gallery" onClick={this.props.hideGalleryPic.bind(this)} style={{display:this.props.isShowGallery?"block":"none"}}>
                <div className="galleryImg">
                    <div className="swiper-container" id="swiper2">
                        <div className="swiper-wrapper">
                            {
                            (function(self){
                                return self.props.gallertImg.map(function(item,idx){
                                    return <div className="swiper-slide"  key={idx}><img src={item}/></div>
                                })
                            })(this)
                            }
                        </div>
                        <div className="swiper-pagination galleryPage"></div>
                    </div>

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
        hideGalleryPic: () => {
            //可以触发多个
            dispatch({
                type: 'hideGallery',
                isShowGallery:false,
                gallertImg:[]
            })
        }
    }
})(Xgallery);


$(function($){
    var windowWidth = document.body.offsetWidth;
    $(".galleryImg").css({width:windowWidth,height:windowWidth});
    $(".galleryImg img").css({width:windowWidth,height:windowWidth});
})


