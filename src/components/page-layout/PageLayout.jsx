import "./PageLayout.css"

function PageLayout({children}) {
    return (
        <section className="page-background">
            <div className="page-content">
                {children}
            </div>
        </section>
    );
}

export default PageLayout;