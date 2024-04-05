import React, { useState } from 'react';

const FormularioIMC = ({ enviarDatosAPI }) => {
    const [nombre, setNombre] = useState('');
    const [genero, setGenero] = useState('masculino');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');

    const calcularIMC = (e) => {
        e.preventDefault();
        const imc = peso / ((altura / 100) * (altura / 100));
        let resultadoIMC = '';
        if (imc < 18.5) {
            resultadoIMC = 'Peso insuficiente';
        } else if (imc < 24.9) {
            resultadoIMC = 'Peso normal';
        } else if (imc < 26.9) {
            resultadoIMC = 'Sobrepeso';
        } else if (imc < 29.9) {
            resultadoIMC = 'Obesidad de tipo I';
        } else if (imc < 34.9) {
            resultadoIMC = 'Obesidad de tipo II';
        } else if (imc < 39.9) {
            resultadoIMC = 'Obesidad de tipo III';
        } else {
            resultadoIMC = 'Obesidad de tipo III';
        }
        setResultado(`IMC: ${imc.toFixed(2)} (${resultadoIMC})`);

        // Llamada a la API
        enviarDatosAPI({
          nombre,
          genero,
          peso,
          altura,
          //imc: imc.toFixed(2),
          resultadoIMC
        });
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-100">
                <h2 className="text-2xl font-bold mb-4">Calculadora de IMC</h2>
                <form onSubmit={calcularIMC}>
                    <div className="mb-4 rounded-lg">
                        <label htmlFor="nombre" className="block text-gray-700 rounded-lg hover:border-blue-500 focus:border-blue-500">Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="form-input mt-1 block w-full hover:border-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="genero" className="block text-gray-700 border-gray-300 p-2 rounded-lg hover:border-blue-500 focus:border-blue-500">Género:</label>
                        <select
                            id="genero"
                            name="genero"
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                            className="form-select mt-1 block w-full rounded-lg hover:border-blue-500 focus:border-blue-500"
                            required
                        >
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="peso" className="block text-gray-700">Peso (kg):</label>
                        <input
                            type="number"
                            id="peso"
                            name="peso"
                            value={peso}
                            onChange={(e) => setPeso(e.target.value)}
                            className="form-input mt-1 block w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="altura" className="block text-gray-700">Altura (cm):</label>
                        <input
                            type="number"
                            id="altura"
                            name="altura"
                            value={altura}
                            onChange={(e) => setAltura(e.target.value)}
                            className="form-input mt-1 block w-full"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Calcular IMC
                    </button>
                </form>
                <div id="resultado" className="mt-5">{resultado}</div>
            </div>
        </div>
    );
};

export default FormularioIMC;

