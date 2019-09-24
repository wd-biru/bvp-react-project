import React from "react";
import { shallow, configure } from "enzyme";
import Filter from '../components/shared/filter/Filter'

const filter = shallow(<Filter />);

it("render filter component properly", () => {
  expect(filter).toBeDefined();
});
