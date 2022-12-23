import { initialTreeData } from '@features/home/data/tree-data';
import { NextPageWithLayout } from '@pages/_app';
import MainLayout from '@shared/layouts/main';
import { Tree } from 'antd';
import React, { ReactElement, useState } from 'react';

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
