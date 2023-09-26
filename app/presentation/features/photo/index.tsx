import React from 'react';
import {FlatList} from 'react-native';

import {IProps} from 'presentation/features/photo/Photo';
import {useBloc} from 'presentation/features/photo/Photo.hook';
import {
  ImagePreview,
  TextPrimary,
  ViewColumn,
  ViewContainer,
  ViewPhotoItem,
} from 'presentation/features/photo/styles.css';
import {Hit} from 'domain/entities/photo';

const PhotoScreen: React.FC<IProps> = () => {
  const {photos} = useBloc();

  const renderPhotoItem = ({item}: {item: Hit}) => {
    return (
      <ViewPhotoItem key={`${item?.id}`}>
        <ImagePreview source={{uri: item?.previewURL}} />
        <ViewColumn marginLeft={16}>
          <TextPrimary fontWeight="700">{`${item?.user}`}</TextPrimary>
          <TextPrimary>{`Thẻ: ${item?.tags}`}</TextPrimary>
          <TextPrimary>{`Lượt thích: ${item?.likes}`}</TextPrimary>
          <TextPrimary>{`Bình luận: ${item?.comments}`}</TextPrimary>
        </ViewColumn>
      </ViewPhotoItem>
    );
  };

  return (
    <ViewContainer>
      <FlatList data={photos} renderItem={renderPhotoItem} />
    </ViewContainer>
  );
};
export default React.memo(PhotoScreen);
