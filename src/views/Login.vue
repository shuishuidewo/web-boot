<template>
	<div>
		<el-form :rules="rules" ref="Loginform" :model="Loginform" class="LoginContainer">
			<h3 class="LoginTitle">系统登录</h3>
			<el-form-item prop='username'>
				<el-input type="text" auto-complete="false" v-model="Loginform.username" placeholder="请输入用户名">
				</el-input>
			</el-form-item>
			<el-form-item prop='password'>
				<el-input type="password" v-model="Loginform.password" placeholder="请输入密码"></el-input>
			</el-form-item>
			<el-form-item prop='code' class="formItem">
				<el-input type="text" v-model="Loginform.code" placeholder="点击图片更换验证码"
					style="width: 250px;margin-right: 5px;"></el-input>
				<img :src="captchaUrl" @click='updateCaptcha'>
			</el-form-item>
			<el-checkbox v-model="checked" class="LoginRemember">记住我</el-checkbox>
			<el-button type="primary" style="width: 100%;" @click="submitLogin">登录</el-button>
			<el-button size="mini" round @click="handleButton">注册</el-button>
		</el-form>
	</div>
</template>

<script>
import { postRequest } from '@/utils/api';
export default {
	name: "Login",
	data() {
		return {
			captchaUrl: '/captcha?time=' + new Date(),
			Loginform: {
				username: 'admin',
				password: '123',
				code: ''
			},
			checked: true,
			rules: {
				username: [{
					required: true,
					message: '请输入用户名！',
					trigger: 'blur'
				},
				{
					min: 3,
					max: 5,
					message: '长度在 3 到 5 个字符',
					trigger: 'blur'
				},
				],
				password: [{
					required: true,
					message: '请输入密码！',
					trigger: 'blur'
				}],
				code: [{
					required: true,
					message: '请输入验证码！',
					trigger: 'blur'
				}]
			}
		}
	},
	methods: {
		updateCaptcha() {
			this.captchaUrl = '/captcha?time=' + new Date()
		},
		submitLogin() {
			this.$refs.Loginform.validate((valid) => {
				if (valid) {
					postRequest('/login', this.Loginform).then(res => {
						if (res) {
							//存储用户token
							const tokenStr = res.obj.tokenHead + res.obj.tokenHead.token
							window.sessionStorage.setItem('tokenStr', tokenStr)
							//跳转首页
							this.$router.replace('/Home')
						}
					})
				} else {
					this.$message.error('请输入所有字段！');
					return false;
				}
			})
		},
		handleButton() {
			this.$router.push('Select')
		}
	}
}
</script>

<style>
.LoginContainer {
	border-radius: 15px;
	background-clip: padding-box;
	margin: 180px auto;
	width: 350px;
	padding: 15px 35px 15px 35px;
	background: #fff;
	border: 1px solid #eaeaea;
	box-shadow: 0 0 25px #cac6ca;

}

.LoginTitle {
	margin: 0px auto 40px auto;
	text-align: center;
}

.LoginRemember {
	text-align: left;
	margin: 0 0 15px 0;
}

.el-button+.el-button,
.el-checkbox.is-bordered+.el-checkbox.is-bordered {
	width: 100%;
	margin: 15px 0px 0px 0px;
}

.el-form-item__content {
	display: flex;
	align-items: center;
}
</style>
