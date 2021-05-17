import React, { useEffect, useState } from 'react';
import UseStyles from './styles';
import {
    Button,
    Table,
    TableRow,
    TableHead,
    TableCell,
    TableBody,
    TablePagination
} from '@material-ui/core';
import Api from '../../services/api';
import { Link } from 'react-router-dom';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import ErrorAlert from '../../components/ErrorAlert';

export default function CategoriesEditPage() {

    const classes = UseStyles();

    const [data, setData] = useState({
        data: [],
        maxPageItems: 0,
        pageIndex: 0,
        totalItems: 0,
        totalPageItems: 0,
        totalPages: 0,
    })

    const [page, setPage] = React.useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const fetchCategories = async () => {

        const res = await Api.get(`/categories/${page}`);

        if (res.data) {
            setData(res.data)
        }
    }

    const [description, setDescription] = useState("");

    const [createCategory, setCreateNategory] = useState(false);
    const [error, setError] = useState(null);

    const tryCreateCategory  = async () => {
       const res = await Api.post('/category', { description });       
       if(!!res.data){
           console.log(res.data);
           fetchCategories()
           setCreateNategory(false);
       }
       if(!!res.error){
           console.log(res.error);
           setError(res.error);
       }       
    } 

    const onClickCreateCategory = () => {
        setCreateNategory(!createCategory);
    }
    
    useEffect(() => {
        fetchCategories()
    }, [page])

    useEffect(() => {
    }, [description])

    useEffect(() => {
        fetchCategories();
    }, [])


    return (
        <div className={classes.root}>
            <h1>Categorias</h1>     
            {createCategory ? 
                <form>
                    <RequiredTextField
                        id={"description"}
                        label={"Descrição"}
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        onClick={() => { }}
                    />
                    <Button onClick={tryCreateCategory}>Confirmar</Button>
                    <ErrorAlert message={error} />
                </form>            
            : 
            <Button onClick={onClickCreateCategory}>Criar Categoria</Button>} 
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
                        <TableRow key={row.id} hover>
                            <TableCell />
                            <TableCell component="th" scope="row">
                                {row.description}
                            </TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                            <TableCell align="right">{row.updatedAt}</TableCell>
                            <TableCell align="right"><Link to={`/category/${row.id}/sections`}><Button>Seções</Button></Link></TableCell>
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
    );
}


