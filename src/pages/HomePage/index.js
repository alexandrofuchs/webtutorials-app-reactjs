import React from 'react';
import {
    makeStyles,
    CssBaseline,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Divider,
    Grid,
    Typography,
    Button,
    CardActionArea,

} from '@material-ui/core';
import {
    GitHub as GitHubIcon,
    Facebook as FacebookIcon,
    Twitter as TwitterIcon
} from '@material-ui/icons';
import Header from '../../containers/Header';
import MainFeaturedPost from '../../containers/MainFeaturedPost';
import FeaturedPost from '../../containers/FeaturePost';
import Sidebar from '../../containers/Sidebar';
import Footer from '../../containers/Footer';
import './styles.css';
import { Link } from 'react-router-dom';

const courses = [
    { id: 0, categoryId: 0, description: 'Programação Orientada a Objetos com C#', url: '#' },
    { id: 1, categoryId: 1, description: 'Fundamentos de Bando de Dados', url: '#' },
    { id: 2, categoryId: 1, description: 'Sistemas Gerenciadores de Banco de Dados', url: '#' },
    { id: 3, categoryId: 4, description: 'Fundamentos de Redes de computadores', url: '#' },
    { id: 4, categoryId: 4, description: 'Segurança em redes de computadores', url: '#' },
];

const mainFeaturedPost = {
    title: 'Videos novos toda semana',
    description:
        "Cursos de nivel iniciante ao mais avançado.",
    image: 'https://source.unsplash.com/random',
};

const sidebar = {
    title: 'About',
    description:
        'Aplicação Streaming para oferta de cursos gratuitos e por assinatura.',
    social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
    ],
};

function HomePage() {
    return (
        
        <div className="HomePage-root">
            <CssBaseline/>
            <MainFeaturedPost post={mainFeaturedPost} />    
            <Divider />
            <main className="HomePage-main">
                <div className={"HomePage-cardContainer"}>
                    <h1>Cursos de CourseName</h1>
                    <Divider />
                    {courses.map((course) => (
                        <Link to={`/course/id`}>
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
                </div>
                {/* <Sidebar
                    title={sidebar.title}
                    description={sidebar.description}
                    social={sidebar.social}
                /> */}
            </main>
            <Divider />
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </div>
    );
}
export default HomePage

