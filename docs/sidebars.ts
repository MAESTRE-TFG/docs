import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const sidebars: SidebarsConfig = {
  // User Manual Sidebar
  userManualSidebar: [
    {
      type: "category",
      label: "User Manual",
      items: [
        "user-manual/introduction",
        "user-manual/getting-started",
        "user-manual/materials",
        {
          type: "category",
          label: "AI Tools",
          items: [
            "user-manual/ai-tools/class-planner",
            "user-manual/ai-tools/exam-maker",
            "user-manual/ai-tools/test-maker",
            "user-manual/ai-tools/scientific-exam-maker",
          ],
        },
      ],
    },
  ],

  // Admin Manual Sidebar
  adminManualSidebar: [
    {
      type: "category",
      label: "Admin Manual",
      items: [
        "admin-manual/introduction",
        "admin-manual/installation",
        "admin-manual/maintenance",
        "admin-manual/security",
        "admin-manual/troubleshooting",
      ],
    },
  ],

  // Legal Documents
  legalSidebar: [
    {
      type: "category",
      label: "Legal",
      items: ["legal/license", "legal/terms"],
    },
  ],
};

export default sidebars;
