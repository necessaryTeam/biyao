import React, { Component } from 'react';

import {connect} from 'react-redux';
import './css/leftnav.scss';

// 组件 
import Swiper from 'swiper';


class Leftnav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navName:['经典男装','潮流女装','光学眼镜','内衣配饰','男女鞋靴','箱包出行','3C数码']
        };
        // console.log(this.props)
    }
    componentDidMount() {
        var swiper =  new Swiper('.swiper-container', {
            direction: 'vertical',
            freeMode: true,
            slidesPerView: 7,
            height: 280,
        })
    }
    render() {
        return (
            <div className="leftnav swiper-container">
                <div className="swiper-wrapper">
                    {(function(self){
                        return self.state.navName.map(function (item,idx){
                                return <div className={idx===self.props.fenleiIdx?'checked swiper-slide':'swiper-slide'}  key={idx} onClick={self.props.fenleiNavChecked.bind(this,idx)}>{item}</div>
                            })
                    })(this)}
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    //他把store的state全部放到该组件的props里面
    return state
}, (dispatch) => {
    return {
        fenleiNavChecked: (cur) => {
            //可以触发多个
            // console.log(cur)
            dispatch({
                type: 'fenleiNavChecked',
                fenleiIdx: cur,
            })
        }
    }
})(Leftnav);
 
