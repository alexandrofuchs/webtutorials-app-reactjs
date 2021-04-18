import React from 'react';
import Divider from '@material-ui/core/Divider';
import NestedList from '../../components/List/NestedList';
import './styles.css';
import { CssBaseline } from '@material-ui/core';
import VideoPlayer from '../../components/VideoPlayer';

export default function CoursePage() {
    return (
        <>
            <CssBaseline />
            <Divider />
            <h1>Course name</h1>
            <Divider />
            <div className="coursePage-root">
                <NestedList />
                <VideoPlayer />
            </div>
        </>
    )
}