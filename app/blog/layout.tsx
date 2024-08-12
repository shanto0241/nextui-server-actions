export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="text-center">{children}</div>
    </section>
  );
}
