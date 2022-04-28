import React from 'react';
import SEO from './seo';
import Header from './header';
import Container from './container';
import GlobalStyle from './global-styles';
import {Layout} from 'antd';
import './global.css'

const {Sider} = Layout;

const PostLayout = ({children, title, isFullContainer, description, sidebar, socialImage = ''}) => {
    return (
        <Layout>
            {/*<GlobalStyle/>*/}
            <SEO title={title} description={description} socialImage={socialImage}/>
            <Header/>
            <Layout>
                {sidebar &&
                    <Sider width={200}>
                        {sidebar}
                    </Sider>
                }

                <Layout style={{padding: '0 24px 24px'}}>
                    <Container full={isFullContainer}>{children}</Container>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default PostLayout;
