import React, { useEffect, useState, useRef } from 'react';
import { db } from '../../../../lib/firebase/firebaseConfig';
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from 'firebase/firestore';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

// Lazy load ReactWordcloud only on client side
const ReactWordcloud = React.lazy(() => import('react-wordcloud'));

const options = {
  colors: ['#fc3951', '#ed0033', '#364ec6', '#2e3192'],
  enableTooltip: true,
  deterministic: false,
  fontFamily: 'Galano Grotesque Semibold',
  fontSizes: [20, 70],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: 'sqrt',
  spiral: 'archimedean',
  transitionDuration: 1000,
};

const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsIntersecting(true), 500);
      } else {
        setIsIntersecting(false);
      }
    }, options);

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
};

const useFirebaseData = (isVisible) => {
  const [words, setWords] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isVisible) return;

    const fetchData = async () => {
      try {
        const q = query(
          collection(db, 'opinions'),
          orderBy('value', 'desc'),
          limit(15)
        );

        const unsubscribe = onSnapshot(
          q,
          (snapshot) => {
            if (snapshot.empty) {
              setError('Todavía no hay ninguna palabra');
              setIsPending(false);
            } else {
              const results = snapshot.docs.map((doc) => ({ ...doc.data() }));
              setWords(results);
              setIsPending(false);
            }
          },
          (error) => {
            setError(error.message);
            setIsPending(false);
          }
        );

        return () => unsubscribe();
      } catch (err) {
        setError(err.message);
        setIsPending(false);
      }
    };

    fetchData();
  }, [isVisible]);

  return { words, isPending, error };
};

export default function WordCloudVisualization() {
  const wordCloudRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const isVisible = useIntersectionObserver(wordCloudRef);
  const { words, isPending, error } = useFirebaseData(isVisible);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className="w-full">Loading...</div>;
  }

  return (
    <div className="w-full" ref={wordCloudRef}>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {words && words.length > 0 && (
        <div className="min-h-[500px] max-h-[700px] w-full">
          <React.Suspense fallback={<div>Loading word cloud...</div>}>
            <ReactWordcloud options={options} words={words} />
          </React.Suspense>
        </div>
      )}
    </div>
  );
}
