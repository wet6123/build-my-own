import { BuildNavBar } from '../components/buildModel/BuildNavBar';
import { PowertrainSelect } from '../components/buildModel/PowertrainSelect';

export function ModelSelectPage() {
  return (
    <>
      {/* <BuildNavBar /> */}
      <div>
        <PowertrainSelect />
        <div>모델</div>
      </div>
    </>
  );
}
