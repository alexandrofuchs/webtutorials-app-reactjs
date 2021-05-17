import React, { useState, useEffect } from 'react';
import {
    CssBaseline,
    Divider,
    List,
    ListItem,
    ListItemText,
    Breadcrumbs
} from '@material-ui/core/';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import UseStyles from './styles.js';
import { useParams } from 'react-router';
import Api from '../../services/api';
import { Link } from 'react-router-dom';

export default function CategoryPage() {

    let { id } = useParams();

    const classes = UseStyles();

    const [category, setCategory] = useState(
        {
            description: "",
            sections: [
                {
                    description: "",
                    categoryId: "",
                    id: "",
                    createdAt: "",
                    updatedAt: ""
                }
            ],
            id: "",
            createdAt: "",
            updatedAt: ""
        }
    );

    const [section, setSection] = useState(
        {
            description: "",
            categoryId: "",
            videos: [
                {
                    fileName: "",
                    storagedFileName: "",
                    filePath: "",
                    sectionId: "",
                    id: "",
                    createdAt: "",
                    updatedAt: ""
                }
            ],
            id: "",
            createdAt: "",
            updatedAt: ""
        }
    )

    async function fetchSectionWithVideos(sectionId) {
        const res = await Api.get(`/section/${sectionId}`);
        if (res.data) {
            console.log(res.data);
            setSection(res.data.data)
        }
    }

    async function fetchCategory() {
        const res = await Api.get(`/category/${id}`);
        if (res.data) {
            console.log(res.data)
            setCategory(res.data.data);
        }
    }

    const [selectedVideo, setSelectedVideo] = useState(null);   

    const onClickSection = (event) => {
        fetchSectionWithVideos(event.target.offsetParent.id);
        setSelectedVideo(null)
    }
    
    const onClickVideo = async (event) => {
        setSelectedVideo(event.target.offsetParent.id)
    }

    const onClickBackToSection = () =>{
        setSelectedVideo(null)

    }

    useEffect(() => {
        setSelectedVideo(null);
        setSection({
                description: "",
                categoryId: "",
                videos: [
                    {
                        fileName: "",
                        storagedFileName: "",
                        filePath: "",
                        sectionId: "",
                        id: "",
                        createdAt: "",
                        updatedAt: ""
                    }
                ],
                id: "",
                createdAt: "",
                updatedAt: ""
            })
        setCategory({
            description: "",
            sections: [
                {
                    description: "",
                    categoryId: "",
                    id: "",
                    createdAt: "",
                    updatedAt: ""
                }
            ],
            id: "",
            createdAt: "",
            updatedAt: ""
        })
        fetchCategory();
    }, [id])


    const VideoPlayerComponent = () => (
        <video className={classes.content} controls autoPlay crossOrigin="anonymous">
            <source src={`http://localhost:5000/video/${selectedVideo}/watch`} type="video/mp4"></source>
        </video>
    )

    const SectionMenuComponent = () => (
        <List>
            {category.sections.map((item) => (
                <>
                    <ListItem button key={item.id} id={item.id} onClick={onClickSection} selected={(item.id === section.id)}>
                        <ListItemText primary={item.description} />
                    </ListItem>
                    <Divider />
                </>
            ))}
        </List>
    )

    const SectionVideosComponent = () => (
        <List className={classes.form} >
            {section.videos.map(
                video => (
                    <>
                        <ListItem button key={video.storagedFileName} id={video.fileName} onClick={onClickVideo} selected={(video.fileName === selectedVideo)} >
                            <ListItemText primary={video.storagedFileName} />
                        </ListItem>
                        <Divider />
                    </>
                ))}
        </List>
    )

    return (
        <div className={classes.root}>
            <CssBaseline />
            {!selectedVideo ?
                <>
                    <div className={classes.menu}>
                        <h1>Seções de {category.description}</h1>
                        <Divider />
                        <SectionMenuComponent />
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div className={classes.content}>                  
                            <h3>{section.description}</h3>
                            <Divider />
                            <SectionVideosComponent />                   
                    </div>
                </>
                :
                <>
                    <div className={classes.menu}>                        
                        <Link className={classes.menuTitle} hover onClick={onClickBackToSection}>
                        <BackIcon/>
                        <h3>{section.description}</h3>
                        </Link>
                        <Divider />
                        <SectionVideosComponent />
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div className={classes.content}>                      
                            <h1>{selectedVideo.storagedFileName}</h1>
                            <VideoPlayerComponent />                   
                    </div>
                </>

            }
        </div>

    )
}