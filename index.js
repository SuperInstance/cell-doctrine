// cell-doctrine: the substrate's irreducible cell doctrine.
// A cell is the system, not the data. The watch oscillates between universal
// and particular. The address IS the data. These three statements are the
// doctrine; everything else is a corollary.

const TENETS = Object.freeze({
  CELL_IS_SYSTEM: 'cell_is_system',
  WATCH_OSCILLATES: 'watch_oscillates',
  ADDRESS_IS_DATA: 'address_is_data',
});

const TENET_TEXT = {
  cell_is_system: 'A cell is the system, not the data. Operations act on the cell; data is what the cell points at.',
  watch_oscillates: 'The watch oscillates between universal and particular. There is no substrate-side without substrate-over.',
  address_is_data: 'The address IS the data. A cell at hash H is fully determined by H.',
};

function isCell(candidate) {
  if (!candidate || typeof candidate !== 'object') return false;
  return (
    'state' in candidate &&
    'witness_log' in candidate &&
    'behavior' in candidate &&
    'address' in candidate &&
    'type' in candidate
  );
}

function watchMode(state) {
  // Operate on the universe vs particular based on state mode
  if (!state) return null;
  if (state.scope === 'universe') return 'OVER';
  if (state.scope === 'particular') return 'UNDER';
  return null;
}

function toggleWatch(state) {
  return { ...state, scope: state.scope === 'universe' ? 'particular' : 'universe' };
}

module.exports = {
  TENETS,
  TENET_TEXT,
  isCell,
  watchMode,
  toggleWatch,
};
