
import ReactMarkdown from 'react-markdown';

const Md = ({content}) => {
  return (
    <ReactMarkdown source={content} />
  );
};

export default Md;