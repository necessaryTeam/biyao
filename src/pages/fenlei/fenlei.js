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
            idx: 0,
        };
        // console.log(this.props)
    }
    componentWillMount(){
        // console.log(this.props.location.state);
        this.setState({
            idx:this.props.location.state.idx,
        })
    }
    render() {
        let bottomIdx = this.state.idx;
        return (
            <div className="fenlei">
                <Fsearch />
                <div className="center">
                    <Leftnav />
                    <RightContent />
                </div>
                <HomeBottom idx = {bottomIdx} />
            </div>
        );
    }
}

export default Xfenlei;
