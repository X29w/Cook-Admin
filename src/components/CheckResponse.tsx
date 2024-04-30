import { checkStatusApi } from '@/api';
import { useEffect, useState, type FC } from 'react';
import ServiceErrorFallBack from './ServiceErrorFallBack';

interface CheckResponseProps {
  children: React.ReactNode;
  errComponent?: React.ReactNode;
}

const CheckResponse: FC<CheckResponseProps> = ({
  children,
  errComponent = <ServiceErrorFallBack subTitle="服务器故障，请稍后再试" />,
}) => {
  const [errorStatus, setErrorStatus] = useState<boolean>(false);

  //#region 检查组件状态
  const checkStatus = async () => {
    try {
      const res = await checkStatusApi();
      setErrorStatus(res.success ? false : true);
    } catch (error) {
      setErrorStatus(true);
    }
  };
  //#endregion

  useEffect(() => {
    checkStatus();
  }, []);

  return errorStatus ? errComponent : children;
};

export default CheckResponse;
