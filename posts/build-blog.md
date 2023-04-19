---
title: "Knowledge Components: A Guide to Building Software Projects"
subtitle: "Learn how to approach projects and expand your knowledge base using a modular, component-driven mindset"
date: "17.04.2023"
---

## Introduction

Starting a new project can be a daunting task, especially when you are using technologies that you are not familiar with. While coding the site for this blog, I realized that my method for building projects is very similar to the concept of Components in React. This means that I try to divide my knowledge into separate components. This way it is easier for me to focus on the components that I need to learn or review and to simple use what I already know. Using this approach, starting new projects is not only more productive, but much for enjoyable.

So I decided to write a post-mortem on how I built a static personal blog with Next.js. The primary focus of this guide is not on Next.js itself, but rather on the metaprocess of building a project and how to make it both fun and educational. The goal of this blog is to showcase how to build "components of knowledge" that can be reused in future projects, just like React components in web development. By breaking down tasks, learning new skills, and integrating our acquired knowledge, we can create a modular knowledge base that can be easily repurposed for various projects. This approach not only helps us complete projects more efficiently but also fosters growth as a developer.

## Laying the foundations

As Stephen Covey said, "Begin with the end in mind." Before starting any project or task, I like to take a moment to think about the end goal:

- What do I want to achieve?
- What are the steps I need to take to get there?
- What are the components of knowledge that I need to acquire or refine?

Breaking down the project into smaller steps helps me focus on the task at hand and identify the "components of knowledge" that will be crucial for the project. These components are the building blocks of knowledge that we can reuse and repurpose in future projects. 

In this case, the end goal is to build a static personal blog with Next.js. I already knew how to use Next.js and was aware that it might not be the best tool for the job at first glance. Since it is a framework for building web applications that rely on JavaScript, it is not the best choice for a static site. However, I also knew that it is designed for server-side rendering, which means that it should be able to generate static pages.

Equipped with the knowledge of Next.js and a vague idea of how to use it, I began to think about the steps I need to take to get there and the components of knowledge I would need to acquire or refine. Below are the steps I came up with and why I broke them down into these particular tasks/components:

1. Create a Next.js app - this is a basic starting point for any Next.js project;
2. Design and implement a layout for the blog - it is often best to start with the layout and then fill in the content and functionality;
3. Read the posts from markdown files - I wanted to write my posts in markdown and have them automatically converted to HTML;
4. Create separate pages for each post - Next.js allows us to create dynamic pages that can be accessed by their URL;
5. Generate static pages for the posts - Next.js allows us to generate static pages for each post, making the site fast and SEO-friendly;
6. Fix the styling of the blog - I wanted to use Tailwind CSS to style the blog and the individual posts;
7. Host the app on Vercel - I wanted to use Vercel to host the app and take advantage of its serverless functions;

While I had a general understanding of how to perform most of these tasks, I had some gaps around points 4 and 5. Identifying these gaps allowed me to focus on acquiring the necessary knowledge components to move forward. And so, I moved to the next step: learning what I need to learn.

## Seeking inspiration and knowledge

Whenever I need to learn something new, I like to start by looking for inspiration and examples.
The most common places to look for inspiration are:
 - other people's projects on GitHub;
 - tutorials and guides on YouTube;
 - blogs and write-ups on blogs;
 - and more recently, chats with ChatGPT;

In this case, I turned to YouTube and found a great tutorial by [Pixegami](https://www.youtube.com/watch?v=Hiabp1GY8fA&ab_channel=pixegami).
The tutorial was great because it more or less had broken the project into similar components.
This way I could skim through the parts that I am familiar with and focus on the parts that I needed to learn.
It was also very beneficial to see the project in action and to see how the author approached the problem.

Normally, it would take more steps, but this project is fairly self-contained.
So I was able to go from zero to a working blog with mostly the knowledge in this tutorial.
If I hadn't been able to find this tutorial, I would have had to do more research and look for more inspiration.
I would probably need to look at the Next.js documentation and the Tailwind CSS documentation.
I would also need to look for libraries or approaches that address the points that I am not familiar with.

## Knowledge Integration

Now that I had the knowledge I needed, I could begin to integrate it into my project.
I wrote as much of the code as I could from memory, and then I went back to the tutorial to fill in the gaps.
This approach helped me to solidify my understanding of the concepts and technologies involved.
And it also helped me to identify the gaps in my knowledge that I need to fill in the future.

After I had a working version, I started to experiment with the code and mostly the styling.
I wanted to make the blog look and feel like my own, so I changed the colors and layouts and the general UX.
Starting from a solid baseline, I was able to focus on a particular component of knowledge and experiment with it.
This way I was able to proceed safely, knowing that I could always go back to the working version.

One of the big features that I wanted to implement was dark mode.
I had seen it on other blogs and wanted to try it out.
However, after some tinkering, I realized that I don't fully understand how the articles are styled after they are converted from markdown to HTML.
I just couldn't get it to work properly, so I looked for help in the Tailwind CSS documentation.
I found this great article on [dark mode](https://tailwindcss.com/docs/dark-mode) and this article on [the typography extension](https://tailwindcss.com/docs/typography-plugin).
These articles helped me to understand how to implement dark mode and how to style the markdown content.

After I had dark mode working, I was happy with the result.
There are still some things that I would like to improve, like the formatting of the paragrphs in the markdown.
But overall, it is a good version that can be used, so I decided to publish it on Vercel.

## Conclusion

In this guide, we've explored a metaprocess for building software projects. By focusing on the metaprocess rather than the specific technology, we've demonstrated that this approach can be applied to any project or technology. This process can be broken into:
- planning;
- breaking down tasks;
- seeking knowledge;
- integrating what we've learned;

As we tackle each step, we refine our understanding of the tools and technologies involved, thus creating a solid foundation of knowledge that can be repurposed in future projects. The process of overcoming challenges, such as the implementation of the dark mode feature, showcases the importance of continuous learning and problem-solving in a developer's growth.

To conclude, when embarking on your next project, remember to focus on building your knowledge base and refining your skills through a systematic metaprocess. With this mindset, you'll not only complete projects but also grow as a developer.
