/* eslint-disable react/prop-types */
import { CiLocationOn,CiDollar } from "react-icons/ci";
const FeaturesJob = ({ job }) => {
    const { logo,job_title,company_name,location,salary} = job;
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
                   <button className="btn">Remote</button>
                   <button className="btn">Full Time</button>
                   </div>
                   <div className="flex">
                    <p className='flex gap-2 items-center'> <span className="text-2xl"><CiLocationOn />
                    </span> {location}</p>
                    <p className='flex gap-2 items-center'> <span className="text-2xl"><CiDollar />
                    </span> Salary: {salary}</p>
                   </div>
                    <div className="card-actions">
                        <button className="btn bg-cyan-400 text-white">View Details</button>
                    </div>
                </div>
            </div>        </div>
    );
};

export default FeaturesJob;