
import {Helmet} from "react-helmet-async";
import React, { PureComponent } from 'react';
import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer, Scatter,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {useLoaderData} from "react-router-dom";
import Heading from "../components/Heading.jsx";
// import {
//     ComposedChart,
//     Line,
//     Area,
//     Bar,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     Scatter,
//     ResponsiveContainer,
// } from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
        cnt: 490,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
        cnt: 590,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
        cnt: 350,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        cnt: 480,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
        cnt: 460,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
        cnt: 380,
    },
];

const Statistics = () => {
    const fetchData = useLoaderData();
    console.log(fetchData)

        return (
            <div>
                <Helmet>
                    <title>GadgetHeaven | Statistics</title>
                </Helmet>
                <div className={"bg-primary text-white py-20 space-y-4"}>
                    <Heading title={"Statistics"} subtitle={"Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"}></Heading>
                </div>
                <div className={"flex justify-center container mx-auto"}>
                    <ComposedChart width={1600} height={400} data={fetchData}>
                        <CartesianGrid stroke={"#f5f5f5"}></CartesianGrid>
                        <XAxis dataKey={"product_title"} scale={"band"}></XAxis>
                        <YAxis></YAxis>
                        <Legend></Legend>
                        <Tooltip/>
                        <CartesianGrid></CartesianGrid>
                        <Bar dataKey={"price"} barSize={20} fill={"#413ea0"} />

                    </ComposedChart>
                </div>
                
            </div>
        );
};

export default Statistics;