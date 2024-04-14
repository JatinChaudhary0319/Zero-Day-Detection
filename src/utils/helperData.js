export const labelStyle = {
    color: 'rgba(0, 0, 0, 0.60)',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: "500",
    lineHeight: '18px',
  };
  
  export const inputStyle = {
    color: "#464646",
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: "500",
    lineHeight: 'normal',
    letterSpacing: "-0.165px",
    display: 'flex',
    padding: '0px 12px',
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    borderRadius: '10px',
    border: 'var(--Our_Colors-Grays-400, #C5CDD4)',
    height: "56px",
    width: '400px'
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    return emailPattern.test(email);
  }
  
  const validatePhoneNumber = (phoneNumber) => {
    const cleanedNumber = phoneNumber.toString();
  
    const regex = /^(\+?\d{1,3})?(\d{6,15})$/;
  
    if (cleanedNumber.match(regex)) {
      return true;
    } else {
      return false;
    }
  }

export { validateEmail, validatePhoneNumber };
