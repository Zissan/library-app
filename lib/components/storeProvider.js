import React from "react";
import PropTypes from "prop-types";

const storeProvider = mapper => {
  return Component => {
    return class extends React.Component {
      static displayName = `${Component.name}Container`;
      static contextTypes = {
        store: PropTypes.object
      };

      render() {
        return (
          <Component
            {...this.props}
            store={this.context.store}
            {...mapper(this.context.store, this.props)}
          />
        );
      }
    };
  };
};

export default storeProvider;
