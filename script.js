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
        }
    });
});
