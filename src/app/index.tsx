import { Image, ImageBackground, StatusBar, Text, View } from 'react-native'
import { useEffect } from 'react'
import { router } from 'expo-router'
import { images } from '@/constants'
import { ERouteTable } from '@/constants/route-table'
import { useAuthStore } from '@/modules/auth/store/useAuthStore'

export default function Root() {
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAuthenticated) {
        router.replace(ERouteTable.HOME)
      } else {
        router.replace(ERouteTable.ONBOARD)
      }
    }, 500)
    return () => clearTimeout(timer)
  }, [isAuthenticated])

  return (
    <View className="flex-1">
      <StatusBar translucent backgroundColor={'transparent'} barStyle="dark-content" />
      <ImageBackground source={images.bgSplash} className="flex-1">
        {/* Logo */}
        <View className="justify-center items-center flex-1">
          <Image source={images.logoApp2} className="w-40 h-40" resizeMode="contain" />
        </View>
        {/* Slogan */}
        <View className="absolute bottom-10 w-full items-center px-6">
          <Text className="text-center text-sm text-primary font-medium">
            Quản lý tài chính thông minh,{'\n'}cuộc sống dễ dàng hơn.
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}
