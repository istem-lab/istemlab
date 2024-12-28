'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Link from 'next/link';

const projects = [
  {
    id: 'geogpt',
    title: 'Announcing GeoGPT',
    description:
      'Our latest AI-powered geospatial tool to revolutionize mapping and analysis.',
    status: 'Completed',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    link: '/projects/geogpt',
  },
  {
    id: 'mapping-melamchi',
    title: 'Mapping Melamchi',
    description:
      'An ongoing project to create detailed maps for the Melamchi region.',
    status: 'InProgress',
    startDate: '2023-05-01',
    endDate: '2024-04-30',
    link: '/projects/mapping-melamchi',
  },
  {
    id: 'disaster-management',
    title: 'Disaster Management',
    description:
      'Using geospatial data to improve disaster preparedness and response.',
    status: 'InProgress',
    startDate: '2023-03-15',
    endDate: '2023-12-31',
    link: '/projects/disaster-management',
  },
  {
    id: 'geoai-applications',
    title: 'Exploring GeoAI Applications',
    description: 'Advancing research into AI-driven geospatial technologies.',
    status: 'Upcoming',
    startDate: '2024-01-15',
    endDate: '2024-12-15',
    link: '/projects/geoai-applications',
  },
];

const getStatusClass = (status) => {
  switch (status) {
    case 'Completed':
      return 'text-green-600 bg-green-100 px-2 py-1 rounded';
    case 'InProgress':
      return 'text-blue-600 bg-blue-100 px-2 py-1 rounded';
    case 'Upcoming':
      return 'text-yellow-600 bg-yellow-100 px-2 py-1 rounded';
    default:
      return 'text-gray-600';
  }
};

const ProjectsPage = () => {
  // Sort projects by most recent start date
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );

  return (
    <div className="w-full px-2 py-10">
      <Alert className="mb-6" variant="info">
        <AlertTitle>Our Projects</AlertTitle>
        <AlertDescription>
          Here is an overview of our recent and ongoing projects. Click Read
          More for detailed information.
        </AlertDescription>
      </Alert>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProjects.map((project) => (
            <TableRow key={project.id}>
              <TableCell>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <p className="text-sm text-gray-500">
                  <strong>Start Date:</strong> {project.startDate} <br />
                  <strong>End Date:</strong> {project.endDate}
                </p>
                <Link href={project.link}>
                  <p className="text-primary-600 hover:text-primary-800 font-semibold">
                    Read More &rarr;
                  </p>
                </Link>
              </TableCell>
              <TableCell>
                <span className={getStatusClass(project.status)}>
                  {project.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectsPage;