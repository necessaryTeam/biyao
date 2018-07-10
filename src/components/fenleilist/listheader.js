import React, { Component } from 'react';

import {connect} from 'react-redux';

import './listheader.scss';

// 组件 



class ListHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        // console.log(this.props)
    }
    render() {
        return (
            <div className="ListHeader">
                <a href="http://localhost:3000"><i className="iconfont icon-home-solid"></i></a>
                <p className="headerName">T 恤</p>
            </div>
        );
    }
}

export default ListHeader;
