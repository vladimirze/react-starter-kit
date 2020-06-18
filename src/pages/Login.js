import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { TextField } from 'formik-material-ui';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {withFormik, Field} from "formik";


const Login = (props) => {
    return (
        <Container fixed>
            <form noValidate onSubmit={props.handleSubmit}>
                <Grid container direction="column" alignContent="center" spacing={3}>
                    <Grid item xs={6}>
                        <Field name="username" component={TextField} fullWidth label="Username"/>
                    </Grid>

                    <Grid item xs={6}>
                        <Field name="password" component={TextField} fullWidth label="Password" type="password" autoComplete="on"/>
                    </Grid>

                    <Grid container item xs={6} justify="flex-end">
                        <Box marginTop={3}>
                            <Button type="submit" color="primary" variant="contained">Log In</Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export const LoginWithFormik = withFormik({
    mapPropsToValues: () => {
        return {username: '', password: ''}
    },

    validate: (values) => {
        const errors = {};

        if (!values.username) {
            errors.username = 'Required';
        }

        if (!values.password) {
            errors.password = 'Required';
        }

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
            setSubmitting(false);
        }, 2000);
    }
})(Login);
