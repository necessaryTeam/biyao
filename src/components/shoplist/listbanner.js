import React, { Component } from 'react';

import './listbanner.scss'


export default class ListBanner extends Component{
    constructor(props) {
        super(props);
        this.state={
            title: this.props.name,
            imgSrc: this.props.shopImg,
        }
    }
    componentWillMount(){
        console.log(this.props)
    }
    render(){
        return (
                <div className="listbanner">
                    <a className="shopIntro">{this.state.title}<i className="iconfont icon-iconfont"></i></a>
                    <img src={this.state.imgSrc} className="lbannerImg" />
                </div>
            )
    }
}