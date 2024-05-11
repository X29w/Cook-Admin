import {
  LockOutlined,
  MobileOutlined,
  SendOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { ProFormCaptcha, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import { Fragment, type FC } from 'react';

const RegisterTab: FC<unknown> = () => {
  return (
    <Fragment>
      <ProFormText
        name="name"
        label="用户名"
        placeholder="请输入用户名"
        rules={[{ required: true, message: '请输入用户名！' }]}
        fieldProps={{
          size: 'large',
          prefix: <UserOutlined className={'prefixIcon'} />,
        }}
      />
      <ProFormText
        name="email"
        label="邮箱"
        placeholder="请输入邮箱"
        rules={[
          { required: true, message: '请输入邮箱！' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址！',
          },
        ]}
        fieldProps={{
          size: 'large',
          prefix: <SendOutlined />,
        }}
      />
      <ProFormCaptcha
        name="captcha"
        label="验证码"
        placeholder="请输入验证码"
        rules={[
          {
            required: true,
            message: '请输入验证码！',
          },
        ]}
        fieldProps={{
          size: 'large',
          prefix: <SettingOutlined />,
        }}
        captchaProps={{
          size: 'large',
        }}
        captchaTextRender={(timing, count) =>
          timing ? `${count} '获取验证码` : '获取验证码'
        }
        onGetCaptcha={async () => {
          message.success('获取验证码成功！验证码为：1234');
        }}
      />
      <ProFormText.Password
        name="password"
        label="密码"
        placeholder="请输入密码"
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
          {
            max: 16,
            type: 'string',
            message: '密码长度不能小于8位！',
          },
        ]}
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined className={'prefixIcon'} />,
        }}
      />
      <ProFormText
        name="phone"
        label="手机号"
        placeholder="请输入手机号"
        fieldProps={{
          size: 'large',
          prefix: <MobileOutlined className={'prefixIcon'} />,
        }}
      />
    </Fragment>
  );
};

export default RegisterTab;
