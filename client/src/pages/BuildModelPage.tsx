import { BuildHeader } from '../components/buildModel/BuildHeader';
import { TrimSelect } from '../components/buildModel/TrimSelect';
import { PowertrainSelect } from '../components/buildModel/PowertrainSelect';

export function BuildModelPage() {
  return (
    <>
      <BuildHeader />
      <div>
        <PowertrainSelect />
        <TrimSelect />
      </div>
    </>
  );
}
