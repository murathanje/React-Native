import { View, Text } from 'react-native'
import React from 'react'

const User = (props) => {
  return (
    <View>
      <Text>{JSON.stringify(props.data.id)}</Text>
    </View>
  )
}

export default User