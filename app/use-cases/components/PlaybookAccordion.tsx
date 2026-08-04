"use client";

import { useState } from "react";
import type { PlaybookItem } from "../use-cases-data";

export default function PlaybookAccordion({ items }: { items: PlaybookItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="vt-uc-accordion">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.title} className={`vt-uc-acc-item${open ? " open" : ""}`}>
            <button
              className="vt-uc-acc-toggle"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
            >
              <span className="vt-uc-acc-title">{item.title}</span>
              <svg className="vt-uc-acc-chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="vt-uc-acc-body">
              <div className="vt-uc-acc-body-inner">{item.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
