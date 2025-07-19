import { Image, ImageBackground, SafeAreaView, StatusBar, View } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { images } from '@/constants'

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <ImageBackground source={images.bgAuth} className="flex-1">
      <SafeAreaView
        className="flex-1 justify-between"
        style={{ paddingTop: StatusBar.currentHeight }}
      >
        <View className="p-4 items-center">
          <Image source={images.logoBlack} className="w-36 h-8" resizeMode="contain" />
        </View>
        <View>{children}</View>
        <View />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default AuthLayout
