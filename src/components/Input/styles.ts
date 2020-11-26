import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
    width: 90%;
    height: 60px;
    padding: 0 16px;
    background: #fff;
    border-radius: 10px;
    border-width: 1px;
    border-color: #1f1e26;
    margin-bottom: 8px;

    flex-direction: row;
    align-items: center;
`;

export const TextInput = styled.TextInput`
    flex: 1;
    color: #1f1e26;
    font-size: 16px;
    font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
    margin-right: 12px;
`;