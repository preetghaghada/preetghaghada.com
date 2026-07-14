export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-400">
        <p>© 2026 Preet Ghaghada — websites, marketing and AI automation.</p>
        <a
          href="mailto:preet@preetghaghada.com"
          className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          preet@preetghaghada.com
        </a>
      </div>
    </footer>
  );
}
