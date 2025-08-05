import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GoogleButton from '@/components/common/GoogleButton'
import AppInput from '@/components/form/AppInput'
import AppButton from '@/components/common/AppButton'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'

type Props = {}

const SignUpForm = ({}: Props) => {
  const router = useRouter()

  const _handleSignUp = () => {
    router.push(ERouteTable.VERIFY_EMAIL)
  }

  const _onSignInScreen = () => {
    router.push(ERouteTable.SIGIN_IN)
  }
  return (
    <View className="px-8">
      <Text className="text-3xl text-center text-primary mb-10">Tạo tài khoản</Text>
      <GoogleButton title="Đăng ký bằng Google" />
      <View className="p-6">
        <Text className="text-sm text-center text-disabled">Hoặc sử dụng email của bạn</Text>
      </View>
      <View className="flex-col gap-4">
        <View>
          <AppInput label="Email" placeholder="user@example.com" />
          <AppInput label="Password" placeholder="" secureTextEntry />
        </View>

        <AppButton title="Tạo tài khoản" onPress={_handleSignUp} />
        <View className="flex-row gap-2 justify-center">
          <Text className="text-secondary text-sm">Bạn có một tài khoản?</Text>
          <TouchableOpacity onPress={_onSignInScreen}>
            <Text className="underline text-primary">Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default SignUpForm
