/* eslint-disable react/prop-types */
import { CiLocationOn,CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
const FeaturesJob = ({ job }) => {
    const {id, logo,job_title,company_name,location,salary,remote_or_onsite} = job;
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow p-6">
                <figure>
                    <img
                        src={logo}
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                   <div className="flex gap-2">
                   <button className="btn">{remote_or_onsite}</button>
                   <button className="btn">Full Time</button>
                   </div>
                   <div className="flex">
                    <p className='flex gap-2 items-center'> <span className="text-2xl"><CiLocationOn />
                    </span> {location}</p>
                    <p className='flex gap-2 items-center'> <span className="text-2xl"><CiDollar />
                    </span> Salary: {salary}</p>
                   </div>
                    <div className="card-actions">
                      <Link to={`/job/${id}`}>
                      <button className="btn bg-cyan-400 text-white">View Details</button>
                      </Link>
                    </div>
                </div>
            </div>        
        
        </div>
    );
};

export default FeaturesJob;