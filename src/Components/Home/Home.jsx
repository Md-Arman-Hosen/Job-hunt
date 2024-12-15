import user from "../../assets/images/user.png"
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobsCatagory from "../JobsCategory/JobsCatagory";
const Home = () => {
    return (
        <div>
            <div className="md:flex  bg-teal-50/40">
                <div className="mx-12">
                    <h1 className="md:text-7xl text-4xl pb-6 font-bold text-wrap m lg:mt-20">One Step <br /> Closer To Your
                        <span className="text-cyan-400 lg:flex flex-col"> Dream Job</span> </h1>
                    <p >Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className="btn m-6 bg-cyan-400 text-white">Get started</button>
                </div>
                <div>
                    <img className=" mx-2" src={user} alt="" />
                </div>
            </div>
            <div>
                <JobsCatagory></JobsCatagory>
                <FeaturedJobs></FeaturedJobs>
            </div>
        </div>
    );
};

export default Home;