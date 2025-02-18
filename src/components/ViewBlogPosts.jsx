import React from 'react'
import { Link } from 'react-router-dom';

const ViewBlogPosts = () => {
  return (
    <>
    <section className="m-auto max-w-lg my-10 px-6">
      <Link
        to="/blog"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View All Blog Posts
      </Link>
    </section>
    </>
  );
};

export default ViewBlogPosts