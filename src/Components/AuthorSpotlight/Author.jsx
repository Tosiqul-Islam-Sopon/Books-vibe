import PropTypes from 'prop-types';

const Author = ({ author }) => {

    const { name, bio, imageUrl, popularWorks } = author;
    return (
        <div className="card card-side bg-base-100 shadow-xl p-5 border border-gray-200 hover:shadow-lg">
            <div className="card-body">
                <h2 className="text-3xl font-bold play">{name}</h2>
                <p><span className='font-bold work text-xl'>Bio:</span> {bio}</p>

                <div>
                    <div className="flex items-center gap-3">
                        <h2 className='text-xl font-bold'>Featured Works:</h2>
                        {
                            popularWorks.map((work, index) => <p className='font-semibold' key={index}>{work}</p>)
                        }
                    </div>
                </div>
            </div>
            <figure><img className='h-full w-[400px]' src={imageUrl} alt="Movie" /></figure>
        </div>
    );
};

Author.propTypes = {
    author: PropTypes.object
};

export default Author;