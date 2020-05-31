import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import CalendarHolidays from '../containers/CalendarHolidays'
import { View } from 'react-native'
import { getHolidays } from '../actions';

let Main = (props) => {

  //Life Cycle Methods
  useEffect(() => {
    props.getHolidays()
  }, [])
  
  return <CalendarHolidays />
}

const mapDispatchToProps = {
  getHolidays: getHolidays,
};

export default connect(null,mapDispatchToProps)(Main)
