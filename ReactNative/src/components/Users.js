import { View, Text } from 'react-native'
import React from 'react'

const Users = (data) => {
  return (
    <View>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View> 
  )
}

export default Users