import { TextInput } from "react-native";
import { View } from "react-native";
import styled from 'styled-components/native';

import { ThemedText } from '@/app/components/ThemedText';
import ParallaxScrollView from '@/app/components/ParallaxScrollView';

export default function SearchScreen() {
    return (     <ParallaxScrollView
          headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}>
            <View>
              <ThemedText>This screen helps you find something.</ThemedText>
              <RoundedBox>
                <Input>
              
                </Input>
                <ClearInputButton  onPress={handlePress}>
                  <ClearInputButtonTappableBox>
                  <ClearInputIcon />
                  </ClearInputButtonTappableBox>
                </ClearInputButton>
                </RoundedBox>
                   <ThemedText>This screen helps you find something.</ThemedText>
                </View>
    </ParallaxScrollView>
    );

}

const handlePress = () => {

}


const Input = styled(TextInput).attrs({
  testID: 'searchInput',
  selectionColor: '#832080',
  placeholderTextColor: '#138080',
})` 
  flex: 1;
  height: 100%;
  padding: 0px;
  color: '#832080';
  font-family: 'Inter-Bold';
  letter-spacing: 0.2px;
`

const RoundedBox = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  border-radius: 12px;
  outline-width: 1px;
  outline-color: red;
  background-color: '#832080';
`

const ClearInputButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 10, bottom: 10, left: 10, right: 10 },
})``

const ClearInputButtonTappableBox = styled.View`
  margin-end: -8px;
  padding: 8px;
`

const ClearInputIcon = styled.Image.attrs({
  resizeMode: 'contain',

  source: require('@/app/assets/images/react-logo.png'),
})`
  height: 30;
  width: 30;
  `