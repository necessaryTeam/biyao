import React,{ Component } from 'react';

export default class commonTop extends Component {
    constructor(props){
        super(props);
        this.state = {
            topItem:{
                icon:'iconfont icon-home-solid',
                name:'购物车',
                operate:'编辑'
            },
            showAll:false
        }
    }

    render(){
        const { topItem } = this.state;
        return(
            <div style={{ display:'flex',borderBottom:'2px solid #eee',height:'42px',lineHeight:'42px',padding:'0 10px'}}>
                <span ><i className={ topItem.icon} style={{ fontSize:'20px'}}></i></span>
                <p style={{ flex:1,textAlign:'center',fontSize:'16px'}}>{ topItem.name }</p>
                <span style={{ fontSize:'16px'}}>{ topItem.operate }</span>
            </div>
        )
    }
}