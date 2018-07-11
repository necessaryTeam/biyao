import React, { Component } from 'react';

import {connect} from 'react-redux';

import './listheader.scss';

// 组件 



class ListHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.name,
        };
        // console.log(this.props)
    }
    // upDateTitle(){
    //     this.setState({
    //         title: this.props.name,
    //     })
    // }
    componentWillMount(){
        // this.upDateTitle();
        console.log(this)
    }
    render() {
        return (
            <div className="ListHeader">
                <a href="http://localhost:3000"><i className="iconfont icon-home-solid"></i></a>
                <p className="headerName">{this.state.title}</p>
            </div>
        );
    }
}

export default ListHeader;
