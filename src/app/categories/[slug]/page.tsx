import { useEffect, useState } from "react";
import categories from "../../util/categories.json";

interface Category {
  slug: string;
  name: string;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [categoryData, setCategoryData] = useState<Category>();
  const slug = (await params).slug;

  useEffect(() => {
    const matchingCategory = categories.find(
      (category) => category.slug === slug
    );
    setCategoryData(matchingCategory);
  }, []);

  return <div>Category: {categoryData?.name}</div>;
}
