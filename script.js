// Me aseguro de que el script se cargue correctamente una vez que se haya cargado previamente el DOM
document.addEventListener('DOMContentLoaded', function(){
    // Obtengo el formulario por su id que esperará a que se realice el evento submit
    document.getElementById('bmi-form').addEventListener('submit', function(e){
        e.preventDefault(); // Prevengo que se cargue la página
        
        // Obtengo los valores de los inputs
        const height = parseFloat(document.getElementById('height').value)/100;
        const weight = parseFloat(document.getElementById('weight').value);

        // Verifico que los valores ingresados sean números válidos y mayores que cero
        if(!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0){
            // Calculo el BMI
            const bmi = weight / (height * height);

            // Muestro el BMI en la consola
            console.log("BMI:", bmi.toFixed(1));

            //Muestro en pantalla
            document.getElementById('bmi-result').textContent = bmi.toFixed(1);

            // Cambio el texto de la categoria
            if(bmi < 18.5){
                document.getElementById('bmi-category').textContent = 'Underweight';   
            } else if(bmi >= 18.5 && bmi < 25){
                document.getElementById('bmi-category').textContent = 'Normal weight';
            }else if(bmi >= 25 && bmi < 30){
                document.getElementById('bmi-category').textContent = 'Overweight';
            }else{
                document.getElementById('bmi-category').textContent = 'Obesity';
            }

        }else{
            alert('Please enter valid height and weight.');

        }
    });
});
