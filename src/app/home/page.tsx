"use client"
import React, { useState } from "react";
import { useMovies } from "@/utils/useMovies";
import { getFavorites, saveFavorites } from "@/utils/storage";
import MovieCard from "@/components/MovieCard";
import './home.css'

// Create a new QueryClient instance


const Home: React.FC = () => {
    const { data: movies, isLoading, error } = useMovies();
    const [favorites, setFavorites] = useState<string[]>(getFavorites);


    const toggleFavorite = (title: string) => {
        const updatedFavorites = favorites.includes(title)
            ? favorites.filter((fav) => fav !== title)
            : [...favorites, title];
        setFavorites(updatedFavorites);
        saveFavorites(updatedFavorites);
    };

    if (isLoading) return <p>Loading movies...</p>;
    if (error) return <p>Error fetching movies: {error.message}</p>;

    return (
        <>
            <header>
                <h1>Movies</h1>
            </header>
            <main>
                <main className="movie-grid">
                    {movies?.map((movie) => (
                        <MovieCard
                            key={movie.episode_id}
                            title={movie.title}
                            releaseDate={movie.release_date}
                            isFavorite={favorites.includes(movie.title)}
                            onToggleFavorite={() => toggleFavorite(movie.title)}
                        />
                    ))}
                </main>
            </main>
        </>
    );
};

export default Home;
