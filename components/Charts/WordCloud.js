import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
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

  return <ReactWordcloud options={options} words={wordCloud} />
}
