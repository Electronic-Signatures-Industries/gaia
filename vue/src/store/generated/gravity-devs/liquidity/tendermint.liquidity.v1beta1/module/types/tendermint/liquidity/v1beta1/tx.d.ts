import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../../../cosmos_proto/coin";
export declare const protobufPackage = "tendermint.liquidity.v1beta1";
/**
 * MsgCreatePool defines an sdk.Msg type that supports submitting a create liquidity pool tx.
 *
 * See: https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgCreatePool {
    poolCreatorAddress: string;
    /** id of the target pool type, must match the value in the pool. Only pool-type-id 1 is supported. */
    poolTypeId: number;
    /** reserve coin pair of the pool to deposit. */
    depositCoins: Coin[];
}
/** MsgCreatePoolResponse defines the Msg/CreatePool response type. */
export interface MsgCreatePoolResponse {
}
/**
 * `MsgDepositWithinBatch defines` an `sdk.Msg` type that supports submitting
 * a deposit request to the batch of the liquidity pool.
 * Deposit is submitted to the batch of the Liquidity pool with the specified
 * `pool_id`, `deposit_coins` for reserve.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other requests.
 *
 * See: https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgDepositWithinBatch {
    depositorAddress: string;
    /** id of the target pool */
    poolId: number;
    /** reserve coin pair of the pool to deposit */
    depositCoins: Coin[];
}
/** MsgDepositWithinBatchResponse defines the Msg/DepositWithinBatch response type. */
export interface MsgDepositWithinBatchResponse {
}
/**
 * `MsgWithdrawWithinBatch` defines an `sdk.Msg` type that supports submitting
 * a withdraw request to the batch of the liquidity pool.
 * Withdraw is submitted to the batch from the Liquidity pool with the
 * specified `pool_id`, `pool_coin` of the pool.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other requests.
 *
 * See: https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgWithdrawWithinBatch {
    withdrawerAddress: string;
    /** id of the target pool */
    poolId: number;
    poolCoin: Coin | undefined;
}
/** MsgWithdrawWithinBatchResponse defines the Msg/WithdrawWithinBatch response type. */
export interface MsgWithdrawWithinBatchResponse {
}
/**
 * `MsgSwapWithinBatch` defines an sdk.Msg type that supports submitting a swap offer request to the batch of the liquidity pool.
 * Submit swap offer to the liquidity pool batch with the specified the `pool_id`, `swap_type_id`,
 * `demand_coin_denom` with the coin and the price you're offering
 * and `offer_coin_fee` must be half of offer coin amount * current `params.swap_fee_rate` and ceil for reservation to pay fees.
 * This request is stacked in the batch of the liquidity pool, is not processed
 * immediately, and is processed in the `endblock` at the same time as other requests.
 * You must request the same fields as the pool.
 * Only the default `swap_type_id` 1 is supported.
 *
 * See: https://github.com/gravity-devs/liquidity/tree/develop/doc
 * https://github.com/gravity-devs/liquidity/blob/develop/x/liquidity/spec/04_messages.md
 */
