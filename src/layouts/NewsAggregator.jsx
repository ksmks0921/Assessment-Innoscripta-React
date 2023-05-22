import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const NewsAggregator = () => {

    const [searchKeyword, setSearchKeyword] = useState('');
    const [news, setNews] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        date: '',
        category: '',
        source: '',
    });

    useEffect(() => {
        fetchNews();
    }, [filterOptions])

    const handleSearchInputChange = (e) => {
        setSearchKeyword(e.target.value);
    };
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterOptions((prevState) => ({
          ...prevState,
          [name]: value === '' ? null : value,
        }));
    };
    const fetchNews = async () => {      
        try {
            const response = await axios.get('/api/newsguaradian', {
            params: {
                q: searchKeyword,
                date: filterOptions.date,
                category: filterOptions.category,
                source: filterOptions.source,
            },
            });
            setNews(response.data.response.results);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
   
    };

  return (
    
         <div className="container mx-auto p-4">       
   
            <div className="mb-4">
            {/* Search input */}
            <input
                type="text"
                className="w-full p-2 rounded border border-gray-300"
                placeholder="Search articles by keyword"
                value={searchKeyword}
                onChange={handleSearchInputChange}
            />
            </div>
    
            {/* Fetch news button */}
            <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={fetchNews}
            >
            Search
            </button>
            <div className="flex flex-wrap mb-4">
            {/* Date filter */}
            <select
                className="w-full sm:w-1/2 md:w-1/3 p-2 rounded border border-gray-300"
                name="date"
                value={filterOptions.date}
                onChange={handleFilterChange}
            >
                <option value="">All Dates</option>
                <option value="today">Today</option>
                <option value="this-week">This Week</option>
            {/* Add more options as needed */}
            </select>

            {/* Category filter */}
            <select
            className="w-full sm:w-1/2 md:w-1/3 p-2 rounded border border-gray-300"
            name="category"
            value={filterOptions.category}
            onChange={handleFilterChange}
            >
                <option value="">All Categories</option>
                <option value="sports">Sports</option>
                <option value="politics">Politics</option>
            {/* Add more options as needed */}
            </select>

            {/* Source filter */}
            <select
            className="w-full sm:w-1/2 md:w-1/3 p-2 rounded border border-gray-300"
            name="source"
            value={filterOptions.source}
            onChange={handleFilterChange}
            >
            <option value="">All Sources</option>
            <option value="nytimes">The New York Times</option>
            <option value="guardian">The Guardian</option>
            {/* Add more options as needed */}
            </select>
        </div>
            {/* Display news articles */}
            {/* ... */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {news.map((article, index) => (
                        <div key={index} className="bg-white shadow-md p-4">
                        <h2 className="text-xl font-bold mb-2">{article.webTitle}</h2>
                        <p className="text-gray-600 mb-4">{article.sectionName}</p>
                        <a href={article.webUrl} className="text-blue-500 hover:text-blue-700">
                            Read More
                        </a>
                        </div>
                    ))}
            </div>
       </div>
    
  );
};

export default NewsAggregator;