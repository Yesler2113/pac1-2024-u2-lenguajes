import React from 'react'

const from = () => {

    const calcularIMC = (e) => {
        e.preventDefault()
        const form = e.target
        const data = new FormData(form)
        const peso = data.get('peso')
        const altura = data.get('altura') / 100
        const imc = peso / (altura * altura)
        let resultado = ''
        if (imc < 18.5) {
            resultado = 'Peso insuficiente'
        } else if (imc < 24.9) {
            resultado = 'Peso normal'
        } else if (imc < 26.9) {
            resultado = 'Sobrepeso grado I'
        } else if (imc < 29.9) {
            resultado = 'Sobrepeso grado II (preobesidad)'
        } else if (imc < 34.9) {
            resultado = 'Obesidad de tipo I'
        } else if (imc < 39.9) {
            resultado = 'Obesidad de tipo II'
        } else {
            resultado = 'Obesidad de tipo III (mórbida)'
        }
        document.getElementById('resultado').textContent = `IMC: ${imc.toFixed(2)} (${resultado})`
    }
    return (

        <div>
            <h2>Calculadora de IMC</h2>
            <form id="imcForm">
                <div>
                    <label placeholder="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                <div>
                    <label placeholder="genero">Género:</label>
                    <select id="genero" name="genero" required>
                        <option value="masculino">Masculino</option>
                        <option value="femenino">Femenino</option>
                    </select>
                </div>
                <div>
                    <label placeholder="peso">Peso (kg):</label>
                    <input type="number" id="peso" name="peso" required />
                </div>
                <div>
                    <label placeholder="altura">Altura (cm):</label>
                    <input type="number" id="altura" name="altura" required />
                </div>
                <button type="submit" >Calcular IMC</button>
            </form>
            <div id="calcularIMC"></div>
        </div>


    )
}

export default from