import { getfoodList } from '@/api';
import FoodButtonModal from '@/components/FoodButtonModal';
import WrapContainer from '@/components/WrapContainer';
import { ProColumns, ProTable } from '@ant-design/pro-components';
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
    <WrapContainer>
      <ProTable
        headerTitle="蔬菜管理"
        columns={columns}
        cardBordered
        request={async (params) => {
          const res = await getfoodList(params, '/vegetable/list');
          return {
            data: res.data,
            success: res.success,
            total: res.data?.totalCount,
          };
        }}
        rowKey="id"
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          defaultPageSize: 10,
        }}
        toolBarRender={() => [
          <FoodButtonModal key="create" buttonText="新增蔬菜" />,
        ]}
      />
    </WrapContainer>
  );
};

export default Vegetable;
