import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, Home, Smile } from "lucide-react";

import { PageLayout } from "@/components/site/PageLayout";
import { Reveal } from "@/components/site/primitives";
import { dentalTip, getBlogPost, getRelatedBlogPosts } from "@/data/blogs";

export const Route = createFileRoute("/blogs/$slug")({
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { slug } = Route.useParams();
  const post = getBlogPost(slug);

  if (!post) {
    return (
      <PageLayout>
        <section className="mx-auto max-w-3xl px-4 py-24 text-center">
          <h1 className="text-3xl text-secondary-foreground">Blog not found</h1>
          <p className="mt-4 text-muted-foreground">
            The article you are looking for may have moved.
          </p>
          <a
            href="/blogs"
            className="brand-gradient mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
          >
            Back to Blogs
          </a>
        </section>
      </PageLayout>
    );
  }

  const relatedPosts = getRelatedBlogPosts(post.slug);

  return (
    <PageLayout>
      <article className="bg-white">
        <section className="lavender-band px-4 py-14 sm:py-18">
          <Reveal>
            <div className="mx-auto max-w-5xl">
              <nav
                aria-label="Breadcrumb"
                className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground"
              >
                <a
                  href="/"
                  className="inline-flex items-center gap-1 transition-colors hover:text-primary"
                >
                  <Home className="h-4 w-4" />
                  Home
                </a>
                <span>/</span>
                <a href="/blogs" className="transition-colors hover:text-primary">
                  Blogs
                </a>
                <span>/</span>
                <span className="text-secondary-foreground">{post.category}</span>
              </nav>

              <div className="mt-9 max-w-4xl">
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-secondary-foreground">
                  {post.category}
                </span>
                <h1 className="brand-gradient-text mt-5 text-4xl leading-tight sm:text-5xl">
                  {post.title}
                </h1>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    {post.readTime}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {post.publishedDate}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="px-4 pb-24">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <img
                src={post.image}
                alt={post.imageAlt}
                width={1280}
                height={720}
                className="mt-10 h-[20rem] w-full rounded-[1.75rem] object-cover shadow-lift sm:h-[28rem]"
              />
            </Reveal>

            <div className="mx-auto mt-12 max-w-3xl">
              <Reveal>
                <div className="space-y-5 text-base leading-8 text-muted-foreground sm:text-lg">
                  {post.introduction.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <div className="mt-12 space-y-11">
                {post.sections.map((section, index) => (
                  <Reveal key={section.title} delay={(index % 3) * 0.04}>
                    <section>
                      <h2 className="text-2xl leading-tight text-secondary-foreground">
                        {section.title}
                      </h2>
                      {section.paragraphs ? (
                        <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      ) : null}
                      {section.bullets ? (
                        <ul className="mt-5 grid gap-3 text-base leading-7 text-muted-foreground">
                          {section.bullets.map((item) => (
                            <li key={item} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  </Reveal>
                ))}
              </div>

              <Reveal>
                <aside className="mt-12 rounded-[1.25rem] bg-cyan-50 p-6 text-slate-900 shadow-soft">
                  <div className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                      <Smile className="h-6 w-6" />
                    </span>
                    <div>
                      <h2 className="text-lg text-slate-950">Dental Tip</h2>
                      <p className="mt-2 text-sm leading-7 text-slate-700">{dentalTip}</p>
                    </div>
                  </div>
                </aside>
              </Reveal>

              <Reveal>
                <section className="mt-12">
                  <h2 className="text-2xl leading-tight text-secondary-foreground">Conclusion</h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-muted-foreground">
                    {post.conclusion.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              </Reveal>

              <Reveal>
                <section className="brand-gradient mt-12 rounded-[1.75rem] p-8 text-white shadow-lift sm:p-10">
                  <h2 className="text-2xl leading-tight text-white">{post.ctaTitle}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90 sm:text-base">
                    Whether you need a routine checkup or advanced dental treatment, our dental care
                    team is here to help.
                  </p>
                  <a
                    href="/contact#appointment"
                    className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft transition-transform hover:scale-[1.02]"
                  >
                    {post.ctaButton}
                  </a>
                </section>
              </Reveal>
            </div>
          </div>
        </section>
      </article>

      <section className="lavender-band px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="text-center text-3xl text-secondary-foreground sm:text-4xl">
              You May Also Like
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {relatedPosts.map((relatedPost, index) => (
              <Reveal key={relatedPost.slug} delay={index * 0.08}>
                <a
                  href={relatedPost.route}
                  className="lift-card lavender-card group flex h-full flex-col overflow-hidden rounded-3xl"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.imageAlt}
                    width={720}
                    height={480}
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {relatedPost.category}
                    </span>
                    <h3 className="mt-3 flex-1 text-lg leading-snug text-secondary-foreground">
                      {relatedPost.title}
                    </h3>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read More{" "}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
