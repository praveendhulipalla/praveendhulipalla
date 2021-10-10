import React from "react";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AccountCircle from '@mui/icons-material/AccountCircle';

const CreateWordpressUser = (wordPressUserName, setWordPressUserName) => {

  const [values, setValues] = React.useState({
    userName: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <Box sx={{ display: 'block' }}>
      <div>
        <FormControl sx={{ m: 2, mt: 3}} variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Admin Username
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="end">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      </div>
      <div>
      <FormControl sx={{ m: 2, mt: 3}} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Admin Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl sx={{ m: 2, mt: 3}} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Admin Confirm Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showConfirmPassword ? 'text' : 'password'}
            value={values.confirmPassword}
            onChange={handleChange('confirmPassword')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </Box>
  );
      }
export default CreateWordpressUser;
