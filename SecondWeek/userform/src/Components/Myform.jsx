import axios from "axios";
import { useEffect, useState } from "react";

export default function Myform() {

    const [data, setData] = useState([]);
    const handleSubmit = (e) => {
        const { id, value } = e.target;

        setData({...data,[id]:value})
    }

    const Submit = (e) => {
        axios.post("http://localhost:8080/user", data).then(() => {
            alert("Employee details entered");
        })
    }

    // table
    const [tData, setTData] = useState([]);
    useEffect(() => {
        getData();
    },setTData);

    const getData = (e) => {
        axios.get("http://localhost:8080/user", data).then((res) => {
            setTData(res.data);
            console.log(res.data)
        })
    }

    // if delete const delete=(id)=>{const result=tData.filter((el)=>{return el.id!=id})setTData([...result])}
    // pass delete in {tData.map((e)=>(key={id} delete={delete}))}
    return (
        <div>
            <div style={{
                width: "250px",
                margin: "auto",
                height: "250px",
                border: "2px solid  red",
                padding: "2%",
            }}>
            <form onSubmit={Submit}>
                <h4>Employee Details Form</h4>
                <input type="text" id="name" placeholder="Enter your name" onChange={handleSubmit}/>
                <br/>
                <input type="number" id="age" placeholder="Enter age" onChange={handleSubmit} />
                <br/>
                <input type="text" id="address" placeholder="Address" onChange={handleSubmit} />
                <br/>
                <label >Enter your department</label><br />
                <select type="text" id="department" placeholder="department" onChange={handleSubmit}>
                <option>----</option>
                <option>Engineer</option>
                <option>Doctor</option>
                <option>Politician</option>
                </select>
                <br/>
                <input type="Number" id="salary" placeholder="Enter Salary" onChange={handleSubmit} />
                <br/>
                <input type="text" name="profile" id="image" placeholder="enter  profile url" onChange={handleSubmit}  />
                <br />
                <input type="checkbox" id="martialState" placeholder="martialState" onChange={handleSubmit}/>
                <br/>
                <input type="submit" value={"User Registration"}/>
            </form>
            </div>

            <div id="table">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th> 
                            <th>Age</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>MaritailStatus</th>
                            <th>Profile picture</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tData.map((e) => (
                         <tr>
                             <td>{e.name}</td>
                             <td>{e.age}</td>
                             <td>{e.address}</td>
                             <td>{e.department}</td>
                             <td>{e.salary}</td>
                             <td>{e.maritialState=="on" ? "married":"single"}</td>
                             <td><img src={e.image} alt="" height={"200px"} width={"200px"} /></td>
                             <br></br>
                             
                         </tr>    
                        ))}
                    </tbody>
                </table>

            </div>
            
         
        </div>
    )
}