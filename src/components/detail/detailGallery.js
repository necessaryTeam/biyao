import React , { Component } from 'react';

import {connect} from 'react-redux';
//css
import './detailGallery.scss'
import '../../static/css/swiper.min.css';
//jq
import $ from 'jquery';
//引入Swiper
import Swiper from 'swiper'



class Xgallery extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        var swiper = new Swiper('#swiperGallery', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type:'fraction'
            },
            autoplay: false

        });

    }
    render() {
        return (
            <div className="D-gallery" onClick={this.props.hideGalleryPic.bind(this)} style={{display:this.props.isShowGallery?"block":"none"}}>
                <div className="galleryImg">
                    <div className="swiper-container" id="swiperGallery">
                        <div className="swiper-wrapper">
                            {
                                (function(self){
                                    return self.props.gallertImg.map(function(item,idx){
                                        return <div className="swiper-slide"  key={idx}><img src={item}/></div>
                                    })
                                })(this)
                            }
                        </div>
                        <div className="swiper-pagination"></div>
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


