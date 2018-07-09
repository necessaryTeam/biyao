import React,{ Component } from 'react';

import './channel.scss'

let startX,moveEndX,ulX,onelineStart;
class Channel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            channelItem: [
                {name:'推荐',keyWord:''},
                {name:'经典男装',keyWord:['男士内搭','男士外套','男士下装']},
                {name:'潮流女装',keyWord:['女裙', '女士上装', '女士下装', '特色女装']},
                {name:'光学眼镜',keyWord:[ '近视眼镜', '太阳镜', '老花镜', '防蓝光护目镜', '运动眼镜', '儿童眼镜']},
                {name:'内衣配饰',keyWord:['内衣', '袜子', '配饰']},
                {name:'母婴童装',keyWord:[ '婴儿用品', '儿童用品', '童装童靴', '妈妈专区']},
                {name:'男女鞋靴',keyWord:['男鞋','女鞋']},
                {name:'户外运动',keyWord:['运动服饰', '运动鞋靴', '户外服饰', '运动装备']},
                {name:'箱包出行',keyWord:['功能箱包', '男包/皮带', '真皮女包', '出行必备']},
                {name:'美妆个护',keyWord:['面部护理', '香水彩妆', '身体护理', '男士护理', '女性护理', '口腔护理', '清洁/祛味', '宠物用品']},
                {name:'生活居家',keyWord:['家纺', '生活用品']},
                {name:'厨具水具',keyWord:['厨具','水具/茶具']},
                {name:'家用电器',keyWord:[ '厨用电器', '生活家电', '美容护理']},
                {name:'家装五金',keyWord:['厨卫用品', '家装软饰', '五金工具']},
                {name:'家居家具',keyWord:['客厅', '卧室', '书房', '餐厅', '儿童家具']},
                {name:'3C数码',keyWord:[ '外设办公', '影音充电']},
                {name:'汽车配件',keyWord:['汽车配件', '配饰清洁']},
                {name:'医疗保健',keyWord:['保健']},
                {name:'个性定制',keyWord:['箱包出行', '服饰鞋靴', '软装画饰']},
            ],
            isShowChannelAll: false,
            isActive: 0,
            iskeywordActive:0,
            currentKeyWord:[]
        }
        this.isShowChannelAll = this.isShowChannelAll.bind(this);
        this.isActive = this.isActive.bind(this);
        this.moveOneLineStart = this.moveOneLineStart.bind(this);
        this.moveOneLineEnd = this.moveOneLineEnd.bind(this);
        this.showCurrentKeyword = this.showCurrentKeyword.bind(this);
    }

    showCurrentKeyword(e,index){
        let { iskeywordActive } = this.state;
        iskeywordActive = index;
        this.setState({ iskeywordActive });
    }
    isShowChannelAll(){
        let {isShowChannelAll} = this.state;
        isShowChannelAll = !isShowChannelAll;
        this.setState({ isShowChannelAll })
    }
    isActive(index,e,keyword){
        let {isActive} = this.state;
        let { currentKeyWord } = this.state;
        let { iskeywordActive } = this.state;
        iskeywordActive = 0;
        currentKeyWord = keyword;
        isActive = index;
        this.setState({isActive,currentKeyWord,iskeywordActive})
    }
    moveOneLineStart(e){
        e.preventDefault();
        startX = e.touches[0].pageX;
        var oneline = document.querySelector('#oneline');
        onelineStart = parseInt(oneline.style.left)
    }
    moveOneLineEnd(e){
        e.preventDefault();
        moveEndX = e.changedTouches[0].pageX;
        ulX = moveEndX - startX;
        ulX = parseInt(ulX)
        var oneline = document.querySelector('#oneline');
        ulX>0?oneline.style.left =  ulX+onelineStart +'px':oneline.style.left =  ulX+onelineStart +'px';
        // if(ulX > 0){
        //     oneline.style.left =  ulX+onelineStart +'px';
        //     console.log(oneline.style.left,ulX)
        // }else if(ulX <0){
        //     oneline.style.left =  ulX+onelineStart +'px';
        //     console.log(oneline.style.left,ulX)
        // }
    }



    render(){
        const { channelItem } = this.state;
        const { currentKeyWord } = this.state;
        return(
            <div id="channel">
                <div className="channelOneLine">
                    <div onTouchStart={ (e)=>this.moveOneLineStart(e)} onTouchMove={(e)=>this.moveOneLineEnd(e)}>
                        <ul id='oneline' style={{ left:0}}>
                            {
                                channelItem.map((item,index)=><li key={ index } onClick={(e)=>this.isActive(index,e,item.keyWord)}><a className={ this.state.isActive===index?'active':''}>{ item.name }</a></li>)
                            }
                        </ul>
                    </div>
                    <span onClick={ this.isShowChannelAll }><i className={ this.state.isShowChannelAll?'changeDire iconfont icon-xiala':'iconfont icon-xiala'}></i></span>
                </div>
                <ul className="channel" style={{ display:this.state.isShowChannelAll?'block':'none'}}>
                    {
                        channelItem.map((item,index)=><li key={ index } onClick={(e)=>this.isActive(index,e,item.keyWord) }><a className={ this.state.isActive===index?'active':''}>{ item.name }</a></li>)
                    }
                </ul>
                {
                    this.state.currentKeyWord?<ul style={{ padding:'0 10px',width:'auto'}} className='keyword'>
                        {
                            currentKeyWord.map((item,index)=><li key={index} onClick={ (e)=>this.showCurrentKeyword(e,index) }><a className={ this.state.iskeywordActive===index?'keywordActive':''}>{ item }</a></li>)
                        }
                    </ul>:''
                }
            </div>
        )
    }
}

export default Channel