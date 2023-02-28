import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'

export async function getStaticProps() {
  const mdsFIles = fs.readdirSync('posts')
  const posts = mdsFIles.map(file => {
    const readfile = fs.readFileSync(`./posts/${file}`, 'utf-8')
    const slug = file.replace('.md', '')
    const { data: fm } = matter(readfile)

    return { slug, fm }
  })

  return {
    props: {
      posts
    }
  }
}

const Blog = ({ posts }) => {
  console.log(posts)
  return (
    <main className='p-10 pb-96 mx-auto grid grid-cols-4 gap-4'>

    </main>
  )
}

export default Blog
