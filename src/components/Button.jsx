import { Pressable } from 'react-native'
import TextCustom from './Text'
import { clsx } from 'clsx'

export default function ButtonCustom({ title }) {
  return (
    <Pressable
      className={clsx(
        'py-4 px-4 bg-gray-700 rounded w-full'
      )}
    >
      <TextCustom color='black'>{title}</TextCustom>
    </Pressable>
  )
}