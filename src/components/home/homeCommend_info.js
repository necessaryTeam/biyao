import React,{ Component } from 'react';
import $ from 'jquery';

export default class homeCommend_info extends Component{
    constructor(props){
        super(props);
        this.state = {
            commendItem:[
                {
                    name:'植物驱蚊手环',
                    product:'Henkel制造商直供',
                    src:'https://bfs.biyao.com/group1/M00/39/5E/rBACYVr-jlmAOEvaAACAZB1q7fg314.jpg',
                    price:'￥49'
                },
                {
                    name:'植物驱蚊手环',
                    product:'Henkel制造商直供',
                    src:'https://bfs.biyao.com/group1/M00/39/5E/rBACYVr-jlmAOEvaAACAZB1q7fg314.jpg',
                    price:'￥49'
                },
                {
                    name:'植物驱蚊手环',
                    product:'Henkel制造商直供',
                    src:'https://bfs.biyao.com/group1/M00/39/5E/rBACYVr-jlmAOEvaAACAZB1q7fg314.jpg',
                    price:'￥49'
                },
                {
                    name:'植物驱蚊手环',
                    product:'Henkel制造商直供',
                    src:'https://bfs.biyao.com/group1/M00/39/5E/rBACYVr-jlmAOEvaAACAZB1q7fg314.jpg',
                    price:'￥49'
                },
                {
                    name:'植物驱蚊手环',
                    product:'Henkel制造商直供',
                    src:'https://bfs.biyao.com/group1/M00/39/5E/rBACYVr-jlmAOEvaAACAZB1q7fg314.jpg',
                    price:'￥49'
                },
                {
                    name:'植物驱蚊手环',
                    product:'Henkel制造商直供',
                    src:'https://bfs.biyao.com/group1/M00/39/5E/rBACYVr-jlmAOEvaAACAZB1q7fg314.jpg',
                    price:'￥49'
                },

            ]
        }
    }
    

    render(){
        const { commendItem } = this.state;
        return (
            <div>
                <div style={{
                    textAlign:'center',
                    height:'48px',
                    fontSize:'16px',
                    lineHeight:'48px'
                }}>为你推荐</div>
                <ul style={{ overflow:'hidden'}}>
                    {
                        commendItem.map((item,index)=>
                            <li key={index} style={{
                                width:'50%',
                                border:'1px solid #f4f4f4',
                                borderRight:'none',
                                borderBottom:'none',
                                float:'left',
                                paddingBottom:'20px'
                            }}>
                                <a style={{ color:'gray',fontSize:'20px' }}>
                                    <div>
                                        <img src={ item.src } style={{ width:'100%'}}/>
                                    </div>
                                    <dl style={{ padding:'0 20px'}}>
                                        <dd style={{
                                            fontSize:'.24rem',
                                            color:'#BF9E6B',
                                            background:'rgba(214,185,140,.2)',
                                            borderRadius:'.02rem'
                                        }}>{item.product}</dd>
                                        <dd style={{ fontSize:'.26rem',marginTop:'.2rem' }}>{item.name}</dd>
                                        <dd style={{ marginTop:'.24rem',color:'#F7A701',fontSize:'.28rem' }}>{item.price}</dd>
                                    </dl>
                                </a>
                            </li>)
                    }
                </ul>
            </div>
        )
    }
}