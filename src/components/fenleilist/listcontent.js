import React, { Component } from 'react';

import {connect} from 'react-redux';



import $ from 'jquery';


import './listcontent.scss';

// 组件 


class ListContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsImg: [],
            allDatas: [],
            shopName: [],
            biao: this.props.url.split('&')[0].split('=')[1],
        };
        // console.log(this.props)
    }
    getData(self){
        console.log(self.props.url,this.state.biao)
        var arr = [];
        var shopArr = [];
        $.ajax({
            type: "GET",
            url: "http://localhost:4000/fenleilist",
            data: self.props.url,
            success: function(result){
                result.forEach(function (item){
                    var firstImg = item.imgsrc1.split(',')[0];
                    arr.push(firstImg);
                    shopArr.push(item.brand);
                })
                self.setState({
                    goodsImg: arr,
                    allDatas: result,
                    shopName: shopArr,
                })
                // console.log(self.state,self.state.shopName)
            }
        })
    }
    componentWillMount(){
        // console.log(this);
        // 将第一张图片的地址数据赋给goodsImg
        this.getData(this)
    }
    render() {
        return (
            <div className="ListContent">
                {(function (self){
                    return self.state.allDatas.map(function (item,idx){
                        return <a href={'http://localhost:3000/detail?classify='+self.state.biao+'&id='+item.id+'&ku='+self.state.shopName[idx]} className="zlistsLink" key={idx}><div className="zlists" >
                            <img className="zlistsImg" src={self.state.goodsImg[idx]} />
                            <p className="zlistsName">{item.name}</p>
                            <p className="zlistsPrice">{'￥'+item.price}</p>
                        </div></a>
                    })
                })(this)}
            </div>
        );
    }
}
export default ListContent;