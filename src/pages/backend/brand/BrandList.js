import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosAdd } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import BrandServices from '../../../services/BrandServices';

const BrandList = () => {
    const [brand, setBrand] = useState([]);
    useEffect(() => {
        (async() =>{
            const result = await BrandServices.get_list();
            setBrand(result.brand);
        })();
    },[]);
    return (
        <div className='card'>
            <div className='card-header'>
                <div className='row'>
                    <div className='col-6'>
                        <strong>Tất cả thương hiệu</strong>
                    </div>
                    <div className='col-6 text-end'>
                        <Link to="/admin/brand/create" className='btn btn-sm btn-success'><IoIosAdd className='fs-3' />Thêm thương hiệu</Link>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Hình</th>
                            <th>Tên</th>
                            <th>Danh mục</th>
                            <th>Thương hiệu</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                    {brand && brand.length > 0 ? (
                            brand.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td><img width={100} src={item.image} alt={item.name} /></td>
                                    <td>{item.name}</td>
                                    <td>{item.category_id}</td>
                                    <td>{item.brand_id}</td>
                                    <td>
                                        <BiEdit className='fs-3 me-2' style={{ color: "orange", cursor: "pointer" }} />
                                        <FaTrashAlt className='fs-4' style={{ color: "red", cursor: "pointer" }} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">Không có sản phẩm nào</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BrandList