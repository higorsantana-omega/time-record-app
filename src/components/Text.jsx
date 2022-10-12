import { Text } from 'react-native'
import { clsx } from 'clsx'

export default function TextCustom({ size = 'md', color = 'white', children }) {
  return (
    <Text
      className={clsx(
        "font-sans",
        {
          'white': color === 'white',
          'black': color === 'black',
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg'
        }
      )}
    >
      {children}
    </Text>
  )
}