import React from "react";
import ArticleList from "../ArticleList";
import renderer from "react-test-renderer";

describe("ArticleList Component", () => {
  const testProps = {
    articles: {
      a: {
        id: "a"
      },
      b: {
        id: "b"
      }
    },
    store: {
      lookupAuthor: jest.fn(() => {
        return {
          website: ""
        };
      })
    }
  };

  describe("when rendering with two articles", () => {
    it("should render two child elements", () => {
      const tree = renderer.create(<ArticleList {...testProps} />);
      expect(tree.toJSON().children.length).toBe(2);
    });

    it("should render expected snapshot", () => {
      const tree = renderer.create(<ArticleList {...testProps} />);
      expect(tree).toMatchSnapshot();
    });
  });
});
