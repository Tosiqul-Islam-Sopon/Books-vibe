
import { getStoredBooks } from "../Utility/LocalStorage";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const PagesToRead = () => {
    const readBooks = getStoredBooks("read-books");

    const renderCustomAxisTick = ({ x, y, payload }) => {
        return (
            <text x={x} y={y} dy={16} textAnchor="middle" fill="#666">
                {payload.value}
            </text>
        );
    };

    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="flex justify-center items-center mt-20">
            <BarChart width={600} height={300} data={readBooks}>
                <XAxis dataKey="bookName" tick={renderCustomAxisTick} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
            </BarChart>
        </div>
    );
};

PagesToRead.propTypes = {
    book: PropTypes.object
};

export default PagesToRead;
