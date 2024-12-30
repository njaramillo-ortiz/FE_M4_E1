import { useState } from "react";
import { Button, Form, FormButton, FormField, FormSelect, Label, Modal, ModalActions, ModalContent, ModalDescription, ModalHeader, Segment } from "semantic-ui-react";

export function AppointmentForm(props)
{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [doctor, setDoctor] = useState("");

    const [modalOpen, setModalOpen] = useState(false);

    return(
        <Segment>
            <Modal
                open={modalOpen}
            >
                <ModalHeader>Reserva Realizada</ModalHeader>
                <ModalContent>
                    <ModalDescription>
                        <p>Su nombre: {firstName+" "+lastName}</p>
                        <p>Su doctor: {doctor}</p>
                    </ModalDescription>
                </ModalContent>
                <ModalActions>
                    <Button
                        positive
                        onClick={() => setModalOpen(false)}
                    >
                        Confirmar
                    </Button>
                </ModalActions>
            </Modal>

            <Form>
                <h1>Formulario de Reserva</h1>
                <TextInput label="Nombre" placeholder="Juanito" onChange={setFirstName} />
                <TextInput label="Apellido" placeholder="Perez" onChange={setLastName} />
                <DropdownInput label="Doctor" placeholder="Doctor..." options={props.doctors} onChange={setDoctor} />
                <FormButton onClick={() => ConfirmReserve()}>Reservar Hora</FormButton>
            </Form>
        </Segment>
    );

    function ConfirmReserve()
    {
        setModalOpen(true);
    }
}

function TextInput(props)
{
    return(
        <FormField>
            <label>{props.label}</label>
            <input placeholder={"Ej: "+props.placeholder} onChange={(e) => props.onChange(e.target.value)}></input>
        </FormField>
    );
}

function DropdownInput(props)
{
    return(
        <FormSelect
            fluid
            label={props.label}
            options={props.options}
            placeholder={props.placeholder}
            onChange={(e) => props.onChange(e.target.textContent)}
        />
    );
}