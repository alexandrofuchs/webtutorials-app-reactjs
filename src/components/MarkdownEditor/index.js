import React, { useEffect, useState } from 'react';
import './styles.css';
import marked from 'marked';

import { sampleText } from './sampleText';

function MarkDownEditor() {

    const [text, setText] = useState(sampleText);

    useEffect(() => {
        const text = localStorage.getItem('text');
        if (text) {
            setText(text)
        } else {
            setText(sampleText)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('text', text);
    }, [text])

    const handleChange = event => {
        const text = event.target.value;
        setText(text);
    }

    const renderText = text => {
        const __html = marked(text, { sanitize: true })
        return { __html }
    }
    return (
        <div className='root-markdownEditor'>
            <div className='editor-markdownEditor'>
                <h1>Editor</h1>
                <textarea
                    onChange={handleChange}
                    value={text}
                    className='textArea-markdownEdidor'
                    rows='35' 
                />
            </div>
            <div className='postPreview-markdownEditor'>
                <h1>Postagem</h1>
                <div dangerouslySetInnerHTML={renderText(text)} />
            </div>
        </div>
    )
}

export default MarkDownEditor
