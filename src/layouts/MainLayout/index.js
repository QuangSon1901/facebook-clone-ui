import Header from '~/layouts/components/Header';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="body-main">{children}</div>
        </div>
    );
};

export default MainLayout;
