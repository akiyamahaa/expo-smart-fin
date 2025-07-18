import { Image, SafeAreaView, StatusBar, View } from 'react-native'
import React, { useEffect } from 'react'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { useRouter } from 'expo-router'

const SplashScreen = () => {
  const router = useRouter()

  const onStart = async () => {
    router.push('/home')
  }

  useEffect(() => {}, [])

  return (
    <SafeAreaView
      className="bg-white flex-1 justify-center"
      style={{ paddingTop: StatusBar.currentHeight }}
    >
      <View className="px-8 py-4 gap-y-6 justify-center items-center">
        <Image source={images.cards} className="w-[350px] h-[350px]" />
        <CustomButton title="Bắt đầu" onPress={onStart} />
      </View>
    </SafeAreaView>
  )
}

export default SplashScreen
