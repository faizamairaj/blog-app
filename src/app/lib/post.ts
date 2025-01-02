interface Post {
    id: number;
    title: string;
    content: string;
    image: string;
    date: string;
  }
  
  const posts: Post[] = [
    {
      id: 1,
      title: 'Getting Started with Next.js', 
      content: 'Next.js is a powerful React framework that enables developers to build fast and scalable web applications with ease. It offers features like server-side rendering (SSR), static site generation (SSG), and API routes, making it an excellent choice for building performance-oriented websites and applications. By leveraging automatic code splitting, dynamic imports, and prefetching, Next.js ensures optimal loading speeds, even for large-scale projects. It also supports a flexible routing system, allowing developers to create pages and components intuitively. With its strong focus on performance and developer experience, Next.js has become a popular choice for modern web development.',
      image: '/images/image1.jpg',
      date: '18-December-2024',
    },
    {
      id: 2,
      title: 'Unveiling the World of Web Development: A Beginners Guide', 
      content: ` Web development is the process of building websites and applications for the internet. It includes everything from creating simple static web pages to complex, interactive websites. As a beginner, you'll start by learning HTML (for structure), CSS (for styling), and JavaScript (for functionality). You'll also explore front-end development (what users interact with) and back-end development (server-side operations). This guide provides an introduction to essential tools, languages, and frameworks, ensuring that you have a solid foundation in web development and can build your first website.`,
      image: '/images/image2.jpg',
      date: '20-December-2024'  
     },
    {
      id: 3,
      title: 'Getting Started with React: A Beginners Complete Guide', 
      content:` React is a popular JavaScript library for building user interfaces, especially single-page applications. It focuses on creating reusable components that manage their own state and can be composed to build complex UIs. To get started with React, you'll need Node.js and npm installed on your computer. This guide covers setting up a React development environment, understanding JSX (React's syntax), and using state and props for building dynamic components. By the end of this guide, you'll be able to create interactive applications and leverage React's powerful features for scalable web development.`,
      image: '/images/image3.png',
      date: '20-December-2023',
    },
    {
      id: 4,
      title: 'Getting Started with Tailwind CSS: A Beginners Guide', 
      content: `Tailwind CSS is a utility-first CSS framework that simplifies the process of styling your web applications. Unlike traditional CSS frameworks that come with pre-designed components, Tailwind lets you build designs directly in your HTML by applying utility classes. This guide introduces you to Tailwind's unique approach, including how to install and configure Tailwind in your project, use its utility classes, and customize your design with ease. Tailwind empowers developers to create responsive, accessible, and beautiful user interfaces without writing a lot of custom CSS.`,
      image: '/images/image4.png',
      date: '22-December-2024',
    },
    {
      id: 5,
      title: 'API Security: A Deep Dive into Authentication and Authorization', 
      content: `API security is crucial for safeguarding the sensitive data and resources accessed via APIs. Two key aspects of API security are authentication and authorization. Authentication ensures that users are who they say they are, while authorization determines what actions they are allowed to perform. This guide delves into various authentication methods such as JWT (JSON Web Tokens), OAuth, and OpenID Connect. It also covers best practices for securing APIs, such as encrypting data, validating inputs, and using HTTPS, to help developers protect their APIs from unauthorized access.`,
      image: '/images/image5.jpg',
      date: '23-December-2024',
    },
    {
      id: 6,
      title: 'What is Artificial Intelligence?', 
      content:` Artificial Intelligence (AI) refers to the simulation of human intelligence in machines. AI enables machines to perform tasks that typically require human intelligence, such as recognizing speech, making decisions, translating languages, and visual perception. There are various subfields within AI, including machine learning, natural language processing, and computer vision. AI systems can analyze large amounts of data, learn from experience, and improve their performance over time, making them an invaluable tool in a wide range of industries, from healthcare to finance.`,
      image: '/images/image6.jpg',
      date: '24-December-2024',
    },
    {
      id: 7,
      title: 'How Artificial Intelligence Will Transform Web Development in 2024?', 
      content: `In 2024, AI is poised to significantly transform web development by automating repetitive tasks, enhancing user experience, and enabling smarter applications. AI-powered tools can help developers write cleaner code, generate designs, and optimize web performance. Chatbots and virtual assistants powered by AI will improve customer service on websites, while AI-driven personalization algorithms will offer customized content to users. Additionally, AI will streamline testing, security, and accessibility, allowing developers to focus more on innovation and less on manual tasks. The future of web development will be deeply intertwined with AI, making websites more intelligent and user-friendly.`,
      image: '/images/image7.jpg',
      date: '25-December-2024',
    },
    {
      id: 8,
      title: 'What is ChatGPT: Strategic Guide for Startups and Development Teams', 
      content: `ChatGPT is an advanced language model created by OpenAI that can understand and generate human-like text based on prompts. It can assist with a wide range of tasks, such as content generation, customer support, and even coding. For startups and development teams, ChatGPT can serve as a powerful tool for enhancing productivity, automating repetitive processes, and brainstorming ideas. It can help write technical documentation, generate product descriptions, or debug code. By integrating ChatGPT into workflows, businesses can streamline operations and enhance collaboration, giving them a competitive edge in today’s fast-paced digital environment.`,
      image: '/images/image8.jpg',
      date: '25-December-2024',
    },
    {
      id: 9,
      title: 'Getting Started with Typescript', 
      content:` TypeScript is a statically typed, compiled superset of JavaScript that enables developers to write more reliable and scalable code. By introducing optional type annotations and type inference, TypeScript helps catch errors during development, which would typically only be identified during runtime in JavaScript. This enhances the development process by improving code quality, enabling better tooling support like autocompletion and refactoring, and making it easier to understand and maintain large codebases. TypeScript compiles down to standard JavaScript, making it compatible with any JavaScript environment, and can be integrated with existing JavaScript projects, providing an incremental path to adopting types in code. As a result, TypeScript has become a popular choice for building modern web applications and complex systems.`,
      image: '/images/image9.png',
      date: '27-December-2024',
    },
    {
      id: 10,
      title: 'Building a type-safe Fullstack Application with GraphQL codegen', 
      content: `Building a type-safe full-stack application with GraphQL Codegen involves leveraging the power of GraphQL and TypeScript to ensure seamless communication between the front-end and back-end. GraphQL Codegen automates the process of generating TypeScript types based on GraphQL queries, mutations, and schemas. By integrating GraphQL Codegen into your development workflow, you can avoid manual type definitions and ensure that the types remain consistent across your application. This leads to better development efficiency, reduced runtime errors, and a more maintainable codebase, allowing developers to focus on building features rather than managing type mismatches. The process typically includes configuring GraphQL Codegen, generating the necessary types for both the client and server, and utilizing those types in your application to provide strong type-checking, autocompletion, and documentation.`,
      image: '/images/image10.jpg',
      date: '28-December-2024',
    },
  ];
  
  // Function to get all posts
  export function getPosts(): Post[] {
    return posts;
  }
  
  // Function to get a post by its id
  export function getPostById(id: number): Post | undefined {
    return posts.find(post => post.id === id);
  }
