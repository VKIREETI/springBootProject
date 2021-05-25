import react from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUesrs().then(response) => {
            this.setState({users: response.data})
        };
    }
    render (){
        return(
            <div>
                <h1 className = "Text-center">  Users list</h1>
                <table className = "table table-striped">
                    <thread>
                        <tr>

                            <td> User Id </td>
                            <td> User First Name </td>
                            <td> User last Name</td>
                            <td> User Email Id</td>
                        </tr>

                    </thread>
                    <tbody>
                        {
                            this.state.users.map(
                                users =>
                                <tr key = {user.id}>
                                    <td> {user.id}</td>
                                    <td> {user.firstName}</td>
                                    <td> {user.lastname}</td>
                                    <td> {user.emailId}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>
        )
    }
}

export default UserComponent