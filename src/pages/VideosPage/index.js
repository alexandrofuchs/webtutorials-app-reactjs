import React, { useEffect, useState } from 'react';
import {
  CssBaseline,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useParams } from 'react-router';
import Api from '../../services/api';
import { Link } from 'react-router-dom';
import UseStyles from './styles';

export default function VideosPage() {

  const classes = UseStyles();

  const [section, setSection] = useState({
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

  const { id } = useParams();

  const fetchVideos = async () => {
    const res = await Api.get(`/section/${id}`);
    if(res.data){
        console.log(res.data);
        setSection(res.data.data)
    }
  }

  const onClickRemove = async (event) => {
    const res =  await Api.delete(`/video/${event.target.offsetParent.id}/remove`);
    console.log(res);
    fetchVideos();
  }

  useEffect(()=>{
    fetchVideos();
  },[id]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Divider orientation="vertical" flexItem />
      <div className={classes.content}>
      <Link to={`/section/${id}/video/upload`}><Button>Enviar Novo Video</Button></Link>  
     
        <h1>Videos</h1> 
        <Divider />       
      <List className={classes.form} >
            {section.videos.map(
                video => (
                    <>
                        <ListItem button key={video.id} >
                            <ListItemText primary={video.storagedFileName} />
                            <Button id={video.id} onClick={onClickRemove} >Remover</Button>
                        </ListItem>
                        <Divider />
                    </>
                ))}
        </List>
      </div>
    </div>
  );
}



