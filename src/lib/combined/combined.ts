import {ModuloFirstFindN as alexfilter} from '$lib/filters/moduloFirst';
import {SquareDances} from 'peer-filter-C00286789/src/lib/filters';

export function combinedFilter(xs: number[]): number[] {
    const afterPeer = SquareDances(xs);
    return alexfilter(afterPeer);
}