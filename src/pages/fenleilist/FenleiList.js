import React, { Component } from 'react';

import {connect} from 'react-redux';

import './FenleiList.scss';

// 组件 
import ListHeader from '../../components/fenleilist/listheader'
import ListContent from '../../components/fenleilist/listcontent'


class FenleiList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        // console.log(this.props)
    }
    render() {
        return (
            <div className="FenleiList">
                <ListHeader />
                <ListContent />
            </div>
        );
    }
}

export default FenleiList;
