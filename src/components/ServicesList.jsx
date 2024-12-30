import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "semantic-ui-react";

export function ServicesList(props)
{
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Servicios</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>
            {
                props.services.map((item, i) => 
                {
                    return(
                        <TableRow key={i}>
                            <TableCell>
                                {item}
                            </TableCell>
                        </TableRow>
                    )
                })
            }
            </TableBody>
        </Table>
    );
}