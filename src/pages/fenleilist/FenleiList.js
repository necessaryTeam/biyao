import React, { Component } from 'react';

import {connect} from 'react-redux';
import { withRouter } from 'react-router';


import './FenleiList.scss';

// 组件 
import ListHeader from '../../components/fenleilist/listheader'
import ListContent from '../../components/fenleilist/listcontent'


class FenleiList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            title: '',
        };
        // console.log(this.props)
    }
    getUrlData(){
        var urlLast = this.props.location.search;
        var arr = urlLast.slice(1,).split('&');
        var send = [];
        send.push(arr[0]);
        send.push(arr[1]);
        send = send.join('&');
        var headerName = decodeURI(arr[2].split('=')[1]);
        this.setState({
            url:send,
            title: headerName,
        })
    }
    componentWillMount(){
        this.getUrlData();
    }
    render() {
        let title = this.state.title;
        let url = this.state.url;
        return (
            <div className="FenleiList">
                <ListHeader name={title} />
                <ListContent url={url} />
            </div>
        );
    }
}

export default withRouter(FenleiList);
