import Header from "../header"

function Layout ({children}) {
    return (
        <div className="main">
            <Header/>
            {children}
        </div>
    )
}

export default Layout