


const CV = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white border border-gray-200 mt-10 mb-10 shadow-lg rounded-lg">
            <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
                Apisit Kulkham
            </h1>

            <div className="mb-6 text-gray-700">
                <p><strong>Email:</strong> turtleapisit@gmail.com</p>
                <p><strong>Phone:</strong> 0628268567</p>
                <p><strong>Profile:</strong> <a href="https://linkedin.com/in/yourprofile" className="text-blue-500">linkedin.com/in/yourprofile</a></p>
            </div>

            {/* Summary Section */}
            <section className="mb-8 border-b border-gray-300 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Summary</h2>

                <p className="text-gray-600 leading-relaxed">
                    I am a flexible and self-driven developer with experience in building scalable web and mobile applications. I have worked across both frontend and backend development, designing databases and creating user-friendly UIs. Always eager to learn and improve, I adapt my tools and technologies to best suit each project's needs and goals.
                </p>
            </section>

            {/* Work Experience Section */}
            <section className="mb-8 border-b border-gray-300 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Work Experience</h2>
                <ul className="space-y-4 text-gray-600">
                    <li>
                        <strong className="text-gray-800">Full Stack Developer / Business System Developer</strong> - Sahaviriya Steel Industries PCL (Building Technology) – Bangkok,
                        Thailand{" "}
                        <em className="text-gray-500">(June 2023 - Present)</em>
                        <p className="mt-2 text-gray-600">
                            Developed internal tools system using React, NestJS, BigQuery,
                            and MongoDB. Migrated web applications to integrate Autodesk Forge for 3D
                            model and drawing viewing. Implemented CI/CD pipelines using GitHub Actions, Docker, and
                            Google Cloud Run.
                        </p>
                    </li>
                    <li>
                        <strong className="text-gray-800">Frontend Developer / Intern</strong> - CIRBOX Co., Ltd. - Nonthaburi, Thailand {" "}
                        <em className="text-gray-500">(May 2020 - August 2020)</em>
                        <p className="mt-2 text-gray-600">
                            Developed a frontend web application using Angular that enables
                            customers to select and purchase products specifically for
                            stocking their vending machines.
                        </p>
                    </li>
                </ul>
            </section>

            {/* Education Section */}
            <section className="mb-8 border-b border-gray-300 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Education</h2>
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold text-gray-800">Bachelor of Science in Computer Science</h3>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">Southeast Asia University, Thailand</p>
                        <p className="text-sm text-gray-600">2019 - 2023</p>
                    </div>
                    <p className="text-sm font-semibold text-gray-800">GPA: 3.64</p>
                </div>
            </section>




            {/* Skills Section */}
            <section className="mb-8 border-b border-gray-300 pb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Skills</h2>
                <ul className="space-y-2 text-gray-600">
                    <li><strong>Programming Languages:</strong> JavaScript, TypeScript, Dart</li>
                    <li><strong>Front-end:</strong> React, Next.js, Redux</li>
                    <li><strong>Back-end:</strong> NestJS, Express</li>
                    <li><strong>Mobile Development:</strong> Flutter, BLoC, GetX</li>
                    <li><strong>Databases:</strong> MongoDB, BigQuery, MySQL</li>
                    <li><strong>Tools:</strong> GitHub, Figma, n8n, GCP, Postman, Swagger, Docker, GitHub Actions</li>
                </ul>
            </section>

            {/* Certifications Section */}
            <section className="mb-8  pb-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Certifications</h2>
                <div className="space-y-3">
                    <div className="flex items-center">
                        <h3 className="text-xl font-semibold text-gray-800">UX/UI Design Fundamentals</h3>
                    </div>
                    <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-600">King Mongkut's University of Technology Thonburi, Thailand</p>
                        <p className="text-sm text-gray-600">2024 - 2025</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CV;
