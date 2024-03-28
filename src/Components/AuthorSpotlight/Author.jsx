import PropTypes from 'prop-types';

const Author = ({ author }) => {

    const { name, bio, imageUrl, popularWorks } = author;
    return (
        <div className="flex flex-col-reverse lg:flex-row rounded-2xl bg-base-100 shadow-xl lg:p-5 p-2 border border-gray-200 hover:shadow-lg">
            <div className="card-body space-y-3 lg:p-5 p-2">
                <h2 className="text-3xl font-bold play">{name}</h2>
                <p><span className='font-bold work text-xl'>Bio:</span> {bio}</p>
                <div>
                    <div className="lg:flex lg:items-center lg:gap-3 space-y-2">
                        <h2 className='text-xl font-bold text-center'>Featured Works:</h2>
                        {
                            popularWorks.map((work, index) => <p className='font-semibold' key={index}>{work}</p>)
                        }
                    </div>
                </div>
            </div>
            <figure><img className='h-full w-[400px] rounded-xl' src={imageUrl} alt="Movie" /></figure>
        </div>
    );
};

Author.propTypes = {
    author: PropTypes.object
};

export default Author;