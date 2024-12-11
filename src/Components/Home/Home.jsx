import user from "../../assets/images/user.png"
const Home = () => {
    return (
        <main>
            <div className="flex">
                <div>
                    <h1 className="text-5xl">One Step <br /> Closer To Your <br />
                        <span>Dream Job</span> </h1>
                    <p>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <button className="btn ">Get started</button>
                </div>
                <div>
                    <img className="w-1/2" src={user} alt="" />
                </div>
            </div>
        </main>
    );
};

export default Home;