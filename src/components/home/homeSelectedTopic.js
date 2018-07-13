import React,{ Component } from 'react';
import {Link,hashHistory} from 'react-router-dom';

export default class homeSelectedTopic extends Component {
    constructor(props){
        super(props);
        this.state = {
            topicItem:[
                {
                    src:'https://bfs.biyao.com/group1/M00/41/EC/rBACYVs_LmeANQRbAAD0-Vt0DPw381.png',
                    name:'男神夏季穿搭',
                    price:'99元起',
                    jianjie: 'T恤+休闲裤搭配百变风格<br /><br /> 拼团流程：<br /> 第一步：必要老客户选择喜欢的“一起拼”商品，原价支付购买商品即开团成功，成为团长；<br /> 第二步：开团成功后分享给微信好友，邀请新客参团，新人直接支付拼团价格；<br /> 第三步：参团成功后，团长将收到商品差额的退款，退款将于1~7个工作日内原路退回至团长的支付账户。 <br />Tips： 团长拼团失败也是会原价购买商品的哦！<br /><br /> 快快挑选喜欢的商品，和新朋友一起拼吧！',
                    biao: 'man',
                    sort: 'tshirt',
                    idx: 4,
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/42/76/rBACYVtDM-yAP55dAADZWoan5m0086.jpg',
                    name:'居家服&内衣专场',
                    price:'69元起',
                    jianjie: ' 夏季就要集凉爽、舒适、性感于一身的居家服及内衣，才能够清凉一夏！<br><br> 拼团流程：<br> 第一步：必要老客户选择喜欢的“一起拼”商品，原价支付购买商品即开团成功，成为团长；<br> 第二步：开团成功后分享给微信好友，邀请新客参团，新人直接支付拼团价格；<br> 第三步：参团成功后，团长将收到商品差额的退款，退款将于1~7个工作日内原路退回至团长的支付账户。 <br>Tips： 团长拼团失败也是会原价购买商品的哦！<br><br> 快快挑选喜欢的商品，和新朋友一起拼吧！',
                    biao: 'girlneiyi',
                    sort: 'bra',
                    idx: 3,
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/41/20/rBACW1s7WPGAT1JKAADS_-1iZ3Q136.jpg',
                    name:'保护亮瞳，你就差这幅蓝光眼镜了',
                    price:'169元起',
                    jianjie: '职场如战场，保护好装备很重要',
                    biao: 'man',
                    sort: 'tshirt',
                    idx: 9,
                }
            ]
        }
    }

    render(){
        const { topicItem } = this.state;
        return(
            <div >
                <div style={{
                    textAlign:'center',
                    fontSize:"18px",
                    height:'48px',
                    lineHeight:'48px'
                }}>精选专题</div>
                <ul>
                    {
                        topicItem.map((item,index)=><Link to={{pathname:'/jingxuan',hash:`#${item.idx}`,state:item}} key={index}>
                            <li >
                            <img src={item.src} style={{ width:'100%' }}/>
                            <div style={{ height:'67px',overflow:'hidden',padding:'10px' }}>
                                <h3 style={{ fontSize:'14px',fontWeight:'normal',float:'left',color:'#333' }}>{item.name}</h3>
                                <span style={{ float:'right',fontSize:'14px',color:'#F7A701' }}>
                            { item.price }
                        </span>
                            </div></li></Link>)
                    }
                </ul>
            </div>


        )
    }
}