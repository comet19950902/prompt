// import React, { useState, useEffect } from "react";
// // import ReactMarkdown from "react-markdown";
// // import rehypeRaw from "rehype-raw";
// // import gfmMD from "remark-gfm";
// import markdown from "../../docs/home.md";

// const FreeGpt = () => {
//     return (
//       <div>
//         <pre>{markdown}</pre>
//         <small><i>Import and render markdown using Next.js</i></small>
//       </div>
//     );
//   };
//   export default FreeGpt;

import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";

const MyComponent: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    fetch('/api/markdown')
      .then(response => response.json())
      .then(data => setMarkdownContent(data.content));
  }, []);

  return (
    <div className={`lg:pt-[90px] px-4 md:px-16 lg:px-40 py-20 shadow-card-upload-black relative flex flex-col min-w-full prose lg:prose-xl text-black before:absolute before:content-[' '] before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-[url(/gradient/10.jpg)] before:opacity-80 before:bg-cover before:-z-0 fox font-header`}>
      {markdownContent && <ReactMarkdown className='z-10'>{markdownContent}</ReactMarkdown>}
    </div>
  );
};

export default MyComponent;

