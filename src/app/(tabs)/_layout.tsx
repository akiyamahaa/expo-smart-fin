import React from 'react'
import { Tabs } from 'expo-router'
import { View } from 'react-native'
import { Home2, Magicpen, Wallet3, ReceiptEdit, NotificationBing } from 'iconsax-react-native'
import { clsx } from 'clsx'

const icons = {
  home: Home2,
  wallet: Wallet3,
  transaction: ReceiptEdit,
  notify: NotificationBing,
  chatbot: Magicpen,
}

type TabIconProps = {
  Icon: React.ElementType
  focused: boolean
}

const TabIcon = ({ Icon, focused }: TabIconProps) => {
  return (
    <View
      className={clsx(
        'w-14 mt-8 aspect-square rounded-full items-center justify-center',
        focused ? 'bg-white dark:bg-zinc-900' : '',
      )}
    >
      <Icon
        size={24}
        color={focused ? '#0F172A' : '#CBD5E1'}
        variant={focused ? 'Bold' : 'Outline'}
      />
    </View>
  )
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          marginLeft: 52,
          marginRight: 52,
          height: 64,
          borderRadius: 999,
          backgroundColor: '#1F2937',
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 8,
          shadowOffset: { width: 0, height: 3 },
        },
        tabBarItemStyle: {
          alignSelf: 'center',
        },
        tabBarIcon: ({ focused }) => {
          const Icon = icons[route.name as keyof typeof icons]
          return <TabIcon Icon={Icon} focused={focused} />
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="wallet" options={{ title: 'Wallet' }} />
      <Tabs.Screen name="transaction" options={{ title: 'Transaction' }} />
      <Tabs.Screen name="notify" options={{ title: 'Notify' }} />
      <Tabs.Screen name="chatbot" options={{ title: 'Chatbot' }} />
    </Tabs>
  )
}
