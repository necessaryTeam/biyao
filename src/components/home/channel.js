import React,{ Component } from 'react';

import './channel.scss';

import Swiper from 'swiper';


let startX,moveEndX,ulX,onelineStart;
class Channel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channelItem: [
                {name:'经典男装',keyWord:'man',first:'neida'},
                {name:'潮流女装',keyWord:'girl',first:'qunzi'},
                {name:'光学眼镜',keyWord:'yanjing',first:'jsyj'},
                {name:'内衣配饰',keyWord:'girlneiyi',first:'ny'},
                {name:'母婴童装',keyWord:'girl',first:'qunzi'},
                {name:'男女鞋靴',keyWord:'shoes',first:'man'},
                {name:'户外运动',keyWord:'man',first:'neida'},
                {name:'箱包出行',keyWord:'man',first:'gnxb'},
                {name:'美妆个护',keyWord:'yanjing',first:'jsyj'},
                {name:'生活居家',keyWord:'shoes',first:'man'},
                {name:'厨具水具',keyWord:'man',first:'neida'},
                {name:'家用电器',keyWord:'girlneiyi',first:'ny'},
                {name:'家装五金',keyWord:'girl',first:'qunzi'},
                {name:'家居家具',keyWord:'shoes',first:'man'},
                {name:'3C数码',keyWord:'shuma',first:'wsbg'},
                {name:'汽车配件',keyWord:'man',first:'coat'},
                {name:'医疗保健',keyWord:'yanjing',first:'jsyj'},
                {name:'个性定制',keyWord:'girlneiyi',first:'ny'},
            ],
            isShowChannelAll: false,
        }
        this.clickToggle = this.clickToggle.bind(this)
    }
    componentDidMount() {
        var swiper =  new Swiper('.channelOneLine', {
            freeMode: true,
            slidesPerView: 5,
            width: 350,
        })
    }
    clickToggle(){
        this.setState({
           isShowChannelAll: !this.state.isShowChannelAll,
        })
    }
    render(){
        // const { currentKeyWord } = this.state;
        return(
            <div id="channel">
                <div className="swiper-container channelOneLine">
                    <div className="swiper-wrapper oneline">
                        <a className="swiper-slide zactive" >推荐</a>
                        {(function (self){
                            return self.state.channelItem.map(function (item,idx){
                                return <a href={'http://localhost:3000/classify?biao='+item.keyWord+'&index='+(idx)+'&keyClass='+item.first} className="swiper-slide" key={idx}>{item.name}</a>
                            })
                        })(this)}
                    </div>
                </div>
                <div className="ztoggle" onClick={this.clickToggle}><i className={this.state.isShowChannelAll?"iconfont icon-iconfont":"iconfont icon-xiala"}></i></div>
                <div className="channelAll" style={{display:this.state.isShowChannelAll?'block':'none'}}>
                    <div className="caTop">
                        <p>全部频道</p>
                    </div>
                    <ul className="cate-detail">
                        {(function (self){
                            return self.state.channelItem.map(function (item,idx){
                                return <a href={'http://localhost:3000/classify?biao='+item.keyWord+'&index='+(idx+1)+'&keyClass='+item.first}><li className="zchannelList" key={idx}>{item.name}</li></a>
                            })
                        })(this)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Channel