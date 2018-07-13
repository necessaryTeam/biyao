import React,{ Component } from 'react';

import './jingxuantop.scss';

export default class JingxuanTop extends Component{
    constructor(props){
        super(props);
        this.state = {
            topName: this.props.name,
            imgSrc: this.props.topData.imgSrc,
            text: this.props.topData.text,
        }
    }
    componentWillMount(){
        console.log(this.props);
    }
    render(){
        return (
                <div className="jingxuanTop">
                    <img className="jingxuanTopImg" src={this.state.imgSrc} alt="" />
                    <div className="jingxuanTopText">
                        <p className="textTitle">{this.state.topName}</p>
                        <div className="textContent" dangerouslySetInnerHTML={{__html: this.state.text}}></div>
                    </div>
                    <p className="forYou">为您精选</p>
                </div>
            )
    }
}