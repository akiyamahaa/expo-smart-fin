import { SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react'
import { useAuthStore } from '@/modules/auth/store/useAuthStore'
import AppHeader from '@/components/common/AppHeader'
import WelcomeUser from '@/components/home/WelcomeUser'
import WalletHome from '@/modules/wallet/components/WalletHome'
import ListButtonAction from '@/components/home/ListButtonAction'

const Home = () => {
  const { signOut, user } = useAuthStore()
  return (
    <View className="flex-1 px-5 bg-neutral">
      <SafeAreaView className="flex-1" style={{ paddingTop: StatusBar.currentHeight }}>
        <AppHeader title="" />
        <WelcomeUser />
        <WalletHome />
        <ListButtonAction />
      </SafeAreaView>
    </View>
  )
}

export default Home
