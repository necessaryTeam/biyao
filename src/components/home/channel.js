import React,{ Component } from 'react';

import './channel.scss';

import Swiper from 'swiper';


let startX,moveEndX,ulX,onelineStart;
class Channel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channelItem: [
                {name:'经典男装',keyWord:'man'},
                {name:'潮流女装',keyWord:'girl'},
                {name:'光学眼镜',keyWord:'yanjing'},
                {name:'内衣配饰',keyWord:'girlneiyi'},
                {name:'母婴童装',keyWord:'girl'},
                {name:'男女鞋靴',keyWord:'shoes'},
                {name:'户外运动',keyWord:'man'},
                {name:'箱包出行',keyWord:'man'},
                {name:'美妆个护',keyWord:'yanjing'},
                {name:'生活居家',keyWord:'shoes'},
                {name:'厨具水具',keyWord:'girlneiyi'},
                {name:'家用电器',keyWord:'girl'},
                {name:'家装五金',keyWord:'girl'},
                {name:'家居家具',keyWord:'shoes'},
                {name:'3C数码',keyWord:'shoes'},
                {name:'汽车配件',keyWord:'man'},
                {name:'医疗保健',keyWord:'yanjing'},
                {name:'个性定制',keyWord:'girlneiyi'},
            ],
            isShowChannelAll: false,
        }
        this.clickToggle = this.clickToggle.bind(this)
    }
    componentDidMount() {
        var swiper =  new Swiper('.swiper-container', {
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
                        <a className="swiper-slide zactive">推荐</a>
                        {(function (self){
                            return self.state.channelItem.map(function (item,idx){
                                return <a href={'http://localhost:3000/classify?biao='+item.keyWord+'&index='+(idx+1)} className="swiper-slide" key={idx}>{item.name}</a>
                            })
                        })(this)}
                    </div>
                </div>
                <div className="ztoggle" onClick={this.clickToggle}><i className={this.state.isShowChannelAll?"iconfont icon-xiala":"iconfont icon-iconfont"}></i></div>
                <div className="channelAll" style={{display:this.state.isShowChannelAll?'block':'none'}}>
                    <div className="caTop">
                        <p>全部频道</p>
                    </div>
                    <ul className="cate-detail">
                        {(function (self){
                            return self.state.channelItem.map(function (item,idx){
                                return <a href={'http://localhost:3000/classify?biao='+item.keyWord+'&index='+(idx+1)}><li className="zchannelList" key={idx}>{item.name}</li></a>
                            })
                        })(this)}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Channel