import React ,{ Component } from 'react';

export default class homeGuarantee_g extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:['大牌制造商出品','七天无忧退货','全平台包邮']
        }
    }

    render(){
        const { item } = this.state;
        return(
            <ul style={{ display:'flex'}}>
                {
                    item.map((item,index)=><li key={index} style={{
                        color:'#7F4395',
                        fontSize:'.24rem',
                        marginRight:'20px',
                        height:'36px',
                        lineHeight:'36px',
                    }}><i className='iconfont icon-gouhao'></i>{item}</li>)
                }
            </ul>
        )
    }
}