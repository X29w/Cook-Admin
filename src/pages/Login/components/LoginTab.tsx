import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormText } from '@ant-design/pro-components';
import { Fragment, type FC } from 'react';

const LoginTab: FC<unknown> = () => {
  return (
    <Fragment>
      <ProFormText
        name="name"
        fieldProps={{
          size: 'large',
          prefix: <UserOutlined />,
        }}
        placeholder="请输入用户名"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      />
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'large',
          prefix: <LockOutlined />,
        }}
        placeholder="请输入密码"
        rules={[
          {
            required: true,
            message: '请输入密码！',
          },
        ]}
      />
    </Fragment>
  );
};

export default LoginTab;
