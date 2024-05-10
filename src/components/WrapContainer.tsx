import { PageContainer, PageContainerProps } from '@ant-design/pro-components';
import type { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CheckResponse from './CheckResponse';
import PageErrorFallBack from './PageErrorFallBack';

type WrapContainerProps = Pick<PageContainerProps, 'children'>;

/**
 * 错误边界处理——包裹性页面
 *
 * @param {*} { children }
 */
const WrapContainer: FC<WrapContainerProps> = ({ children }) => (
  <CheckResponse>
    <ErrorBoundary fallback={<PageErrorFallBack />}>
      <PageContainer>{children}</PageContainer>
    </ErrorBoundary>
  </CheckResponse>
);

export default WrapContainer;
