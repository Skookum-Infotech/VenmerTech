"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../page.css";
import "./careers.css";

interface Job {
  id: string;
  title: string;
  company: string;
  sections: { heading: string; content: string | string[] }[];
}

const JOBS: Job[] = [
  {
    id: "sr-software-engineer",
    title: "Sr. Software Engineer",
    company: "Venmer Tech LLC",
    sections: [
      {
        heading: "About the Role",
        content:
          "At Venmer Tech LLC, we aim to transform people's lives by changing the way the world invests. We design innovative investing solutions for the consumer on Main Street and take pride in our consumer-focused culture of quality and excellence. We are in the midst of re-architecting and rebuilding our core enterprise software platforms to support our rapidly growing and evolving business. Our software engineers are hands-on developers who excel in a dynamic, fast-moving, and agile environment. We are passionate about developing high quality, high performance, and scalable software. Sound like a team you'd like to be a part of? Let's connect! We have opportunities for full stack, front-end-focused, and back-end focused engineers.",
      },
      {
        heading: "What you are good at",
        content: [
          "Collaborate with product owners and business stakeholders to define strategy and scope of software requirements (decompose stories, design features, and prioritize tasks)",
          "Deliver new concepts and features, working alongside development peers in an agile environment",
          "Serve as an informal leader: leading code reviews and mentoring junior team members",
          "Partner with scrum master and product owner to provide development sizing & cost analysis estimates",
          "Utilize automated software test tools and frameworks such as test driven development to achieve the highest quality in software delivery",
          "Support integration efforts to build whole systems from various subsystems",
          "Identify technology risks early and establish mitigation plans",
        ],
      },
      {
        heading: "What you have",
        content: [
          "Bachelors' degree in Computer Engineering OR related degree and/or practical experience",
          "Advanced .Net web and service development skills, typically built through 7+ years of applicable experience developing in .Net/C#",
          "Professional experience developing responsive designs and single page applications",
          "Experience tuning and maximizing performance for high volume pages",
          "Experience participating as a member of a scrum team in an agile environment",
          "Ability to troubleshoot environmental issues",
          "Ability to conceptualize the best tactical approach for a team to deliver a project",
          "Demonstrated ability and interest in coaching and mentoring other engineers",
          "Ability to lead application and platform architecture design sessions",
          "Ability to effectively communicate complex architecture designs to both technical and nontechnical audiences",
          "Effective relationship builder: ability to partner cross-functionally, cross-enterprise and work effectively with various levels of the organization",
        ],
      },
      {
        heading: "Preferred Technical Qualifications",
        content: [
          "Experience with frameworks such as .NET, .NET Core",
          "Experience coding in Angular, Typescript, Javascript, HTML, CSS, bootstrap, backbone (advanced capabilities required for front end focused roles)",
          "Experience developing/managing REST and SOAP-based Web Service API(s) in a transaction processing environment",
          "Experience with distributed multi-tier applications, WMI, NoSQL databases, MongoDB and/or SQL is preferred",
          "Experience with cloud technologies such as Pivotal Cloud Foundry",
          "Knowledge of Web Content Management Systems",
        ],
      },
    ],
  },
  {
    id: "software-developer",
    title: "Software Developer",
    company: "Metova",
    sections: [
      {
        heading: "WE WANT YOUR BRAIN",
        content:
          "Anyone can program. What we can't teach is raw intelligence and a personal desire to be great. We want craftspeople who understand their tools, who can learn from one another to advance their craft. You understand that software, programming languages, and operating systems are tools that are designed for specific jobs, and you have no problem with picking up new tools that accomplish what you need. We want your perspectives, your ideas, your intellect. We need you to make the best decision for you and your team.",
      },
      {
        heading: "WE EXPECT YOU TO WIN",
        content:
          "Everyone at Metova is given the tools and resources they need to succeed at their job. In exchange for a great place to work, we expect you to build amazing software for our customers and amazing talent for us. You will be expected to build a compelling and easy to use interface, ensure its maintainability and ease of use, and suggest ways to improve the look and feel of the application. We are lean, which means we reflect on what we learn and use that new knowledge to quickly make better products. Your job is to keep learning, contribute your knowledge back to the rest of the team, and apply what you learn to make Metova even greater.",
      },
      {
        heading: "Required Experience",
        content: [
          "Node.js",
          "AWS (DynamoDB, Lambda, S3, SES, SNS)",
          "Serverless Framework",
          "Swagger",
          "Mocha",
          "Gitlab",
          "Jenkins (or other Continuous Integration tools)",
          "Eslint",
          "Visual Studio Code (or a similar IDE)",
        ],
      },
      {
        heading: "Preferred Experience",
        content: [
          "BS and or MS degree in a relevant technical field such as Computer Science or relevant work experience in the field",
        ],
      },
    ],
  },
  {
    id: "database-administrator",
    title: "Database Administrator",
    company: "Venmer Tech LLC",
    sections: [
      {
        heading: "About the Role",
        content:
          "Venmer Tech LLC is currently seeking an Oracle Database Administrator with our client in the financial industry in their Plano, TX location. This is a 6 month + contract-to-hire position.",
      },
      {
        heading: "Description",
        content: [
          "Senior Oracle DBA, minimum 10 years of experience who will design, develop, implement, enhance, and support database systems in support of business goals",
          "The position entails all aspects of database design, designing for replication, performance monitoring-tuning, backup and recovery, scripting, software installation and upgrades, troubleshooting, and proactively maintaining production databases running multiple master replication utilizing Golden-Gate",
          "Experience with classic, and integrated replicate, Golden Gate implementation, troubleshooting, and monitoring is required",
          "Partner with other ops teams to maximize availability in current and planned systems",
          "Provide backup, restore, and replication support for production databases",
          "Administer database users and database security in accordance with mandatory enterprise-wide guidelines",
          "Create and maintain documentation of all production policies, procedures, server configurations, error logs, maintenance records, and product troubleshooting instructions",
          "Identify, troubleshoot, resolve, and communicate issues that affect the systems, servers, and database related products",
          "Viewed as the subject matter expert for the team",
          "Manages multiple, moderately complex projects and direct activities of a team related to special initiatives or operations",
          "Works under minimal supervision, with general guidance from more seasoned consultants or managers",
          "Works on complex problems where analysis of situations or data requires an in-depth evaluation of various factors",
          "Exercises judgment within broadly defined practices and policies in selecting methods, techniques, and evaluation criterion for obtaining results",
          "Work leadership may be provided by assigning work and resolving problems",
        ],
      },
      {
        heading: "Requirements",
        content: [
          "Oracle Database Administration: 10+ years of experience",
          "Oracle Exadata Administration: 5-6 years of experience",
          "Experience with Oracle Enterprise Manager (OEM)",
          "Oracle Golden Gate: 5-6 years of experience",
          "Linux shell scripting: 5-6 years of experience",
          "Individual needs to have strong verbal and written communication skills",
          "In-depth understanding of high availability and disaster recovery requirements and solutions",
          "Able to work as a W2 employee of Venmer Tech LLC (no Corp-to-Corp)",
        ],
      },
      {
        heading: "Desired Skills",
        content: [
          "Experience with Oracle ZFS appliance",
          "Exposure to Foglight Monitoring tool",
          "Project management and oversight",
        ],
      },
    ],
  },
  {
    id: "business-analyst",
    title: "Business Analyst",
    company: "Venmer Tech LLC",
    sections: [
      {
        heading: "About the Role",
        content:
          "When you're the best, we're the best. We instill an environment where employees feel engaged, satisfied and able to contribute their unique skills and talents. We provide extensive opportunities for personal and professional development, building both employee competence and organizational capability to fuel exceptional performance now and in the future.",
      },
      {
        heading: "Summary",
        content:
          "In this role, you will apply analytical thinking and problem-solving skills to develop user stories and the product backlog for one primary product. You will participate in Agile ceremonies and provides clarification on product requirements. Manage the request process by collaborating with the Product Owner/Manager to define and justify new product developments/projects. You must be able to work at a detailed level while maintaining the big picture of overall product goals and the supporting system design.",
      },
      {
        heading: "Responsibilities",
        content: [
          "Work as a liaison between end-users, product management, and development to elicit, analyze, and document user requirements, translating them into user stories",
          "Collaborate with the Product Owner to ensure the health of the product backlog",
          "Participate in Agile ceremonies, driving the discussion during sprint planning and user story refinement",
          "Plan and conduct interviews with business owners and stakeholders",
          "Conduct gap analyses to identify solutions that are cost-effective and meet business requirements",
          "Collaborate with the development team to ensure the design meets customer requirements",
          "Support the project team during design, development, and QA testing by clarifying requirements questions",
          "Create SQL statements and analyze resultant data",
          "Act as a point of contact during UAT to assist stakeholders/end users when issues/questions arise",
          "May be the sole analyst on medium to large scale or complex project efforts",
          "Comply with metrics to measure the progress of group or department issues",
          "Provide reasonable estimates for work products",
        ],
      },
      {
        heading: "Qualifications",
        content: [
          "Relevant degree preferred",
          "2 years or more of Agile (Scrum or XP) business analysis experience with user stories and backlogs required",
          "Excellent business requirements elicitation, analysis and documentation skills",
          "Knowledge of Agile - Scrum or XP methodologies",
          "Knowledge of Data Analytics/Data Warehousing/Big Data concepts",
          "Ability to understand complex business areas and applications",
          "Knowledge of test methodologies",
        ],
      },
    ],
  },
  {
    id: "solutions-architect",
    title: "Solutions Architect",
    company: "Venmer Tech LLC",
    sections: [
      {
        heading: "Position Summary",
        content:
          "This Solution Architect position provides technical design within the Financial Service Solution division responsible for the end to end design and delivery focused on financial data management. The ideal applicant will have an organized and creative mind-set (thought leader) that drives him or her to find innovative solutions to common problems with the right toolset. They will be passionate about technology and have a self-driven interest to keep up with the latest technology developments and relate them to the current product landscape.",
      },
      {
        heading: "Duties & Accountabilities",
        content: [
          "Assist the CTO in defining the strategic architectural for Financial Services Solutions group",
          "Facilitate system design and changes in system architecture to meet",
          "Maintain current knowledge of technology landscape and developments",
          "Focus on cloud enablement to increase ROI and create new business opportunities",
          "Track, analyze and monitor technology performance metrics of managed products",
          "Take the initiative in thought leadership, innovation, and creativity",
          "Mentor team on technology and other work-related aspects",
          "Responsibility for quality of all deployed applications and services",
          "Drive innovation and adaption of best practices",
        ],
      },
      {
        heading: "Education and Experience",
        content: [
          "Degree in Computer Science or relevant real world experience",
          "12+ years of development experience building enterprise software or platforms in a financial environment (still hands on)",
          "At least 10+ years of experience leading technology teams",
          "Ability to deliver products in a dynamic, fast-paced environment",
          "Should have excellent architecture and design skills",
          "Strong understanding of and ability to apply architectural patterns",
          "Deep and practical understanding of modern distributed architecture design",
          "Expert on DBMS technologies (RMDBS, NoSQL, etc)",
          "Strong background on leveraging cloud technologies (AWS, Azure, GCP)",
          "Focus on Microsoft stack, but knowledgeable on cross-platform tech",
          "Can handle both front-end and backend architectural design",
        ],
      },
      {
        heading: "Personal Impact",
        content: [
          "Passionate technologist",
          "Thought leader with focus on delivery",
          "Displays energy, drive and stamina",
          "Analytical and can work with the business stakeholder's daily",
          "Open minded, flexible and willing to adapt to changing situations",
          "Comfortable working with global teams operating across different time zones",
        ],
      },
    ],
  },
  {
    id: "sr-business-analyst",
    title: "Sr. Business Analyst",
    company: "Venmer Tech LLC",
    sections: [
      {
        heading: "About the Role",
        content:
          "This is a senior level position that is responsible for analyzing complex business operations and recommending solutions to align individual business functions with organizational goals. This role requires thorough understanding of the structure, policies, and operations of an organization, and recommends solutions to improve general business processes and planning. This position can collaborate with one or several business units or functions.",
      },
      {
        heading: "Major Duties and Responsibilities",
        content: [
          "Work with business stakeholders analyze business operations and recommend solutions to align individual business functions with organizational goals",
          "Understand the structure, policies, and operations of an organization, and recommend solutions to improve general business processes and planning",
          "Compile, analyze, interpret, and present complex data related to current and future operation",
          "Create reports, charts, graphs and presentations to aid in proposing new strategies for successful business changes",
          "Develop project estimates by identifying phases and elements, personnel requirements, and costs",
          "Analyze external market dynamics and other data sources to assess trends and develop actionable insights and recommendations to management, via understanding of the business model and the information available for analysis",
          "May make recommendations for solutions or improvements that can be accomplished through new technology or alternative uses of existing technology",
          "Perform other duties as requested",
        ],
      },
      {
        heading: "Required Qualifications",
        content: [
          "Ability to read, write, speak and understand English",
          "Ability to prioritize and organize effectively",
          "Ability to work independently, as well as in a collaborative and dynamic team environment",
          "Ability to handle multiple projects and priorities",
          "Ability to analyze and interpret data",
          "Ability to quickly identify business problems/opportunities",
          "Ability to communicate orally and in writing in a clear and straightforward manner",
          "Ability to communicate with all levels of management and company personnel",
          "Ability to manage multiple projects at one time",
          "Ability to prioritize and organize effectively",
          "Superb knowledge of software applications such as Word, Excel, etc.",
        ],
      },
      {
        heading: "Education",
        content: ["Bachelor's degree in business or related field"],
      },
      {
        heading: "Related Work Experience",
        content: ["5 plus years Business analysis or related experience"],
      },
    ],
  },
];

