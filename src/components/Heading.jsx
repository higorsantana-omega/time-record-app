import { Text } from 'react-native'
import { clsx } from 'clsx'

export default function Heading({ size = 'xl', children }) {
  return (
    <Text
      className={clsx(
        "white font-sans font-bold",
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-xl': size === 'lg',
          'text-xl': size === 'xl'
        }
      )}
    >
      {children}
    </Text>
  )
}