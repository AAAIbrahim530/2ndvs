import React, { useMemo, useState } from 'react';
import { FlatList, SafeAreaView, Text, TextInput, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'ViewMenu'>;

export default function ViewMenuScreen({ route }: Props) {
  const { currentItems } = route.params;
  const [search, setSearch] = useState('');
  const filteredItems = useMemo(
    () => currentItems.filter((item) => item.name.toLowerCase().includes(search.trim().toLowerCase())),
    [currentItems, search],
  );
  const courseCounts = currentItems.reduce<Record<string, number>>((counts, item) => {
    counts[item.course] = (counts[item.course] || 0) + 1;
    return counts;
  }, {});

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{currentItems.length}</Text>
          <Text style={styles.statLabel}>Total items</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{courseCounts['Starter'] || 0}</Text>
          <Text style={styles.statLabel}>Starters</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{courseCounts['Main Course'] || 0}</Text>
          <Text style={styles.statLabel}>Main courses</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{courseCounts['Dessert'] || 0}</Text>
          <Text style={styles.statLabel}>Desserts</Text>
        </View>
      </View>
      <TextInput
        style={styles.searchInputFull}
        placeholder="Search the menu"
        value={search}
        onChangeText={setSearch}
      />
      {filteredItems.length === 0 ? (
        <Text style={styles.emptyMessage}>
          {currentItems.length === 0 ? 'No menu items have been added yet.' : 'No menu items match your search.'}
        </Text>
      ) : (
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
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
}
