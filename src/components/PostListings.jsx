import React from 'react'
import posts from '../posts.json'
import PostListing from './PostListing'

const PostListings = () => {

  let visiblePosts = [...posts].reverse().slice(0, 3); 

  return (
    <section className="bg-red-800 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          My Blog (The Difference Engine)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {visiblePosts.map((post) => (
                <PostListing key = {post.id} post = {post}></PostListing>
            ))}
        </div>
      </div>
    </section>
  )
}

export default PostListings