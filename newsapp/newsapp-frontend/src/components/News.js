// src/components/News.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './News.css'; // Import the updated CSS file

const News = () => {
    const { category } = useParams();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 4;

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            setError('');
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/news/${category}`);
                setArticles(response.data);
            } catch (err) {
                setError('Failed to fetch news');
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category]);

    // Pagination logic
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const handleNext = () => {
        if (currentPage < Math.ceil(articles.length / articlesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
            <div className="news-grid">
                {currentArticles.map((article, index) => (
                    <div key={index} className="news-card">
                        <img src={article.urlToImage} alt={article.title} className="news-image" />
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                        <p className="news-author">Author: {article.author || 'Unknown'}</p>
                        <p className="news-date">Published on: {new Date(article.publishedAt).toLocaleDateString()}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            Read more
                        </a>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevious} disabled={currentPage === 1}>
                    Previous
                </button>
                <button onClick={handleNext} disabled={currentPage === Math.ceil(articles.length / articlesPerPage)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default News;
