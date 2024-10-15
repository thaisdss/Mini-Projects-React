import { TouchableOpacity, TouchableOpacityProps, Image, ImageProps, View, Text } from "react-native";
import { forwardRef } from 'react'

interface ProductDataProps {
    title: string
    description: string
    thumbnail: ImageProps
    quantity?: number
}
interface ProductProps extends TouchableOpacityProps {
    data: ProductDataProps
}
export const Product = forwardRef<TouchableOpacity, ProductProps>(({ data, ...rest }, ref) => {
    return(
        <TouchableOpacity 
        className="w-full flex-row items-center pb-4" 
        ref={ref}
        {...rest}
        >
            <Image source={data.thumbnail} className="h-20 w-20 rounded-md" />
            <View className="flex-1 ml-3">
                <View className="flex-row items-center">
                    <Text className="text-slate-100 font-subtitle text-base flex-1">
                        {data.title}
                    </Text>
                    {data.quantity && (
                        <Text className="text-slate-400 text-sm font-subtitle">
                            x {data.quantity}
                        </Text>
                    )}
                </View>

                <Text className="text-slate-400 text-xs leading-5 mt-0.5">
                    {data.description}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
)