import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
export default function storeConnect(
  Component,
  mapStateToProps,
  mapDispatchToProps
) {
  return withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Component)
  );
}
