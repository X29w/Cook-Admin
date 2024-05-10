import { Result } from 'antd';
import type { FC } from 'react';

interface ServiceErrorFallBackProps {
  title?: string;
  subTitle?: string;
}

const ServiceErrorFallBack: FC<ServiceErrorFallBackProps> = ({
  title = '服务端发生错误了！',
  subTitle = '请联系方总',
}) => <Result status="500" title={title} subTitle={subTitle} />;

export default ServiceErrorFallBack;
