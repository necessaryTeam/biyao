import React, { Component } from 'react';

import {connect} from 'react-redux';

import './fenlei.scss';

// 组件 
import Fsearch from '../../components/fenlei/Fsearch';
import Leftnav from '../../components/fenlei/leftnav';
import RightContent from '../../components/fenlei/rightcontent';
import HomeBottom from '../../components/home/common/homeBottom';



class Xfenlei extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        // console.log(this.props)
    }
    render() {
        return (
            <div className="fenlei">
                <Fsearch />
                <div className="center">
                    <Leftnav />
                    <RightContent />
                </div>
                <HomeBottom />
            </div>
        );
    }
}

export default Xfenlei;
