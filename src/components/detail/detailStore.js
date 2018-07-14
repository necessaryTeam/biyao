import React, { Component } from 'react';

import {connect} from 'react-redux';
// css
import './detailStore.scss'
//jq
import $ from 'jquery';
// 组件



class XdetailStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StoreGoodsList:[],
            goodsclassify:"",
            storeGoodsSum:"",
            storeName:""
        };
        // console.log(this.props)
    }
    componentDidMount(){
            var ku = []
            var store = window.location.search;
            store = store.slice(1).split('&');

            store.forEach(function(item){
                    item = item.split("=")
                    if(item[0]=="classify"||item[0]=="ku"){
                        ku.push(decodeURI(item[1]));
                    }
                })
            this.setState({
                goodsclassify:ku[0]
            })
            var self = this;
            $.ajax({
                url:"http://localhost:4000/goodsStore",
                data:{
                    classify:ku[0],
                    brand:ku[1]
                },
                success(result){
                    // console.log(result)
                    var storeName = result[0].brand;
                    var storeGoodsSum = result.length;
                    //获取第一张图片
                    var newArr = [];
                    result.forEach(function(item){
                        var arr = item.imgsrc1.split(',');
                        var str = arr[0];
                        item.bigPic = str;
                        newArr.push(item)
                    })
                    self.setState({
                        StoreGoodsList:newArr,
                        storeGoodsSum:storeGoodsSum,
                        storeName:storeName
                    })
                    changeulWidth();
                }
            })

        function changeulWidth(){
            var ul = document.getElementsByClassName("storeGoodsList")[0];
            var li = ul.children;
            ul.style.width = li[0].offsetWidth*li.length+20 + "px";
        }




    }
    render() {
        const { StoreGoodsList } = this.state;
        return (
            <div id="detailStore">
                <div className="storeTop">
                    <div className="storeName">
                        <i className="iconfont icon-tesezhuanti"></i>
                        <span>{this.state.storeName}</span>
                    </div>
                    <div className="goodsNum">
                        <p className="num">{this.state.storeGoodsSum}3</p>
                        <p>在售商品</p>
                    </div>
                </div>
                <div className="storeGoods">
                    <ul className="storeGoodsList">
                        {
                            StoreGoodsList.map((item,idx)=>{
                                return <li key={idx}><a href={"http://localhost:3000/detail?classify="+this.state.goodsclassify+"&id\="+item.id+"&ku\="+encodeURI(item.brand)}><img src={item.bigPic}/><p className="goodsname">{item.name}</p><p className="goodsprice">￥{item.price}</p></a></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    // 他把store的state全部放到该组件的props里面
    return state
}, (dispatch) => {
    return {

    }
})(XdetailStore);


$(function($){
        // var ul = document.getElementsByClassName("storeGoodsList")[0];
        // var li = ul.children;
        // console.log(ul)
        // console.log(li.length)


})
