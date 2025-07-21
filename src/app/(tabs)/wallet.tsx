import { ImageBackground, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import AppHeader from '@/components/common/AppHeader'
import { images } from '@/constants'
import CurrentBalance from '@/components/wallet/CurrentBalance'
import ListWalletCard from '@/components/wallet/ListWalletCard'

const WalletScreen = () => {
  return (
    <ImageBackground source={images.bgMain} className="flex-1 px-5">
      <SafeAreaView className="flex-1" style={{ paddingTop: StatusBar.currentHeight }}>
        <AppHeader title="" />
        <CurrentBalance />
        <ListWalletCard />
      </SafeAreaView>
    </ImageBackground>
  )
}

export default WalletScreen
