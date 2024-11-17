import { FC } from 'react';
import FilterMenu from './filters/filters';
import StartupList from './lists/list';

const HomePage: FC = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 p-4 bg-gray-100 border-r border-gray-300">
        <FilterMenu />
      </div>
      <div className="w-3/4 p-8">
        <StartupList />
      </div>
    </div>
  );
}

export default HomePage;
