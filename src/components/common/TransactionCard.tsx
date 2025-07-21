import { Text, View } from 'react-native'
import React from 'react'
import { ShoppingCart } from 'iconsax-react-native'
import { formatCurrencyToVND } from '../../utils/utils'
import clsx from 'clsx'

type Props = {
  price?: number
}

const TransactionCard = ({ price = 30000 }: Props) => {
  return (
    <View className="flex-row items-center justify-between gap-2 p-2 bg-white rounded-2xl">
      <View className="flex-row items-center gap-3">
        <View className="p-1.5 bg-transparent-error rounded-xl">
          <ShoppingCart size={24} color="#F44336" />
        </View>
        <Text className="text-base text-primary">Chi tiêu mua sắm</Text>
      </View>
      <Text
        className={clsx(
          'text-base font-semibold',
          price > 0 ? 'text-primary-main' : 'text-secondary-main',
        )}
      >
        {price > 0 ? '+' : '-'} {formatCurrencyToVND(price)}
      </Text>
    </View>
  )
}

export default TransactionCard
