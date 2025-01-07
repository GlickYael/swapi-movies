export const getFavorites = (): string[] => {
    if (typeof window !== "undefined") {
        return JSON.parse(localStorage.getItem("favorites") || "[]");
    }
    return [];
};

export const saveFavorites = (favorites: string[]): void => {
    if (typeof window !== "undefined") {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
};
