import React from "react";
import "./BooksDetails.scss";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

 export default class DropDownComponent extends React.Component {
    render(){
        return(
        <FormControl >
        <NativeSelect
          value={"age"}
        //   onChange={handleChange}
          name="age"
        //   className={classes.selectEmpty}
        //   inputProps={{ 'aria-label': 'age' }}
        >
          <option value=""><button>ee</button></option>
          <option value={10}>RRRR</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>With visually hidden label</FormHelperText>
      </FormControl>
        )
    }
}