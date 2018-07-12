import React,{ Component } from 'react';


import ListHeader from '../../components/fenleilist/listheader'
import ListContent from '../../components/fenleilist/listcontent'
import ListBanner from '../../components/shoplist/listbanner'


export default class ShopList extends Component{
    constructor(props){
        super(props);
        this.state={
            title: '',
            url: '',
            imgSrc: '',
        }
    }
    getShopLiatUrl(){
        var urlLast = this.props.location.state.shopdata;
        console.log(urlLast)

        this.setState({
            url: 'biao='+urlLast.biao +'&sort='+urlLast.sort,
            title: urlLast.title,
            imgSrc: urlLast.bannerImg,
        })
        // var send = [];
        // send.push(arr[0]);
        // send.push(arr[1]);
        // send = send.join('&');
        // var headerName = decodeURI(arr[2].split('=')[1]);
        // this.setState({
        //     url:send,
        //     title: headerName,
        // })
    }
    componentWillMount(){
        this.getShopLiatUrl()
    }
    render(){
        let shopListData = this.state.url;
        let shopName = this.state.title;
        let shopPic = this.state.imgSrc;
        return (
            <div className="shoplist">
                <ListHeader name={shopName} />
                <ListBanner name={shopName} shopImg={shopPic} />
                <ListContent url={shopListData}/>
            </div>
            )
    }
}