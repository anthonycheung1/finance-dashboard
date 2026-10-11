import { properties } from '../data/financialData';
import PropertyTable from '../components/Portfolio/PropertyTable';

function Properties() {
  return (
    <main>
      <h1>Properties</h1>

      <PropertyTable properties={properties} />
    </main>
  );
}

export default Properties;