import React from 'react';

import {IProps} from 'presentation/features/photo/Photo';
import {useBloc} from 'presentation/features/photo/Photo.hook';
import {
  ImagePreview,
  RecycleView,
  TextPrimary,
  ViewColumn,
  ViewContainer,
  ViewPhotoItem,
} from 'presentation/features/photo/styles.css';
import {Hit} from 'domain/entities/photo';
import AppTextInput from 'presentation/components/textinput';
import {RefreshControl} from 'react-native';

const PhotoScreen: React.FC<IProps> = () => {
  const {isLoading, photos, onLastValueChange, onEndReached, onRefresh} =
    useBloc();

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
      <AppTextInput
        placeholder={'Tìm kiếm'}
        isClear={true}
        onLastValueChange={onLastValueChange}
      />
      <RecycleView
        data={photos}
        renderItem={renderPhotoItem}
        removeClippedSubviews={true}
        scrollEventThrottle={8}
        initialNumToRender={6}
        maxToRenderPerBatch={8}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.4}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
        }
      />
    </ViewContainer>
  );
};

export default React.memo(PhotoScreen);
