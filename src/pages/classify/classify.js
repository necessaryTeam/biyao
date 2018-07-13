import React, { Component } from 'react';

import {connect} from 'react-redux';

// 组件
import Xsearch from '../../components/home/common/homeSearch'
import Xfooter from '../../components/home/common/homeBottom'
import XtoTop from '../../components/toTop/toTop'

//引入jq
import $ from 'jquery'
//引入css
import './classify.scss'





class Xclassify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classTopItem: [
            {name:'经典男装',let:'man',keyWord:[{Name:'男士内搭',keyClass:'neida'},{Name:'男士外套',keyClass:'coat'},{Name:'男士下装',keyClass:'kuzi'}]},
            {name:'潮流女装',let:'girl',keyWord:[{Name:'女裙',keyClass:'qunzi'},{Name:'女士上装',keyClass:'shangyi'},{Name:'女士下装',keyClass:'xiazhuang'},{Name:'特色女装',keyClass:'tese'}]},
            {name:'光学眼镜',let:'yanjing',keyWord:[{Name:'近视眼镜',keyClass:'jsyj'},{Name:'太阳镜',keyClass:'tyj'},{Name:'老花镜',keyClass:'jsyj'},{Name:'防蓝光护目镜',keyClass:'tyj'},{Name:'运动眼镜',keyClass:'jsyj'},{Name:'儿童眼镜',keyClass:'tyj'}]},
            {name:'内衣配饰',let:'girlneiyi',keyWord:[{Name:'内衣',keyClass:'ny'},{Name:'袜子',keyClass:'wazi'},{Name:'配饰',keyClass:'peisi'}]},
            {name:'母婴童装',let:'girl',keyWord:[{Name:'婴儿用品',keyClass:'qunzi'},{Name:'儿童用品',keyClass:'shangyi'},{Name:'童装童靴',keyClass:'xiazhuang'},{Name:'妈妈专区',keyClass:'tese'}]},
            {name:'男女鞋靴',let:'shoes',keyWord:[{Name:'男鞋',keyClass:'man'},{Name:'女鞋',keyClass:'woman'}]},
            {name:'户外运动',let:'man',keyWord:[{Name:'女裙',keyClass:'neida'},{Name:'女士上装',keyClass:'coat'},{Name:'女士下装',keyClass:'kuzi'},{Name:'特色女装',keyClass:'coat'}]},
            {name:'箱包出行',xinglixiang:'man',keyWord:[{Name:'功能箱包',keyClass:'gnxb'},{Name:'男包/皮带',keyClass:'nbpd'},{Name:'真皮女包',keyClass:'gnxb'},{Name:'出行必备',keyClass:'nbpd'}]},
            {name:'美妆个护',let:'yanjing',keyWord:[{Name:'女裙',keyClass:'jsyj'},{Name:'女士上装',keyClass:'tyj'},{Name:'女士下装',keyClass:'tyj'},{Name:'特色女装',keyClass:'jsyj'},{Name:'女裙',keyClass:'tyj'},{Name:'女士上装',keyClass:'jsyj'},{Name:'女士下装',keyClass:'tyj'},{Name:'特色女装',keyClass:'jsyj'}]},
            {name:'生活居家',let:'shoes',keyWord:[{Name:'男鞋',keyClass:'man'},{Name:'女鞋',keyClass:'woman'}]},
            {name:'厨具水具',let:'man',keyWord:[{Name:'男鞋',keyClass:'neida'},{Name:'女鞋',keyClass:'coat'}]},
            {name:'家用电器',let:'girlneiyi',keyWord:[{Name:'近视眼镜',keyClass:'ny'},{Name:'太阳镜',keyClass:'wazi'},{Name:'老花镜',keyClass:'peisi'}]},
            {name:'家装五金',let:'girl',keyWord:[{Name:'近视眼镜',keyClass:'qunzi'},{Name:'太阳镜',keyClass:'shangyi'},{Name:'老花镜',keyClass:'xiazhuang'}]},
            {name:'家居家具',let:'shoes',keyWord:[{Name:'功能箱包',keyClass:'man'},{Name:'男包/皮带',keyClass:'woman'},{Name:'真皮女包',keyClass:'man'},{Name:'出行必备',keyClass:'woman'},{Name:'功能箱包',keyClass:'man'}]},
            {name:'3C数码',let:'shuma',keyWord:[{Name:'外设办公',keyClass:'wsbg'},{Name:'影音充电',keyClass:'yycd'}]},
            {name:'汽车配件',let:'man',keyWord:[{Name:'汽车配件',keyClass:'coat'},{Name:'配饰清洁',keyClass:'neida'}]},
            {name:'医疗保健',let:'yanjing',keyWord:[{Name:'保健',keyClass:'jsyj'}]},
                {name:'个性定制',let:'girlneiyi',keyWord:[{Name:'箱包出行',keyClass:'ny'},{Name:'服饰鞋靴',keyClass:'wazi'},{Name:'软装画饰',keyClass:'peisi'}]}
            ],
            goodsList:[],
            keyWordNum:1,
            twoNavNum:0,
            firstNav:"",
            twoNav:"",
            isShowAllClass:false
        };
        // console.log(this.props)
    }
    componentDidMount(){
        //获取URL传来的参数
        var classify = [];
        var Url = this.props.location.search;
        //把后缀存到localStorage，方便下个页面返回到该页面
        window.localStorage.setItem("houzui", Url);
        Url = Url.slice(1).split('&');
        Url.forEach(function(item){
            item = item.split("=")
            if(item[0]=="biao"||item[0]=="index"||item[0]=="keyClass"){
                classify.push(item[1]);
            }
        })
        console.log(classify)
        this.setState({
            firstNav:classify[0],
            twoNav:classify[2],
            keyWordNum:classify[1]
        })

        var self = this;
        $.ajax({
            url:"http://localhost:4000/home",
            data:{
                classify:classify[0],
                lei:classify[2]
            },
            success(result){
                console.log(result)
                var newArr = [];
                result.forEach(function(item){
                    var arr = item.imgsrc1.split(',');
                    var str = arr[0];
                    item.bigPic = str;
                    newArr.push(item)
                })
                self.setState({
                    goodsList:newArr
                })
            }
        })
        console.log(this)


    }

    ShowMoreClass(){
        this.setState({
            isShowAllClass:!this.state.isShowAllClass
        })
    }
    ShowAnother(idx){
        this.setState({
            keyWordNum:idx,
            twoNavNum:0,
            firstNav:this.state.classTopItem[idx].let,
            twoNav:this.state.classTopItem[idx].keyWord[0].keyClass
        })
        var self = this;
        setTimeout(()=>{
            $.ajax({
                url:"http://localhost:4000/home",
                data:{
                    classify:this.state.firstNav,
                    lei:this.state.twoNav
                },
                success(result){
                    console.log(result)
                    var newArr = [];
                    result.forEach(function(item){
                        var arr = item.imgsrc1.split(',');
                        var str = arr[0];
                        item.bigPic = str;
                        newArr.push(item)
                    })
                    self.setState({
                        goodsList:newArr
                    })
                }
            })
        },100)

    }
    ClickTwoNav(idx,twoClass){
        this.setState({
            twoNavNum:idx,
            twoNav:twoClass
        })
        var self = this;
        setTimeout(()=>{
            $.ajax({
                url:"http://localhost:4000/home",
                data:{
                    classify:this.state.firstNav,
                    lei:this.state.twoNav
                },
                success(result){
                    console.log(result)
                    var newArr = [];
                    result.forEach(function(item){
                        var arr = item.imgsrc1.split(',');
                        var str = arr[0];
                        item.bigPic = str;
                        newArr.push(item)
                    })
                    self.setState({
                        goodsList:newArr
                    })
                }
            })
        },100)

    }
    render() {

            return (
            <div id="classifyPage">
                {/*遮罩层*/}
                <div id="masked" style={{display:this.state.isShowAllClass?"block":"none"}} onClick={this.ShowMoreClass.bind(this)}></div>
                <div className="classifyHeader">
                    <div className="headerSearch">
                        <Xsearch />
                    </div>
                    <div className="classNav">
                        <div className="firstNav">
                            <div className="topNav">
                                <ul>
                                    <li><a href="http://localhost:3000/"><span>推荐</span></a></li>
                                    {
                                        (function(self){
                                            return self.state.classTopItem.map(function(item,idx){
                                                return  <li onClick={self.ShowAnother.bind(self,idx)} key={idx} data-id={item.let}><span className={self.state.keyWordNum==idx?"active":""}>{item.name}</span></li>
                                            })
                                        })(this)
                                    }
                                </ul>
                            </div>
                            <div onClick={this.ShowMoreClass.bind(this)} className="moreClass"><i className="iconfont icon-xiala"></i></div>
                        </div>
                        <div className="twoNav">
                            <ul>
                                {
                                    (function(self){
                                        return self.state.classTopItem[self.state.keyWordNum].keyWord.map(function(item,idx){
                                            return <li onClick={self.ClickTwoNav.bind(self,idx,item.keyClass)} key={idx} data-id={item.keyClass}><span className={self.state.twoNavNum==idx?"active2":""}>{item.Name}</span></li>
                                        })
                                    })(this)
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="allClass"  style={{display:this.state.isShowAllClass?"block":"none"}}>
                        <div className="title">
                            <span className="allChannel">全部频道</span>
                            <span className="iconfont icon-houtui"  onClick={this.ShowMoreClass.bind(this)}></span>
                        </div>
                        <div className="goodslist">
                            <ul>
                                {
                                    (function(self){
                                        return self.state.classTopItem.map(function(item,idx){
                                            return  <li onClick={self.ShowAnother.bind(self,idx),self.ShowMoreClass.bind(self)} key={idx} data-id={item.let}><span className={self.state.keyWordNum==idx?"active":""}>{item.name}</span></li>
                                        })
                                    })(this)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="goodsList">
                        <ul>
                            {
                                (function(self){
                                    return self.state.goodsList.map(function(item,idx){
                                        return <li key={idx}>
                                            <a href={"http://localhost:3000/detail?classify="+self.state.firstNav+"&id\="+item.id}>
                                                <img src={item.bigPic}/>
                                                <p className="goodsName">{item.name}</p>
                                                <p className="goodsPrice"><span>￥</span>{item.price}</p>
                                            </a>
                                        </li>
                                    })
                                })(this)
                            }
                        </ul>
                </div>
                <div className="xfooter">
                    <Xfooter />
                </div>
                <XtoTop />
            </div>
        );
    }
}

export default Xclassify;

$(function($){
    //一类
    var liWidth = $(".firstNav ul li:eq(1)").innerWidth()
    var num = $(".firstNav ul").children("li").length;
    $(".firstNav ul").width(liWidth*num)
    //二类
    var num2 = $(".twoNav ul").children("li").length;
    $(".twoNav ul").width(70*num)
})

