import ReadBook from "../ReadBook/ReadBook";
import { getStoredBooks } from "../Utility/LocalStorage";
import down from '../../assets/Images/down.png';
import { useState } from 'react';

const ListedBooks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("read-books");
    const [readBooks, setReadBooks] = useState(getStoredBooks("read-books"));
    const [wishlistBooks, setWishlistBooks] = useState(getStoredBooks("wishlist"));

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    const sortByRating = () => {
        if (activeTab === "read-books") {
            const sortedReadBooks = readBooks.slice().sort((a, b) => b.rating - a.rating);
            setReadBooks(sortedReadBooks);
        } else if (activeTab === "wishlist") {
            const sortedWishlistBooks = wishlistBooks.slice().sort((a, b) => b.rating - a.rating);
            setWishlistBooks(sortedWishlistBooks);
        }
    };
    
    const sortByNumberOfPages = () => {
        if (activeTab === "read-books") {
            const sortedReadBooks = readBooks.slice().sort((a, b) => b.totalPages - a.totalPages);
            setReadBooks(sortedReadBooks);
        } else if (activeTab === "wishlist") {
            const sortedWishlistBooks = wishlistBooks.slice().sort((a, b) => b.totalPages - a.totalPages);
            setWishlistBooks(sortedWishlistBooks);
        }
    };

    const sortByPusblishedYear = () => {
        if (activeTab === "read-books") {
            const sortedReadBooks = readBooks.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setReadBooks(sortedReadBooks);
        } else if (activeTab === "wishlist") {
            const sortedWishlistBooks = wishlistBooks.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            setWishlistBooks(sortedWishlistBooks);
        }
    };

    return (
        <div>
            <h2 className='bg-[#1313130D] text-center py-6 text-3xl work font-bold'>Books</h2>
            <div className="flex justify-center my-8">
                <div className="dropdown" >
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white font-medium" onClick={toggleDropdown}>Sort by <img src={down} alt="" /></div>
                    <ul tabIndex={0} className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ${isOpen ? 'block' : 'hidden'}`}>
                        <li onClick={() => {sortByRating(); closeDropdown()}} className="hover:bg-[#23BE0A] hover:text-white rounded-xl" ><a>Rating</a></li>
                        <li onClick={() => {sortByNumberOfPages(); closeDropdown()}} className="hover:bg-[#23BE0A] hover:text-white rounded-xl" ><a>Number of Pages</a></li>
                        <li onClick={() => {sortByPusblishedYear(); closeDropdown()}} className="hover:bg-[#23BE0A] hover:text-white rounded-xl" ><a>Published Year</a></li>
                    </ul>
                </div>
            </div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked={activeTab === "read-books"} onChange={() => setActiveTab("read-books")} />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="space-y-2">
                        {readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)}
                    </div>
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked={activeTab === "wishlist"} onChange={() => setActiveTab("wishlist")} />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <div className="space-y-2">
                        {wishlistBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;
