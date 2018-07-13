import React, { Component } from 'react';

import {connect} from 'react-redux';

// 组件 

// const requireCommpoent = require.context('../../components/home/common',true,/\.js$/);
// console.log(requireCommpoent.keys())
// console.log(1111)

import HomeBottom from '../../components/home/common/homeBottom'
import HomeSearch from '../../components/home/common/homeSearch'
import Channel from '../../components/home/channel'
import HomeCarousel from '../../components/home/common/homeCarousel'
import HomeGuarantee_g from '../../components/home/homeGuarantee_g'
import HomeOperate_g from '../../components/home/homeOperate_g'
import HomeSelectedTopic from '../../components/home/homeSelectedTopic'
import HomeCommend_info from '../../components/home/homeCommend_info'
import ToTop from '../../components/toTop/hometotop'


class Xhome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        // console.log(this.props)
    }
    componentDidMount(){
    	var settime=Date.parse(window.localStorage.isloginsettime)
    	var iday=1000*60*24*7;
    	if(Date.parse(new Date())-settime>iday){
    		localStorage.removeItem("islogin")
    		console.log("信息已过期")
    	}   
    }
    render() {
        return (
            <div style={{ display:'flex',flexDirection:'column',height:'100%'}}>
                <div style={{ height:'40px'}}>
                    <HomeSearch />
                </div>
                <Channel />
                <div className="zhomeCenter" style={{ flex:1,overflowX:'hidden' }}>
                    <HomeCarousel />
                    <HomeGuarantee_g />
                    <HomeOperate_g />
                    <HomeSelectedTopic />
                    <HomeCommend_info />
                    <ToTop />
                </div>
                <div style={{ height:'50px'}}>
                    <HomeBottom/>
                </div>
            </div>
        );
    }
}

export default Xhome;
