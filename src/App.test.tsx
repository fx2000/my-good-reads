import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders page title", () => {
  const wrapper = shallow(<App />);
  const title = <h1>My Good Reads</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});
