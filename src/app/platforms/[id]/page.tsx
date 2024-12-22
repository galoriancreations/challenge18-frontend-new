async function getPlatformDetails(id: string) {
  const res = await fetch(`http://localhost:3000/api/platforms/${id}`);
  return res.json();
}

export default async function PlatformPage({ params }: { params: { id: string } }) {
  const platform = await getPlatformDetails(params.id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{platform.name}</h1>
      <p className="text-gray-600 mb-6">{platform.overview}</p>
      
      <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
      <ul className="space-y-2">
        {platform.keyFeatures.map((feature: string, index: number) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
