import type { FilesChange } from '../../files-change';
import type { Issue } from '../../issue';
declare const getIssuesWorker: (change: FilesChange, watching: boolean) => Promise<Issue[]>;
export type GetIssuesWorker = typeof getIssuesWorker;
export {};
