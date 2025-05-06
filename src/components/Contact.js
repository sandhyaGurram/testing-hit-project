import React, { Component } from 'react'
import '../style/Contact.css'

export default class Contact extends Component {
    constructor(prop){
        super(prop)

        this.state={
            studentName:"",
            mobile:"",
            email:"",

        }
    }

    changeData=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submitHandler=(e)=>{
        e.preventDefault()
        console.log(this.state)


        if(this.state.studentName===""){
            document.getElementById("status").innerHTML="Enter Name"
        }
        else{
            document.getElementById("status").innerHTML=""
        }
    }
  render() {
    const {studentName, mobile, email}= this.state //destructure format
    return (
      <div className='container p-5'>
        <div className='row'>
            <div className='col-12 col-md-6 p-5'>
                <h4>Reach out to us</h4>
                <form onSubmit={this.submitHandler}>
                    <input type='text' name='studentName' placeholder='Enter Name' className='form-control' value={studentName} onChange={this.changeData}/>
                    <p id='status'></p>
                    <input type='' name='mobile' placeholder='Mobile Number' className='form-control' value={mobile} onChange={this.changeData}/>
                    <input type='text' name='email' placeholder='Email Id' className='form-control' value={email} onChange={this.changeData} />
                    <select className='form-select' name='course'>
                        <option value="">Select Any Course</option>
                        <option value="reactjs">React Js</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="javascript">Javascript</option>
                        <option value="nodejs">NodeJS</option>
                    </select>
                    <textarea className='form-control' name='message' rows={5}>Message</textarea>
                    <input type='submit' placeholder='Message'  />
                </form>
            </div>
            <div className='col-12 col-md-6 p-5 text-align-left'>
                <h4>Address</h4>
                <div className='address'>
                <span className='px-3 '><i className="bi bi-house-door"></i></span>
                <p>House No 40, Third Floor, Vittalrao Nagar, Madhapur, Hitech City Main Road, Hyderabad, Telangana- 081</p>
                </div>
                <div className='address'>
                <span className='px-3'><i className="bi bi-telephone"></i></span>
                <p>9948565934</p>
                </div>
                <div className='address'>
                <span className='px-3'><i className="bi bi-envelope"></i></span>
                <p>gurramsandhya@gmail.com</p>
                </div>
                

            </div>
        </div>
      </div>
    )
  }
}
