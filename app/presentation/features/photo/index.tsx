import React from 'react';
import {FlatList, Text} from 'react-native';

import {IProps} from 'presentation/features/photo/Photo';
import {useBloc} from 'presentation/features/photo/Photo.hook';
import {ViewContainer} from 'presentation/features/photo/styles.css';

const PhotoScreen: React.FC<IProps> = (props: IProps) => {
  const {photos} = useBloc(props);

  const renderPhotoItem = ({item}: {item: any}) => {
    return (
      <Text
        key={`${item?.id}`}
        style={{color: 'black'}}>{`${item?.user}`}</Text>
    );
  };

  return (
    <ViewContainer>
      <FlatList data={photos} renderItem={renderPhotoItem} />
    </ViewContainer>
  );
};
export default React.memo(PhotoScreen);
