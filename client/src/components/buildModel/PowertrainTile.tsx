import * as power from '../../styles/buildModel/powertrainTileStyle';

export function PowertrainTile({ name, value }: { name: string; value: string }) {
  return (
    <div>
      {value === name ? (
        <power.PowertrainTileHighlight>{name}</power.PowertrainTileHighlight>
      ) : (
        <power.PowertrainTile>{name}</power.PowertrainTile>
      )}
    </div>
  );
}
