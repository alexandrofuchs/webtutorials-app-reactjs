import React from 'react';
import './styles.css';
import MarkDownEditor from '../../components/MarkdownEditor';

function PostEditorPage(){
    return(
        <>
        <div className="root-postEditorPage">
        <h1>Edição</h1>
        <MarkDownEditor/>
        </div>
    </>
    )
} 

export default PostEditorPage;