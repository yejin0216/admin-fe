import React from 'react';
import { Story } from '@storybook/react';
import SearchGroup, { IProps } from '../SearchGroup';

export default {
  title: 'SearchGroup',
  component: SearchGroup
};

const Template: Story<IProps> = (args) => <SearchGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <input type='text' id='name' value='' required />,
  handleReset: () => {
    alert('reset completed');
  },
  handleSearch: () => {
    alert('search completed');
  }
};
