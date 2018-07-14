import React, { Component } from 'react';
import $ from 'jquery';

import {connect} from 'react-redux';
import './personal.scss'
import HomeBottom from '../../components/home/common/homeBottom';


class Xhome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            telnum:"",
            ulitem:["我的拼团","我的红包","我要开店","我的余额","我的地址","设置密码","修改支付密码","商家入驻","我的客服"],
            idx:3,
        };

    }
componentDidMount(){
 	console.log(window.localStorage.telnum)
 	$("#user").html(window.localStorage.telnum)

 }

    render() {
    	let asd = this.state.idx;
        return (
            <div style={{ display:'flex',flexDirection:'column',height:'667px'}}>
      			<div style={{ flex:1}}>
                  	<div className="personal">
						<div className="personal-pic">
							<img className="lazy" src="https://static.biyao.com/m/img/master/personalCenter/default-person.png" />
							<a>{window.localStorage.telnum}</a>
						</div>
					</div>
					<div className="item-list">
						<ul>
							<li className="item border-b-1 clear" data-url="/orderSU/orderlist">
								<span className="arrow-right float-right">
									>
								</span>
								<a className="item-head float-left">我的订单{this.state.active}</a>
							</li>
						</ul>
					</div>
					<div>
						<ul className="mycontent">
	                        {
	                            (function(self){
	                                return self.state.ulitem.map(function(item,idx){
	                                    return  <li key={idx}>
	                                                    <a>{item}</a>
	                                            </li>
	                                })
	                            })(this)
	                        }
	                    </ul>
					</div>
					
					
                </div>
                <div style={{ height:'50px'}}>
                    <HomeBottom idx={asd} />
                </div>
            </div>
        );
    }
}

export default Xhome;