import React, { createContext, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuManagerScreen from './Menumanager';
import AddDishScreen from './Dish';
import ViewMenuScreen from './View';


export interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: 'Starter' | 'Main Course' | 'Dessert';
  price: number;
}

export type RootStackParamList = {
  MenuManager: undefined;
  AddDish: { editDish?: MenuItem } | undefined;
  ViewMenu: { currentItems: MenuItem[] };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type MenuContextValue = {
  menuItems: MenuItem[];
  addMenuItem: (item: MenuItem) => void;
  updateMenuItem: (item: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
};

const MenuContext = createContext<MenuContextValue | undefined>(undefined);

export function useMenu() {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within MenuProvider');
  }
  return context;
}

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: '1', name: 'Garlic Butter Shrimp', description: 'Pan-seared shrimp with garlic.', course: 'Starter', price: 120 },
    { id: '2', name: 'Grilled Rosemary Ribeye Steak', description: '300g beef with rosemary butter.', course: 'Main Course', price: 250 },
  ]);

  const menuContextValue: MenuContextValue = {
    menuItems,
    addMenuItem: (item) => setMenuItems((items) => [...items, item]),
    updateMenuItem: (item) => setMenuItems((items) => items.map((existing) => existing.id === item.id ? item : existing)),
    deleteMenuItem: (id) => setMenuItems((items) => items.filter((item) => item.id !== id)),
  };

  return (
    <MenuContext.Provider value={menuContextValue}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MenuManager"
          screenOptions={{
            headerStyle: { backgroundColor: '#1B4332' },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: { fontWeight: '700' },
          }}
        >
          <Stack.Screen name="MenuManager" component={MenuManagerScreen} options={{ title: 'Menu Manager' }} />
          <Stack.Screen name="AddDish" component={AddDishScreen} options={{ title: 'Menu Item' }} />
          <Stack.Screen name="ViewMenu" component={ViewMenuScreen} options={{ title: 'Current Restaurant Menu' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuContext.Provider>
  );
}
