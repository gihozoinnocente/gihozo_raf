const BMI = () => {
    const height = document.getElementById('h').value;
    const weight = document.getElementById('w').value;
    const BMI = weight / ((height / 100) * (height / 100));

    console.log(BMI.toFixed(3));

}



