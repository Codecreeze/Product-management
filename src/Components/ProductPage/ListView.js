import React, {useEffect} from 'react';
import { 
  Button,
  Grid, 
    Paper, 
    styled, 
    Table, 
    TableBody, 
    TableCell, 
    tableCellClasses, 
    TableContainer, 
    TableHead, 
    TableRow } 
    from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import {connect} from 'react-redux';
import { DELETE_PRODUCT, EDIT_PRODUCT } from '../../stateman/actions';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createDetails(name, Product, Discription, Price, Quantity, ImageURL)
  { return{name, Product, Discription, Price, Quantity, ImageURL}
  }

  
function ListView(props) {

  const deleteRow = (index) => {
    props.dispatch({type: DELETE_PRODUCT, index})
  }

return (
<div>
  <Grid ml={10} mr={10}>
    <TableContainer component={Paper}>
        <Table sx={{minWidth: 700}} aria-label="customized-table">
            <TableHead>
                <TableRow>
                    <StyledTableCell>Product Name</StyledTableCell>
                    <StyledTableCell>Description</StyledTableCell>
                    <StyledTableCell>Price&nbsp;(Rs.)</StyledTableCell>
                    <StyledTableCell>Quantity</StyledTableCell>
                    <StyledTableCell>ImageURL(Optional)</StyledTableCell>
                    <StyledTableCell>Actions</StyledTableCell>                    
                </TableRow>
            </TableHead>
            <TableBody>
                {props.products.filter(item => {
                      return (
                      (props.search ? item.name.toLowerCase().search(props.search.toLowerCase()) > -1 : true) && (props.filterPrice ? item.price == props.filterPrice : true) && ( props.filterQuantity ? item.quantity == props.filterQuantity : true )
                      )
                } ).map((row, index) => (
                    <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                         {row.name}
                        </StyledTableCell>
                      <StyledTableCell>{row.description}</StyledTableCell>
                      <StyledTableCell>{row.price}</StyledTableCell>
                      <StyledTableCell>{row.quantity}</StyledTableCell>
                      <StyledTableCell>{row.image}</StyledTableCell>
                      <StyledTableCell>                     
                        <Button onClick={ () => props.setFormModal([index, row]) } color="secondary">{<Edit />}</Button>
                        <Button onClick={() => deleteRow(index)}>{<Delete />}</Button>                      
                      </StyledTableCell>                    
                    </StyledTableRow>
                ))}                
            </TableBody>
        </Table>
    </TableContainer>
 </Grid>
</div>
  );
}

const mapStateToProps = (state) =>  {
    return {
      products: state.products,
      search: state.search,
      filterPrice: state.priceFilter,
      filterQuantity: state.quantityFilter
    }
}

export default connect(mapStateToProps)(ListView);
