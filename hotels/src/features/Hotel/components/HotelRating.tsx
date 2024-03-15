const HotelRating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = rating >= 0 ? Math.min(rating, 5) : 0
  const starIcons = '★'.repeat(stars)
  const emptyStars = '☆'.repeat(5 - stars)
  return (
    <h2>
      {starIcons}
      {emptyStars}
    </h2>
  )
}
export default HotelRating
