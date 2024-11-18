import { FilterProvider } from './context/filterContext';
import FilterMenu from './components/filters/filters';
import StartupList from './components/lists/list';

const HomePage = () => {
  return (
    <FilterProvider>
      <div className="flex min-h-screen">
        <div className="w-1/4 p-4 bg-gray-100 border-r border-gray-300">
          <FilterMenu />
        </div>
        <div className="w-3/4 p-8">
          <StartupList />
        </div>
      </div>
    </FilterProvider>
  );
};

export default HomePage;
