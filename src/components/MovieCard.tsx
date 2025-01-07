"use client";

import React from "react";
import "./MovieCard.css"; // Importing the CSS file for styles

interface MovieCardProps {
    title: string;
    releaseDate: string;
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
    title,
    releaseDate,
    isFavorite,
    onToggleFavorite,
}) => {
    return (
        <div className="movie-card">
            <div className="movie-content">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-release">Release Date: {releaseDate}</p>
            </div>
            <button
                className={`favorite-button ${isFavorite ? "favorite-active" : ""}`}
                onClick={onToggleFavorite}
            >
                {isFavorite ? "★ Favorited" : "☆ Favorite"}
            </button>
        </div>
    );
};

export default MovieCard;
