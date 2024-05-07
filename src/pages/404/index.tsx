import { Link } from '@umijs/max';
import { Button, Result } from 'antd';
import type { FC } from 'react';

const NotFound: FC<unknown> = () => (
  <Result
    status="404"
    title="404"
    subTitle="页面找不到啦"
    extra={
      <Link to="/">
        <Button type="primary">返回首页</Button>
      </Link>
    }
  />
);

export default NotFound;
