import UserHeader from '../user_header';
import UserFooter from '../user_footer';

function UserLayout({children}) {
    return(
        <div classname="main">
            <UserHeader/>
            {children}
            <UserFooter/>
        </div>
    )
}

export default UserLayout