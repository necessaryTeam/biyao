import React,{ Component } from 'react';

import { connect } from 'react-redux'


export default connect((state) => {
    //他把store的state全部放到该组件的props里面
    return state
}, (dispatch) => {
    return {
        settleMentAllSelect:()=>{
            dispatch({
                type:'settleMentAllSelect',
                realAllSelect:true
            })
        }
    }
})(class settleMent extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div style={{ height:'50px',lineHeight:'50px',padding:'0 10px' }}>
                <div style={{ float:'left' }}>
                    <label><input type="checkbox" style={{ marginRight:'5px'}} onClick={ this.props.settleMentAllSelect } />全选</label>
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