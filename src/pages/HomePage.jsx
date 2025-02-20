import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import PostListings from '../components/PostListings';
import ViewBlogPosts from '../components/ViewBlogPosts'

const HomePage = () => {
  return (
    <>
    <Hero title={"Hi! I am Nelson Munoz-Traxler"} subtitle={"Florida State Class of '28 | Political Science Major | Computer Science Minor | Entrepreneur | Lifelong Learner | Innovator"}/>
    <HomeCards/>
    <PostListings/>
    <ViewBlogPosts/>
    </>
  )
}

export default HomePage