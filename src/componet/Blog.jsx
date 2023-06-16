/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react'


const Blog = ({ data }) => {
    return (
        <div>
            <div className="card" style={ { width: "20rem" } }>
                <img
                    src={ ` http://localhost:1000/public/${data.fileprth}` } height={ 150 } width={ 150 }
                    className="d-block mx-lg-auto img-fluid"
                    lt="Bootstrap Themes"
                    loading="lazy" />
                <div className="card-body">
                    <h5 className="card-title">{ data.title }</h5>
                    <p className="card-text">{ data.title }</p>
                    <a href="#" className="btn btn-primary">Go To Blog</a>
                </div>
            </div>

            {/* <a href="https://mythrillfiction.com/" target="_blank">Mythrill</a> */ }
        </div>
    )
}


export default Blog