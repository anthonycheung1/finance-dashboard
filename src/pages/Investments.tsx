import type { ETF } from '../types/finance';
import ETFTable from '../components/Portfolio/ETFTable';

type InvestmentsProps = {
  etfs: ETF[];
  onAddETF: (newETF: ETF) => void;
  onUpdateETF: (updatedETF: ETF) => void;
  onDeleteETF: (ETFtoDeleteId: number) => void;
};

function Investments(props: InvestmentsProps) {
  return (
    <main>
      <h1>Investments</h1>

      <ETFTable
        etfs={props.etfs}
        onAddETF={props.onAddETF}
        onUpdateETF={props.onUpdateETF}
        onDeleteETF={props.onDeleteETF}
      />
    </main>
  );
}

export default Investments;