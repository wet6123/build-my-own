import { BuildHeader } from '../components/buildHeader/BuildHeader';
import { TrimSelect } from '../components/buildModel/TrimSelect';
import { PowertrainSelect } from '../components/buildModel/PowertrainSelect';
import { Modal } from '../components/common/Modal';

export function BuildModelPage() {
  return (
    <>
      <BuildHeader />
      <div>
        <PowertrainSelect />
        <TrimSelect />
      </div>
      <Modal />
    </>
  );
}
