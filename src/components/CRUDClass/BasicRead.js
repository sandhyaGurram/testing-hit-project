import axios from 'axios'
import React, { Component } from 'react'

export default class BasicRead extends Component {
    constructor(prop){
        super(prop)
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log("success");
            console.log(res.data);
            this.setState({
                posts:res.data
            })
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
  render() {
    return (
      <div className='container p-5'>
        <h1>Data</h1>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Post Id</th>
                        <th>Post Title</th>
                        <th>Post Body</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.posts.map((post)=>{
                        return <tr>
                            <td>{post.id}</td>
                            <td>{post.title} </td>
                            <td>{post.body} </td>
                        </tr>
                    })}
                </tbody>
            </table>
      </div>
    )
  }
}
