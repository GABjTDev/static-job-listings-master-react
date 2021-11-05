import Bg from './components/Bg';
import Jobs from './components/Jobs';
import Filter from './components/Filter';

import { useJobs } from './hooks/useJobs';

function App() {

  const { data, tags, addTags, resetTags, deleteTags } = useJobs();

  return (
    <div className="App">
      <Bg>
        {
          tags.length > 0 &&
          <Filter tags={tags} resetTags={resetTags} deleteTags={deleteTags} />
        }
      </Bg>
      {
        data.map(el => <Jobs key={el.id} info={el} addTags={addTags} />)
      }
    </div>
  );
}

export default App;
