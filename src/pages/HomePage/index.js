import * as React from 'react';
import { makeStyles, CssBaseline, Card, Divider, Grid } from '@material-ui/core';
import {
    GitHub as GitHubIcon,
    Facebook as FacebookIcon,
    Twitter as TwitterIcon
} from '@material-ui/icons';
import Header from '../../containers/Header';
import MainFeaturedPost from '../../containers/MainFeaturedPost';
import FeaturedPost from '../../containers/FeaturePost';
import Main from '../../containers/Main';
import Sidebar from '../../containers/Sidebar';
import Footer from '../../containers/Footer';

const courses = [
    { title: 'Programação', url: '#' },
    { title: 'Data Science', url: '#' },
    { title: 'ORM', url: '#' },
    { title: 'IA', url: '#' },
]

const sections = [
    { title: 'Engenharia de Software', url: '#' },
    { title: 'Desenvolvimento', url: '#' },
    { title: 'Ciência dos Dados', url: '#' },
    { title: 'Inteligencia Artificial', url: '#' },
];

const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random',
    imageText: 'main image description',
    linkText: 'Continue de onde parou…',
};

const featuredPosts = [
    {
        title: 'Programação Orientada a Objetos',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageText: 'Image Text',
    },
];

const posts = ["a", "b", "c"];

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
        <div className="HomePage">
            <CssBaseline />
            <Header title="Web Streaming Application" sections={sections} />
            <main className="Main">
                <Divider>
                          {/* <MainFeaturedPost post={mainFeaturedPost} /> 
                <Grid container spacing={4}>
                        {featuredPosts.map((post) => (
                            <FeaturedPost key={post.title} post={post} />
                        ))}
                </Grid>           */}
                </Divider>
      
                <Card className="Card">
                     <Main title="Cursos" posts={posts} />            
                </Card>
                <Sidebar
                        title={sidebar.title}
                        description={sidebar.description}
                        social={sidebar.social}
                />                
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

