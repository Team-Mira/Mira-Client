import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const options = {
  colors: ['#3f4cda'],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "Source Sans Pro",
  fontSizes: [15, 80],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "linear",
  spiral: "archimedean",
  transitionDuration: 1000
};

export default function WordCloud({data}){
  const { wordCloud } = data

  if(wordCloud.length > 0){
    return <ReactWordcloud options={options} words={wordCloud} />
  }
  return <h3>No Words Available</h3>
}
