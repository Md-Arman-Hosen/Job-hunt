
const Blogs = () => {

    const blogs = [
        {
            id: 1,
            title: "Top 10 Skills for Remote Work in 2024",
            description: "Discover the essential skills to excel in remote jobs this year.",
            thumbnail: "https://img.freepik.com/free-vector/flat-customer-service-week-illustration_23-2149644204.jpg?t=st=1734527420~exp=1734531020~hmac=ee28dbaccf0617135a8d791b9b1438f2dca0864293e444fc7711746c622647d5&w=740",
            link: "#",
        },
        {
            id: 2,
            title: "How to Ace Your Next Job Interview",
            description: "Learn tips and tricks to make a lasting impression during your interviews.",
            thumbnail: "https://img.freepik.com/free-vector/meeting-background-with-business-women_23-2147608191.jpg?t=st=1734527495~exp=1734531095~hmac=0fe8d2acbb6d225eb03566d6e9b12f2e2c8d1aaf781f600efe15b51fd8568cda&w=740",
            link: "#",
        },
        {
            id: 3,
            title: "Freelancing vs Full-time Jobs: Pros and Cons",
            description: "Evaluate the benefits and drawbacks of freelancing compared to full-time roles.",
            thumbnail: "https://img.freepik.com/free-vector/workspaces_1268-137.jpg?t=st=1734527691~exp=1734531291~hmac=64c49b84d5fce8f837cf3b0a0aff61bf318ff2322817cd81f3cf4ecf491a4884&w=740",
            link: "#",
        },
        {
            id: 4,
            title: "5 Resume Mistakes to Avoid",
            description: "Ensure your resume stands out by avoiding these common mistakes.",
            thumbnail: "https://img.freepik.com/free-vector/headhunting-concept-idea-business-recruitment-human-resources-management-hr-manager-occupation-flat-vector-illustration_613284-884.jpg?t=st=1734527528~exp=1734531128~hmac=edd5bfc158c7c786dcfd05672a7f1d5b6cfa41f8f2990a84db287cfcc4742499&w=740",
            link: "#",
        },
   
    ];
    return (
        <div>
            <header className=" text-center p-6 text-white mt-2 mb-4 bg-gradient-to-r from-cyan-300 to-blue-300">
                <div className="container mx-auto text-center">
                    <h1 className="text-2xl ">Blogs</h1>
                </div>
            </header>
            <p className=" mt-2 text-center text-xl">Stay updated with the latest career tips and trends</p>
            <main className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
                        >
                            <figure>
                                <img
                                    src={blog.thumbnail}
                                    alt={blog.title}
                                    className="rounded-t-lg w-full"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{blog.title}</h2>
                                <p className="text-base">{blog.description}</p>
                                <div className="card-actions justify-end">
                                    <a
                                        href={blog.link}
                                        className="btn bg-cyan-400 text-white"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Blogs;