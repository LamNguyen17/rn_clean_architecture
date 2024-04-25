import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import {TextStyle, ViewStyle} from 'react-native';

export const ViewContainer = styled.View`
  flex: 1;
  background-color: white;
  padding-horizontal: 16px;
  padding-vertical: 16px;
`;

export const ViewPhotoItem = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const ImagePreview = styled(FastImage)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const RecycleView = styled.FlatList`
  margin-top: 16px;
`;

export const ViewColumn = styled.View.attrs((props: ViewStyle) => ({
  marginLeft: props.marginLeft || 0,
}))`
  margin-left: ${(props: ViewStyle) => props.marginLeft};
`;

export const TextPrimary = styled.Text.attrs((props: TextStyle) => ({
  fontWeight: props.fontWeight || '400',
}))`
  color: black;
  font-weight: ${(props: TextStyle) => props.fontWeight};
`;
