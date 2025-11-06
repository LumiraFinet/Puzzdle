//Needs another file called route.js to work. The path should be /Users/analyticsautomations/Puzzle/puzzdle/app/api/readfile
//The txt file route.js is reading from is called myfile.txt

'use client';            // runs in the browser

import { useEffect, useState } from 'react';

export default function H() {
  const [fileText, setFileText] = useState('');

  useEffect(() => {
    // ask our API route for the file text
	fetch('/api/readfile')
	.then(res => res.json())
	.then(data => {
	  if (data.error) {
		console.error('Error:', data.error);
	  } else {
		console.log('File content (browser):', data.text);
		setFileText(data.text);
	  }
	});
  }, []);

  return (
    <div>
      <h2>File content from the server:</h2>
      <pre>{fileText || 'Loading...'}</pre>
    </div>
  );
}
