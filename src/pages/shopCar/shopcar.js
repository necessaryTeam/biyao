import React,{ Component } from 'react';

import HomeBottom from '../../components/home/common/homeBottom'
import CommonTop from '../../components/shopCar/commonTop'
import ShopCar from '../../components/shopCar/shopCarMain'
import SettleMent from '../../components/shopCar/settleMent'

export default class shopcar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            idx: 0,
        };
        // console.log(this.props)
    }
    componentWillMount(){
        // console.log(this.props.location.state);
        this.setState({
            idx:this.props.location.state.idx?this.props.location.state.idx:2,
        })
    }
    render(){
        let shopBottomIdx = this.state.idx;
        return(
            <div style={{ display:'flex',flexDirection:'column',height:'100%'}}>
                <div style={{ flex:1,overflowX:'hidden' }}>
                    <ShopCar />
                </div>
                <div style={{ height:'50px' }}>
                    <HomeBottom idx={shopBottomIdx}/>
                </div>
            </div>
        )
    }
}

