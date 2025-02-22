import React from "react";
import {
    Table,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
    Chip
} from "@material-ui/core";
import useStyles from "../../styles";

const states = {
    done: "success",
    pending: "warning",
    declined: "secondary",
};

export default function JobTableComponent({ data }) {
    const classes = useStyles();
    var keys = Object.keys(data[0]).map(i => i.toUpperCase());
    keys.shift(); // delete "id" key

    return (
        <Table className="mb-0">
            <TableHead>
                <TableRow>
                    {keys.map(key => (
                        <TableCell key={key}>{key}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {/*{data.map(({ id, name, email, product, price, date, city, status }) => (*/}
                {data.map(({ id, tên, status }) => (
                    <TableRow key={id}>
                        <TableCell className="pl-3 fw-normal">{tên}</TableCell>
                        <TableCell>
                            <Chip label={status} classes={{root: classes[states[status.toLowerCase()]]}}/>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
