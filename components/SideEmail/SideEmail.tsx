export default function SideEmail() {
  return (
    <div className="fixed bottom-0 right-5 left-auto font-light after:mx-auto after:mt-5 after:block after:h-28 after:w-[1px] after:bg-yellow">
      <a
        className="text-xs tracking-widest opacity-60 transition-colors duration-150 hover:text-yellow"
        style={{ writingMode: 'vertical-rl', WebkitWritingMode: 'vertical-rl' }}
        href="mailto:shanuk@goonasekera.com"
      >
        shanuk@goonasekera.com
      </a>
    </div>
  );
}
