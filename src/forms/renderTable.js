import React, { Component } from 'react'

export default class RenderTable extends Component {
  render() {
    return (
      <table className='table table-striped'>
            <thead className="bg-dark text-white">
                <tr>
                    <th>Mã SV</th>
                    <th>Họ Tên</th>
                    <th>Số Điện Thoại</th>
                    <th>Email</th>
                    <th>Sửa</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
      </table>
    )
  }
}
