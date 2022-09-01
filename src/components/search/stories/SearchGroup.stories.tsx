import React from 'react';
import { Story } from '@storybook/react';
import { TStringObj } from 'types/types';
import SearchGroup, { IProps } from '../SearchGroup';

export default {
  title: 'SearchGroup',
  component: SearchGroup
};

const Template: Story<IProps> = (args) => <SearchGroup {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <input type='text' id='name' value='' required />
      <select id='status' defaultValue='AAA' required>
        <option value=''>--선택--</option>
        <option value='AAA'>AAA</option>
        <option value='BBB'>BBB</option>
        <option value='CCC'>CCC</option>
      </select>
    </>
  ),
  handleReset: () => {
    alert('reset completed');
  },
  handleSearch: (searchConditions: TStringObj) => {
    console.log('here');
    alert(JSON.stringify(searchConditions));
  }
};
