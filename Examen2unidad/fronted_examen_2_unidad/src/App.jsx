import React, { useEffect, useState } from 'react';
import FormularioIMC from './components/FormularioIMC';

function App() {
  const [todoListItems, setTodoListItem] = useState([]);
  const [fetched, setFetched] = useState(true);

  useEffect(() => {
    if (fetched) {
      fetch('https://localhost:7143/api/imc')
      .then((response) => response.json())
      .then((dataResponse) => {
        setTodoListItem(dataResponse.data);
      });
      setFetched(false);
    }
  }, [fetched]);

  const enviarDatosAPI = async (datos) => {
    try {
      const response = await fetch('https://localhost:7143/api/imc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
      });

      if (!response.ok) {
        throw new Error('Error al enviar los datos');
      }
      setFetched(true);
      console.log('Datos enviados correctamente');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div>
        <FormularioIMC enviarDatosAPI={enviarDatosAPI} />
      </div>
    </>
  );
}

export default App;


