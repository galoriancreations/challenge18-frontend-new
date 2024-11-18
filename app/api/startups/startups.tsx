
import { NextApiRequest, NextApiResponse } from 'next';

interface Startup {
  name: string;
  founded: number;
  model: string;
  employees: string;
  stage: string;
  raised: string;
  tags: string[];
}

const startups: Startup[] = [
  {
    name: "NUTEK OIDO",
    founded: 2023,
    model: "B2B",
    employees: "1-10",
    stage: "Pre-Seed",
    raised: "$1.78M",
    tags: ["patent-pending", "detection", "cancer"],
  },
  {
    name: "Terraflex Industries",
    founded: 2020,
    model: "B2B, B2C, B2G",
    employees: "11-50",
    stage: "Mature",
    raised: "Undisclosed",
    tags: ["water-utilities", "medical-devices"],
  },
  {
    name: "Zimperium",
    founded: 2025,
    model: "B2B, B2G",
    employees: "201-500",
    stage: "E",
    raised: "$72M",
    tags: ["endpoint-security", "mobile-applications"],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { stage, model, tags } = req.query;
    let filteredStartups = [...startups];

    if (stage) {
      filteredStartups = filteredStartups.filter((s) => s.stage === stage);
    }

    if (model) {
      filteredStartups = filteredStartups.filter((s) =>
        s.model.toLowerCase().includes(String(model).toLowerCase())
      );
    }

    if (tags) {
      const tagArray = Array.isArray(tags) ? tags : [tags];
      filteredStartups = filteredStartups.filter((s) =>
        tagArray.some((tag) => s.tags.includes(String(tag).toLowerCase()))
      );
    }

    res.status(200).json({
      total: filteredStartups.length,
      data: filteredStartups,
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
