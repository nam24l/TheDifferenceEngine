import React from 'react';
import {Link} from 'react-router-dom';
import Card from './Card.jsx';

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          
            <Card bg="bg-yellow-400">
            <h2 className="text-2xl font-bold">My LinkedIn</h2>
            <p className="mt-2 mb-4">
              If you wanna know a little more about me.
            </p>
            <a href="https://www.linkedin.com/in/nelson-a-munoz-traxler" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
              My LinkedIn
            </a>
            </Card> 

            <Card bg="bg-yellow-400">
            <h2 className="text-2xl font-bold">My Github</h2>
            <p className="mt-2 mb-4">
              If you wanna see what I'm up to.
            </p>
            <a href="https://github.com/nam24l" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
              My GitHub
            </a>
            </Card> 

            <Card bg="bg-yellow-400">
            <h2 className="text-2xl font-bold">My Business</h2>
            <p className="mt-2 mb-4">
              A speedy web development service with competitive pricing! Please note: the site is under construction. 
            </p>
            <a href="https://envitricity.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
              Envitricity
            </a>
            </Card> 

            <Card bg="bg-yellow-400">
            <h2 className="text-2xl font-bold">My Resume</h2>
            <p className="mt-2 mb-4">
              All about me. Please hire me.
            </p>
            <a href="../src/assets/images/Nelson Munoz-Traxler Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">Open PDF</a>
            </Card> 
        </div>
      </div>
    </section>
  )
}

export default HomeCards