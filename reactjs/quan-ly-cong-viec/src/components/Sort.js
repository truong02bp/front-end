import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>Sắp xếp</span>
                </button>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="?">Tên A-Z</a>
                    <a className="dropdown-item" href="?">Tên Z-A</a>
                    <a className="dropdown-item" href="?">Trạng Thái Kích Hoạt</a>
                    <a className="dropdown-item" href="?">Trạng Thái Ẩn</a>
                </div>
            </div>
        )
    }
}
