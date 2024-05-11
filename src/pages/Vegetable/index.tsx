import { deletefoodAPI, getfoodList } from '@/api';
import FoodCreateButtonModal from '@/components/FoodCreateButtonModal';
import FoodUpdateButtonModal from '@/components/FoodUpdateButtonModal';
import WrapContainer from '@/components/WrapContainer';
import { TabelColumnsAction } from '@/interface';
import { ProColumns, ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm, message } from 'antd';

const Vegetable: React.FC<unknown> = () => {
  //#region 删除食物
  const handleDelete = async (id: number, action: TabelColumnsAction) => {
    try {
      const res = await deletefoodAPI(`/vegetable/${id}`);
      if (res.success) {
        message.success('删除成功');
        action?.reload();
      }
    } catch (error) {}
  };
  //#endregion

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
      render: (dom, entity, index, action) => [
        <FoodUpdateButtonModal
          key="update"
          updateUrl={`/vegetable/${entity?.id}`}
          entity={entity}
          action={action}
          initialFormValues={entity}
        />,
        <Popconfirm
          title={`是否删除 ${entity.name}`}
          key="deleteable"
          onConfirm={async () => await handleDelete(entity.id, action)}
        >
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
            data: res.data?.vegetables,
            success: res.success,
            total: res.data?.totalCount?.totalCount,
          };
        }}
        rowKey="id"
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          defaultPageSize: 10,
        }}
        toolBarRender={(action) => [
          <FoodCreateButtonModal
            action={action}
            key="create"
            buttonText="新增蔬菜"
            url="/vegetable/create"
          />,
        ]}
      />
    </WrapContainer>
  );
};

export default Vegetable;
