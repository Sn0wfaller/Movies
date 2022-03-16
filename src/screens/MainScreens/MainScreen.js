import React from "react";
import{
    StyleSheet,
} from 'react-native';
import{Card, ButtonGroup} from 'react-native-elements';

const buttons = ['Страны','Режиссёры', 'Фильмы'];

const MainScreen = ({navigation}) => {

    const handleWorkModeChange = (pressedButtonIndex) => {
        switch(pressedButtonIndex){
            case 0:
                navigation.navigate('CountryMainScreen');
            break;
            case 1:
                navigation.navigate('DirectorMainScreen');
            break;
            case 2:
                navigation.navigate('MovieMainScreen');
            break;
        }
    }

    return(
        <Card>
            <ButtonGroup
            buttons={buttons}
            containerStyle = {{height:50}}
            selectedButtonSttyle={{backgroundCollor:'#f00'}}
            onPress={handleWorkModeChange} />
        </Card>
    )
};
export default MainScreen;
const styles = StyleSheet.create({
    list:{
        marginBottom:150,
    },
    textContainer: {
        borderColor:'#D3D3D3',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: 60,
    },
    text:{
        fontSize:25,
        maxWidth:250,
        flexWrap: "wrap",
        flexDirection: "row",
    },
    buttonGroup: {
        display: "flex",
        flexDirection: 'column',
        marginVertical:  5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#D3D3D3',
        height: 500
    }
});    
    
