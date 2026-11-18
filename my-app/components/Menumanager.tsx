import React, { useMemo, useState } from 'react';
import { Alert, FlatList, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, useMenu } from './App';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'MenuManager'>;

export default function MenuManagerScreen({ navigation }: Props) {
  const { menuItems, deleteMenuItem } = useMenu();
  const [search, setSearch] = useState('');
  const [courseFilter, setCourseFilter] = useState<'All' | 'Starter' | 'Main Course' | 'Dessert'>('All');

  const filteredItems = useMemo(() => menuItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.trim().toLowerCase());
    const matchesCourse = courseFilter === 'All' || item.course === courseFilter;
    return matchesSearch && matchesCourse;
  }), [menuItems, search, courseFilter]);

  const averagePrice = menuItems.length
    ? menuItems.reduce((total, item) => total + item.price, 0) / menuItems.length
    : 0;

  const confirmDelete = (id: string, name: string) => {
    Alert.alert('Delete menu item', `Remove "${name}" from the menu?`, [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => deleteMenuItem(id) },
    ]);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{menuItems.length}</Text>
          <Text style={styles.statLabel}>Total items</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>R {averagePrice.toFixed(2)}</Text>
          <Text style={styles.statLabel}>Average price</Text>
        </View>
      </View>
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by dish name"
          value={search}
          onChangeText={setSearch}
        />
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => { setSearch(''); setCourseFilter('All'); }}
        >
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pickerBox}>
        <Picker selectedValue={courseFilter} onValueChange={(value) => setCourseFilter(value)}>
          <Picker.Item label="All courses" value="All" />
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main Course" value="Main Course" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>
      </View>
      <Text style={styles.sectionTitle}>
        Menu Items ({filteredItems.length})
      </Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardText}>
                <Text style={styles.dishName}>{item.name}</Text>
                <Text style={styles.courseText}>{item.course}</Text>
              </View>
              <Text style={styles.priceText}>R {item.price.toFixed(2)}</Text>
            </View>
            <Text style={styles.descriptionText}>{item.description}</Text>
            <View style={styles.cardActions}>
              <TouchableOpacity
                style={[styles.actionButton, styles.editButton]}
                onPress={() => navigation.navigate('AddDish', { editDish: item })}
              >
                <Text style={styles.actionButtonText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.deleteButton]}
                onPress={() => confirmDelete(item.id, item.name)}
              >
                <Text style={styles.actionButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyMessage}>No menu items match your search.</Text>}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.bottomActions}>
        <TouchableOpacity style={[styles.primaryButton, styles.flexButton]} onPress={() => navigation.navigate('AddDish')}>
          <Text style={styles.primaryButtonText}>Add Dish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.secondaryButton, styles.flexButton]}
          onPress={() => navigation.navigate('ViewMenu', { currentItems: menuItems })}
        >
          <Text style={styles.secondaryButtonText}>View Menu</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
