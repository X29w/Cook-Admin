import Block from '@/components/Block';
import { UserAuthority } from '@/interface';
import { LoginForm } from '@ant-design/pro-components';
import { Form, Tabs, Typography } from 'antd';
import { useState, type FC } from 'react';
import LoginTab from './components/LoginTab';
import RegisterTab from './components/RegisterTab';
import './login.css';
const { Title } = Typography;

const Login: FC<unknown> = () => {
  const [loginType, setLoginType] = useState<string>('loginTab');
  const [form] = Form.useForm();

  const handleLoginForm = async (data: UserAuthority) => {
    try {
      console.log('data', data);
    } catch (error) {}
  };

  const handleChangeTabs = (activeKey: string) => {
    form.resetFields();
    setLoginType(activeKey);
  };

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
