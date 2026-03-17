import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { projectCategories, projectIdeas, type ProjectIdea } from "@/lib/projectIdeas";

const ProjectIdeasPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [query, setQuery] = useState<string>("");
  const [activeIdea, setActiveIdea] = useState<ProjectIdea | null>(null);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredIdeas = useMemo(() => {
    return projectIdeas
      .filter((idea) => {
        const matchesCategory = selectedCategory === "all" || idea.categoryId === selectedCategory;
        if (!matchesCategory) return false;

        if (!normalizedQuery) return true;

        const haystack = [idea.title, idea.summary, idea.details, ...(idea.techStack ?? [])].join(" ").toLowerCase();
        return haystack.includes(normalizedQuery);
      })
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [normalizedQuery, selectedCategory]);

  const selectedCategoryData = projectCategories.find((cat) => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mx-auto max-w-3xl mb-10"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-mono text-sm mb-4">{'// Project Idea Lab'}</p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Explore&nbsp;
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                project ideas
              </span>
              <br />
              by category or keyword
            </h1>
            <p className="mt-4 text-muted-foreground">
              Filter by category, search by keywords, and open detailed project guides with recommended tech stacks.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Categories</h2>
                  <p className="text-sm text-muted-foreground">
                    Select a category to narrow the ideas. Use search to filter by keywords.
                  </p>
                </div>
                <div className="relative w-full md:w-80">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search by title, stack, or concept..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {projectCategories.map((category) => {
                  const isSelected = category.id === selectedCategory;
                  const ring = isSelected ? "ring-2 ring-emerald-400" : "ring-border";

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setSelectedCategory(category.id)}
                      className={`group rounded-xl border ${ring} bg-card p-4 text-left transition hover:border-emerald-400 hover:bg-emerald-50/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`text-base font-semibold ${isSelected ? "text-emerald-600" : "text-foreground"}`}>
                          {category.name}
                        </h3>
                        <span
                          className={`text-xs font-mono tracking-wide ${isSelected ? "text-emerald-500" : "text-muted-foreground"}`}
                        >
                          {category.id === "all" ? projectIdeas.length : projectIdeas.filter((idea) => idea.categoryId === category.id).length}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {category.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 rounded-xl bg-card/80 p-4">
                <p className="text-sm text-muted-foreground">
                  {selectedCategoryData?.name === "All"
                    ? "Showing all ideas"
                    : `Showing ideas for “${selectedCategoryData?.name}”`}
                  {normalizedQuery && ` (filtered by “${query}”)`}
                </p>
                <p className="text-sm text-muted-foreground">
                  {filteredIdeas.length === 0
                    ? "No matching ideas found. Try a different keyword or category."
                    : `${filteredIdeas.length} idea${filteredIdeas.length === 1 ? "" : "s"} found`}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Ideas</h2>
                <span className="text-sm text-muted-foreground">
                  Click an idea to explore the details.
                </span>
              </div>

              <div className="space-y-4">
                {filteredIdeas.map((idea) => (
                  <motion.div
                    key={idea.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Card
                      className="hover:border-emerald-400 hover:shadow-lg focus-within:ring-2 focus-within:ring-emerald-400"
                      onClick={() => setActiveIdea(idea)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") setActiveIdea(idea);
                      }}
                      aria-label={`Open project idea details for ${idea.title}`}
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between gap-2">
                          <span>{idea.title}</span>
                          <span className="text-xs font-mono text-muted-foreground">{idea.categoryId.toUpperCase()}</span>
                        </CardTitle>
                        <CardDescription>{idea.summary}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {idea.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-mono text-emerald-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="justify-between">
                        <span className="text-xs text-muted-foreground">Click to view details</span>
                        <span className="text-emerald-500 font-semibold">&gt;</span>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}

                {filteredIdeas.length === 0 && (
                  <div className="rounded-xl border border-dashed border-muted-foreground/40 bg-card p-10 text-center">
                    <p className="text-sm text-muted-foreground">
                      Try adjusting the search or switching categories to surface more ideas.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <Dialog open={activeIdea !== null} onOpenChange={(open) => !open && setActiveIdea(null)}>
        <DialogContent className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              {activeIdea?.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {activeIdea?.summary}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <section>
              <h3 className="text-base font-semibold">Overview</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {activeIdea?.details}
              </p>
            </section>

            <section>
              <h3 className="text-base font-semibold">Implementation notes</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {activeIdea?.implementationNotes}
              </p>
            </section>

            {activeIdea?.techStack && (
              <section>
                <h3 className="text-base font-semibold">Suggested Tech Stack</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeIdea.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-mono text-emerald-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {(activeIdea?.githubUrl || activeIdea?.resources?.length) && (
              <section>
                <h3 className="text-base font-semibold">Resources</h3>
                <div className="mt-3 space-y-2">
                  {activeIdea?.githubUrl && (
                    <a
                      href={activeIdea.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground hover:border-emerald-400 hover:bg-emerald-50"
                    >
                      <span>GitHub repository</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                  )}

                  {activeIdea?.resources?.map((resource) => (
                    <a
                      key={resource.url}
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3 text-sm font-medium text-foreground hover:border-emerald-400 hover:bg-emerald-50"
                    >
                      <span>{resource.label}</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="mt-6 flex justify-end">
            <Button variant="secondary" onClick={() => setActiveIdea(null)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectIdeasPage;
