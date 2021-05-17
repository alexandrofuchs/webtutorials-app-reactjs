import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Api from '../../services/api';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Table,
    TablePagination,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    root: {
        justifyContent: 'center',
        width: '100%',
        margin: '2mm',
        padding: '2mm',
        height: '100%'
    },
    container: {
        maxHeight: 440,
        width: '100%'
    },
});

export default function SectionsPage() {

    const classes = useStyles();

    const { id } = useParams()

    const [page, setPage] = React.useState(0);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    const [data, setData] = useState({
        data: [],
        maxPageItems: 0,
        pageIndex: 0,
        totalItems: 0,
        totalPageItems: 0,
        totalPages: 0
    })

    const fetchSections = async () => {
        const res = await Api.get(`/category/${id}/sections`);
        if (res.data) {
            setData(res.data)
        }
    }

    useEffect(() => {
        fetchSections()
    }, [id])

    return (
        <div className={classes.root}>
            <h1>Seções</h1>
            <Button>Upload Video</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Descrição</TableCell>
                        <TableCell align="right">Criado em</TableCell>
                        <TableCell align="right">Atualizado em</TableCell>
                        <TableCell>Opções</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.data.map((row) => (
                        <TableRow key={row.id} hover >
                            <TableCell />
                            <TableCell component="th" scope="row">
                                {row.description}
                            </TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                            <TableCell align="right">{row.updatedAt}</TableCell>
                            <TableCell align="right"><Link to={`/section/${row.id}/videos`}>Videos</Link></TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[data.maxPageItems]}
                component="div"
                rowsPerPage={data.maxPageItems}
                page={page}
                count={data.totalItems}
                onChangePage={handleChangePage}
            />
        </div>
    )
}