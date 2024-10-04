import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';
import SearchIcon from '../../assets/svg/searchIcon';
import Category from '../../components/category';
import ScreenName from '../../navigation/ScreenName';
import HomeIcon from '../../assets/svg/homeIcon';

const HomeScreenView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBox}>
          <View style={styles.avaBox}>
            <Image
              style={styles.ava}
              source={require('../../assets/images/ava.jpg')}
            />
          </View>
          <View style={styles.userNameBox}>
            <Text style={styles.userName}> Welcome back Long</Text>
          </View>
        </View>
      </View>
      <View style={styles.searchBox}>
        <View>
          <Text style={styles.searchBoxTitle}>Search Flashcard</Text>
        </View>
        <View>
          <Text style={styles.searchBoxDesc}>
            Search through our collection by typing keywords or phrases. Find
            exactly what you're looking for quickly and easily. Simply enter
            your query and browse through the relevant results.
          </Text>
        </View>
        <View style={styles.searchBoxInput}>
          <View style={styles.icon}>
            <SearchIcon />
          </View>
          <TextInput style={styles.searchInput} placeholder="Search Here" />
        </View>
      </View>
      <View style={styles.categories}>
        <View style={styles.categoriesHeader}>
          <View>
            <Text style={styles.categoriesTitle}>Flashcard categories</Text>
          </View>

          <View style={styles.categoriesBtn}>
            <TouchableOpacity>
              <Text style={styles.categoriesBtnText}>View all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoriesContainer}>
          <Category
            icon={<HomeIcon />}
            title={'Math'}
            categoryScreen={ScreenName.ROOT.ADD_CARD_SCREEN}
          />
          <Category
            icon={<HomeIcon />}
            title={'Math'}
            categoryScreen={ScreenName.ROOT.ADD_CARD_SCREEN}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreenView;
