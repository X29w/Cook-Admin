import { Result } from 'antd';
import type { FC } from 'react';

interface PageErrorFallBackProps {
  title?: string;
  subTitle?: string;
}

const PageErrorFallBack: FC<PageErrorFallBackProps> = ({
  title = '页面发生错误了！',
  subTitle = '请联系方总',
}) => <Result status="warning" title={title} subTitle={subTitle} />;

export default PageErrorFallBack;
