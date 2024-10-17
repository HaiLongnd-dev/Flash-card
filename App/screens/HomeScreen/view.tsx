import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './style';
import SearchIcon from '../../assets/svg/common/searchIcon';
import {AppText} from '../../components';
import {colors} from '../../themes/color';
import {TTopic} from '../../types/Topic';
import TopicComponentHome from '../../components/TopicComponentHome';
import Navigator from '../../navigation/NavigationService';
import SCREEN_NAME from '../../navigation/ScreenName';

interface HomeScreenViewProps {
  listTopic: TTopic[];
}
const HomeScreenView = ({listTopic}: HomeScreenViewProps) => {
  const showTopicList = () => {
    Navigator.navigateTo(SCREEN_NAME.MANUAL.TOPIC_LIST);
  };
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
            <AppText style={styles.userName}> Welcome back Long</AppText>
          </View>
        </View>
      </View>
      <View style={styles.searchBox}>
        <View>
          <AppText color={colors.black} style={styles.searchBoxTitle}>
            Search Flashcard
          </AppText>
        </View>
        <View>
          <AppText color={colors.black} style={styles.searchBoxDesc}>
            Search through our collection by typing keywords or phrases. Find
            exactly what you're looking for quickly and easily. Simply enter
            your query and browse through the relevant results.
          </AppText>
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
            <AppText color={colors.black} style={styles.categoriesTitle}>
              Flashcard topic
            </AppText>
          </View>

          <View style={styles.categoriesBtn}>
            <TouchableOpacity onPress={showTopicList}>
              <AppText style={styles.categoriesBtnText}>View all</AppText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categoriesContainer}>
          <FlatList
            data={listTopic}
            renderItem={({item}) => <TopicComponentHome topic={item} />}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreenView;
