import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleCommentSubmit = () => {
    setIsLoading(true);

    // Simulando un tiempo de espera, puedes reemplazar esto con tu lógica de envío de datos.
    setTimeout(() => {
      const newComments = [...comments, { text: newComment, rating }];
      setComments(newComments);
      setNewComment('');
      setRating(0);
      setIsLoading(false);
    }, 1000);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-yellow-500 cursor-pointer" onClick={() => setRating(i)} />
        ) : (
          <FaRegStar key={i} className="text-yellow-500 cursor-pointer hover:text-red-600" onClick={() => setRating(i)} />
        )
      );
    }
    return stars;
  };

  return (
    <div className='font-plus-jakarta-sans'>
      <h1 className="text-3xl font-bold mb-4">Sección de Comentarios y Calificación</h1>

      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Escribe tu comentario..."
          value={newComment}          
          onChange={(e) => setNewComment(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="mr-4">Calificación:</label>
        <div className="flex items-center">
          {renderStars()}
        </div>
      </div>

      <button
        className={`bg-blue-500 text-white p-2 rounded hover:bg-blue-700 cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={handleCommentSubmit}
        disabled={!newComment || rating === 0 || isLoading}
      >
        {isLoading ? 'Enviando...' : 'Enviar Comentario'}
        {isLoading && <div className="loader ml-2 inline-block"></div>}
      </button>

      <div className="mt-8 bg-emerald-500 p-4 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4">Comentarios:</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="mb-2">
              {comment.text} - Calificación: {comment.rating}
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
