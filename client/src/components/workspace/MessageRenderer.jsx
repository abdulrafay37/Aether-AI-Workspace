import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function CodeBlock({ inline, className, children, ...props }) {
  const [copied, setCopied] = useState(false);
  const code = String(children).replace(/\n$/, "");
  const match = /language-(\w+)/.exec(className || "");
  const language = match?.[1] || "text";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch (error) {
      console.error("Copy failed", error);
    }
  };

  if (inline) {
    return (
      <code className="rounded bg-[#F7E7CE]/80 px-1 py-0.5 text-sm text-[#6B4423]" {...props}>
        {children}
      </code>
    );
  }

  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-[#2f3b55] bg-[#0b1220] shadow-lg">
      <div className="flex items-center justify-between gap-4 border-b border-[#16202b] bg-[#111827] px-4 py-3 text-xs uppercase tracking-[0.18em] text-[#94a3b8]">
        <span>{language.toUpperCase()}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        >
          <span className="rounded-full bg-[#1f2937]/90 px-3 py-1 text-[.65rem] font-semibold text-white shadow-sm hover:bg-[#374151]">
            {copied ? "Copied" : "Copy"}
          </span>
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={oneDark}
        showLineNumbers
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: "1.25rem",
          background: "#0b1220",
          fontSize: "0.92rem",
          borderRadius: 0,
        }}
        lineNumberStyle={{ color: "#6b7280", fontSize: "0.8rem" }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default function MessageRenderer({ content }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code: CodeBlock,
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noreferrer" className="text-[#2563eb] underline hover:text-[#1d4ed8]">
            {children}
          </a>
        ),
        table: ({ node, ...props }) => (
          <div className="my-4 overflow-x-auto rounded-xl border border-[#d1d5db] bg-[#f8fafc] text-sm shadow-sm">
            <table className="min-w-full border-collapse text-left" {...props} />
          </div>
        ),
        th: ({ node, ...props }) => (
          <th className="border border-[#e2e8f0] bg-[#f1f5f9] px-4 py-3 text-sm font-semibold text-[#0f172a]" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="border border-[#e2e8f0] px-4 py-3 text-sm text-[#0f172a]" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-[#6b7280] bg-[#f8fafc] px-4 py-3 italic text-[#475569]" {...props} />
        ),
        p: ({ node, ...props }) => <p className="mb-4 text-sm leading-7 text-[#334155]" {...props} />,
        ul: ({ node, ...props }) => <ul className="ml-6 list-disc space-y-2 text-sm text-[#334155]" {...props} />,
        ol: ({ node, ...props }) => <ol className="ml-6 list-decimal space-y-2 text-sm text-[#334155]" {...props} />,
        h1: ({ node, ...props }) => <h1 className="mt-6 mb-4 text-2xl font-semibold text-[#0f172a]" {...props} />,
        h2: ({ node, ...props }) => <h2 className="mt-6 mb-4 text-xl font-semibold text-[#0f172a]" {...props} />,
        h3: ({ node, ...props }) => <h3 className="mt-6 mb-4 text-lg font-semibold text-[#0f172a]" {...props} />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
