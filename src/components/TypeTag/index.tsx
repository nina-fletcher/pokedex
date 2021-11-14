import React from 'react';
import { Tag } from 'antd';
import { TYPES_MAP } from '../../constants';

interface Props {
  typeName: string;
}

export const TypeTag: React.FC<Props> = ({ typeName }) => {
  return <Tag color={TYPES_MAP[typeName].color}>{typeName}</Tag>;
};
