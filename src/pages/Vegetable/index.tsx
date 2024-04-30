import {
  PageContainer,
  ProColumns,
  ProTable,
} from '@ant-design/pro-components';
import { Button, Popconfirm } from 'antd';

const Vegetable: React.FC<unknown> = () => {
  const columns: ProColumns[] = [
    {
      title: '蔬菜名称',
      dataIndex: 'name',
    },
    {
      title: '蔬菜价格',
      dataIndex: 'price',
      sorter: true,
    },
    {
      title: '蔬菜图片',
      dataIndex: 'image',
      valueType: 'image',
    },
    {
      title: '蔬菜描述',
      dataIndex: 'description',
      valueType: 'textarea',
    },
    {
      title: '保质期至',
      dataIndex: 'shelfLife',
    },
    {
      title: '剩余过期时长',
      dataIndex: 'expireTime',
      sorter: true,
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
        headerTitle="蔬菜管理"
        columns={columns}
        cardBordered
        params={{
          type: 'vegetable',
        }}
        request={async (params, sort) => {
          console.log(params);

          return {
            data: [
              {
                name: '蔬菜1',
                price: 10,
                image:
                  'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg',
                description: '蔬菜描述',
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
        search={false}
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          defaultPageSize: 10,
        }}
        toolBarRender={() => [
          <Button type="primary" key="button">
            新建蔬菜
          </Button>,
        ]}
      />
    </PageContainer>
  );
};

export default Vegetable;
