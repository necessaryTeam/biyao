import React,{Component} from 'react';
import {Link,hashHistory} from 'react-router-dom';
import './jingxuanbottom.scss'; 

export default class JingxuanBottom extends Component{
    constructor(props){
        super(props);
        this.state = {
            jxBottomData:[
                {
                    src:'https://bfs.biyao.com/group1/M00/43/22/rBACYVtHKeCAQG0PAACqeEA3rMw882.jpg',
                    name:'抗老秘籍',
                    price:'69元起',
                    jianjie: '时间总是悄悄在身上留下痕迹，没有几件像样的武器怎么与之对抗？',
                    biao: 'girl',
                    sort: 'lyq',
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/42/F3/rBACYVtFw66AMjJWAADOgbFgT_4474.jpg',
                    name:'新手妈妈入门手册',
                    price:'29元起',
                    jianjie: '孕育生命是一件伟大的事情，这里搜罗了你和宝宝都需要的必备品',
                    biao: 'girl',
                    sort: 'yfz',
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/42/D8/rBACW1tEj5aAMLITAAD3XQeYuTU176.jpg',
                    name:'运动新风尚',
                    price:'65元起',
                    jianjie: '运动的时尚慢慢转向户外，准备好装备就出发吧！',
                    biao: 'girl',
                    sort: 'tshirt',
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/42/76/rBACYVtDM-yAP55dAADZWoan5m0086.jpg',
                    name:'居家服&内衣专场',
                    price:'69元起',
                    jianjie: ' 夏季就要集凉爽、舒适、性感于一身的居家服及内衣，才能够清凉一夏！<br><br> 拼团流程：<br> 第一步：必要老客户选择喜欢的“一起拼”商品，原价支付购买商品即开团成功，成为团长；<br> 第二步：开团成功后分享给微信好友，邀请新客参团，新人直接支付拼团价格；<br> 第三步：参团成功后，团长将收到商品差额的退款，退款将于1~7个工作日内原路退回至团长的支付账户。 <br>Tips： 团长拼团失败也是会原价购买商品的哦！<br><br> 快快挑选喜欢的商品，和新朋友一起拼吧！',
                    biao: 'girlneiyi',
                    sort: 'bra',
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/41/EC/rBACYVs_LmeANQRbAAD0-Vt0DPw381.png',
                    name:'男神夏季穿搭',
                    price:'99元起',
                    jianjie: 'T恤+休闲裤搭配百变风格<br /><br /> 拼团流程：<br /> 第一步：必要老客户选择喜欢的“一起拼”商品，原价支付购买商品即开团成功，成为团长；<br /> 第二步：开团成功后分享给微信好友，邀请新客参团，新人直接支付拼团价格；<br /> 第三步：参团成功后，团长将收到商品差额的退款，退款将于1~7个工作日内原路退回至团长的支付账户。 <br />Tips： 团长拼团失败也是会原价购买商品的哦！<br /><br /> 快快挑选喜欢的商品，和新朋友一起拼吧！',
                    biao: 'man',
                    sort: 'tshirt',
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/41/E9/rBACYVs_JACALo3zAADJc18K56k314.jpg',
                    name:'小装饰大不同',
                    price:'79元起',
                    jianjie: '一年过去一大半，是该给家里添点小物件改改风水的时候了！',
                    biao: 'man',
                    sort: 'tshirt',
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/41/EF/rBACW1s_IfSAcXDkAAD34x9mnlk321.jpg',
                    name:'厨房新视野',
                    price:'49元起',
                    jianjie: '再忙碌的生活也要善待自己，快速准备有颜有料的一餐很有必要',
                    biao: 'man',
                    sort: 'tshirt',
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/40/1A/rBACVFs-yOyAKt4oAAD5nYq8ses217.jpg',
                    name:'上半年TOP家纺',
                    price:'49元起',
                    jianjie: '美的家纺改善心情，舒适的家纺改善生活，换一套家纺换一个状态面对自己！',
                    biao: 'man',
                    sort: 'tshirt',
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/3F/B9/rBACVFs8l9WAD5FlAAGKIIVpnyw485.png',
                    name:'运动减肥季',
                    price:'69元起',
                    jianjie: '夏季是一个很难遮肉的季节呀！让我们一起运动起来，摆脱脂肪的束缚~<br><br> 拼团流程：<br> 第一步：必要老客户选择喜欢的“一起拼”商品，原价支付购买商品即开团成功，成为团长；<br> 第二步：开团成功后分享给微信好友，邀请新客参团，新人直接支付拼团价格；<br> 第三步：参团成功后，团长将收到商品差额的退款，退款将于1~7个工作日内原路退回至团长的支付账户。 <br>Tips： 团长拼团失败也是会原价购买商品的哦！<br><br> 快快挑选喜欢的商品，和新朋友一起拼吧！',
                    biao: 'man',
                    sort: 'tshirt',
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/41/20/rBACW1s7WPGAT1JKAADS_-1iZ3Q136.jpg',
                    name:'保护亮瞳，你就差这幅蓝光眼镜了',
                    price:'169元起',
                    jianjie: '职场如战场，保护好装备很重要',
                    biao: 'man',
                    sort: 'tshirt',
                },
                {
                    src:'https://bfs.biyao.com/group1/M00/3F/38/rBACVFs6EFCAI1OUAAE8Os32v14460.png',
                    name:'幸福感爆棚的小电器',
                    price:'25元起',
                    jianjie: '有了这些小家电的神助攻，助你享受每天的快乐时光！<br><br> 拼团流程：<br> 第一步：必要老客户选择喜欢的“一起拼”商品，原价支付购买商品即开团成功，成为团长；<br> 第二步：开团成功后分享给微信好友，邀请新客参团，新人直接支付拼团价格；<br> 第三步：参团成功后，团长将收到商品差额的退款，退款将于1~7个工作日内原路退回至团长的支付账户。 <br>Tips： 团长拼团失败也是会原价购买商品的哦！<br><br> 快快挑选喜欢的商品，和新朋友一起拼吧！',
                    biao: 'shuma',
                    sort: 'smpj',
                },
            ]
        }
    }
    refreshCur(self,idx){
        console.log(idx)
        window.location.reload(`http:\/\/localhost:3000/jingxuan#${idx}`);
        window.scrollTo(0,0);
    }
    render(){
        const { jxBottomData } = this.state;
        return(
                <div className="jingxuanBt">
                    <div className="jingxuanBtTitle">更多精彩专题</div>
                    <div className="zmoreTopPic">
                        {
                            jxBottomData.map((item,index)=><Link to={{pathname:'/jingxuan',hash:`#${index}`}} key={index} onClick={this.refreshCur.bind(this,index)}>
                                <img src={item.src} style={{ width:'100%' }}/>
                                <div style={{ height:'67px',overflow:'hidden',padding:'10px' }}>
                                    <h3 style={{ fontSize:'14px',fontWeight:'normal',float:'left',color:'#333' }}>{item.name}</h3>
                                    <span style={{ float:'right',fontSize:'14px',color:'#F7A701' }}>
                                { item.price }
                            </span>
                                </div></Link>)
                        }
                    </div>
                    <p className="znoMore">我是有底线的ヾ(≧O≦)〃嗷~</p>
                </div>
            )
    }
}