import { Result } from 'antd';
import type { FC } from 'react';

interface ServiceErrorFallBackProps {
  subTitle?: string;
}

const ServiceErrorFallBack: FC<ServiceErrorFallBackProps> = ({
  subTitle = '请联系技术人员处理',
}) => <Result status="500" title="发生错误了！" subTitle={subTitle} />;

export default ServiceErrorFallBack;
