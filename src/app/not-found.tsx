import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-white flex items-center justify-center min-h-[60vh] text-center px-6">
      <div className="max-w-md w-full py-12">
        <h1 
          className="font-bold mb-4" 
          style={{ fontSize: "clamp(80px, 10vw, 120px)", color: "var(--color-accent)", lineHeight: 1, fontFamily: "var(--font-jakarta)", letterSpacing: "-0.04em" }}
        >
          404
        </h1>
        <h2 
          className="font-bold mb-3" 
          style={{ fontSize: 22, color: "var(--color-navy)", fontFamily: "var(--font-noto)" }}
        >
          ページが見つかりませんでした
        </h2>
        <p className="text-sm uppercase tracking-wide font-semibold mb-6" style={{ color: "var(--color-muted)", fontFamily: "var(--font-jakarta)" }}>
          Page Not Found
        </p>
        <p className="mb-8 text-sm" style={{ color: "var(--color-text)", fontFamily: "var(--font-noto)", lineHeight: 1.8 }}>
          申し訳ございません。お探しのページは存在しないか、移動した可能性があります。
          <br />
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary" style={{ padding: "12px 28px", fontSize: 14 }}>
          ホームへ戻る / Back to Home
        </Link>
      </div>
    </div>
  );
}
