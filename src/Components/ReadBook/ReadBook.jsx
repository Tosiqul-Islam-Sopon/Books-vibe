import PropTypes from 'prop-types';
import loaction from '../../assets/Images/loaction.png'
import publisherIcon from '../../assets/Images/publisher.png'
import pages from '../../assets/Images/pages.png'
import { Link } from 'react-router-dom';

const ReadBook = ({ book }) => {

    const { bookId, bookName, author, image, totalPages, rating,
        category, tags, publisher, yearOfPublishing } = book;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-5">
                <figure><img className='h-56 w-48' src={image} alt="Album" /></figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title play font-bold">{bookName}</h2>
                    <p className='work font-medium'>By : <span>{author}</span></p>
                    <div className="flex gap-2 items-center">
                        <p className="font-bolt work font-bold">Tag</p>
                        {
                            tags.map((tag, index) => <p key={index} className='text-[#23BE0A] px-2 py-1 rounded-xl bg-gray-100 work font-medium'>#{tag}</p>)
                        }
                        <p className='flex gap-1 items-center work'><span><img src={loaction} alt="" /></span> Year of Publishing: <span>{yearOfPublishing}</span></p>
                    </div>
                    <div className='flex gap-2 items-center work'>
                        <p className='flex gap-1 items-center'><span><img src={publisherIcon} alt="" /></span> Publisher: <span>{publisher}</span></p>
                        <p className='flex gap-1 items-center'><span><img src={pages} alt="" /></span> Page <span>{totalPages}</span></p>
                    </div>
                    <p className='border-t border-gray-200'></p>
                    <div className='flex items-center gap-4 work'>
                        <h2 className='bg-[#328EFF26] p-3 rounded-xl text-[#328EFF]'>Catagory: {category}</h2>
                        <h2 className='bg-[#FFAC3326] p-3 rounded-xl text-[#FFAC33]'>Rating: {rating}</h2>
                        <Link to={`/BookDetails/${bookId}`}><button className='btn bg-[#23BE0A] text-white'>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ReadBook.propTypes = {
    book: PropTypes.object
};

export default ReadBook;