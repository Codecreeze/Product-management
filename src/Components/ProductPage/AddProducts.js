import { Box, Button, Dialog, DialogContent, DialogTitle, TextField, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { ADD_PRODUCT } from '../../stateman/actions';


function AddProducts(props) {
    let handleClose = props.handleClose
    const { register, handleSubmit, formState: { errors } } = useForm();
    const marStyle = { margin: "8px 0" };
    const onSubmit = (data) =>{
         console.log(data)
        };

    
    // Form data
    const editForm = props.formData
    const [form_name , setForm_name]     = useState(typeof editForm == "object" ? editForm[1].name :"")
    const [form_description , setForm_description] = useState(typeof editForm == "object" ? editForm[1].description :"")
    const [form_price , setForm_price] = useState(typeof editForm == "object" ? editForm[1].price :"")
    const [form_quantity , setForm_quantity] = useState(typeof editForm == "object" ? editForm[1].quantity :"")
    const [form_image , setForm_image] = useState(typeof editForm == "object" ? editForm[1].image :"")

    const addProperty = (e) => {
        console.log("initiate hit!")
        props.dispatch({type: ADD_PRODUCT, data: {
            name: form_name, description:form_description, price:form_price, quantity:form_quantity, image:form_image, update: typeof props.formData == "object" ? props.formData[0] : false
        } })
        e.preventDefault();
        handleClose()
    }
    
  return (
      <div>
          <Dialog open={true} onClose={handleClose}>
              <DialogTitle >
                  <Box display="flex" alignItems="center" justifyContent="space-between">
               Enter Details Here
              <IconButton onClick={handleClose} size="mini">
                <CloseIcon />
                </IconButton>
                </Box>
              </DialogTitle>
              <DialogContent>
                    <form onSubmit={addProperty} >
                        {form_name}
                        <TextField
                            label="Product Name"
                            fullWidth
                            autoComplete='Off'
                            style={marStyle}
                            {...register("name", { required: "Required" })}
                            error={!!errors?.name}
                            helperText={errors?.name ? errors.name.message : null}
                            value={form_name}
                            onChange={(e) => setForm_name(e.target.value) }
                            required
                        />
                        <TextField
                            label="Discription"
                            fullWidth
                            autoComplete='off'
                            style={marStyle}
                            {...register("discription", { required: "Required" })}
                            error={!!errors?.discription}
                            helperText={errors?.discription ? errors.discription.message : null}
                            value={form_description}
                            onChange={(e) => setForm_description(e.target.value) }
                        />
                        <TextField
                            label="Price"
                            fullWidth
                            autoComplete='Off'
                            type="number"
                            inputProps={{min: 0}}
                            style={marStyle}
                            {...register("price", { required: "Required" })}
                            error={!!errors?.price}
                            helperText={errors?.price ? errors.price.message : null}
                            value={form_price}
                            onChange={(e) => setForm_price(e.target.value) }
                            required
                        />
                        <TextField
                            label="Quantity"
                            fullWidth
                            autoComplete='off'
                            type="number"
                            inputProps={{
                                min:0,
                                step:1
                            }}
                            style={marStyle}
                            {...register("quantity", { required: "Required" })}
                            error={!!errors?.quantity}
                            helperText={errors?.quantity ? errors.quantity.message : null}
                            value={form_quantity}
                            onChange={(e) => setForm_quantity(e.target.value) }
                            required
                        />
                        <TextField
                            label="Image Url"
                            fullWidth
                            autoComplete='off'
                            style={marStyle}
                            {...register("url")}
                            value={form_image}
                            onChange={(e) => setForm_image(e.target.value) }
                            
                        />
                        <Button
                            type='submit'
                            variant="contained"
                            color='success'
                        >
                            {typeof props.formData == "object" ? "Update Product" : "Add Product" }
                        </Button>
                    </form>

                </DialogContent>

            </Dialog>
          
      </div>
  );
}

const mapStateToProps = (state) =>  {
    return {
      products: state.products
    }
}

export default connect(mapStateToProps)(AddProducts);
