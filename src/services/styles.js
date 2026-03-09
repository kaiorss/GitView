import styled from "styled-components/native";
import {RectButton} from "react-native-gesture-handler";

// Estilos da Pagina main 


export const Container = styled.View`
    flex: 1;
    padding: 30 px;
    
`;

export const Form = styled.View`
    flex-direction: row ;
    padding-bottom: 20px;
    border-bottom-width: 1 px ;
    border-color: #eee;
    

`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#999",
})`
    flex: 1;
    height: 40px;
    background: #eee;
    border-radius: 4px;
    padding: 0 15px;
    boder: 1px solid #ccc;
    
`;


export const SubmitButtom = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #9705f9c2;
    margin-left: 10px;
    padding: 0 12 px;
    opacity: ${(props)=>(props.loading ? 0.7 : 1)};


`;

export const List = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false 
})
`
    margin-top: 20px;
`;

export const User = styled.View`
    align-items: center;
    margin: 0 20px 30px;
    
`

export const Avatar = styled.Image`
    width: 64px;
    height: 6px;
    border-radius: 32px;
    background: #eee;
`

export const Name = styled.Text`
    font-size: 14px;
    color: #333;
    font-weight: bold;
    margin-top : 4px;
    text-align: center;

`

export const Bio = styled.text.attrs({
    numberOfLines: 2,
})
`
line-height: 18 ppx;
color: #999
margin-top: 5px
text-align: center;
`;

export const ProfileButton = styled(RectButton)`
    margin-top 10px;
    align-self: stretch;
    border-radius: 4px;
    background: #505050
    justify-content: center;
    align-items: center;
    height: 36 px;

`
export const ProfileButtonText = styled.text`
    font-size: 14px;
    font-weight: bold;
    color #fff;
    text-transform: uppercase;
`