export interface MsgSwapWithinBatch {
    /** address of swap requester */
    swapRequesterAddress: string;
    /** id of swap type, must match the value in the pool. Only `swap_type_id` 1 is supported. */
    poolId: number;
    /** id of swap type. Must match the value in the pool. */
    swapTypeId: number;
    /** offer sdk.coin for the swap request, must match the denom in the pool. */
    offerCoin: Coin | undefined;
    /** denom of demand coin to be exchanged on the swap request, must match the denom in the pool. */
    demandCoinDenom: string;
    /** half of offer coin amount * params.swap_fee_rate and ceil for reservation to pay fees. */
    offerCoinFee: Coin | undefined;
    /**
     * limit order price for the order, the price is the exchange ratio of X/Y
     * where X is the amount of the first coin and Y is the amount
     * of the second coin when their denoms are sorted alphabetically.
     */
    orderPrice: string;
}
/** MsgSwapWithinBatchResponse defines the Msg/Swap response type. */
export interface MsgSwapWithinBatchResponse {
}
export declare const MsgCreatePool: {
    encode(message: MsgCreatePool, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePool;
    fromJSON(object: any): MsgCreatePool;
    toJSON(message: MsgCreatePool): unknown;
    fromPartial(object: DeepPartial<MsgCreatePool>): MsgCreatePool;
};
export declare const MsgCreatePoolResponse: {
    encode(_: MsgCreatePoolResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePoolResponse;
    fromJSON(_: any): MsgCreatePoolResponse;
    toJSON(_: MsgCreatePoolResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreatePoolResponse>): MsgCreatePoolResponse;
};
export declare const MsgDepositWithinBatch: {
    encode(message: MsgDepositWithinBatch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDepositWithinBatch;
    fromJSON(object: any): MsgDepositWithinBatch;
    toJSON(message: MsgDepositWithinBatch): unknown;
    fromPartial(object: DeepPartial<MsgDepositWithinBatch>): MsgDepositWithinBatch;
};
export declare const MsgDepositWithinBatchResponse: {
    encode(_: MsgDepositWithinBatchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDepositWithinBatchResponse;
    fromJSON(_: any): MsgDepositWithinBatchResponse;
    toJSON(_: MsgDepositWithinBatchResponse): unknown;
    fromPartial(_: DeepPartial<MsgDepositWithinBatchResponse>): MsgDepositWithinBatchResponse;
};
export declare const MsgWithdrawWithinBatch: {
    encode(message: MsgWithdrawWithinBatch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgWithdrawWithinBatch;
    fromJSON(object: any): MsgWithdrawWithinBatch;
    toJSON(message: MsgWithdrawWithinBatch): unknown;
    fromPartial(object: DeepPartial<MsgWithdrawWithinBatch>): MsgWithdrawWithinBatch;
};
export declare const MsgWithdrawWithinBatchResponse: {
    encode(_: MsgWithdrawWithinBatchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgWithdrawWithinBatchResponse;
    fromJSON(_: any): MsgWithdrawWithinBatchResponse;
    toJSON(_: MsgWithdrawWithinBatchResponse): unknown;
    fromPartial(_: DeepPartial<MsgWithdrawWithinBatchResponse>): MsgWithdrawWithinBatchResponse;
};
export declare const MsgSwapWithinBatch: {
    encode(message: MsgSwapWithinBatch, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSwapWithinBatch;
    fromJSON(object: any): MsgSwapWithinBatch;
    toJSON(message: MsgSwapWithinBatch): unknown;
    fromPartial(object: DeepPartial<MsgSwapWithinBatch>): MsgSwapWithinBatch;
};
export declare const MsgSwapWithinBatchResponse: {
    encode(_: MsgSwapWithinBatchResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSwapWithinBatchResponse;
    fromJSON(_: any): MsgSwapWithinBatchResponse;
    toJSON(_: MsgSwapWithinBatchResponse): unknown;
    fromPartial(_: DeepPartial<MsgSwapWithinBatchResponse>): MsgSwapWithinBatchResponse;
};
/** Msg defines the liquidity Msg service. */
export interface Msg {
    /** Submit a create liquidity pool message. */
    CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    /** Submit a deposit to the liquidity pool batch. */
    DepositWithinBatch(request: MsgDepositWithinBatch): Promise<MsgDepositWithinBatchResponse>;
    /** Submit a withdraw from the liquidity pool batch. */
    WithdrawWithinBatch(request: MsgWithdrawWithinBatch): Promise<MsgWithdrawWithinBatchResponse>;
    /** Submit a swap to the liquidity pool batch. */
    Swap(request: MsgSwapWithinBatch): Promise<MsgSwapWithinBatchResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreatePool(request: MsgCreatePool): Promise<MsgCreatePoolResponse>;
    DepositWithinBatch(request: MsgDepositWithinBatch): Promise<MsgDepositWithinBatchResponse>;
    WithdrawWithinBatch(request: MsgWithdrawWithinBatch): Promise<MsgWithdrawWithinBatchResponse>;
    Swap(request: MsgSwapWithinBatch): Promise<MsgSwapWithinBatchResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
