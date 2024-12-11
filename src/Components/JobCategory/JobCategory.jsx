import accountIcon from "../../assets/icons/accounts.png"
import creativeIcon from "../../assets/icons/creative.png"
import MarketingIcon from "../../assets/icons/marketing.png"
import EngineeringIcon from "../../assets/icons/chip.png"
const JobCategory = () => {
    return (
        <div>
            <div className="mt-32 text-center mb-8">
                <h1 className="text-5xl font-semibold mb-4">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="md:grid grid-cols-4 gap-6 mb-10">
                <div className="card card-compact bg-teal-50/40  shadow">
                    <figure className="pt-4">
                        <img
                            src={accountIcon} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                </div>
                <div className="card card-compact bg-teal-50/40  shadow">
                    <figure className="pt-4">
                        <img
                            src={creativeIcon} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Creative Design</h2>
                        <p>100+ Jobs Available</p>
                    </div>
                </div>
                <div className="card card-compact bg-teal-50/40  shadow">
                    <figure className="pt-4">
                        <img
                            src={MarketingIcon} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Marketing & Sales</h2>
                        <p>150 Jobs Available</p>
                    </div>
                </div>
                <div className="card card-compact bg-teal-50/40  shadow">
                    <figure className="pt-4">
                        <img
                            src={EngineeringIcon } alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Engineering Job</h2>
                        <p>224 Jobs Available</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobCategory;