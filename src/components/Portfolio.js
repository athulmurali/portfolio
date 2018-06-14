import React from 'react'
const Portfolio  =()=> (
    <div className="container">
        <div className="row col justify-content-center">
            <h2>Projects</h2>
        </div>

         <div className="card-deck">
                <div className="card rounded" style={{width: '18rem'}}>

                    <div className="card-body">
                        <h5 className="card-title">Course manager</h5>
                        <div className="row  col justify-content-center mx-auto">
                            <i className="card-img-top fa fa-chalkboard-teacher fa-6x"></i>
                        </div>
                        <p className="card-text">An Online course management web application built  for students
                            &amp; faculties using jquery,react and springboot</p>
                        <div className="row">
                            <div className="col">
                                <a href="https://neu-course-manager.herokuapp.com/jquery/components/user-login/user-login.html" className="btn btn-outline-secondary">Visit project</a>

                            </div>
                            <div className="row col">
                                <a href="https://github.com/athulmurali/courseManager" className="btn btn-primary">
                                    <i className="fa fa-github fa-1x"></i>
                                </a>


                            </div>


                    </div>
                </div>
            </div>

                <div className="card rounded"  style={{width: '18rem'}} >

                    <div className="card-body">
                        <h5 className="card-title">Music Licensing Lab</h5>
                        <div className="row  col justify-content-center mx-auto">
                            <i className="col-6 card-img-top fa fa-copyright fa-6x"></i>

                            <i className="col-6 card-img-top fa fa-music fa-6x"></i>
                        </div>
                        <p className="card-text">A platform for musicians  to upload their music and get licensing for free in Northeastern University </p>
                        <div className="row">
                            <div className="col">
                                <a href="https://neu-course-manager.herokuapp.com/jquery/components/user-login/user-login.html" className="btn btn-outline-secondary">Visit project</a>

                            </div>
                            <div className="row col">
                                <a href="https://github.com/athulmurali/courseManager" className="btn btn-primary">
                                    <i className="fa fa-github fa-1x"></i>
                                </a>


                            </div>
                        </div>


                    </div>
                </div>

                <div className="card rounded"  style={{width: '18rem',height: '18rem'}} >

                    <div className="card-body">
                        <h5 className="card-title">Search Engine Research</h5>
                        <div className="row  col justify-content-center mx-auto">
                            <i className="col-6 card-img-top fa fa-chart-line fa-6x"></i>
                            <i className="col-6 card-img-top fa fa-searchengin fa-6x"></i>


                        </div>
                        <p className="card-text">A research project on comparing various search engine efficiencies using BM25, Query likelihood
                            by a team of 3 people. </p>
                        <div className="row">
                            <div className="col">
                                <a href="https://github.com/athulmurali/searchEngine" className="btn btn-outline-secondary">Visit project</a>

                            </div>
                            <div className="row col">
                                <a href="https://github.com/athulmurali/searchEngine" className="btn btn-primary">
                                    <i className="fa fa-github fa-1x"></i>
                                </a>


                            </div>
                        </div>
            </div>
                </div>


                <div className="card rounded" style={{width: '18rem'}}>

                    <div className="card-body">
                        <h5 className="card-title">Hashgraph based loyalty platform</h5>
                        <div className="row  col justify-content-center mx-auto my-auto">
                            <i className="col-6 card-img-top fa fa-shopping-cart fa-6x"></i>
                            <i className="col-6 card-img-top fa fa-searchengin fa-6x"></i>
                        </div>
                        <p className="card-text">A research project on comparing various search engine efficiencies using BM25, Query likelihood
                            by a team of 3 people. </p>
                        <div className="row">
                            <div className="col">
                                <a href="https://github.com/athulmurali/searchEngine"
                                   className="btn btn-outline-secondary">Visit project</a>

                            </div>
                            <div className="row col">
                                <a href="https://github.com/athulmurali/searchEngine" className="btn btn-primary">
                                    <i className="fa fa-github fa-1x"></i>
                                </a>


                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

)
export default Portfolio
