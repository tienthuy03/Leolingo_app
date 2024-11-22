
import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleProp, ViewStyle } from "react-native"
import { Edges, SafeAreaView } from "react-native-safe-area-context"

interface BaseSafeAreaProps {
  children: React.ReactNode
  edges: Edges
  style?: StyleProp<ViewStyle>
  onTouchEnd?: () => void
}

const BaseSafeAreaMemo: React.FC<BaseSafeAreaProps> = (props) => {

  return (
    <>
      <StatusBar animated translucent />
      <SafeAreaView style={props.style} edges={props.edges} onTouchEnd={props.onTouchEnd}>
        {props.children}
      </SafeAreaView>
    </>
  )
}

export const BaseSafeArea = React.memo(BaseSafeAreaMemo)
