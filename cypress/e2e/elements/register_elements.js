class RegisterElements {

    inputFirstName = () => { return '[placeholder="First Name"]' }
    inputLastName = () => { return '[placeholder="Last Name"]' }
    inputAddress = () => { return '[ng-model="Adress"]' }
    inputAddressEmail = () => { return '#eid' }
    inputPhoneNumber = () => { return '[ng-model="Phone"]' }
    selectFile = () => { return '#imagesrc' }
    checkRadioGender = () => { return '[type="radio"]' }
    checkHobbies = () => { return '[type="checkbox"]' }
    inputLanguages = () => { return '#msdd' }
    inputSkills = () => { return '#Skills' }
    selectCountry = () => { return '#country' }
    selectYear = () => { return '#yearbox' }
    selectMonth = () => { return '[placeholder="Month"]' }
    selectDay = () => { return '#daybox' }
    inputPass = () => { return '#firstpassword' }
    inputConfirmPass = () => { return '#secondpassword' }
    submitRegister = () => { return '#submitbtn' }

    inputEmail = () => { return '#reg_email' }
    inputPassword = () => { return '#reg_password' }
    btnRegister = () => { return '[value="Register"]' }
    

} export default RegisterElements;