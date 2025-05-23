import { IDerivationState_, IObservable, IDerivation, Lambda } from "../internal";
export declare const $mobx: unique symbol;
export interface IAtom extends IObservable {
    reportObserved(): boolean;
    reportChanged(): void;
}
export declare class Atom implements IAtom {
    name_: string;
    private static readonly isBeingObservedMask_;
    private static readonly isPendingUnobservationMask_;
    private static readonly diffValueMask_;
    private flags_;
    observers_: Set<IDerivation>;
    lastAccessedBy_: number;
    lowestObserverState_: IDerivationState_;
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    constructor(name_?: string);
    get isBeingObserved(): boolean;
    set isBeingObserved(newValue: boolean);
    get isPendingUnobservation(): boolean;
    set isPendingUnobservation(newValue: boolean);
    get diffValue(): 0 | 1;
    set diffValue(newValue: 0 | 1);
    onBOL: Set<Lambda> | undefined;
    onBUOL: Set<Lambda> | undefined;
    onBO(): void;
    onBUO(): void;
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    reportObserved(): boolean;
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    reportChanged(): void;
    toString(): string;
}
export declare const isAtom: (x: any) => x is Atom;
export declare function createAtom(name: string, onBecomeObservedHandler?: () => void, onBecomeUnobservedHandler?: () => void): IAtom;
