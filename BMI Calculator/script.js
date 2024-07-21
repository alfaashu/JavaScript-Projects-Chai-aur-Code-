const from = document.querySelector('form')

from.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if( height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height ${height}`
    } else if( weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid height ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // Show the result
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6) {
            results.innerHTML = 'You are under weight'
        } else if( 18.6 < bmi < 24.9){
            results.innerHTML = 'You are normal'
        } else if( bmi > 24.9){
            results.innerHTML = 'You are overweight'
        }    
    }
})