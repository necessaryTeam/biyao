import React,{ Component } from 'react';
import {Link,hashHistory} from 'react-router-dom';

import './homeBottom.scss'
class HomeBottom extends Component {
    constructor(props){
        super(props);
        this.state = {
            homeBottomItem:[
                {name:'首页',icon:'iconfont icon-home-solid',url:'/'},
                {name:'分类',icon:'iconfont icon-fenlei',url:'/fenlei'},
                {name:'购物车',icon:'iconfont icon-gouwuche',url:'/shopcar'},
                {name:'我的',icon:'iconfont icon-wode',url:'/login'}
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
    componentWillMount(){
        // console.log('zjw'+this.props.idx)
        this.setState({
            active: this.props.idx?this.props.idx:0,
        })
    }

    render(){
        const { homeBottomItem } = this.state;
        return(
            <div id='homeBottom'>
                <div className='homeBottom'>
                    {
                        homeBottomItem.map((item,index)=>
                            <Link to={{pathname:item.url,state:{idx:index}}} key={ index } className={ this.state.active === index?'active item':'item'}>
                                <i className={ item.icon }></i><p>{ item.name }</p>
                            </Link>
                            )
                    }
                </div>
            </div>

        )
    }
}

export default HomeBottom