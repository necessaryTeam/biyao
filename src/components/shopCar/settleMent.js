import React,{ Component } from 'react';

import { connect } from 'react-redux'


export default connect((state) => {
    //他把store的state全部放到该组件的props里面
    return state
}, (dispatch) => {
    return {
        allSelect:(real)=>{
            dispatch({
                type:'allSelect',
                realAllSelect:real,
            })
        }
    }
})(class settleMent extends Component {
    constructor(props){
        super(props);
        this.state = {
            real:true
        }
        this.realAllSelectM = this.realAllSelectM.bind(this);
    }

    realAllSelectM(){
        let {real} = this.state;
        this.props.allSelect(real);
        real = !real;
        this.setState({ real })
        console.log(real)
    }
    render(){
        return(
            <div style={{ height:'50px',lineHeight:'50px',padding:'0 10px' }}>
                <div style={{ float:'left' }}>
                    <label><input type="checkbox" style={{ marginRight:'5px'}}  onClick={ this.realAllSelectM } />全选</label>
                </div>
                <div style={{ float:'right' }}>
                    <span>合计</span>
                    <span style={{ margin:'0 10px',color:'#f33'}}>￥{this.props.allPrice}</span>
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
});