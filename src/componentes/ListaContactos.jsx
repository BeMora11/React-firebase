import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import db from '../firebase/firebaseConfig'
import Contacto from './Contacto';
import { collection, onSnapshot } from 'firebase/firestore';

const ListaContactos = () => {
  const [contactos, cambiarContactos] = useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, 'usuarios'),
      (snapshot) => {
        const arreglo = snapshot.docs.map((documento) => {
          return {
            ...documento.data(),
            id: documento.id
          };
        });

        cambiarContactos(arreglo);
      },
      (error) => {
        console.error(error);
      }
    );
  }, [])


  return (
    contactos.length > 0 &&
    <ContenedorContactos>
      {contactos.map((contacto, index) => (
        <Contacto key={contacto.id} datos={contacto} />
      ))}
    </ContenedorContactos>
  )
}

const ContenedorContactos = styled.div`
	margin-top: 40px;
`;

export default ListaContactos