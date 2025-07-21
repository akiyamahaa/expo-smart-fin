import React from 'react'
import { TextInput, TextInputProps, View, Text } from 'react-native'

type AppInputProps = TextInputProps & {
  label?: string
  error?: string
}

const AppInput: React.FC<AppInputProps> = ({ label, error, ...rest }) => {
  return (
    <View className="mb-4">
      {label && <Text className="text-sm font-normal text-primary ml-3 mb-1.5">{label}</Text>}

      <TextInput
        className={`
          h-12 px-3 rounded-2xl text-base
          bg-white dark:bg-zinc-800
          border ${error ? 'border-red-500' : 'border-input-outline'}
          text-zinc-900 dark:text-white
        `}
        placeholderTextColor="#919EAB"
        {...rest}
      />

      {error && <Text className="text-red-500 text-xs">{error}</Text>}
    </View>
  )
}

export default AppInput
