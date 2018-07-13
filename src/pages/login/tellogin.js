import React, { Component } from 'react';

import {connect} from 'react-redux';
import './login.scss';


// 组件 



class Tellogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        // console.log(this.props)
    }

    
    
    render() {
        return (
        	
            <div id="login">
				<div class="title">
					 <a href="/"><i class="iconfont icon-home-solid"></i></a>
					<span class="login">登录</span>
					<span class="register"></span>
				</div>

				<div id="contents">
					<label for=""><input type="text"  placeholder="请输入手机号" class="username"  maxlength="11"/></label>
					<label for=""><input type="password"  placeholder="请输入验证码" class="password"/><span>获取验证码</span></label>
					<h2 >必要不会以任何理由要求您转账汇款，谨防诈骗。</h2>
					<div><button class="mylogin">登录</button></div>
					<div><a href="Login"><button class="register">密码登录</button></a></div>
					<p>
						<a href="">还没有账号？快速注册</a>
						<a href="">忘记密码!</a>

					</p>
					<div id="qq">
							<span>合作账号登录</span>
					</div>
					
					<div id="others">
							<a><i class="iconfont">&#xe69a;</i></a>
					</div>
				
				</div>
			
			
			
			
			</div>
        );
    }
}

export default Tellogin;