export default async function SlugPage({
  params
}: {
  params: Promise<{ location: string }>
}) {
  const service = 'private-swim-lessons';
  const { location } = await params;
  const [ city, state ] = location.split('--');
  return (
    <div>
      <main>
        {service} in {city}, {state}
      </main>
    </div>
  );
}
