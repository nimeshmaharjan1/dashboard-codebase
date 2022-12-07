import Footer from '@features/cms/components/layout/main/footer';
import Header from '@features/cms/components/layout/main/header';


import React from 'react';

export type Props = {
    children: React.ReactNode;
};

const HomeLayout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Header></Header>
            <section> <h1> Hello welcome to my page </h1> </section>
            <Footer></Footer>
        </div>

    );
};

export default HomeLayout;
