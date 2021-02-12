import React from 'react'
import  {useState, useEffect} from "react"
import axios from 'axios'
import { Link } from "react-router-dom";

const Table = ()=>{
  const [users, setUser] = useState([]);

    useEffect(()=>{
       loadUsers()
    }, [])
      
    const loadUsers = async()=>{
        const result = await axios.get("http://localhost:3003/users")
    setUser(result.data)
    }

    const deleteUser = async id =>{
      await axios.delete(`http://localhost:3003/users/${id}`)
      loadUsers()
    }
    return(
        <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-header-primary">
                <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                <h4 className="card-title mb-0"> Simple Table</h4>
                 
                <div class="input-group">
                  <Link className="btn btn-outline-light" to="/user/addition">Add User</Link>
                  </div>
                </div>
                <p className="card-category mt-0"> Here is a subtitle for this table</p>
                </div>
                <div className="card-body ">
                  <div className="table-responsive">
                    <table className="table border-shadow">
                      <thead className=" text-primary thead-dark">
                      <tr>
                        <th>
                          ID
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Country
                        </th>
                        <th>
                          City
                        </th>
                        <th>
                          Salary
                        </th>
                        <th>
                          Action
                        </th>
                        
                       
                        </tr>
                      </thead>
                    <tbody>
                    {
      users.map((user, index)=>(
        <tr>
          <th scope='row'>{index+1}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.salary}</td>
          <td>
            <Link className="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
            <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
            <Link className="btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>
          </td>
        </tr>
      ))
    }
                    </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="card card-plain">
                <div className="card-header card-header-primary">
                  <h4 className="card-title mt-0"> Table on Plain Background</h4>
                  <p className="card-category"> Here is a subtitle for this table</p>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead className="">
                        <th>
                          ID
                        </th>
                        <th>
                          Name
                        </th>
                        <th>
                          Country
                        </th>
                        <th>
                          City
                        </th>
                        <th>
                          Salary
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            1
                          </td>
                          <td>
                            Dakota Rice
                          </td>
                          <td>
                            Niger
                          </td>
                          <td>
                            Oud-Turnhout
                          </td>
                          <td>
                            $36,738
                          </td>
                        </tr>
                        <tr>
                          <td>
                            2
                          </td>
                          <td>
                            Minerva Hooper
                          </td>
                          <td>
                            Curaçao
                          </td>
                          <td>
                            Sinaai-Waas
                          </td>
                          <td>
                            $23,789
                          </td>
                        </tr>
                        <tr>
                          <td>
                            3
                          </td>
                          <td>
                            Sage Rodriguez
                          </td>
                          <td>
                            Netherlands
                          </td>
                          <td>
                            Baileux
                          </td>
                          <td>
                            $56,142
                          </td>
                        </tr>
                        <tr>
                          <td>
                            4
                          </td>
                          <td>
                            Philip Chaney
                          </td>
                          <td>
                            Korea, South
                          </td>
                          <td>
                            Overland Park
                          </td>
                          <td>
                            $38,735
                          </td>
                        </tr>
                        <tr>
                          <td>
                            5
                          </td>
                          <td>
                            Doris Greene
                          </td>
                          <td>
                            Malawi
                          </td>
                          <td>
                            Feldkirchen in Kärnten
                          </td>
                          <td>
                            $63,542
                          </td>
                        </tr>
                        <tr>
                          <td>
                            6
                          </td>
                          <td>
                            Mason Porter
                          </td>
                          <td>
                            Chile
                          </td>
                          <td>
                            Gloucester
                          </td>
                          <td>
                            $78,615
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Table