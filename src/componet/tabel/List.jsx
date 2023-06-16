/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


const List = () => {
    const [blogDatas, setBlogDatas] = useState([]);

    ;
    useEffect(() => {

        const fetchApi = async () => {
            fetch(`http://localhost:1000/api/getAllBlogs`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            }).then((res) => res.json())
                .then((data) => {
                    setBlogDatas(data.dataAdd)
                })
                .catch((error) => console.log('error::: ', error))
        }
        fetchApi();
    }, [])

    const deleteData = async (id) => {
        console.log('id::: ', id);
        fetch(`http://localhost:1000/api/deleteData/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('data::: ', data);

                const delete_data = blogDatas.filter((ele, index) => ele._id !== id);

                setBlogDatas(delete_data)
                if (data.message === "The blog is remove.....") {
                }
            }
            ).catch((err) => {
                console.log('err::: ', err)
            })
    }


    return (
        <center>
            <table style={ { color: "white" } }>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>title</td>
                        <td> describe</td>
                        <td>type</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogDatas.slice(0, 20).map((data, index) => {
                            return (
                                <tr key={ index }>
                                    <td>{ index + 1 }</td>
                                    <td>{ data.titel }</td>
                                    <td>{ data.Description }</td>
                                    <td>{ data.type }</td>
                                    <td>{ data.fileprth }</td>
                                    <td><img src={ ` http://localhost:1000/public/${data.fileprth}` } height={ 30 } width={ 30 } /></td>
                                    <td>
                                        { <div>
                                            <button onClick={ () => deleteData(data._id) }>Delete</button>
                                            <Link to={ `/addblog?${data._id}` }><button>Edit</button></Link>
                                        </div> }
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </center>

    )
}

export default List