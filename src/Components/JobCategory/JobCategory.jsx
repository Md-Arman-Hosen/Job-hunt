/* eslint-disable react/prop-types */

const JobCategory = ({Cjob}) => {
    const {logo,category_name,availability}=Cjob;
    return (
        <div>
           <div >
            <div className="card card-compact bg-teal-50/40  shadow">
                    <figure className="pt-4">
                        <img
                            src={logo} alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{category_name}</h2>
                        <p>{availability}</p>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default JobCategory;