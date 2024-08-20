import React from 'react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';

const PipelineHealthEmoji = ({ pipelineIssues }) => {
  let EmojiIcon;
  let color;

  if (pipelineIssues === 0) {
    EmojiIcon = EmojiEmotionsIcon; // Happy face
    color = '#006400'; // Dark green
  } else if (pipelineIssues > 10) {
    EmojiIcon = SentimentVeryDissatisfiedIcon; // Angry face
    color = '#FF0000'; // Dark red
  } else {
    EmojiIcon = SentimentSatisfiedIcon; // Neutral face
    color = '#FFD700'; // Dark yellow
  }

  return <EmojiIcon sx={{ color: color, fontSize: '8rem' }} />; // Adjust fontSize and color here
};

export default PipelineHealthEmoji;
