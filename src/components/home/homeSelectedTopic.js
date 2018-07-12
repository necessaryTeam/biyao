import React,{ Component } from 'react';

export default class homeSelectedTopic extends Component {
    constructor(props){
        super(props);
        this.state = {
            topicItem:[
                {
                    src:'https://bfs.biyao.com/group1/M00/41/EC/rBACYVs_LmeANQRbAAD0-Vt0DPw381.png',
                    name:'男神夏季穿搭',
                    price:'99元起'
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/41/E9/rBACYVs_JACALo3zAADJc18K56k314.jpg',
                    name:'小装饰大不同',
                    price:'79元起'
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/41/EF/rBACW1s_IfSAcXDkAAD34x9mnlk321.jpg',
                    name:'厨房新视野',
                    price:'49元起'
                }
            ]
        }
    }

    render(){
        const { topicItem } = this.state;
        return(
            <div>
                <div style={{
                    textAlign:'center',
                    fontSize:"18px",
                    height:'48px',
                    lineHeight:'48px'
                }}>精选专题</div>
                <ul>
                    {
                        topicItem.map((item,index)=><li key={index}>
                            <a href=""><img src={item.src} style={{ width:'100%' }}/></a>
                            <div style={{ height:'67px',overflow:'hidden',padding:'10px' }}>
                                <h3 style={{ fontSize:'14px',fontWeight:'normal',float:'left' }}>{item.name}</h3>
                                <span style={{ float:'right',fontSize:'14px',color:'#F7A701' }}>
                            { item.price }
                        </span>
                            </div></li>)
                    }
                </ul>
            </div>


        )
    }
}