import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import VirtualizedList from '../../components/List/VirtualizedList';
import './styles.css';
import { useParams } from 'react-router';
import Api from '../../services/api';

export default function CategoryPage() {
    let { id } = useParams();
    const [posts, setPosts] = useState([
        {
            description: "",
            subsectionId: "",
            file: null,
            id: "",
            createdAt: "",
            updatedAt: ""
        }
    ]);
    const [category, setCategory] = useState({
        subsections: [],
        description: "",
        id: "",
        createdAt: "",
        updatedAt: ""
    });

    useEffect(() => {
        async function fetchCategory() {
            const res = await Api.get(`/category/${id}`);
            if (res.data) {
                if (res.data.category) {         
                    setCategory(res.data.category);
                }
            }
        }

        async function fetchPosts() {
            const res = await Api.get(`/category/${id}/posts`);
            console.log(res);
            if (res.data) {
                if (res.data) {      
                    setPosts(res.data);
                }
            }
        }

        fetchCategory();
        fetchPosts();

        ///


    }, [id])

    return (
        <>
            <div className="root-CategoryPage">
                <VirtualizedList dataList={category.subsections} />
                <div className="main-CategoryPage">                                      
                        <div className="posts-CategoryPage">
                            {
                                posts.map( post => (
                                    <div className="post-CategoryPage" >
                                    <img src="https://source.unsplash.com/random" alt="random"/> 
                                    <text>{post.description}</text>
                                    </div>                            
                                ))
                            }
                        </div>
                </div>
                <Divider />
            </div>
        </>
    )
}