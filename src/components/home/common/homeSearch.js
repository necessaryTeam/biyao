import React,{ Component } from 'react';

import './homeSearch.scss'
class HomeSearch extends Component {

    render(){
        return(
            <div className='homeSearch'>
                <input type='text' placeholder='请输入您想要的商品' /><i className='iconfont icon-sousuo'></i>
            </div>
        )
    }
}

export default HomeSearch