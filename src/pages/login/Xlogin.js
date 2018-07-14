import React, { Component } from 'react';

import {connect} from 'react-redux';
import './login.scss';
import $ from 'jquery';


// 组件 



class Xlogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	telnum:'',
        	psd:"",
        	xshow:false,
        	style:'password',
        	text:'text',
        	res:""
            
        };
       this.handChange=this.handChange.bind(this);
       this.psd=this.psd.bind(this);
       this.login=this.login.bind(this);
       this.hidden=this.hidden.bind(this);
       this.see=this.see.bind(this);
       
    }
	handChange(e){
    	this.setState({
    		telnum:e.target.value,
    	})
    }
 	 psd(e){
    	this.setState({
    		psd:e.target.value,
    		xshow:true,
    	})
    }
 	 see(){
 	 	this.setState({
 	 		style:this.state.text,
 	 		text:this.state.style
 	 	})
 	 }
 	hidden(){
 		this.setState({
 			xshow:false,
 			psd:"",
 		})
 		$(".password").val("")
 	}
    login(){
    	var self=this;
    	$.ajax({
    		type:"get",
    		url:"http://localhost:4000/login",
    		async:true,
    		data:{telnum:this.state.telnum,
    				psd:this.state.psd},
    		success:function(res){
    		
    			if(res=='登录成功'){
    				window.localStorage.setItem("islogin",true)
    				window.localStorage.setItem("telnum",self.state.telnum)
    				window.localStorage.setItem("isloginsettime",new Date())
    				$("#notice").html("登录成功,3秒后返回主页")
    				setTimeout(function(){window.location.href="./"},3000)
    			}else{
    				$("#notice").html(res)
    			}
    			
    		}
    	});
    }o
    componentWillMount(){
    	if(window.localStorage.islogin=="true"){
    		window.location.href="./personal?index=3"
    	}
    	
    
    }

    render() {
        return (
        	
            <div id="login">
				<div className="title">
					 <a href="/"><i className="iconfont icon-home-solid"></i></a>
					<span className="login">登录</span>
					<span className="register"></span>
				</div>

				<div id="mycontents">
					<label for=""><input type="text"  placeholder="请输入手机号" className="username"  maxLength="11" onChange={this.handChange}/></label>
					<label for=""><input type={this.state.style}  placeholder="请输入密码" className="password" onChange={this.psd}/>
					<span className="dn" onClick={this.hidden} style={{display:this.state.xshow?"block":"none"}}>x</span><span  onClick={this.see} id="see">可见</span></label>
					<h2 >必要不会以任何理由要求您转账汇款，谨防诈骗。</h2>
					
					<div>
						<button className="mylogin" onClick={this.login}>登录</button>
						<p id="notice" style={{"textAlign":"center"}}>{this.state.res}</p>
					</div>
					<div><a href="Tellogin"><button className="register">验证码登录</button></a></div>
					<p>
						<a href="./register">还没有账号？快速注册</a>
						<a href="">忘记密码!</a>
					</p>
					<div id="qq">
							<span>合作账号登录</span>
					</div>
					<div id="others">
							<a><i className="iconfont">&#xe69a;</i></a>
					</div>
				</div>

			</div>
        );
    }
}

export default Xlogin;