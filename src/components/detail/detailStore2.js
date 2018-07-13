import React, { Component } from 'react';

import {connect} from 'react-redux';
// css
import './detailStore2.scss'
//jq
import $ from 'jquery';
// 组件



class XdetailStore2 extends Component {
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
        var store = JSON.parse(window.localStorage.getItem("Store"))
        if(store!==null){
            this.setState({
                goodsclassify:store[0]
            })
            var self = this;
            $.ajax({
                url:"http://localhost:4000/goodsStore",
                data:{
                    classify:store[0],
                    brand:store[1]
                },
                success(result){
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
                }
            })
        }







    }
    render() {
        const { StoreGoodsList } = this.state;
        return (
            <div id="detailStore2">
                <div className="storeGoods">
                    <ul className="storeGoodsList2">
                        {
                            StoreGoodsList.map((item,idx)=>{
                                return <li key={idx}><a href={"http://localhost:3000/detail?classify="+this.state.goodsclassify+"&id\="+item.id}><img src={item.bigPic}/><p className="goodsname">{item.name}</p><p className="goodsprice">￥{item.price}</p></a></li>
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
})(XdetailStore2);
