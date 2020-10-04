import React from 'react'
import { shallow } from 'enzyme'
import  DashboardPage  from '../../components/DashboardPage'

test('should render Dashboard page correctly',()=>{
    const wrapper = shallow(<DashboardPage/>)
    expect(wrapper).toMatchSnapshot()
})