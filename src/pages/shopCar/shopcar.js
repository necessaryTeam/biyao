import React,{ Component } from 'react';

import HomeBottom from '../../components/home/common/homeBottom'
import CommonTop from '../../components/shopCar/commonTop'
import ShopCar from '../../components/shopCar/shopCarMain'
import SettleMent from '../../components/shopCar/settleMent'

export default class shopcar extends Component{

    render(){
        return(
            <div style={{ display:'flex',flexDirection:'column',height:'667px'}}>
                <CommonTop style={{ height:'42px' }}/>
                <ShopCar />
                <SettleMent />
                <HomeBottom style={{ height:'50px' }}/>
            </div>
        )
    }
}