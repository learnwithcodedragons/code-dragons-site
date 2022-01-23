import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">Like you we're frustrated by overly complex and badly written technical documentation. It is our goal to create courses to help gain the skills you need to get ahead</p>
      </div>

      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.youtube.com/channel/UCIYEyziAq8IafKfysqjCf8Q">YouTube</a>
          </li>
          <li>
            <a href="https://twitter.com/learnwithcodedragons">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
