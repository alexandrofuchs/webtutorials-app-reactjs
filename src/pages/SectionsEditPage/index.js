import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Api from '../../services/api';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import ErrorAlert from '../../components/ErrorAlert';

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

    const [description, setDescription] = useState("");


    const [data, setData] = useState({
        data: [],
        maxPageItems: 0,
        pageIndex: 0,
        totalItems: 0,
        totalPageItems: 0,
        totalPages: 0
    })

    const [error, setError] = useState(null);

    const tryCreateSection  = async () => {
        const res = await Api.post(`/category/${id}/section`, { description });       
        if(!!res.data){
            console.log(res.data);
            fetchSections()
            setCreateNategory(false);
        }
        if(!!res.error){
            console.log(res.error);
            setError("Invalid Description");
        }       
     } 
 

    const fetchSections = async () => {
        const res = await Api.get(`/category/${id}/sections`);
        if (res.data) {
            console.log(res.data);
            setData(res.data)            
        }
        
    }

    const onClickCreateSection = () => {
        setCreateNategory(!createCategory);
    }

    useEffect(() => {
        fetchSections()
    }, [id])

    const [createCategory, setCreateNategory] = useState(false);

    return (
        <div className={classes.root}>
            <h1>Seções</h1>
            <ErrorAlert message={error} />
            {createCategory ? 
                <form>
                    <RequiredTextField
                        id={"description"}
                        label={"Descrição"}
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        onClick={() => { }}
                    />
                    <Button onClick={tryCreateSection}>Confirmar</Button>
                    
                </form>            
            : 
            <Button onClick={onClickCreateSection}>Criar Seção</Button>}            

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
                    {data.data.map((row) => {
                        
                        const onClickRemove = async () => {
                            const res = await Api.delete(`/section/${row.id}`);
                            console.log(res)
                            if(!!res.data){
                                console.log(res.data)
                                fetchSections()
                            }else{
                                if(!!res.error){
                                    setError(res.error)
                                }                             
                            }
                        }

                        return(
                        <TableRow key={row.id} hover >
                            <TableCell />
                            <TableCell component="th" scope="row">
                                {row.description}
                            </TableCell>
                            <TableCell align="right">{row.createdAt}</TableCell>
                            <TableCell align="right">{row.updatedAt}</TableCell>
                            <TableCell align="right">
                                <Button onClick={onClickRemove} >Remover</Button>
                                <Link to={`/section/${row.id}/videos`}><Button>Videos</Button></Link>
                                </TableCell>
                        </TableRow>
                        )})}

                    
                </TableBody>
            </Table>
        </div>
    )
}