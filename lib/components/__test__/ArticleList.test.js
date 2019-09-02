import React from "react";
import ArticleList from "../ArticleList";
import { shallow } from "enzyme";

describe("ArticleList", () => {
  const TestProps = {
    articles: {
      a: {
        id: "a"
      },
      b: {
        id: "b"
      }
    }
  };
  describe("when rendering with two articles", () => {
    it("should render two article element", () => {
      const wrapper = shallow(<ArticleList {...TestProps} />);

      //expect(wrapper.node.props.children.length).toBe(2);
      expect(wrapper.find("ArticleContainer").length).toBe(2);
    });

    it("should render expected snapshot", () => {
      const wrapper = shallow(<ArticleList {...TestProps} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
