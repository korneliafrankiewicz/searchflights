export const Validate = (name, email, phone) => {
    let isValid = true;
    let errorMessages = [];

    function validatePhonenum(input){
        let numbers = /^[0-9]*[.]?[0-9]*$/;
        return numbers.test(input)
    }
  
    if (name.length < 8) {
      isValid = false;
      errorMessages.push("The name should have min 8 characters");
    }
  
    if (email.indexOf("@") === -1) {
      isValid = false;
      errorMessages.push("Email should have 5 characters and contains @");
    }

    if(!validatePhonenum(phone)){
        isValid = false;
        errorMessages.push("Please input numeric characters only in phone input");
    }
  
    return {
      isValid,
      errorMessages,
    };
  };