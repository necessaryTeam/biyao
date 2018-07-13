import React, { Component } from 'react';
import ReactDom from 'react-dom'
import {connect} from 'react-redux';
import './register.scss';
import common from  './gVerify.js';
import $ from 'jquery';
import text from './text.js'

// 组件 
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	telnum:'',
        	notice:'',
        	show:"false",
        	matchtext:"",
        	psd:"",	
        };
		this.handChange=this.handChange.bind(this);
		this.matchtext=this.matchtext.bind(this);
		this.register=this.register.bind(this);
		this.psd=this.psd.bind(this);
    }
    handChange(e){
    	this.setState({
    		telnum:e.target.value,
    		show:false,
    	})
    }
    matchtext(e){
   
    	this.setState({
    		matchtext:e.target.value,
    		show:false,
    	})
    }
    psd(e){
    	this.setState({
    		show:false,
    		psd:e.target.value
    	})
    	
    }
 
    
    register(){
    	if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test($.trim(this.state.telnum)))){
    		this.setState({
    			notice:"电话号码格式不正确",
    			show:true
    		})
    	}
    	else if(this.state.psd.length<6){
    		this.setState({
    			notice:"妈妈说密码一定要长",
    			show:true
    		})
    	}
    	else{
			var self=this;
	    		$.ajax({
	    			type:"get",
	    			url:"http://localhost:4000/register",
	    			async:true,
	    			data:{telnum:this.state.telnum,
	    				password:this.state.psd
	    			},
	    			success:function(res){
	    				if(res=="注册成功"){
	    					window.localStorage.setItem("islogin",true)
	    					window.localStorage.setItem("telnum",self.state.telnum)
	    					window.localStorage.setItem("isloginsettime",new Date())
	    					var i=3;
	    						$("#notice").html(`注册成功,${i}秒后返回主页`)
	    					setInterval(function(){
	    						i--;
	    						$("#notice").html(`注册成功,${i}秒后返回主页`)
	    					},1000)
	    					setTimeout(function(){window.location.href="./"},3000)
	    				}else{
	    					$("#notice").html(`这个手机号已经注册过了哟`)
	    				}
	    			}
	    	});
		
    	}
    }
    componentDidMount(){
    	var  verifyCode = new  window.GVerify("v_container"); 
    	$("#renew").click(function(){
    		verifyCode.refresh();
    	
    	})
    }
    render() {
        return (
            <div id="register">
				<div className="title">
					 <a href="/"><i class="iconfont icon-home-solid"></i></a>
					<span className="login">注册必要</span>
					<span className="register"></span>
				</div>
				<div className="content">
					<label for=""><input type="tel" id="username" placeholder="请输入手机号" name="username" maxlength="11" onChange={this.handChange}/></label>
					<label for="">
								<input name="img-code" autocomplete="off" id="img-code" maxlength="4" placeholder="请输入图中验证码" onChange={this.matchtext}/><span>验证</span>
								<span id="v_container" style={{width: "80px",height: "30px"}}></span><span id="renew">刷新</span>
					</label>
					<label for=""><input type="tel" id="message-code" autocomplete="new-password" maxlength="6" placeholder="请输入短信验证码"/><span>获取验证码</span></label>
					<label for=""><input type="password" id="pdw" autocomplete="new-password" 
					placeholder="请输入6-32位登录密码" minlength="6"  maxlength="32"  onChange={this.psd}   /><span></span><span></span></label>
					<div>
							<p id="notice"></p>
							<button onClick={this.register}>注册</button>
							<h3 style={{display:this.state.show?"block":"none"}}>{this.state.notice}</h3>
					</div>
					<p><a href="./login">已有账号,立即登录</a></p>
				</div>
				 
			</div>
        );
    }
        
}

export default Register;