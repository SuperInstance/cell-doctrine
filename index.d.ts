export const TENETS: { [key: string]: string };
export const TENET_TEXT: { [key: string]: string };
export interface Cell {
  state: any;
  witness_log: any;
  behavior: any;
  address: string;
  type: string;
}
export interface State {
  scope?: 'universe' | 'particular';
}
export declare function isCell(candidate: any): candidate is Cell;
export declare function watchMode(state: State | null): 'OVER' | 'UNDER' | null;
export declare function toggleWatch(state: State): State;
