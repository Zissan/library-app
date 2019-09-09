import React from "react";
import storeProvider from "./storeProvider";
class Timestamp extends React.Component {
  getTime = time =>
    time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  shouldComponentUpdate(nextProps) {
    return (
      this.getTime(nextProps.timestamp) !== this.getTime(this.props.timestamp)
    );
  }
  render() {
    return (
      <div>
        {this.props.timestamp.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit"
        })}
      </div>
    );
  }
}
function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}
export default storeProvider(extraProps)(Timestamp);
