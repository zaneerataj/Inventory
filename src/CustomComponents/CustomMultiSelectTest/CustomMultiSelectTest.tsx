'use client';
import React, { useState, FC } from 'react';
import {
  MultiSelector,
  MultiSelectorTrigger,
  MultiSelectorInput,
  MultiSelectorContent,
  MultiSelectorList,
  MultiSelectorItem,
} from '../../../components/extension/multi-select';

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

const CustomMultiSelectTest: FC = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <MultiSelector values={value} onValuesChange={setValue} loop={false}>
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Select your framework" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {options.map((option, i) => (
            <MultiSelectorItem key={i} value={option.value}>
              {option.label}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  );
};

export default CustomMultiSelectTest;
