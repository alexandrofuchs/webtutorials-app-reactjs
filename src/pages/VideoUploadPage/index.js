import React, { useState } from 'react';
import { Card, CardContent, TextField, Button, CircularProgress } from '@material-ui/core';
import UseStyles from './styles';
import ErrorAlert from '../../components/ErrorAlert';

import Api from '../../services/api';
import { Redirect, useParams } from 'react-router';

export default function UploadVideoPage() {

  const classes = UseStyles();

  const { id } = useParams()

  const [error, setError] = useState(null);
  const [uploading, setUploading] = useState(false);

  const [videoName, setVideoName] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const onFileChange = event => {
    setVideoFile(event.target.files[0]);
  }

  const onChangeFileName = event => setVideoName(event.target.value);

  const [progressUploadedFile, setProgressUploadedFile] = useState(0);

  const handleUploadProgress = (progress) => setProgressUploadedFile(progress);

  const onUploading = () => {
    const formData = new FormData();

    if(!videoFile){
      setError("Selecione o arquivo de video!");
      return;
    }
    

    formData.append("video", videoFile, !!videoName ? `${videoName}.mp4`: videoFile.name);
    
    Api({
      url: `section/${id}/video/upload`,
      method: "POST",
      timeout: 0,
      data: formData,
      onUploadProgress: (event) => {
        setUploading(true);
        const progress = parseInt(Math.round((event.loaded * 100)/event.total));
        handleUploadProgress(progress);
      }
    }).then((res) => {
      setUploading(false);
      console.log(res)
      if(res.error){
        setError(res.error)
        return;
      }
      return <Redirect to={`/section/${id}/videos`} />

    }).catch((err) => {
      console.log(err)      
    }).finally(()=>{
      
    });
  }

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {uploading ?
          (<div style={{display: 'flex', justifyContent: 'center', alignItems: "center"}}>
            <h3>Enviando video</h3>
            <CircularProgress variant="determinate" value={progressUploadedFile} />
          </div>)
          :
          (<>
            <h3>Enviar video</h3>
            <dl>
              <dt>
                <TextField className={classes.textField} label="Nome do Video" onChange={onChangeFileName} />          
              </dt>
              <dd>
                <input type="file" name="file" onChange={onFileChange} />
              </dd>
            </dl>
            <Button className={classes.button} onClick={onUploading}>
              Enviar
            </Button>
            {error ?? <ErrorAlert message={error}/>}
          </>)
        }
      </CardContent>
    </Card>
  );
}