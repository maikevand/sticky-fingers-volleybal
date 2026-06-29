import "./PageLayout.css"

function PageLayout({ children, className }) {
    return (
        <section className={`page-background ${className}`}>
            <div className="page-content">
                {children}
            </div>
        </section>
    );
}

export default PageLayout;