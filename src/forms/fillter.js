import React, { Component } from 'react'

export default class Fillter extends Component {
  render() {
    return (
      <div className='input-group mb-3'>
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Tìm kiếm</span>
            </div>
            <input type="text" className='form-control' placeholder='Nhập tên sinh viên' aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
    )
  }
}
