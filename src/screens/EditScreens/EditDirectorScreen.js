import React, { useEffect, useState } from "react";
import { Card } from "react-native-elements";
import { DirectorDataProvider } from "../../services/DirectorDataProvider";
import { View } from "react-native";
import { ErrorMessage, Formik } from "formik";
import { NativeBaseProvider, Text, Input, Button } from "native-base";
import { object, string } from "yup";


const ErrorComponent = (msg) =>{
    <Text color="red.700" fontSize="md">
        {msg}
    </Text>
}

const validationSchema = object().shape(
    {
    name: string().required(ErrorComponent(`Необходимо ввести режиссёра`)),
    birth: string().required(ErrorComponent(`Необходимо ввести дату рождения`)),
    },
);

const EditDirectorScreen = ({ route, navigation}) => {
    const id = route?.params?.id ?? -1;
    const [defaultValues, setDefaultValues] = useState({
        id,
        name: '',
        birth: '',
    })

    useEffect(() => {
        if (id !== -1)
        {
            DirectorDataProvider.getDirectorByID(id).then(data => {
                setDefaultValues(data.data);
            });
        }
    }, []);

    const handleSubmit = (values) => {
        if (id === -1)
        {
            DirectorDataProvider.putDirector(values)
            .then(() => {
                route.params.refresh();
                navigation.goBack();
            });
        }else{
            DirectorDataProvider.updateDirector(values, id)
            .then(()=>{
                route.params.refresh();
                navigation.goBack();
            });
        }
    };
    
    return <Card>
        <Card.Title>{id === -1 ? 'Добавление' : 'Изменение'}</Card.Title>
        <Card.Divider />
        <View>
            <Formik
                initialValues={defaultValues}
                enableReinitialize={true}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
             {
                 (props) =>{
                     return (
                         <NativeBaseProvider>
                             <View>
                                 <Text fontSize="md">Режиссёр: </Text>
                                 <Input 
                                 onChangeText={props.handleChange('name')} 
                                 onBlur={props.handleBlur('name')} 
                                 value={props.values.name}
                                 placeholder="Введите имя режиссёра"
                                 variant="underlined"
                                />
                                 <ErrorMessage name="name" />
                                 
                                 <Text fontSize="md">Дата рождения: </Text>
                                 <Input 
                                 onChangeText={props.handleChange('birth')} 
                                 onBlur={props.handleBlur('birth')} 
                                 value={props.values.birth}
                                 placeholder="Введите дату рождения"
                                 variant="underlined"
                                />
                                 <ErrorMessage name="birth" />
                                                                 
                             </View>
                             <Button size="sm" 
                             fontSize="md" 
                             variant="outline" 
                             w={{
                                 md:'15%',
                                 base: '75%'
                             }}
                             h={{
                                md: '10',
                             }}
                             mt={6}
                             onPress={props.handleSubmit}
                             >
                             Сохранить</Button>
                         </NativeBaseProvider>
                     )
                 }
             }
            </Formik>
        </View>
    </Card>;
};

export default EditDirectorScreen;