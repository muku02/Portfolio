export const getImageUrl = (path) =>{
    return new URL(`/react-portfolio/assets/${path}`, import.meta.url).href;
};