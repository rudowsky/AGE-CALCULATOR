// selected input elements
let isValid = false;
const inputDay = document.querySelector(".entering_the_day");
const inputMonth = document.querySelector(".entering_the_month");
const inputYear = document.querySelector(".entering_the_year");

// selected output elements
const outputDay = document.querySelector (".output-day");
const outputMonth = document.querySelector (".output-month");
const outputYear = document.querySelector (".output-year");
const submit_btn = document.querySelector (".arrow-button");

// error elements
const error_output_day = document.querySelector (".error_output_day");
const error_output_month = document.querySelector (".error_output_month");
const error_output_year = document.querySelector (".error_output_year");
submit_btn.addEventListener("click", calculateDate);


inputDay.addEventListener ("input", (e) => {
    if (inputDay.value > 31){
        error_output_day.textContent = "Must be a valid date";         
        isValid = false;
        return;
    } else {
        isValid = true;
        error_output_day.textContent = "";
    }
    if (+inputDay.value === 0) {
        isValid = false;
        error_output_day.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        error_output_day.textContent = "";
    }
});

inputMonth.addEventListener ("input", (e) => {
    if (inputMonth.value > 12){
        error_output_month.textContent = "Must be a valid date";         
        isValid = false;
        return;
    } else {
        isValid = true;
        error_output_month.textContent = "";
    }
    if (+inputMonth.value === 0) {
        isValid = false;
        error_output_month.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        error_output_month.textContent = "";
    }
});

inputYear.addEventListener ("input", (e) => {
    if (inputYear.value > 2023){
        error_output_year.textContent = "Must be a valid date";         
        isValid = false;
        return;
    } else {
        isValid = true;
        error_output_year.textContent = "";
    }
    if (+inputYear.value === 0) {
        isValid = false;
        error_output_year.textContent = "This field is required";
        isValid = false;
        return;
    } else {
        error_output_year.textContent = "";
    }
});

function calculateDate(){
    if (isValid) {
        let = birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date (ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() -1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay () -1;
        outputDay.textContent = ageDay;
        outputMonth.textContent = ageMonth;
        outputYear.textContent = ageYears;
      } else {
        alert ("error, please fill in the details");
        }
    
}
