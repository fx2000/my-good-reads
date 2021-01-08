import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("Renders without crashing", () => {
  shallow(<App />);
});

it("Renders page title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("My Good Reads");
  expect(linkElement).toBeInTheDocument();
});

it("Has book-search-component", () => {
  const { getByTestId } = render(<App />);
  expect( getByTestId("book-search-component") ).toBeDefined();
});

it("Has sidebar-component", () => {
  const { getByTestId } = render(<App />);
  expect( getByTestId("sidebar-component") ).toBeDefined();
});
