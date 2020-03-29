import Exception from '../core/Exception';
import Result from '../core/Result';
/**
 * Callback format for continuous decode scan.
 */
export declare type DecodeContinuouslyCallback = (result: Array<Result>, error?: Exception) => any;
