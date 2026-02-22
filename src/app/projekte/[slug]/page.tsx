import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { Footer } from "@/components/layout/Footer";
import { ProjectDetailClient } from "./ProjectDetailClient";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Projekt nicht gefunden | INVERTA Digital",
    };
  }

  return {
    title: `${project.title} - ${project.category} | INVERTA Portfolio`,
    description: project.description,
    keywords: [
      ...project.services,
      "Referenz",
      "Case Study",
      project.category,
      "INVERTA Digital",
    ],
    openGraph: {
      type: "website",
      title: `${project.title} | INVERTA`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectDetailClient project={project} />
      <Footer />
    </>
  );
}
