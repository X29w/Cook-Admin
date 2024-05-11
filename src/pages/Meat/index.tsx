import FoodCreateButtonModal from '@/components/FoodCreateButtonModal';
import {
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Popconfirm } from 'antd';
import type { FC } from 'react';

const Meat: FC<unknown> = () => {
  const columns: ProColumns[] = [
    {
      title: '蔬菜名称',
      dataIndex: 'name',
    },
    {
      title: '蔬菜价格',
      dataIndex: 'price',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '蔬菜图片',
      dataIndex: 'image',
      valueType: 'image',
      hideInSearch: true,
    },
    {
      title: '蔬菜描述',
      dataIndex: 'description',
      valueType: 'textarea',
      hideInSearch: true,
    },
    {
      title: '保质期至',
      dataIndex: 'shelfLife',
    },
    {
      title: '剩余过期时长',
      dataIndex: 'expireTime',
      sorter: true,
      hideInSearch: true,
    },
    {
      title: '是否已过期',
      dataIndex: 'expired',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      fixed: 'right',
      width: 80,
      render: (dom, entity) => [
        <Button key="editable">编辑</Button>,
        <Popconfirm title={`是否删除 ${entity.name}`} key="deleteable">
          <Button danger>删除</Button>
        </Popconfirm>,
      ],
    },
  ];
  return (
    <PageContainer>
      <ProTable
        headerTitle="肉类管理"
        columns={columns}
        cardBordered
        params={{
          type: 'vegetable',
        }}
        request={async () => {
          return {
            data: [
              {
                name: '肉类1',
                price: 10,
                image:
                  'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                description: '肉类描述',
                shelfLife: '2022-01-01',
                expireTime: '2022-01-01',
                id: '1',
                expired: true,
                createdAt: '2022-01-01',
                updatedAt: '2022-01-01',
              },
            ],
            success: true,
          };
        }}
        rowKey="id"
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          defaultPageSize: 10,
        }}
        toolBarRender={() => [
          <FoodCreateButtonModal key="create" buttonText="新增肉类" />,
        ]}
      />
    </PageContainer>
  );
};

export default Meat;
