import { useState, useEffect } from "react";
import { getComments } from "../../services/comments";

import StarIcon from "../../assets/star.png";

import type { Comment } from "../../types";

const Testimonials = () => (
  <section>
    <header>
      <h1>What our customers say!</h1>
    </header>
    <Comments />
  </section>
);

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>();

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const data = await getComments();

    setComments(data);
  };

  if (!comments) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {comments.map((comment) => (
        <Card key={comment.id} comment={comment} />
      ))}
    </>
  );
};

const Card = ({ comment }: { comment: Comment }) => (
  <article>
    <Rating rating={comment.rating} />

    <img src={comment.imageSrc} alt={comment.name} />
    <h3>{comment.name}</h3>
    <span>{comment.nickname}</span>

    <p>{comment.comment}</p>
  </article>
);

const Rating = ({ rating }: { rating: number }) => {
  const stars = [...Array(rating)];

  return (
    <div>
      {stars.map((_, index) => (
        <img key={index} src={StarIcon} alt="Rating star" />
      ))}
    </div>
  );
};

export default Testimonials;
