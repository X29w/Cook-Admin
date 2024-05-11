import { createFoodAPI } from '@/api';
import { MODALWIDTH } from '@/constants';
import { FoodModalINT, FoodParamsINT } from '@/interface';
import { getUUid } from '@/utils';
import { PlusOutlined } from '@ant-design/icons';
import {
  ModalForm,
  ProFormDatePicker,
  ProFormDigit,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components';
import { Button } from 'antd';
import { type FC } from 'react';

const FoodCreateButtonModal: FC<FoodModalINT> = ({
  buttonText = '新建表单',
  modalTitle = buttonText,
  key = getUUid(),
  url,
  action,
}) => {
  //#region 处理Modal关闭成功事件
  const handleModalFinish = async (data: Record<string, any>) => {
    data.price = Number(data.price);
    try {
      const res = await createFoodAPI(url!, data);
      if (res.success) {
        action?.reload();
        return true;
      }
    } catch (error) {}
  };
  //#endregion

  return (
    <ModalForm<FoodParamsINT>
      key={key}
      title={modalTitle}
      trigger={
        <Button type="primary">
          <PlusOutlined />
          {buttonText}
        </Button>
      }
      autoFocusFirstInput={false}
      modalProps={{
        destroyOnClose: true,
        width: MODALWIDTH,
      }}
      grid
      colProps={{
        sm: {
          span: 24,
        },
        md: {
          span: 12,
        },
      }}
      onFinish={async (values) => await handleModalFinish(values)}
    >
      <ProFormText
        name="name"
        label="标题"
        rules={[{ required: true, message: '请输入标题' }]}
      />
      <ProFormDigit
        name="price"
        label="价格"
        rules={[{ required: true, message: '请输入价格' }]}
        fieldProps={{
          step: '0.01',
          stringMode: true,
        }}
      />
      <ProFormDatePicker
        width="lg"
        name="shelfLife"
        label="保质日期"
        rules={[{ required: true, message: '请输入保质日期' }]}
      />
      <ProFormTextArea
        name="description"
        label="描述"
        fieldProps={{
          showCount: true,
          maxLength: 200,
        }}
      />
      <ProFormText name="image" label="图片" />
    </ModalForm>
  );
};

export default FoodCreateButtonModal;
