import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, MenuItem, useMenu } from './App';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'AddDish'>;

export default function AddDishScreen({ route, navigation }: Props) {
  const { addMenuItem, updateMenuItem } = useMenu();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState<'Starter' | 'Main Course' | 'Dessert'>('Main Course');
  const [price, setPrice] = useState('');
  const editDish = route.params?.editDish;

  useEffect(() => {
    if (editDish) {
      setName(editDish.name);
      setDescription(editDish.description);
      setCourse(editDish.course);
      setPrice(String(editDish.price));
      navigation.setOptions({ title: 'Edit Menu Item' });
    }
  }, [editDish, navigation]);

  const handleSave = () => {
    if (!name.trim() || !description.trim() || !price.trim()) {
      Alert.alert('Validation Error', 'Please complete all form fields.');
      return;
    }
    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      Alert.alert('Validation Error', 'Please specify a valid numeric price item value.');
      return;
    }
    const menuItem: MenuItem = {
      id: editDish?.id ?? Date.now().toString(),
      name: name.trim(),
      description: description.trim(),
      course: course,
      price: numericPrice,
    };
    if (editDish) {
      updateMenuItem(menuItem);
      Alert.alert('Success', 'Menu item updated successfully.', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } else {
      addMenuItem(menuItem);
      Alert.alert('Success', 'Menu item added successfully.', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.formScreen}>
      <Text style={styles.formTitle}>{editDish ? 'Edit menu item' : 'Add a new dish'}</Text>
      <Text style={styles.fieldLabel}>Dish Name</Text>
      <TextInput style={styles.inputField} placeholder="Enter dish name" value={name} onChangeText={setName} />
      <Text style={styles.fieldLabel}>Description</Text>
      <TextInput
        style={[styles.inputField, styles.textArea]}
        placeholder="Enter a short description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Text style={styles.fieldLabel}>Course Category</Text>
      <View style={styles.pickerBox}>
        <Picker selectedValue={course} onValueChange={(itemValue) => setCourse(itemValue)}>
          <Picker.Item label="Starter" value="Starter" />
          <Picker.Item label="Main Course" value="Main Course" />
          <Picker.Item label="Dessert" value="Dessert" />
        </Picker>
      </View>
      <Text style={styles.fieldLabel}>Price</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Enter price"
        keyboardType="decimal-pad"
        value={price}
        onChangeText={setPrice}
      />
      <View style={styles.actionButtonRow}>
        <TouchableOpacity style={[styles.primaryButton, styles.flexButton]} onPress={handleSave}>
          <Text style={styles.primaryButtonText}>{editDish ? 'Save Changes' : 'Save Dish'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.cancelButton, styles.flexButton]} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
