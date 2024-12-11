import user from "../../assets/images/user.png"
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategory from "../JobCategory/jobCategory";
const Home = () => {
    return (
        <banner>
            <div className="md:flex  bg-teal-50/40">
                <div className="mx-12">
                    <h1 className="md:text-7xl text-4xl pb-6 font-bold text-wrap">One Step <br /> Closer To Your
                        <span className="text-cyan-400"> Dream Job</span> </h1>
                    <p >Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn m-6 bg-cyan-400 text-white">Get started</button>
                </div>
                <div>
                    <img className=" mx-2" src={user} alt="" />
                </div>
            </div>
            <div>
                <JobCategory></JobCategory>
                <FeaturedJobs></FeaturedJobs>
            </div>
        </banner>
    );
};

export default Home;