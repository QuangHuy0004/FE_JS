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
                        <strong>Tất cả sản phẩm</strong>
                    </div>
                </div>
            </div>
            <div className='card-body'>
                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Slug</th>
                            <th>Hình ảnh</th>
                            <th>Trạng thái</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                    {brand && brand.length > 0 ? (
                            brand.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.slug}</td>
                                    <td>    <img width={100} src={item.image} alt={item.name} />    </td>
                                    <td>{item.status}</td>
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
