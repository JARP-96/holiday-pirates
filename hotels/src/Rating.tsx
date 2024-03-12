export const Rating: React.FC<{ rating: number }> = ({ rating }) => {
    const stars = Math.min(rating, 5);
    const starIcons = '★'.repeat(stars);
    const emptyStars = '☆'.repeat(5 - stars);
    return (
        <div>
            {starIcons}
            {emptyStars}
        </div>
    );
}