import React, { useEffect, useState } from "react";
import { Card } from "react-native-elements";
import { CountryDataProvider } from "../../services/CountryDataProvider";
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
    title: string().required(ErrorComponent(`Необходимо ввести название страны`)),
    },
);

const EditCountryScreen = ({ route, navigation}) => {
    const id = route?.params?.id ?? -1;
    const [defaultValues, setDefaultValues] = useState({
        id,
        title: '',
    })

    useEffect(() => {
        if (id !== -1)
        {
            CountryDataProvider.getCountryByID(id).then(data => {
                setDefaultValues(data.data);
            });
        }
    }, []);

    const handleSubmit = (values) => {
        if (id === -1)
        {
            CountryDataProvider.putCountry(values)
            .then(() => {
                route.params.refresh();
                navigation.goBack();
            });
        }else{
            CountryDataProvider.updateCountry(values, id)
            .then(() => {
                route.params.refresh();
                navigation.goBack();
            });
        }
    }
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
                                 <Text fontSize="md">Страна: </Text>
                                 <Input 
                                 onChangeText={props.handleChange('title')} 
                                 onBlur={props.handleBlur('title')} 
                                 value={props.values.title}
                                 placeholder="Введите название страны"
                                 variant="underlined"
                                />
                                 <ErrorMessage name="title" />                              
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

export default EditCountryScreen;