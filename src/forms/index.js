import React, { Component } from 'react'
import {connect} from "redux"
import Header from './header'
import RenderTable from './renderTable'
import Button from './button'
import Fillter from './fillter'
class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      student: {
        id: "",
        name: "",
        phone: "",
        email: "",
      }
    }
  }
  handleOnchange = (e) =>{
    const {name, value} = e.target
    this.setState({
      ...this.state.student,
      [name] : value
    })
    console.log(this.state);
  }
  render() {
    return (
      <div className='container'>
        <Header/>
        <div className='row'>
          <div className='col-md-6'>
            <div className="form-group">
              <label>Mã SV</label>
              <input type="text" name="id" className="form-control" onChange={this.handleOnchange} placeholder="Nhập mã sinh viên" />
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group">
              <label>Họ Tên</label>
              <input type="text" name="hoTen" className="form-control" onChange={this.handleOnchange} placeholder="Nhập họ tên" />
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group">
              <label>Số điện thoại</label>
              <input type="number" name="soDt" className="form-control" onChange={this.handleOnchange} placeholder="Nhập mã số điện thoại" />
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group">
              <label>Email</label>
              <input type="text" name="email" className="form-control" onChange={this.handleOnchange} placeholder="Nhập mã email" />
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between'>
              <div>
                <Button />
              </div>
              <div>
                <Fillter />
              </div>
        </div>
        <RenderTable />
      </div>
    )
  }
}

// const mapStateToProps = (state) =>{
//   return {
    
//   }
// }

export default Form
