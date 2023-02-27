import { useState, useEffect } from "react";
import { getComments } from "../../services/comments";

import StarIcon from "../../assets/star.png";

import type { Comment } from "../../types";

import "./Testimonials.css";

const Testimonials = () => (
  <section className="testimonials">
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
    <div className="comments">
      {comments.map((comment) => (
        <Card key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

const Card = ({ comment }: { comment: Comment }) => (
  <article className="comment-card">
    <Rating rating={comment.rating} />

    <img src={comment.imageSrc} alt={comment.name} className="picture" />
    <h3 className="name">{comment.name}</h3>
    <div className="nickname">{comment.nickname}</div>

    <p className="comment">{comment.comment}</p>
  </article>
);

const Rating = ({ rating }: { rating: number }) => {
  const stars = [...Array(rating % 6)];

  return (
    <div className="rating">
      {stars.map((_, index) => (
        <img
          key={index}
          src={StarIcon}
          alt="Rating star"
          className="star-icon"
        />
      ))}
    </div>
  );
};

export default Testimonials;
