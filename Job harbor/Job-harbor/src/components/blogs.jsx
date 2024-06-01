import React ,{useState,useEffect} from 'react'
import './css/Profile.css'
import CreateBlogs from './CreateBlogs';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment'


function blogs() {
    const API ='http://localhost:3000/user/blogs';
    const [blogs,setBlogs]=useState([]);
    useEffect(() => {
        const fetchBlog = async () => {
          try {
            const response = await axios.get(API, { withCredentials: true });
            if (response.data.message) {
              alert(response.data.message);
            }
            // const Jobdata = await response.json();
            if (response.data.length > 0) {
              setBlogs(response.data);
            }
            // console.log(response.data);
          } catch (error) {
            console.error('Error fetching blog:', error);
            alert('Error fetching blog. Please try again later.');
          }
        };
        fetchBlog();
      }, []); 

    return (
        <div className='CompDash'>
        {/* <!--Page content-- > */}
        <div className="container">
            <div className="row">
                {/* <!-- Blog entries--> */}
                <div className="col-lg-8">


                <div className="row">
    {blogs.map((curBlog) => {
        const { _id, PhotoId, PostTitle, Date, Description } = curBlog;
        return (
            <div className="col-6" key={_id}>
                <div className="card mb-4">
                    <a href="#!"><img className="card-img-top" src={PhotoId} alt="..." /></a>
                    <div className="card-body">
                        <div className="small text-muted">{moment(Date).format('MMM Do YY')}</div>
                        <h2 className="card-title h4">{PostTitle}</h2>
                        <p className="card-text">{Description}</p>
                        <a className="btn btn-primary" href="#!">Read more →</a>
                    </div>
                </div>
            </div>
        );
    })}
</div>



                    {/* <!-- Pagination--> */}
                    <nav aria-label="Pagination">
                        <hr className="my-0" />
                        <ul className="pagination justify-content-center my-4">
                            <li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Newer</a></li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#!">1</a></li>
                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                            <li className="page-item disabled"><a className="page-link" href="#!">...</a></li>
                            <li className="page-item"><a className="page-link" href="#!">15</a></li>
                            <li className="page-item"><a className="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav>
                </div>
                {/* <!-- Side widgets--> */}
                <div className="col-lg-4">
                    {/* <!-- Search widget--> */}
                    <div className="card mb-4">
                        <div className="card-header">Search</div>
                        <div className="card-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Categories widget--> */}
                    <div className="card mb-4">
                        <div className="card-header">Categories</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">Web Design</a></li>
                                        <li><a href="#!">HTML</a></li>
                                        <li><a href="#!">Freebies</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">JavaScript</a></li>
                                        <li><a href="#!">CSS</a></li>
                                        <li><a href="#!">Tutorials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Side widget--> */}
                    <CreateBlogs/>
                </div>
            </div>
        </div>
            </div >
  )
}

export default blogs;
