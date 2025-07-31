"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Filter,
  Briefcase,
  Clock,
  DollarSign,
} from "lucide-react";
import { useState } from "react";

const Jobs = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    techStack: [],
    jobType: [],
    experience: [],
    remote: false,
  });

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp Inc.",
      logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=64&h=64&fit=crop&crop=center",
      location: "Remote",
      type: "Full-time",
      salary: "$120k - $160k",
      tags: ["React", "TypeScript", "Node.js"],
      posted: "2 days ago",
      description:
        "Join our growing team to build next-generation web applications.",
    },
    {
      id: 2,
      title: "Full Stack Engineer",
      company: "StartupXYZ",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$140k - $180k",
      tags: ["Python", "Django", "React"],
      posted: "1 week ago",
      description: "Help us scale our platform to serve millions of users.",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      company: "CloudTech",
      logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=64&h=64&fit=crop&crop=center",
      location: "Austin, TX",
      type: "Contract",
      salary: "$100k - $130k",
      tags: ["AWS", "Docker", "Kubernetes"],
      posted: "3 days ago",
      description: "Build and maintain our cloud infrastructure at scale.",
    },
    {
      id: 4,
      title: "Mobile App Developer",
      company: "MobileFirst",
      logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=64&h=64&fit=crop&crop=center",
      location: "Remote",
      type: "Part-time",
      salary: "$80k - $100k",
      tags: ["React Native", "iOS", "Android"],
      posted: "5 days ago",
      description: "Create amazing mobile experiences for our users.",
    },
    {
      id: 5,
      title: "Backend Developer",
      company: "DataFlow",
      logo: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=64&h=64&fit=crop&crop=center",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $140k",
      tags: ["Java", "Spring", "PostgreSQL"],
      posted: "1 day ago",
      description: "Build robust APIs and data processing systems.",
    },
    {
      id: 6,
      title: "Frontend Engineer",
      company: "DesignCo",
      logo: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=64&h=64&fit=crop&crop=center",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$100k - $130k",
      tags: ["Vue.js", "SCSS", "Figma"],
      posted: "4 days ago",
      description: "Create beautiful and intuitive user interfaces.",
    },
  ];

  const techStacks = [
    "React",
    "Vue.js",
    "Angular",
    "Node.js",
    "Python",
    "Java",
    "TypeScript",
    "AWS",
    "Docker",
  ];
  const jobTypes = ["Full-time", "Part-time", "Contract", "Freelance"];
  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level", "Lead"];

  return (
    <div>
      <section className="pt-20 pb-8 bg-brand-gradient-subtle">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
              Find Your Dream <span className="text-brand">Developer Job</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover opportunities with top tech companies worldwide
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-2xl shadow-card border p-4 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="flex items-center gap-3 p-3">
                  <Search className="text-muted-foreground" size={20} />
                  <input
                    type="text"
                    placeholder="Job title or keyword"
                    className="bg-transparent outline-none flex-1"
                  />
                </div>
                <div className="flex items-center gap-3 p-3 border-l border-border">
                  <MapPin className="text-muted-foreground" size={20} />
                  <input
                    type="text"
                    placeholder="Location"
                    className="bg-transparent outline-none flex-1"
                  />
                </div>
                <div className="flex items-center gap-3 p-3 border-l border-border">
                  <Briefcase className="text-muted-foreground" size={20} />
                  <select className="bg-transparent outline-none flex-1">
                    <option>All types</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                  </select>
                </div>
                <Button variant="brand" className="w-full">
                  Search Jobs
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Filter size={20} />
                  Filters
                </h3>

                {/* Tech Stack Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="space-y-2">
                    {techStacks.map((tech) => (
                      <label
                        key={tech}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input type="checkbox" className="rounded" />
                        <span className="text-muted-foreground">{tech}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Job Type</h4>
                  <div className="space-y-2">
                    {jobTypes.map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input type="checkbox" className="rounded" />
                        <span className="text-muted-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Experience Filter */}
                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">
                    Experience
                  </h4>
                  <div className="space-y-2">
                    {experienceLevels.map((level) => (
                      <label
                        key={level}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input type="checkbox" className="rounded" />
                        <span className="text-muted-foreground">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Remote Filter */}
                <div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-muted-foreground">Remote Only</span>
                  </label>
                </div>
              </div>
            </motion.div>

            {/* Jobs List */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-6 flex justify-between items-center"
              >
                <h2 className="text-2xl font-bold text-foreground">
                  {jobs.length} Jobs Found
                </h2>
                <select className="border border-border rounded-lg px-4 py-2">
                  <option>Sort by: Newest</option>
                  <option>Sort by: Salary</option>
                  <option>Sort by: Relevance</option>
                </select>
              </motion.div>

              <div className="space-y-6">
                {jobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-card transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <img
                          src={job.logo}
                          alt={job.company}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {job.title}
                          </h3>
                          <p className="text-brand font-medium">
                            {job.company}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Apply Now
                      </Button>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-brand/10 text-brand px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase size={16} />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign size={16} />
                          <span>{job.salary}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{job.posted}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Jobs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
