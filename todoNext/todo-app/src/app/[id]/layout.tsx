export default function TodoDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, ratione!</h2>
    </div>
  );
}
