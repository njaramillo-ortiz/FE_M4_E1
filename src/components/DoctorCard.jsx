import { Card, CardContent, CardDescription, CardHeader, CardMeta } from "semantic-ui-react";

export function DoctorCard(props)
{
    return (
        <Card>
            <CardContent>
                <CardHeader>{props.doctor.text}</CardHeader>
                <CardMeta>Especialidad: {props.doctor.area}</CardMeta>
                <CardDescription>
                    <p>{props.doctor.desc}</p>
                    <p>{props.doctor.years} {props.doctor.years == 1 ? "año" : "años"} de experiencia</p>
                </CardDescription>   
            </CardContent>
        </Card>
    );
}