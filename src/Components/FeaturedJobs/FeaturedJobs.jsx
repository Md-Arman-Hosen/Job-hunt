import { useEffect } from "react";
import { useState } from "react";
import FeaturesJob from "../Featuresjob/FeaturesJob";

const FeaturedJobs = () => {
    const [jobs ,setjobs] = useState([])
// this is not the best ways to data load
const [dataLength, setDataLength] = useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then (res => res.json())
        .then (data => setjobs(data) )
    },[])
    return (
        <div>
            <div className="mt-32 text-center mb-8">
                <h1 className="text-5xl font-semibold mb-4">Featured Jobs:{jobs.length}</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                {
                    jobs.slice(0,dataLength).map (job => <FeaturesJob
                                     key={job.id}
                                     job={job}
                                     ></FeaturesJob>)
                }
            </div>
            <div className={dataLength === jobs.length ? "hidden" : ""}>
                <button onClick={()=> setDataLength(jobs.length)}
                 className="btn  bg-cyan-400 text-white float-end mb-4"> Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;