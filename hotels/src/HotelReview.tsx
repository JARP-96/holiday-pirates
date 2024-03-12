import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { Review } from './interfaces';

export const HotelReview: React.FC<{ review: Review }> = ({ review }) => {
    const { customer, comment, feedback } = review
    const { firstName, lastName } = customer
    const reviewComment = documentToPlainTextString(comment.json)

    return <div>
        <div>
            {feedback}
        </div>
        <div>
            <h1>{firstName} {lastName}</h1>
            <p>{reviewComment}</p>
        </div>
    </div>
}