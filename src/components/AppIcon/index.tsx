import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons"
import { normalize } from "@rneui/themed"
import React from "react"

interface AppIconProps {
  name: string
  from?:
    | "AntDesign"
    | "Entypo"
    | "EvilIcons"
    | "Feather"
    | "FontAwesome"
    | "FontAwesome5"
    | "Foundation"
    | "Ionicons"
    | "MaterialCommunityIcons"
    | "MaterialIcons"
    | "Octicons"
    | "SimpleLineIcons"
    | "Zocial"
  size?: "sm" | "md" | "lg" | "xl" | "xxl"
  color?: string
}

const AppIconMemo: React.FC<AppIconProps> = (props) => {
  const size = {
    xs: 14,
    sm: 18,
    md: 24,
    lg: 32,
    xl: 40,
    xxl: 58,
  }

  let IconComponent
  switch (props.from) {
    case "AntDesign":
      IconComponent = AntDesign
      break
    case "Entypo":
      IconComponent = Entypo
      break
    case "EvilIcons":
      IconComponent = EvilIcons
      break
    case "Feather":
      IconComponent = Feather
      break
    case "FontAwesome":
      IconComponent = FontAwesome
      break
    case "FontAwesome5":
      IconComponent = FontAwesome5
      break
    case "Foundation":
      IconComponent = Foundation
      break
    case "Ionicons":
      IconComponent = Ionicons
      break
    case "MaterialCommunityIcons":
      IconComponent = MaterialCommunityIcons
      break
    case "MaterialIcons":
      IconComponent = MaterialIcons
      break
    case "Octicons":
      IconComponent = Octicons
      break
    default:
      IconComponent = Ionicons
  }

  return <IconComponent name={props.name} size={normalize(size[props.size || "md"])} color={props.color} />
}

export const AppIcon = React.memo(AppIconMemo)
