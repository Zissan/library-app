import React from "react";
import PropTypes from "prop-types";

const storeProvider = (mapper = () => ({})) => {
  return Component => {
    return class extends React.PureComponent {
      static displayName = `${Component.name}Container`;
      static contextTypes = {
        store: PropTypes.object
      };

      onStoreChange = () => {
        if (this.subscriptionId) {
          this.forceUpdate();
        }
      };

      componentDidMount() {
        this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
      }

      componentWillUnmount() {
        this.context.store.unsubscribe(this.subscriptionId);
        this.subscriptionId = null;
      }

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
