const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  const stars = Math.min(rating, 5)
  const starIcons = '★'.repeat(stars)
  const emptyStars = '☆'.repeat(5 - stars)
  return (
    <h2>
      {starIcons}
      {emptyStars}
    </h2>
  )
}
export default Rating
