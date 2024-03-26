import PropTypes from 'prop-types';
import ratingImg from '../../assets/Images/rating.png'
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const {bookId, bookName, author, image, rating, category, tags } = book
    return (
        <Link to={`/BookDetails/${bookId}`}>
            <div className="card card-compact shadow-xl border border-[#26131313] p-2 space-y-3">
                <figure><img src={image} className='' alt="" /></figure>
                <div className='flex gap-2'>
                    {
                        tags.map((tag, index) => <p key={index} className='text-[#23BE0A] px-2 py-1 rounded-xl bg-gray-100'>{tag}</p>)
                    }
                </div>
                <h2 className='text-2xl font-bold play'>{bookName}</h2>
                <p className='work'>By : {author}</p>
                <div className="flex justify-between work">
                    <p>{category}</p>
                    <p className='flex gap-2'>{rating} <span><img src={ratingImg} alt="" /></span></p>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
};

export default Book;