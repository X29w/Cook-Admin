/* eslint-disable @typescript-eslint/no-unused-expressions */
import { history } from '@/.umi/exports';
import { loginUserAPI, registerUserAPI } from '@/api';
import Block from '@/components/Block';
import { UserAuthority } from '@/interface';
import { saveItemToLocal } from '@/utils';
import { LoginForm } from '@ant-design/pro-components';
import { Form, Tabs, Typography, message } from 'antd';
import { useState, type FC } from 'react';
import LoginTab from './components/LoginTab';
import RegisterTab from './components/RegisterTab';
import './login.css';
const { Title } = Typography;

const Login: FC<unknown> = () => {
  const [loginType, setLoginType] = useState<string>('loginTab');
  const [form] = Form.useForm();

  //#region 登陆/注册表单
  //#region 登录
  const handleLogin = async (data: UserAuthority) => {
    const res = await loginUserAPI(data);
    if (res.success) {
      saveItemToLocal('Authorization', res.data.accessToken);
      history.push('/');
      message.success('登录成功');
    }
  };
  //#endregion

  //#region 注册
  const handleRegister = async (data: UserAuthority) => {
    const res = await registerUserAPI(data);
    if (res.success) {
      message.success('注册成功');
      setLoginType('loginTab');
    }
  };
  //#endregion

  const handleLoginForm = async (data: UserAuthority) => {
    try {
      loginType === 'loginTab'
        ? await handleLogin(data)
        : await handleRegister(data);
    } catch (error) {}
  };
  //#endregion

  //#region 切换tab
  const handleChangeTabs = (activeKey: string) => {
    form.resetFields();
    setLoginType(activeKey);
  };
  //#endregion

  return (
    <Block className="site">
      <Block className="container">
        <Block className="login">
          <Block className="hero">
            <Title>123</Title>
          </Block>

          <Block className="w-[400px]">
            <LoginForm
              form={form}
              title="Github"
              subTitle="全球最大的代码托管平台"
              onFinish={handleLoginForm}
              submitter={{
                searchConfig: {
                  submitText: loginType === 'loginTab' ? '登录' : '注册',
                },
              }}
            >
              <Tabs
                destroyInactiveTabPane
                centered
                activeKey={loginType}
                onChange={handleChangeTabs}
              >
                <Tabs.TabPane destroyInactiveTabPane key="loginTab" tab="登录">
                  <LoginTab />
                </Tabs.TabPane>
                <Tabs.TabPane
                  destroyInactiveTabPane
                  key="registerTab"
                  tab="注册"
                >
                  <RegisterTab />
                </Tabs.TabPane>
              </Tabs>
            </LoginForm>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default Login;
