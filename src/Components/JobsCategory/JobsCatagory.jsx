import { useEffect } from "react";
import { useState } from "react";
import JobCategory from "../JobCategory/jobCategory";
const JobsCatagory = () => {
    const [Cjobs ,setCjobs] = useState([])

    useEffect(()=>{
        fetch('catagories.json')
        .then (res => res.json())
        .then (data => setCjobs(data) )
    },[])
    return (
        <div>
            <div className="mt-32 text-center mb-8">
                <h1 className="text-5xl font-semibold mb-4">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            </div>
            <div className="grid md:grid-cols-4 gap-4 mb-10">
                {
                    Cjobs.map (Cjob =><JobCategory
                        key={Cjob.id}
                        Cjob={Cjob}
                    ></JobCategory>)
                }
            </div>
        </div>
    );
};

export default JobsCatagory;