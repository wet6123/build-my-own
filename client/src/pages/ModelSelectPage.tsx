import { BuildNavBar } from '../components/buildModel/BuildNavBar';
import { ModelList } from '../components/buildModel/ModelList';
import { PowertrainSelect } from '../components/buildModel/PowertrainSelect';

export function ModelSelectPage() {
  return (
    <>
      <BuildNavBar />
      <div>
        <PowertrainSelect />
        <ModelList />
      </div>
    </>
  );
}
