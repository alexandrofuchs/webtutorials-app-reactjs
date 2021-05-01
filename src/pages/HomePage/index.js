import React from 'react';
import {
    CardMedia,
    CardContent,
    Divider,
    Typography,
} from '@material-ui/core';
import MainFeaturedPost from '../../components/MainFeaturedPost';
import './styles.css';
import { Link } from 'react-router-dom';

const courses = [
    { id: 0, categoryId: 0, description: 'Programação Orientada a Objetos com C#', url: '#' },
    { id: 1, categoryId: 1, description: 'Fundamentos de Bando de Dados', url: '#' },
    { id: 2, categoryId: 1, description: 'Sistemas Gerenciadores de Banco de Dados', url: '#' },
    { id: 3, categoryId: 4, description: 'Fundamentos de Redes de computadores', url: '#' },
    { id: 4, categoryId: 4, description: 'Segurança em redes de computadores', url: '#' },
    { id: 2, categoryId: 1, description: 'Sistemas Gerenciadores de Banco de Dados', url: '#' },
    { id: 3, categoryId: 4, description: 'Fundamentos de Redes de computadores', url: '#' },
    { id: 4, categoryId: 4, description: 'Segurança em redes de computadores', url: '#' },
];

const mainFeaturedPost = {
    title: 'Tutorials Master!',
    description:
        "Sistema Web com o intuito de disponibilizar diversos tutoriais e exemplos práticos sobre assuntos diversos, organizados por categoria.",
    image: 'https://source.unsplash.com/random',
};

function HomePage() {
    return (
        <>
            <div className="HomePage-root">
                <MainFeaturedPost post={mainFeaturedPost} />
                <h1>
                    Postagens Recentes
                </h1>
                {courses.map((course) => (
                    <Link key={course.id} to={`/course/id`} >
                        <Divider />
                        <CardContent>
                            <CardMedia
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <Typography gutterBottom variant="h5" component="h2">
                                {course.description}
                            </Typography>
                        </CardContent>
                    </Link>
                ))}    
                <Divider />
            </div>
        </>
    );
}
export default HomePage

