import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GoogleButton from '@/components/GoogleButton'
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'

type Props = {}

const SignInForm = ({}: Props) => {
  const router = useRouter()
  const _handleLogin = () => {}

  const _onSignUpScreen = () => {
    router.push(ERouteTable.SIGIN_UP)
  }
  return (
    <View className="px-8">
      <Text className="text-3xl text-center text-primary mb-10">Đăng nhập</Text>
      <GoogleButton title="Đăng nhập bằng Google" />
      <View className="p-6">
        <Text className="text-sm text-center text-disabled">Hoặc sử dụng email của bạn</Text>
      </View>
      <View className="flex-col gap-4">
        <View>
          <AppInput label="Email" placeholder="user@example.com" />
          <AppInput label="Password" placeholder="" secureTextEntry />
        </View>

        <AppButton title="Đăng nhập" onPress={_handleLogin} />
        <View className="flex-row gap-2 justify-center">
          <Text className="text-secondary text-sm">Bạn cần một tài khoản?</Text>
          <TouchableOpacity onPress={_onSignUpScreen}>
            <Text className="underline text-primary">Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignInForm
