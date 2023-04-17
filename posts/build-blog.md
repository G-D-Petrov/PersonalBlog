---
title: "Build a static personal blog with Next.js"
subtitle: "A step-by-step guide to build a static personal blog with Next.js"
date: "17.04.2023"
---

## Introduction
In this day and age, it is important to have an online presence. \
While social media is a great way to share your thoughts and ideas, it is not the best way to showcase your knowledge and expertise in your field. \
It is also not the best way to attract job opportunities and consolidate your online presence. \
Enter the personal blog. \
Having a personal blog is a great way to build your own platform for sharing your thoughts, ideas, and projects with a wider audience, allowing you to contribute to the developer community. \

In this article, we will build a static personal blog with Next.js, a React framework for building static and server-rendered applications. \
We will use Markdown files to write our posts, and we will use the Next.js API to read the files and generate the pages for our posts. \
We will also use Tailwind CSS to style our blog. \
Finally, we will deploy our blog to Vercel.

Let's get started!

## Set Up
Before you begin, make sure you have Node.js and npm installed on your system. Then, create a new Next.js project using the following command:

``` sh
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app 
```

You can then open the folder that was created in your favourite editor, and we are ready to develop.

## Styling of the posts
To style our blog, we'll use Tailwind CSS, a utility-first CSS framework. First, install Tailwind CSS and its dependencies:

``` sh
npm install tailwindcss@latest
```

Then, create a tailwind.config.js file in your project's root directory and add the following code:

``` js
// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```
Now, create a globals.css file inside the styles folder and import the Tailwind CSS styles:


``` css
/* globals.css */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

We are ready to start building our blog.

## Building the layout
In this step, we will create a RootLayout component that will include the header, main content, and footer sections of the blog.

The header will contain the blog title, subtitle, and a link to the homepage. The main content will display the blog posts, and the footer will contain the developer's name and a copyright message.

Create a new file called RootLayout.tsx inside the apps folder and add the following code:

``` tsx
// RootLayout.tsx
import Image from "next/image";
import Link from "next/link";
import "styles/globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Header and footer JSX code goes here
  return (
    <html>
      <head />
      <body className="dark:bg-gray-900">
        {header}
        <div className="mx-auto mt-6 max-w-3xl px-6">
          {children}
        </div>
        {footer}
      </body>
    </html>
  );
}
```

## Reading the posts
Create a new file called getPostMetadata.ts inside the components folder and add the following code:

``` ts
// getPostMetadata.ts
import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "../components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  // Read files from the 'posts' folder and get gray-matter data
};

export default getPostMetadata;
```


## Creating separate pages for each post

Now, we will create a BlogPost component that will display individual blog posts. Create a new file called BlogPost.tsx inside the app/blog/[slug] folder and add the following code:

``` tsx
// BlogPost.tsx
// Import necessary libraries and components
const BlogPost = (props: any) => {
  // Retrieve post content and metadata
  // Render the blog post
};

export default BlogPost;
```

## Generating static pages for the posts

To generate static pages for each blog post, we will use Next.js's getStaticProps and getStaticPaths functions. Update the BlogPost.tsx file with the following code:

``` tsx
// BlogPost.tsx
import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import getPostMetadata, { generateStaticParams } from '../../../components/getPostMetadata';

// getPostContent function goes here

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = generateStaticParams();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostContent(params.slug);
  return {
    props: {
      post,
    },
  };
};

// Rest of the BlogPost component code
```

## Fix the styling of the posts

Once your blog is complete, you can host it on a platform like Vercel or Netlify. Follow the platform's documentation to set up continuous deployment for your Next.js app.

## Hosting the app

In this blog post, we walked through the process of developing a static personal blog for developers using Next.js. We built various components, read post data from markdown files, generated static pages for each post, and styled the blog using Tailwind CSS. With your new blog, you can now share your knowledge and expertise with the world. \
**Happy blogging!**
