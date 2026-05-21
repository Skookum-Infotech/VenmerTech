"use client";

import { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../page.css";
import "./careers.css";
import { JOBS } from "./data";

export interface Job {
  id: string;
  title: string;
  company: string;
  sections: { heading: string; content: string | string[] }[];
}

function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="vt-job">
      <button className="vt-job-toggle" onClick={() => setOpen(!open)}>
        <div className="vt-job-title-group">
          <span className="vt-job-title">{job.title}</span>
          {/* <span className="vt-job-company">{job.company}</span> */}
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
          We&apos;re looking for passionate people to help us build the future of
          enterprise technology. Explore open positions below.
        </p>
      </div>

      <div className="vt-careers-section">
        {JOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="vt-careers-footer">
        <h3>Don&apos;t see the right fit?</h3>
        <p>
          We&apos;re always on the lookout for great talent. Send us your resume and
          we&apos;ll reach out when something matches your profile.
        </p>
      </div>
      <Footer />
    </div>
  );
}
