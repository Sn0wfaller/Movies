import React, { useEffect, useState } from "react";
import { Card } from "react-native-elements";
import { MovieDataProvider } from "../../services/MovieDataProvider";
import { View, Picker, Dimensions,} from "react-native";
import { ErrorMessage, Formik } from "formik";
import { NativeBaseProvider, Text, Input, Button, Flex, Box } from "native-base";
import { object, string } from "yup";
import {DirectorDataProvider} from "../../services/DirectorDataProvider"
import {CountryDataProvider} from "../../services/CountryDataProvider"
import Loading from "../LoadingScreens/Loading";

const ErrorComponent = (msg) =>{
    <Text color="red.700" fontSize="md">
        {msg}
    </Text>
}

const validationSchema = object().shape(
    {
    title: string().required(ErrorComponent(`Необходимо ввести название фильма`)),
    director: string().required(ErrorComponent('Поле не может быть пустым')),
    country: string().required(ErrorComponent('Поле не может быть пустым')),
    },
);

const EditMovieScreen = ({ route, navigation}) => {
    const id = route?.params?.id ?? -1;
    const [defaultValues, setDefaultValues] = useState({
        id,
        director: 1,
        country: 1,
        title: '',
        release: 0,
    });

    const [isLoading, setIsLoading] = useState(0)
    const [directors, setDirectors] = useState()
    const [countries, setCountries] = useState()


    useEffect(() => {
        if (id !== -1)
        {
            MovieDataProvider.getMovieByID(id).then(data => {
                setDefaultValues({
                    ...data.data,
                    director: data.data.director.id,
                    country: data.data.country.id
                });
            });
        }

        let count = 0;

        DirectorDataProvider.getAllDirectorsShortInfo().then((directors) => {
            const mappedDirectors = directors.data.map((director) => ({
                key: director.id,
                ...director,
            }));

            setDirectors(mappedDirectors);
            count++;
            setIsLoading(count)
        });

        CountryDataProvider.getAllCountriesShortInfo().then((countries) => {
            const mappedCountries = countries.data.map((country) => ({
                key: country.id,
                ...country,
            }));
            setCountries(mappedCountries);
            count++;
            setIsLoading(count)
        })
    }, []);

    const handleSubmit = async (values) => {
        if (id === -1)
        {
            values = {
                title: values.title,
                countryId: values.country,
                directorId: values.director,
                release: values.release
            }
            MovieDataProvider.putMovie(values).then(() =>{
                route.params.refresh();
                navigation.goBack();
            });
        }else{
            values = {
                ...values,
                country: await (await CountryDataProvider.getCountryByID(values.country)).data,
                director: await (await DirectorDataProvider.getDirectorByID(values.director)).data,
            }
            MovieDataProvider.updateMovie(values).then(() => {
                route.params.refresh();
                navigation.goBack();
            });
        }
    }
    if (isLoading < 2) return <Loading />;
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
                             <Flex>
                                 <Box>
                                 <Text fontSize="md">Название фильма: </Text>
                                 <Input 
                                 onChangeText={props.handleChange('title')} 
                                 onBlur={props.handleBlur('title')} 
                                 value={props.values.title}
                                 placeholder="Введите название фильма"
                                 variant="underlined"
                                />
                                 <ErrorMessage name="title" />
                                 </Box>
                                 
                                 <Box>
                                 <Text fontSize="md">Режиссёр: </Text>
                                 <Picker 
                                 selectedValue={props.values.director}
                                 style={{ height: 30, width: Dimensions.get('window').width * 0.8 }}
                                 onValueChange={props.handleChange('director')}
                                 >
                                    {
                                        directors.map((director) => (
                                            <Picker.Item key={director.key} label ={director.name} value={director.id}/>
                                        ))
                                    }
                                </Picker>
                                 <ErrorMessage name="director" />
                                </Box>

                                <Box>
                                 <Text fontSize="md">Страна производства: </Text>
                                 <Picker 
                                 selectedValue={props.values.country}
                                 style={{ height: 30, width: Dimensions.get('window').width * 0.8 }}
                                 onValueChange={props.handleChange('country')}
                                 >
                                    {
                                        countries.map((country) => (
                                            <Picker.Item key={country.key} label ={country.title} value={country.id}/>
                                        ))
                                    }
                                </Picker>
                                 <ErrorMessage name="director" />
                                 </Box>

                                 <Box>
                                 <Text fontSize="md">Год выпуска: </Text>
                                 <Input 
                                 onChangeText={props.handleChange('release')} 
                                 onBlur={props.handleBlur('release')} 
                                 value={props.values.release}
                                 placeholder="Введите год выпуска"
                                 variant="underlined"
                                />
                                 <ErrorMessage name="release" />
                                </Box>                  
                             </Flex>
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

export default EditMovieScreen;