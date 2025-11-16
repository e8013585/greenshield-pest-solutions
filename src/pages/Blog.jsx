import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Natural Ways to Keep Ants Out of Your Kitchen",
      excerpt: "Discover eco-friendly methods to prevent ant invasions without using harsh chemicals.",
      date: "April 15, 2023",
      category: "Prevention Tips",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Seasonal Pest Activity in San Joaquin County",
      excerpt: "Understanding when different pests are most active can help you prepare and prevent infestations.",
      date: "March 28, 2023",
      category: "Seasonal Guide",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "The Benefits of Integrated Pest Management",
      excerpt: "Learn why IPM approaches are more effective and environmentally friendly than traditional pest control.",
      date: "March 12, 2023",
      category: "Eco-Friendly Practices",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Rodent Prevention: Seal Those Entry Points",
      excerpt: "Simple DIY steps to make your home less attractive to mice and rats.",
      date: "February 25, 2023",
      category: "Prevention Tips",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "Creating a Pest-Free Garden Naturally",
      excerpt: "How to protect your garden from pests while supporting beneficial insects and wildlife.",
      date: "February 10, 2023",
      category: "Eco-Friendly Practices",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Understanding Bed Bug Behavior and Signs",
      excerpt: "Early detection is key to preventing bed bug infestations. Know what to look for.",
      date: "January 28, 2023",
      category: "Pest Identification",
      readTime: "5 min read"
    }
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Pest Control Blog</h1>
          <p className="text-xl text-gray-600">
            Tips, guides, and insights for eco-friendly pest management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Blog Image</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-light-green text-primary-green text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-primary-green transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-primary-green font-semibold hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-primary-green hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blog