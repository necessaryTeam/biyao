import React,{ Component } from 'react';

import './homeBottom.scss'
class HomeBottom extends Component {
    constructor(props){
        super(props);
        this.state = {
            homeBottomItem:[
                {name:'首页',icon:'iconfont icon-home-solid'},
                {name:'分类',icon:'iconfont icon-fenlei'},
                {name:'购物车',icon:'iconfont icon-gouwuche'},
                {name:'我的',icon:'iconfont icon-wode'}
                ],
            active:0
        }
        this.toActive = this.toActive.bind(this);
    }

    toActive(e,index){
        let { active } = this.state;
        active = index;
        this.setState({ active })
    }

    render(){
        const { homeBottomItem } = this.state;
        return(
            <div id='homeBottom'>
                <ul className='homeBottom'>
                    {
                        homeBottomItem.map((item,index)=>
                            <li key={ index }  className={ this.state.active === index?'active item':'item'} onClick={ (e)=>this.toActive(e,index)}><i className={ item.icon }></i><a className={ this.state.active === index?'active':''}>{ item.name }</a></li>)
                    }
                </ul>
            </div>

        )
    }
}

export default HomeBottom