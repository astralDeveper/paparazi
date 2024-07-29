"use client";
/**
 * This config is used to set up Sanity Studio that's mounted on the `app/(sanity)/studio/[[...tool]]/page.tsx` route
 */
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { apiVersion, dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { pageStructure, singletonPlugin } from "@/sanity/plugins";
import about from "@/sanity/schemas/About";
import careers from "@/sanity/schemas/Careers";
import home from "@/sanity/schemas/Home";
import services from "@/sanity/schemas/Services";
// import top from "@/sanity/schemas/Top";
import quiz from "@/sanity/schemas/Quiz";
import caseStudies from "@/sanity/schemas/CaseStudies";
import diplomaticDiaries from "@/sanity/schemas/DiplomaticDiaries";
import powerplayBlogs from "@/sanity/schemas/PowerPlayBlogs";
import navbar from "@/sanity/schemas/Navbar";
import quizResult from "@/sanity/schemas/QuizResult";
import Users from "@/sanity/schemas/Users";
import Footer from "@/sanity/schemas/Footer";

export default defineConfig({
  basePath: studioUrl,
  projectId,
  dataset,
  schema: { 
    types: [
      about,
      careers,
      home,
      services,
      // top,
      quizResult,
      Users,
      Footer,
      quiz,
      caseStudies,
      diplomaticDiaries,
      powerplayBlogs,
      navbar
    ]
  },
  plugins: [
    structureTool({ structure: pageStructure([
      about,
      services,
      careers,
      // top,
      home,
      Footer,
      quiz,
      caseStudies,
      diplomaticDiaries,
      powerplayBlogs,
      navbar,
    ])}),
    singletonPlugin([
      about.name,
      services.name,
      careers.name,
      // top.name,
      home.name,
      Footer.name,
      quiz.name,
      caseStudies.name,
      diplomaticDiaries.name,
      powerplayBlogs.name,
      navbar.name,
    ]),
    process.env.NODE_ENV === "development" && visionTool({ defaultApiVersion: apiVersion }),
  ].filter(Boolean),
});
