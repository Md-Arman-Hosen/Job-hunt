import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/LocalStorage";
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";



const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs , setDisplayJobs] = useState([]);
    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter (job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter (job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
        
    } 

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <div>
                <h2 className="text-2xl text-center p-6 text-white mt-2 mb-4 bg-gradient-to-r from-cyan-300 to-blue-300">Applied Jobs</h2>
            </div>
            <div className="float-right">
                <details className="dropdown">
                    <summary className="btn m-1 text-white bg-cyan-400 ">Filter</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={()=> handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>


            {
                displayJobs.map(job => <div className="mb-4 w-3/5 mx-auto mt-4" key={job.id}>
                    
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure className="p-4 bg-slate-300 m-6 w-1/4">
                            <img
                                src={job.logo}
                                alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title mb-2">{job.job_title}</h2>
                            <p className="mb-2">{job.company_name}</p>
                            <div className="flex gap-2 mb-2">
                                <button className="btn">{job.remote_or_onsite}</button>
                                <button className="btn">Full Time</button>
                            </div>
                            <div className="flex">
                                <p className='flex gap-2 items-center'> <span className="text-2xl"><CiLocationOn />
                                </span> {job.location}</p>
                                <p className='flex gap-2 items-center'> <span className="text-2xl"><CiDollar />
                                </span> Salary: {job.salary}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <div className="card-actions">
                                    <Link to={`/job/${job.id}`}>
                                        <button className="btn bg-cyan-400 text-white">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    );
};

export default AppliedJobs;