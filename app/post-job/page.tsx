"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const jobSchema = z.object({
  title: z.string().min(1, "Job title is required"),
  company: z.string().min(1, "Company name is required"),
  type: z.string().min(1, "Job type is required"),
  location: z.string().min(1, "Location is required"),
  salary: z.string().optional(),
  techStack: z.array(z.string()).min(1, "At least one technology is required"),
  description: z.string().min(50, "Description must be at least 50 characters"),
  requirements: z.string().min(1, "Requirements are required"),
  benefits: z.string().optional(),
  contactEmail: z.string().email("Valid email is required"),
  remote: z.boolean(),
  experience: z.string().min(1, "Experience level is required"),
});

type JobFormData = z.infer<typeof jobSchema>;

const PostJob = () => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      techStack: [],
      remote: false,
    },
  });

  const watchedFields = watch();

  const techOptions = [
    "React",
    "Vue.js",
    "Angular",
    "Node.js",
    "Python",
    "Java",
    "TypeScript",
    "JavaScript",
    "AWS",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "GraphQL",
    "REST APIs",
    "Git",
    "CI/CD",
  ];

  const handleTechToggle = (tech: string) => {
    const newTech = selectedTech.includes(tech)
      ? selectedTech.filter((t) => t !== tech)
      : [...selectedTech, tech];

    setSelectedTech(newTech);
    setValue("techStack", newTech);
  };

  const onSubmit = (data: JobFormData) => {
    console.log("Job posted:", data);
  };

  return (
    <div>
      <section className="pt-20 pb-8 bg-brand-gradient-subtle">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Post a <span className="text-brand">Developer Job</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with top-tier developers from around the world
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card border border-border rounded-xl p-8"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      Job Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Job Title *
                        </label>
                        <input
                          {...register("title")}
                          type="text"
                          placeholder="e.g. Senior React Developer"
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                        />
                        {errors.title && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.title.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Company Name *
                        </label>
                        <input
                          {...register("company")}
                          type="text"
                          placeholder="e.g. TechCorp Inc."
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                        />
                        {errors.company && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.company.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Job Type *
                        </label>
                        <select
                          {...register("type")}
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                        >
                          <option value="">Select type</option>
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                          <option value="Contract">Contract</option>
                          <option value="Freelance">Freelance</option>
                        </select>
                        {errors.type && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.type.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Experience Level *
                        </label>
                        <select
                          {...register("experience")}
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                        >
                          <option value="">Select level</option>
                          <option value="Entry Level">Entry Level</option>
                          <option value="Mid Level">Mid Level</option>
                          <option value="Senior Level">Senior Level</option>
                          <option value="Lead">Lead</option>
                        </select>
                        {errors.experience && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.experience.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Salary Range
                        </label>
                        <input
                          {...register("salary")}
                          type="text"
                          placeholder="e.g. $120k - $160k"
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Location *
                        </label>
                        <input
                          {...register("location")}
                          type="text"
                          placeholder="e.g. San Francisco, CA or Remote"
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                        />
                        {errors.location && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.location.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Contact Email *
                        </label>
                        <input
                          {...register("contactEmail")}
                          type="email"
                          placeholder="hiring@company.com"
                          className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                        />
                        {errors.contactEmail && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.contactEmail.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-2">
                        <input
                          {...register("remote")}
                          type="checkbox"
                          className="rounded"
                        />
                        <span className="text-foreground">
                          Remote work available
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      Required Technologies *
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {techOptions.map((tech) => (
                        <button
                          key={tech}
                          type="button"
                          onClick={() => handleTechToggle(tech)}
                          className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                            selectedTech.includes(tech)
                              ? "bg-brand text-white border-brand"
                              : "bg-background border-border hover:border-brand"
                          }`}
                        >
                          {tech}
                        </button>
                      ))}
                    </div>
                    {errors.techStack && (
                      <p className="text-red-500 text-sm">
                        {errors.techStack.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      Job Details
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Job Description *
                      </label>
                      <textarea
                        {...register("description")}
                        rows={6}
                        placeholder="Describe the role, responsibilities, and what makes this opportunity unique..."
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                      />
                      {errors.description && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.description.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Requirements *
                      </label>
                      <textarea
                        {...register("requirements")}
                        rows={4}
                        placeholder="List the required skills, experience, and qualifications..."
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                      />
                      {errors.requirements && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.requirements.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Benefits & Perks
                      </label>
                      <textarea
                        {...register("benefits")}
                        rows={3}
                        placeholder="List the benefits, perks, and what makes your company great..."
                        className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-brand focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowPreview(!showPreview)}
                    >
                      {showPreview ? "Edit" : "Preview"}
                    </Button>
                    <Button type="submit" variant="brand">
                      Post Job
                    </Button>
                  </div>
                </form>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card border border-border rounded-xl p-6 sticky top-8"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Job Preview
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {watchedFields.title || "Job Title"}
                    </h4>
                    <p className="text-brand">
                      {watchedFields.company || "Company Name"}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedTech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-brand/10 text-brand px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>{watchedFields.location}</p>
                    <p>{watchedFields.type}</p>
                    <p>{watchedFields.salary}</p>
                  </div>

                  {watchedFields.description && (
                    <div>
                      <h5 className="font-medium text-foreground mb-2">
                        Description
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        {watchedFields.description.substring(0, 150)}...
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostJob;
