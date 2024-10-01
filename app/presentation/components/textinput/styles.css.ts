import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textInput: {
    flex: 1,
    color: 'black'
  },
});

export const ViewTextInput = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-width: 1px;
  border-color: darkgray;
  border-radius: 8px;
  padding-horizontal: 8px;
  height: 44px;
`;
