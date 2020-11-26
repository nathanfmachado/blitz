import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 90%;
    height: 60px;
    background: #7e65b8;
    border-radius: 10px;

    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-size: 20px;
    color: #f2f2e8;
    font-family: 'RobotoSlab-SemiBold';
`;