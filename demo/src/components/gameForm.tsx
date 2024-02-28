import { Button, TextField, Grid } from "@material-ui/core";
import * as React from "react";
import { Formik, Form, Field, FormikHelpers, FormikProps } from 'formik';
import * as Yup from 'yup';
//import axiosInstance from '../http-common';
//import { useDispatch } from 'react-redux';
//import { Dispatch } from 'redux';
import { addGame } from "../store/actionCreators";
import { AppContext } from '../context';

interface Values {
    gameName : string;
    editorName : string;
    gameYear: number;
    category: string;
}

export const GameForm = () => {
//const dispatch: Dispatch<any> = useDispatch();
    const {state, dispatch} =  React.useContext(AppContext);
  return (
    <Formik
      initialValues={{ 
          gameName: "Nom du jeu", 
          editorName: "Nom de l'éditeur du jeu",
          gameYear: 2024,
          category: "Catégorie du jeu",
        }}
      onSubmit={(values: Values, {setSubmitting }: FormikHelpers<Values>) => {
        setTimeout(() => {
            let values_post = {
                "nomDuJeu": values.gameName,
                "editeur": values.editorName,
                "anneeDeSortie": values.gameYear,
                "categorie": values.category,
            };
            alert(JSON.stringify(values_post, null, 2));
            //axiosInstance.post("/jeux", values_post);
            const gameToAdd:IGame = {...values, id:Math.random()*1000};

            //saveGame(gameToAdd);
            dispatch({type: 'ADD_GAME', game:gameToAdd});
            setSubmitting(false);
          }, 500);
        }}
        /*validationSchema={Yup.object().shape({
            gameName: Yup.string().matches(/^[A-Za-z0-9 '-]$/).required(
                'Please valid game name. Only letter and number are allowed'),
            editorName: Yup.string().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])\S$/).required(
                    'Please valid Editot name. Only letter and number are allowed'),  
            //gameYear: Yup.string().matches(/^(?=.*[0-9])\S$/).required(
            //            'Please valid Game Year. Only number are allowed'),          
            })}*/
    >
        {(props: FormikProps<Values>) => {
            const {
                values,
                touched,
                errors,
                handleBlur,
                handleChange,
                isSubmitting,
            } = props
            return(
                <Form>
                    <Grid container justify="space-around" direction="row">
                        <Grid item lg={10} md={10} sm={10} xs={10} className='champtext'>
                            <TextField id="gameName" role="input" inputProps={{ "data-testid": "input" }} name="gameName" placeholder="gameName" type="text"
                                        helperText={errors.gameName && touched.gameName ? errors.gameName: 'Enter your game name.'}
                                        error={errors.gameName && touched.gameName? true: false} 
                                        value={values.gameName} onChange={handleChange} onBlur={handleBlur} 
                            />
                        </Grid>
                        <Grid item lg={10} md={10} sm={10} xs={10} className='champtext'>
                            <TextField id="editorName" name="editorName" placeholder="editorName" type="text"
                                       helperText={errors.editorName && touched.editorName ? errors.editorName: 'Enter the Game Editor name.'}
                                       error={errors.editorName && touched.editorName? true: false} 
                                       value={values.editorName} onChange={handleChange} onBlur={handleBlur} 
                            />
                        </Grid>
                        <Grid item lg={10} md={10} sm={10} xs={10} className='champtext'>
                            <TextField id="gameYear" name="gameYear" placeholder="gameYear" type="text"
                              helperText={errors.gameYear && touched.gameYear ? errors.gameYear: 'Enter the Game Year.'}
                              error={errors.gameYear && touched.gameYear? true: false} 
                                       value={values.gameYear} onChange={handleChange} onBlur={handleBlur} 
                            />
                        </Grid>
                        <Grid item lg={10} md={10} sm={10} xs={10} className='champtext'>
                            <TextField id="category" name="category" placeholder="category" type="text" 
                                       value={values.category} onChange={handleChange} onBlur={handleBlur} 
                            />
                        </Grid>
                        <Button type="submit" data-testid="submit">submit</Button>
                    </Grid>
         
                </Form>
            )
        }}
    </Formik>
  );
};