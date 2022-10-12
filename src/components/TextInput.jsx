import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import TextCustom from './Text'
import { clsx } from 'clsx'

export default function TextInputCustom({ value }) {
  return (
    <View
      className={clsx(
        'bg-gray-800 flex-row rounded'
      )}
    >
      <Icon name="book" size={24} color="#7C7C8A" style={{ paddingLeft: 20, paddingTop: 18, paddingRight: 5 }}/>
      <TextInput
        className={clsx(
          'py-4 px-4 bg-gray-800 rounded w-72 color-gray-400'
        )}
        value={value}
        placeholder={'I’m reading...'}
        placeholderTextColor={'#7C7C8A'}
      >

      </TextInput>
    </View>
  )
}