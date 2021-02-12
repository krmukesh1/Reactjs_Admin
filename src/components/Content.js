import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import Icons from './Icons'
import Maps from './Maps'
import Notifications from './Notifications'
import Table from './Table'
import Typography from './Typography'
import User from './User'
import EditUser from './users/EditUser'
import User1 from './users/User1'
import AddUser from './users/AddUser'
import Login from './Layout/Login'
import Logout from './Layout/Logout'
import Protected from './Layout/Protected'



const Content = ()=>{
    return(
     
      
      <Switch>
        <Protected exact path= "/" component={Dashboard}></Protected>
        <Protected exact path= "/dashboard" component={Dashboard}></Protected>
        <Protected exact path="/user" component={User}/>
        <Protected exact path= "/tables" component={Table}></Protected>
        <Protected exact path= "/typography" component={Typography}></Protected>
        <Protected exact path= "/icons" component={Icons}></Protected>
        <Protected exact path= "/map" component={Maps}></Protected>
        <Protected exact path= "/notifications" component={Notifications}></Protected>
        <Protected exact path="/users/edit/:id" component={EditUser}></Protected>
        <Protected exact path="/users/:id" component={User1}></Protected>
        <Protected exact path="/user/addition" component={AddUser}></Protected>
        <Route path="/login" render={props=>( <Login {...props}/>)}></Route>
        <Route path="/logout" component={Logout}></Route>
        
      
      </Switch>
     
    )
}
export default Content