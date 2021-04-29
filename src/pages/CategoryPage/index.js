import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import VirtualizedList from '../../components/List/VirtualizedList';
import './styles.css';
import { CssBaseline } from '@material-ui/core';
import { useParams } from 'react-router';
import Api from '../../services/api';

export default function CategoryPage() {
    let { id } = useParams();
    const [category, setCategory] = useState({
        subsections: [],
        description: "",
        id: "",
        createdAt: "",
        updatedAt: ""
    });

    useEffect(() => {
        console.log('oi');
        async function fetchData(){
            const res = await Api.get(`/category/${id}`);
            if (res.data) {
                if (res.data.category) {
                    console.log(res.data.category);
                    setCategory(res.data.category);
                }    
            }
        }       
        fetchData();
    }, [category, id])

    return (
        <>
            <CssBaseline />
            <div className="root-categoryPage">
                <VirtualizedList dataList={category.subsections}/>
                <div className="main-categoryPage">
                    <h1>Todos as Postagens de {category.description} </h1>
                </div>
                <Divider />
            </div>
        </>
    )
}