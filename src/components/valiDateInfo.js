import React from 'react';

const valiDateInfo = (values) => {
    let errors = {}
    // for username 
    if (!values.username.trim()) {
        errors.username = "Username Required!";
    }
    // for email 
    if (!values.email) {
        errors.email = "Email Required!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invaild";
    }
    // for Password
    if (!values.password) {
        errors.password = "Password is required!"
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 character or more "
    }

    // for Password2
    if (!values.password2) {
        errors.password2 = "Password is required!"
    } else if (values.password2 !== values.password) {
        errors.password2 = "Password do not match ?"
    }
    return errors;
}

export default valiDateInfo;