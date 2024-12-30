import { useEffect, useState } from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import { ServicesList } from './components/ServicesList'
import { AppointmentForm } from './components/AppointmentForm'
import { DoctorCardGrid } from './components/DoctorCardGrid'
import { Menu } from 'semantic-ui-react'
import { Navbar } from './components/Navbar'

function App() 
{
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);

    useEffect(() => 
    {
        setServices(serviceList);
        setDoctors(doctorList);
    }, []);

    return (
        <>
            <Navbar />
            <div>
                <h1>Hospital V2 - Página en construcción</h1>
                <DoctorCardGrid doctors={doctors}/>
                <ServicesList services={services}></ServicesList>
                <AppointmentForm doctors={doctors}></AppointmentForm>
            </div>
        </>
    )
}

const serviceList = ["Cirugía", "Kinesiología"]

const doctorList = [
    {
        key: 'dpp', 
        text: 'Dr. Pepper', 
        value: 'drpepper', 
        area: 'Hidratación', 
        years: '139', 
        desc: 'Est. 1885. Ahora disponible nuevo sabor Creamy Coconut (normal y zero azúcar)'
    },
    {
        key: 'ddc', 
        text: 'Dr. Dencil', 
        value: 'drdenzil', 
        area: 'Fraude', 
        years: '12', 
        desc: 'Egresado de la Faculte de Culture Humaine Integrale de Bordeaux, Francia'
    },
    {
        key: 'dpo', 
        text: 'Dra. Polo', 
        value: 'drpolo', 
        area: 'Leyes', 
        years: '23', 
        desc: 'Edúquese lo mas que pueda y respete para que lo respeten'
    },
]

export default App
