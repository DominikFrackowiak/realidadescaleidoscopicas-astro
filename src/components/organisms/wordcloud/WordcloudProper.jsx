import React, { useEffect, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';

const words = [
  { text: 'Astro', value: 100 },
  { text: 'React', value: 80 },
  { text: 'JavaScript', value: 70 },
];

const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
  fontSizes: [20, 60],
};

const WordCloudComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactWordcloud words={words} options={options} />
    </div>
  );
};

export default WordCloudComponent;