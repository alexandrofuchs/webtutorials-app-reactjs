import React, { useEffect, useState } from 'react';
import {
    List,
    Divider,   
} from '@material-ui/core';
import MainFeaturedPost from '../../components/MainFeaturedPost';
import UseStyles from './styles.js';
import { Link } from 'react-router-dom';
import Api from '../../services/api';

const mainFeaturedPost = {
    title: 'Tutorials Master!',
    description:
        "Sistema Web com o intuito de disponibilizar diversos tutoriais e exemplos práticos sobre assuntos diversos, organizados por categoria.",
    image: '#',
};

function HomePage() {

    const classes = UseStyles();

    const [data, setData] = useState([{
        createdAt: "",
        fileName: "",
        filePath: "",
        id: "",
        section: null,
        sectionId: "",
        storagedFileName: "",
        updatedAt: "",
    }]); 

    const fetchVideos = async () => {
        const res = await Api.get('/videos');
        console.log(res);
        if(res.data){
            setData(res.data.data);
        }
    }

    useEffect(()=>{
        fetchVideos();
    },[])

    return (
        <>
            <div className={classes.root}>
                <MainFeaturedPost post={mainFeaturedPost} />
                <h1>
                    Postagens Recentes
                </h1>
                <List className={classes.form} >
                    {data.map((item) => (
                        <Link key={item.id} to={`/video/${item.fileName}`} >
                            <div className={classes.itemList}>
                                {/* <img
                                    src="https://source.unsplash.com/random"
                                    title="Image title" /> */}
                                <h3 gutterBottom variant="h5" component="h2">
                                    {item.storagedFileName}
                                </h3>
                            </div>
                            <Divider />
                        </Link>
                    ))}
                </List>       
            </div>
        </>
    );
}
export default HomePage

