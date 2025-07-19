import { Image, ImageBackground, SafeAreaView, StatusBar, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import AppButton from '@/components/AppButton'
import { useRouter } from 'expo-router'
import { ERouteTable } from '@/constants/route-table'

type Props = {}

const OnboardScreen = ({}: Props) => {
  const router = useRouter()

  const _onLoginScreen = () => {
    router.push(ERouteTable.SIGIN_IN)
  }
  return (
    <View className="flex-1">
      <ImageBackground source={images.bgSplash} className="flex-1">
        <SafeAreaView className="flex-1" style={{ paddingTop: StatusBar.currentHeight }}>
          <View className="flex-1 px-8 items-center pb-8">
            <View className="p-4">
              <Image source={images.logoWhite} className="w-36 h-8" resizeMode="contain" />
            </View>
            <View className="w-full items-center mt-4">
              <Image source={images.bot} className="w-4/5 h-80" resizeMode="contain" />
            </View>
            <View className="flex-1 justify-between">
              <View>
                <Text className="text-4xl text-primary text-center mt-8">
                  Quản lý tài chính thông minh, dễ dàng hơn bao giờ hết.
                </Text>
                <Text className="text-base text-primary text-center mt-4">
                  Với SmartFin, bạn sẽ kiểm soát mọi khoản thu chi, đưa ra quyết định tài chính sáng
                  suốt và hướng đến mục tiêu của mình.
                </Text>
              </View>
              <View>
                <AppButton title="Tiếp tục" onPress={_onLoginScreen} className="mt-8" />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  )
}

export default OnboardScreen
