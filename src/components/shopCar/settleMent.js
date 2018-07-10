import React,{ Component } from 'react';
export default class settleMent extends Component {
    constructor(props){
        super(props);
        this.state = {
            allPrice:0
        }
    }
    render(){
        return(
            <div style={{ height:'50px',lineHeight:'50px',padding:'0 10px' }}>
                <div style={{ float:'left' }}>
                    <input type="radio"/>
                    <span style={{ marginLeft:'5px'}}>全选</span>
                </div>
                <div style={{ float:'right' }}>
                    <span>合计</span>
                    <span style={{ margin:'0 10px',color:'#f33'}}>￥{this.state.allPrice}</span>
                    <button style={{
                        color:'#fff',
                        background:"#f33",
                        border:0,
                        borderRadius:'5px',
                        padding:'0 18px',
                        height:'32px',
                        marginLeft:'5px'
                    }}>去结算</button>
                </div>
            </div>
        )
    }
}