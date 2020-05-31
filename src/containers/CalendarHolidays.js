import React, {useState} from 'react';
import { connect } from 'react-redux'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import {ListItem, Card, Header} from 'react-native-elements';
import Loading from '../containers/Loading'
import { getHolidays } from '../actions';

let CalendarHolidays = (props) => {
    const [refreshing, setRefreshing] = useState(false)
    return <Holidays {...props} refreshing={refreshing} />
}

const renderItem = ({item}) => {
    return(
        <TouchableOpacity onPress={() => Linking.openURL(item.htmlLink)}>
        <ListItem 
            title={item.summary} 
            subtitle={item.start.date} 
            subtitleStyle={style.subtitleStyle}
            
        />
        </TouchableOpacity>
    )
}

const refreshCalendar = (getHolidays) => {
    getHolidays()
}

const Holidays = ({ calendar, refreshing, getHolidays }) => (
    <Card containerStyle={{flex:1,marginBottom:20}}>
        <FlatList 
            data={calendar}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            refreshing={refreshing}
            onRefresh={() => refreshCalendar(getHolidays)}
            ItemSeparatorComponent={({highlighted}) => (
                <View style={[style.separator, highlighted ]} />
            )}
        />
        <Loading />
    </Card>
    
);
const mapStateToProps = (state) => ({
    calendar: state.calendar,
})

const mapDispatchToProps = {
    getHolidays: getHolidays,
};
  

const style = StyleSheet.create({
    separator: {
        borderWidth:0.5,
        borderColor:'#ccc'
    },
    subtitleStyle: {
        fontSize:12,
        color:'#222'
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(CalendarHolidays)