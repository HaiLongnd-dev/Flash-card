import React, {useState} from 'react';
import TopicView from './view';
import {TTopic} from '../../types/Topic';

import {AppDispatch} from '../../redux/store';
import ConfirmModal from '../../components/Core/ConfirmModal';
import {removeTopicAction} from '../../redux/actions/topicAction';
import {useDispatch} from 'react-redux';
import Navigator from '../../navigation/NavigationService';

interface TopicProps {
  topic: TTopic;
  editTopicOpt?: boolean;
}
const Topic = ({topic, editTopicOpt}: TopicProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<TTopic['id']>(null);
  const handleDelete = (id: TTopic['id']) => {
    setModalVisible(true);
    setSelectedTopicId(id);
  };

  const handleConfirm = () => {
    if (selectedTopicId !== null) {
      dispatch(removeTopicAction(selectedTopicId));
    }
    setModalVisible(false);
    setSelectedTopicId(null);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleEdit = (topic: TTopic) => {
    Navigator.navigateTo('EDIT_TOPIC', {topic});
  };
  return (
    <>
      <TopicView
        editTopicOpt={editTopicOpt}
        topic={topic}
        handleEdit={() => handleEdit(topic)}
        handleDelete={handleDelete}
      />
      <ConfirmModal
        message="Are you sure to delete this card?"
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        visible={modalVisible}
      />
    </>
  );
};

export default Topic;