function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="vt-job">
      <button className="vt-job-toggle" onClick={() => setOpen(!open)}>
        <div className="vt-job-title-group">
          <span className="vt-job-title">{job.title}</span>
          <span className="vt-job-company">{job.company}</span>
        </div>
        <span className={`vt-job-chevron${open ? " open" : ""}`}>▾</span>
      </button>
      <div className={`vt-job-body${open ? " open" : ""}`}>
        <div className="vt-job-body-inner">
          {job.sections.map((s, i) => (
            <div key={i} className="vt-job-block">
              <h4>{s.heading}</h4>
              {Array.isArray(s.content) ? (
                <ul>
                  {s.content.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{s.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CareersPage() {
  return (
    <div className="vt-careers-page">
      <Header />
      <div className="vt-careers-hero">
        <h1>Join Our Team</h1>
        <p>
          We're looking for passionate people to help us build the future of
          enterprise technology. Explore open positions below.
        </p>
      </div>

      <div className="vt-careers-section">
        {JOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="vt-careers-footer">
        <h3>Don't see the right fit?</h3>
        <p>
          We're always on the lookout for great talent. Send us your resume and
          we'll reach out when something matches your profile.
        </p>
        <a href="mailto:info@cognillc.com">Send Resume →</a>
      </div>
      <Footer />
    </div>
  );
}
