import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/constant/blog";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/common/Section";
import { BackButton } from "@/components/common/BackButton";

export function BlogLandingContent() {
  return (
    <Section className="mt-20">
      <BackButton />
      <div className="grid gap-8 lg:grid-cols-12 lg:items-center mb-12">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-wider text-primary font-bold mb-2">Blog</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Learn routing patterns with live examples
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mt-4 max-w-2xl">
            This section demonstrates the three primary dynamic routing strategies in Next.js app router. Choose an example and explore how each path behaves.
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <Link href="/blog" className="px-4 py-2 bg-primary/20 text-primary rounded-lg font-medium">
              Latest Posts
            </Link>
            <Link href="/blog/date" className="px-4 py-2 border border-primary/30 rounded-lg text-primary hover:bg-primary/10 transition">
              Date Archives
            </Link>
            <Link href="/blog/category" className="px-4 py-2 border border-primary/30 rounded-lg text-primary hover:bg-primary/10 transition">
              Category View
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Image
            src="/ASKDATE.png"
            alt="Blog overview"
            width={1200}
            height={800}
            className="w-full rounded-2xl border border-slate-200"
          />
        </div>
      </div>

      <div className="mb-12">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-white border border-primary/20">
            <CardHeader>
              <CardTitle>[slug]</CardTitle>
              <CardDescription>Single segment dynamic routes for individual posts.</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="block bg-slate-100 px-3 py-1 rounded text-xs">/blog/getting-started-with-nextjs</code>
              <Link href="/blog/getting-started-with-nextjs" className="mt-4 inline-block text-primary hover:underline">Try it →</Link>
            </CardContent>
          </Card>
          <Card className="bg-white border border-blue-200">
            <CardHeader>
              <CardTitle>[...slug]</CardTitle>
              <CardDescription>Catch-all routes for nested categories.</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="block bg-slate-100 px-3 py-1 rounded text-xs">/blog/category/tech/nextjs</code>
              <Link href="/blog/category/tech/nextjs" className="mt-4 inline-block text-blue-600 hover:underline">Try it →</Link>
            </CardContent>
          </Card>
          <Card className="bg-white border border-purple-200">
            <CardHeader>
              <CardTitle>[[...slug]]</CardTitle>
              <CardDescription>Optional catch-all routes for archive filtering.</CardDescription>
            </CardHeader>
            <CardContent>
              <code className="block bg-slate-100 px-3 py-1 rounded text-xs">/blog/date/2025/02</code>
              <Link href="/blog/date/2025/02" className="mt-4 inline-block text-purple-600 hover:underline">Try it →</Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">Recent Posts</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="group border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-muted-foreground text-sm">{post.date}</p>
                  <div className="flex gap-2">
                    {post.category.map((cat) => (
                      <Badge key={cat} variant="secondary">{cat}</Badge>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-muted-foreground mt-3 line-clamp-2">{post.excerpt}</p>

                <span className="mt-4 inline-block text-sm text-primary font-medium">Read more →</span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}