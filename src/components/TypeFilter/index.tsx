import React from 'react';
import { Select, Tag } from 'antd';
import { TYPES_LIST, TYPES_MAP } from '../../constants';
import { CustomTagProps } from 'rc-select/lib/interface/generator';

interface Props {
  onChange: (value: string[]) => void;
}

function tagRender(props: CustomTagProps) {
  const { value, closable, onClose } = props;

  return (
    <Tag
      color={TYPES_MAP[value].color}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {value}
    </Tag>
  );
}

export const TypeFilter: React.FC<Props> = ({ onChange }) => {
  return (
    <Select
      mode="multiple"
      showArrow
      tagRender={tagRender}
      defaultValue={[]}
      style={{ width: '100%' }}
      onChange={onChange}
      options={TYPES_LIST}
    />
  );
};
