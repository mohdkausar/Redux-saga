import React from 'react';
import { connect } from 'react-redux'
import { ActivityIndicator, View } from 'react-native'

let Loading = ({ loading }) => (
    loading ? <ActivityIndicator size="large" /> : null
);
const mapStateToProps = (state) => ({loading: state.loading})
Loading = connect(mapStateToProps,null)(Loading)
export default Loading;