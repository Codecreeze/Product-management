import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Grid, Box, TextField } from '@mui/material/';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from 'react-router-dom';




function LoginModal({ handleClose }) {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        window.localStorage.setItem("IS_LOGGED_IN", data.name)
        navigate('/dashboard')
    };
    const marStyle = { margin: "8px 0" };
    const avtStyle = { backgroundColor: 'LightSeaGreen' }


    return (
        <div>

            <Dialog open={true} onClose={handleClose} fullWidth>
                <DialogTitle>

                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Grid align='center'>
                            <Avatar style={avtStyle}><LockOutlinedIcon /></Avatar>
                            <h2>Login</h2>
                        </Grid>
                        <IconButton onClick={handleClose} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <TextField
                            label="Enter Your Name here"
                            fullWidth
                            autoComplete='Off'
                            style={marStyle}
                            {...register("name", { required: "Name is Required" })}
                            error={!!errors?.name}
                            helperText={errors?.name ? errors.name.message : null}
                            required
                        />
                        <TextField
                            label="Enter Your Email here"
                            fullWidth
                            autoComplete='off'
                            style={marStyle}
                            {...register("email", {
                                required: "Email is Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid Email Address",
                                },
                            })}
                            error={!!errors?.email}
                            helperText={errors?.email ? errors.email.message : null}
                            required
                        />
                        <Button
                            type='submit'
                            variant="contained"
                        >Login</Button>
                    </form>

                </DialogContent>

            </Dialog>

        </div>
    );
}

export default LoginModal;
