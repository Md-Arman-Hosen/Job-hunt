import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const idint = parseInt(id);
    const job = jobs.find(job => job.id === idint)
    console.log(job)
    return (
        <div>
            <h2>job details of : {id}</h2>
            <div className="grid gap-2 md:grid-cols-4">
                <div className="border md:col-span-3 p-4">
                    <h5> <span className="font-semibold">Job Descripction:</span> {job.job_description} </h5>
                    <h5> <span className="font-semibold"> Job Responsibility: </span>{job.job_responsibility}</h5>
                    <h5> <span className="font-semibold"> Educational Requirements:</span> {job.educational_requirements}</h5>
                    <h5> <span className="font-semibold">Experiences: </span> {job.experiences}</h5>
                </div>

                <div className="border p-4">
                    <h4> <span className="font-semibold text-xl">Job Details</span></h4>
                    <p className="border"></p>
                    <div className="p-4">
                        <h3> <span className="font-semibold">Salary:</span>{job.salary}</h3>
                        <h3> <span className="font-semibold">Job Title:</span>{job.job_title}</h3>
                    </div>
                    <h4> <span className="font-semibold text-2xl">Contact information</span></h4>
                    <p className="border"></p>
                    <div className="p-4">
                    <h3> <span className="font-semibold">Phone:</span>{job.contact_information.phone}</h3>
                    <h3> <span className="font-semibold">Email:</span> {job.contact_information.email}</h3>
                    <h3> <span className="font-semibold">Address:</span> {job.contact_information.address}</h3>
                 
                    </div>
                    <button className="btn w-full  bg-cyan-400 text-white mb-4" >Apply Now</button>
                </div>
              
            </div>
        </div>
    );
};

export default JobDetails;