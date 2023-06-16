
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Blog from './Blog'

const Dashboard = () => {
    // const [loadder, setLoadder] = useState(true);
    const [blogDatas, setBlogDatas] = useState([]);
    console.log('blogDatas::: ', blogDatas);

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
    return (
        <div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">Exploring the Intersection of Technology</h1>
                        <p className="lead">In today's world, technology is ubiquitous, and its impact on society is profound. The intersection of technology and society is a complex and ever-changing space that presents many challenges and opportunities. This blog aims to explore this</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                            <Link to={ "/learn-mor" }>
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Leran more</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={ { display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" } }>
                    {
                        blogDatas.slice(0, 20).map((data, index) => (
                            <div style={ { margin: "10px 0" } } key={ index }>
                                <Blog data={ data } />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard