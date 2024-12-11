import { useEffect } from "react";
import { useState } from "react";
import FeaturesJob from "../Featuresjob/FeaturesJob";

const FeaturedJobs = () => {
    const [jobs ,setjobs] = useState([])

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
            <div className="grid md:grid-cols-2 gap-4">
                {
                    jobs.map (job => <FeaturesJob
                                     key={job.id}
                                     job={job}
                                     ></FeaturesJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;