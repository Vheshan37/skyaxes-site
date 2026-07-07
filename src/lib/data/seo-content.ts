/**
 * SEO Metadata — SkyAxes Website
 *
 * Source: SkyAxes_Website_Renewal_Instructions_EN.docx §9 SEO / Metadata Direction
 *
 * Usage:
 *   import { seo } from "@/lib/data/seo-content";
 *   export const metadata: Metadata = seo.home;
 */

import type { Metadata } from "next";

type SeoEntry = Pick<Metadata, "title" | "description">;

export const seo = {
  /** / */
  home: {
    title: "SkyAxes | Offshore Development, 3D/VR and IoT Systems",
    description:
      "SkyAxes supports Japan-side PM-led offshore development for 3D/VR, IoT and technical business systems.",
  } satisfies SeoEntry,

  /** /services */
  services: {
    title: "Services | SkyAxes",
    description:
      "Offshore development, 3D/VR/AR, and IoT manufacturing systems — all managed Japan-side with offshore delivery.",
  } satisfies SeoEntry,

  /** /services/offshore */
  offshore: {
    title: "Offshore Development with Japan-side PM | SkyAxes",
    description:
      "Cost-effective technical software development supported by requirement definition, project management and QA in Japan.",
  } satisfies SeoEntry,

  /** /services/3dvrar */
  threeDVRAR: {
    title: "3D / VR / AR Development | SkyAxes",
    description:
      "Practical 3D visualization, VR/AR and image-related applications for technical workflows — dental, medical-adjacent, and industrial.",
  } satisfies SeoEntry,

  /** /services/iot */
  iot: {
    title: "IoT & Manufacturing Systems Development | SkyAxes",
    description:
      "IoT sensor data collection, quality control, and factory management systems. LineQC demonstrates real-world manufacturing-system capability.",
  } satisfies SeoEntry,

  /** /case-studies */
  caseStudies: {
    title: "Case Studies | SkyAxes",
    description:
      "Dental 3D Viewer, LineQC quality control system, and AR industrial training — SkyAxes project portfolio.",
  } satisfies SeoEntry,

  /** /case-studies/dental-3d-viewer */
  dental3dViewer: {
    title: "Dental 3D Viewer Development Case Study | SkyAxes",
    description:
      "A custom 3D viewer development case study for dental workflows, 3D visualization and extensible technical software.",
  } satisfies SeoEntry,

  /** /lineqc */
  lineqc: {
    title: "LineQC — Manufacturing Line Quality Control System | SkyAxes",
    description:
      "LineQC is a quality control system by SkyAxes targeting zero in-process defects. Proof of manufacturing-system development capability.",
  } satisfies SeoEntry,

  /** /company */
  company: {
    title: "Company Profile | SkyAxes",
    description:
      "SkyAxes Co., Ltd. — Japan-side PM-led offshore development partner for 3D/VR, IoT and business systems.",
  } satisfies SeoEntry,

  /** /contact */
  contact: {
    title: "Development Consultation | SkyAxes",
    description:
      "Contact SkyAxes for offshore development, 3D/VR/AR, IoT and technical software development consultations.",
  } satisfies SeoEntry,
} as const;
