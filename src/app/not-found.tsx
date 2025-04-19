import { cn, fadeIn } from "@/lib/utils";
import SnakeGame from "@/components/SnakeGame";

export default function NotFound() {
  return (
    <main className="flex flex-col gap-4 pb-12 pt-4 text-left items-center sm:gap-8 sm:py-12">
      <section className={cn(fadeIn, "animation-delay-200 flex flex-col gap-2 items-center")}>
        <h1 className="text-4xl text-muted-primary font-bold sm:text-3xl">404 - Page Not Found</h1>
        <h2 className="text-md pt-3 font-light text-muted-foreground sm:text-md text-center max-w-md">
          Oops! The page you are looking for does not exist. While you&apos;re here, why not play a game of Snake?
        </h2>
        <SnakeGame />
        <a href="/" className="mt-6 text-primary hover:underline">
          Go back to the homepage
        </a>
      </section>
    </main>
  );
}
