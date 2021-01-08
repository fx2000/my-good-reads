import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("Renders without crashing", () => {
  shallow(<Sidebar />);
});

it("Renders sidebar title", () => {
  const { getByText } = render(<Sidebar />);
  const linkElement = getByText(/My Reading Wishlist/i);
  expect(linkElement).toBeInTheDocument();
});

it("Has sidebar-content", () => {
  const { getByTestId } = render(<Sidebar />);
  expect( getByTestId("sidebar-content") ).toBeDefined();
});
