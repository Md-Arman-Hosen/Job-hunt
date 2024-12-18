import { Line, LineChart, XAxis, YAxis } from "recharts";
import jobs from '../../../public/jobs.json'

const Statistics = () => {
    return (
        <div>
            <h1 className="text-2xl text-center p-6 text-white mt-2 mb-4 bg-gradient-to-r from-cyan-300 to-blue-300"> Statistics</h1>
            <div className="md:mx-64">
                <LineChart width={300} height={200} data={jobs}>
                    <Line dataKey="id"></Line>
                    <XAxis dataKey="company_name"></XAxis>
                    <YAxis dataKey=""></YAxis>
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;