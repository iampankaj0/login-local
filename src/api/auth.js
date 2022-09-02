import axios from "axios";

//if you want to export all apis from one place then you can do this
export const handleLogin = async ({ email, password }) => {
  const response = await axios.post("http://35.91.35.188/api/login", {
    email,
    password,
  });

  // destructure by result
  const result = response.data.loginData;

  //userData after login
  const userData = {
    id: result.id,
    first_name: result.first_name,
    last_name: result.last_name,
    dob: result.dob,
    pincode: result.pincode,
    state: result.state,
    city: result.city,
    address: result.address,
    email: result.email,
    email_verified_at: result.email_verified_at,
    created_at: result.created_at,
    updated_at: result.updated_at,
    reset_password: result.reset_password,
    phone_no: result.phone_no,
    alternate_no: result.alternate_no,
    aadhar_no: result.aadhar_no,
    pan_no: result.pan_no,
  };

  return userData;
};
