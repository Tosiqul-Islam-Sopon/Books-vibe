import PropTypes from 'prop-types';

import { getStoredBooks, saveBooksToStorage } from "../Utility/LocalStorage";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecomendedBook = ({ book }) => {

    const { bookName, author, image, review, totalPages, rating,
        category, tags, publisher, yearOfPublishing,award } = book;

    const handleAddToRead = (boi) => {
        const storedReadBooks = getStoredBooks("read-books");
        const alreadyStored = storedReadBooks.find(book => book.bookId === boi.bookId);
        if (alreadyStored) {
            toast.warning("Already in read list");
        }
        else {
            toast.success("Added in read list");
            saveBooksToStorage("read-books", boi);
        }
    }

    const handleAddToWishlist = (boi) => {
        const storedReadBooks = getStoredBooks("read-books");
        const storedWishBooks = getStoredBooks("wishlist");
        const alreadyStoredInRead = storedReadBooks.find(book => book.bookId === boi.bookId);
        const alreadyStoredInWishlist = storedWishBooks.find(book => book.bookId === boi.bookId);
        if (alreadyStoredInRead) {
            toast.warning("Already in read list");
        }
        else if (alreadyStoredInWishlist) {
            toast.warning("Already in wishlist");
        }
        else {
            toast.success("Added in wishlist");
            saveBooksToStorage("wishlist", boi);
        }
    }

    return (
        <div className='border border-gray-200 p-5 rounded-2xl'>
            <h2 className='text-3xl text-center mx-auto p-3 font-bold play mb-5 text-[#23BE0A] border border-gray-200 shadow-xl w-1/2'>{award}</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='h-full w-72' src={image} alt="Album" /></figure>

                <div className="card-body">
                    <h2 className="text-3xl play font-bold">{bookName}</h2>
                    <p>By : {author}</p>
                    <h1 className="border border-gray-200"></h1>
                    <p>{category}</p>
                    <h1 className="border border-gray-200"></h1>

                    <p className="work"><span className="font-bold">Review : </span> <span>{review}</span></p>
                    <div className="flex gap-2">
                        <p className="font-bolt work">Tag</p>
                        {
                            tags.map((tag, index) => <p key={index} className='text-[#23BE0A] px-2 py-1 rounded-xl bg-gray-100'>#{tag}</p>)
                        }
                    </div>
                    <h1 className="border border-gray-200"></h1>
                    <div className="space-y-2">
                        <p>Number of Pages : <span>{totalPages}</span></p>
                        <p>Publisher : <span>{publisher}</span></p>
                        <p>Year of Publishing : <span>{yearOfPublishing}</span></p>
                        <p>Rating : <span>{rating}</span></p>
                    </div>
                    <div className="flex gap-4 mt-5">
                        <button onClick={() => handleAddToRead(book)} className="btn bg-transparent border border-gray-300 px-6 font-semibold work hover:bg-[#23BE0A]">Read</button>
                        <button onClick={() => handleAddToWishlist(book)} className="btn bg-[#59C6D2] px-6 text-white font-semibold work hover:bg-[#23BE0A]">Wishlist</button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

RecomendedBook.propTypes = {
    book: PropTypes.object
};

export default RecomendedBook;