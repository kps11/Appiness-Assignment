import React,{Component} from 'react'
import {connect} from 'react-redux'

import {getEmployeeData} from '../Actions/Employee'
class EmployeeList extends Component{
    constructor(){
        super();
        this.state={
            user:''
        }
    }

    componentDidMount(){
        if(this.props.auth.user.sucess) {
            this.props.dispatch(getEmployeeData()).then((users) => {
                this.setState({user: users})
            })
        }

    }
    render(){

        console.log("pratap",this.props.employeedata)
        var employeeList=[]
        if(typeof (this.props.employeedata.user) != 'undefined'){
            this.props.employeedata.user.map(data =>{
                console.log("hello")
                employeeList.push(data)
            })
            console.log("hii kshirod")

            console.log(typeof (this.props.employeedata.user) === 'undefined')

        }
        // console.log("length",employeeList.length)
        return(
            <div className='employee-container'>
                <h1>Employee Details</h1>
                <div>
                    <table>
                        <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Phone_no</th>

                        </tr>
                {employeeList.length>0 ? employeeList.map(data => (
                        <tbody>
                            <tr>
                                <td>
                                    {data.id}
                                </td>
                                <td>
                                    {data.name}
                                </td>
                                <td>
                                    {data.age}
                                </td>
                                <td>
                                    {data.gender}
                                </td>
                                <td>
                                    {data.email}
                                </td>
                                <td>
                                    {data.phoneNo}
                                </td>
                            </tr>
                        </tbody>
                    )

                ):''}
                </table>

                </div>
            </div>
        )
    }

}

export const mapStateToProps = state =>({
    auth : state.auth,
    employeedata: state.employeeList.employeedata
})
export default connect(mapStateToProps)(EmployeeList);