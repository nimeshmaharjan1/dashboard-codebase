import { NextPageWithLayout } from '@pages/_app';
import MainLayout from '@shared/layouts/main';
import { Tree } from 'antd';
import { ReactElement, useState } from 'react';

const initialTreeData = [
  {
    key: '0001',
    title: 'Donuts',
    children: [
      { key: '5001', title: 'None' },
      { key: '5002', title: 'Glazed' },
      { key: '5005', title: 'Sugar' },
      { key: '5007', title: 'Powdered Sugar' },
      { key: '5006', title: 'Chocolate with Sprinkles' },
      { key: '5003', title: 'Chocolate' },
      { key: '5004', title: 'Maple' },
    ],
  },
  {
    key: '0002',
    title: 'Cake',
    children: [
      { key: '1001', title: 'Regular' },
      { key: '1002', title: 'Chocolate' },
      { key: '1003', title: 'Blueberry' },
      { key: '1004', title: "Devil's Food" },
    ],
  },
] as any;

const updateTreeData = (list: any, key: React.Key, children: any): any =>
  list.map((node: any) => {
    if (node.key === key) {
      return {
        ...node,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, key, children),
      };
    }
    return node;
  });

const UserTree: NextPageWithLayout = () => {
  const [treeData, setTreeData] = useState<{
    title: string;
    key: string;
    children?: any;
  }>(initialTreeData);

  const onLoadData = ({ key, children }: any) =>
    new Promise<void>((resolve) => {
      if (children) {
        resolve();
        return;
      }
      setTimeout(() => {
        setTreeData((origin) =>
          updateTreeData(origin, key, [
            { title: 'Child Node', key: `${key}-0` },
            { title: 'Child Node', key: `${key}-1` },
          ])
        );

        resolve();
      }, 1000);
    });

  return (
    <div>
      UserTree
      <Tree loadData={onLoadData} treeData={treeData as any}></Tree>
    </div>
  );
};

export default UserTree;

UserTree.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};
