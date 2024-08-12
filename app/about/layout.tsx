export default function AboutLayout({
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
