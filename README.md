# FrontEnd - Módulo 4, Ejercicio 1

## Descripción proyecto

Este proyecto consiste en una página web para un hospital ficticio, incluyendo sus diferentes servicios y personal médico.
Dado que se empezó a trabajar con ReactJS, se optó por inicial el proyecto desde cero.

## Creación de Componentes en ReactJS

Se crearon los componentes `DoctorCard`, `AppointmentForm` y `ServicesList` para desplegar la información correspondiente del proyecto.
Dichos componentes usan expresiones JSX para su construcción, y reciben las props desde `App.jsx`. 
Tanto los doctores como los servicios se despliegan utilizando la función `map`, por lo que para su uso se les agregó el parámetro key.

## Introducción a Hooks y Ciclo de Vida

Se utiliza useState para almacenar y actualizar el estado de múltiples aspectos del proyecto (ej: las listas de doctores y servicios, los parámetros del formulario, etc), y además se utiliza useEffect para cargar los datos de los doctores y servicios al lanzar el proyecto.

## Instrucciones de uso

Requiere Node.js y npm instalados para su uso. Ejecutar el comando `npm run dev` desde la raíz del proyecto para ejecutarlo.