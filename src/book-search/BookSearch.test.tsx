import React from 'react';
import { render } from '@testing-library/react';
import BookSearch from './BookSearch';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("Renders without crashing", () => {
  shallow(<BookSearch />);
});

