/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// const PagesToRead = () => {
//     return (
//         <div>
//             <h2>the page i read</h2>
//         </div>
//     );
// };

// export default PagesToRead;


// import React from 'react';
import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getStoredReadBooks } from '../utility/readLocalStorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const PagesToRead = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={PagesToRead(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PagesToRead2() {

    const [appliedBooks, setAppliedBooks] = useState([]);
    const [displayBooks, setDisplayBooks] = useState([]);

    const books = useLoaderData();
    useEffect(() => {
        const storedBookIds = getStoredReadBooks();
        if (books.length > 0) {
            const booksApplied = books.filter(book => storedBookIds.includes(book.id))
            setAppliedBooks(booksApplied);
            setDisplayBooks(booksApplied);
            console.log(storedBookIds, booksApplied);
        }
    }, [books])

    return (
        <BarChart
            width={600}
            height={300}
            data={appliedBooks}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                {appliedBooks.map((entry, i) => (
                    <Cell key={`cell-${i}`} fill={colors[i % 20]} />
                ))}
            </Bar>
        </BarChart>


    );
}

// export default PagesToRead;