import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screen/Home/HomeScreen';
import TaskScreen from '../../screen/TaskScreen';
import PremiumScreen from '../../screen/PremiumScreen';
import LeardBoardScreen from '../../screen/LeardBoardScreen';
import { AppIcon } from '../../components/AppIcon';
const Tab = createBottomTabNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Ẩn header cho tất cả các tab
        tabBarActiveTintColor: 'red', // Màu sắc khi tab được chọn
        tabBarInactiveTintColor: 'gray', // Màu sắc khi tab không được chọn
        tabBarLabelStyle: {
          fontSize: 14, // Đặt kích thước font cho tên tab
        },
        tabBarStyle: {
          height: 60, // Thay đổi chiều cao của Bottom Tab Bar
          paddingBottom: 4, // Thêm khoảng cách giữa tab bar và cạnh dưới màn hình
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="home-outline" color={color} size='md' />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="LeardBoard"
        component={LeardBoardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="trending-up-outline" color={color} size='md' />
          ),
          tabBarLabel: 'Leaderboard',
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="checkmark-circle-outline" color={color} size='md' />
          ),
          tabBarLabel: 'Task',
        }}
      />
      <Tab.Screen
        name="Premium"
        component={PremiumScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="star-outline" color={color} size='md' />
          ),
          tabBarLabel: 'Premium',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
