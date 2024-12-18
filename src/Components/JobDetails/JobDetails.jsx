import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../../utility/LocalStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const idint = parseInt(id);
    const job = jobs.find(job => job.id === idint)
    
    const handleApplyJob =()=> {

        saveJobApplication(id);
        toast('you have applied successfully')
    }
    return (
        <div>
            <div>
                   <h2 className="text-2xl text-center p-6 text-white mt-2 mb-4 bg-gradient-to-r from-cyan-300 to-blue-300">Job Details</h2>
            </div>

            <div className="grid gap-2 md:grid-cols-4">
                <div className=" md:col-span-3 p-4">
                    <h5> <span className="font-semibold">Job Descripction:</span> {job.job_description} </h5>
                    <h5> <span className="font-semibold"> Job Responsibility: </span>{job.job_responsibility}</h5>
                    <h5> <span className="font-semibold"> Educational Requirements:</span> {job.educational_requirements}</h5>
                    <h5> <span className="font-semibold">Experiences: </span> {job.experiences}</h5>
                </div>

                <div>
                <div className="border p-4">
                    <h4> <span className="font-semibold text-xl">Job Details</span></h4>
                    <p className="border"></p>
                    <div className="p-2">
                        <h3> <span className="font-semibold">Salary:</span>{job.salary}</h3>
                        <h3> <span className="font-semibold">Job Title:</span>{job.job_title}</h3>
                    </div>
                    <h4> <span className="font-semibold text-2xl">Contact information</span></h4>
                    <p className="border"></p>
                    <div className="p-2">
                    <h3> <span className="font-semibold">Phone:</span>{job.contact_information.phone}</h3>
                    <h3> <span className="font-semibold">Email:</span> {job.contact_information.email}</h3>
                    <h3> <span className="font-semibold">Address:</span> {job.contact_information.address}</h3>
                    </div>
                </div>
                <button onClick={handleApplyJob} className="btn md:w-full  bg-cyan-400 text-white mb-4 mt-4" >Apply Now</button>
                </div>
               

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetails;