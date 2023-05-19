import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle("blog")
    return (
        <main>
            <div className='container'>
                <h1 className='text-3xl font-bold text-center my-5'>Question's <span className='text-[#B2A4FF]'>Answer....</span></h1>
                <div className='grid md:grid-cols-2 gap-4 mt-10 mb-20'>
                    <div className='p-3 border-2 rounded-md w-full h-[100%] border-[#00abe4]'>
                        <h2 className='text-xl py-3 font-bold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                        <p>An access token is a short-lived credential used to access specific resources, while a refresh token is a longer-lived credential used to obtain new access tokens. Access tokens are included in requests to protected resources, while refresh tokens are used to request new access tokens after expiration. Both tokens should be securely stored on the client-side. Access tokens can be stored in memory or secure storage mechanisms provided by the platform, while refresh tokens should be stored in secure HTTP-only cookies or platform-specific secure storage. Follow best practices and platform-specific guidelines for secure token storage.</p>
                    </div>
                    <div className='p-3 border-2 rounded-md border-[#00abe4]'>
                        <h2 className='text-xl font-bold py-3'>Compare SQL and NoSQL databases?</h2>
                        <p>SQL databases follow a structured, relational data model with predefined schemas, while NoSQL databases offer flexibility with various data models like key-value, document, columnar, or graph. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL uses a standardized query language (SQL) while NoSQL has its own query languages or APIs. SQL is suited for complex relationships and data integrity, while NoSQL is ideal for scalability and flexible data structures. The choice depends on specific application requirements and data characteristics.</p>
                    </div>
                    <div className='p-3 border-2 rounded-md border-[#00abe4]'>
                        <h2 className='text-xl py-3 font-bold'>What is express js? What is Nest JS ?</h2>
                        <p>Express.js is a lightweight web framework for Node.js, offering flexibility and simplicity for building web servers and APIs.
                        Nest.js is a progressive framework built on Express.js, designed for efficient, scalable, and maintainable server-side applications.
                        Nest.js adopts a modular and organized architecture inspired by Angular, making it ideal for large-scale enterprise projects.
                        Express.js is versatile and suitable for smaller applications, while Nest.js excels in complex scenarios with added structure and scalability.
                        Both frameworks leverage the power of Node.js and TypeScript for web development.</p>
                    </div>
                    <div className='p-3 border-2 rounded-md border-[#00abe4]'>
                        <h1 className='text-xl py-3'>What is MongoDB aggregate and how does it work ?</h1>
                        <p>In MongoDB, the aggregate function is a powerful tool used for performing complex data analysis and transformation operations on collections of documents. It allows you to process and manipulate data using a pipeline of stages.
                        The aggregate pipeline consists of multiple stages, each performing a specific operation on the input documents, such as filtering, grouping, projecting, and sorting.
                        Each stage takes the input documents, processes them, and passes the transformed results to the next stage in the pipeline.
                        The pipeline stages can be arranged in a sequence to perform a series of operations, allowing for flexible data aggregation and manipulation.
                        Aggregate pipeline stages include $match for filtering, $group for grouping, $project for projection, $sort for sorting, and many more.
                        By combining these stages in various ways, you can shape and transform your data to extract meaningful insights and generate customized reports.</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Blog;