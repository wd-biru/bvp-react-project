import { connect } from 'react-redux';

export default function connectToStore(Component, mapStateToProps, mapDispatchToProps) {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
}