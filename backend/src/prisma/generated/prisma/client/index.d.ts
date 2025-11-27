
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model QuoteRequest
 * 
 */
export type QuoteRequest = $Result.DefaultSelection<Prisma.$QuoteRequestPayload>
/**
 * Model QuoteResponse
 * 
 */
export type QuoteResponse = $Result.DefaultSelection<Prisma.$QuoteResponsePayload>
/**
 * Model LC
 * 
 */
export type LC = $Result.DefaultSelection<Prisma.$LCPayload>
/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model ShipmentEvent
 * 
 */
export type ShipmentEvent = $Result.DefaultSelection<Prisma.$ShipmentEventPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  IMPORTER: 'IMPORTER',
  EXPORTER: 'EXPORTER',
  BANK: 'BANK',
  BROKER: 'BROKER',
  CUSTOMS: 'CUSTOMS'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const DocumentType: {
  COMMERCIAL_INVOICE: 'COMMERCIAL_INVOICE',
  PACKING_LIST: 'PACKING_LIST',
  BILL_OF_LADING: 'BILL_OF_LADING',
  AIRWAY_BILL: 'AIRWAY_BILL',
  CERTIFICATE_OF_ORIGIN: 'CERTIFICATE_OF_ORIGIN',
  INSURANCE_CERT: 'INSURANCE_CERT',
  EXPORT_DECLARATION: 'EXPORT_DECLARATION',
  IMPORT_DECLARATION: 'IMPORT_DECLARATION',
  CUSTOMS_CLEARANCE: 'CUSTOMS_CLEARANCE',
  PAYMENT_RECEIPT: 'PAYMENT_RECEIPT',
  OTHER: 'OTHER'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]


export const LCStatus: {
  APPLIED: 'APPLIED',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  ACTIVE: 'ACTIVE',
  CLOSED: 'CLOSED'
};

export type LCStatus = (typeof LCStatus)[keyof typeof LCStatus]


export const ShipmentStatus: {
  CREATED: 'CREATED',
  IN_TRANSIT: 'IN_TRANSIT',
  CUSTOMS_HOLD: 'CUSTOMS_HOLD',
  CLEARED: 'CLEARED',
  DELIVERED: 'DELIVERED'
};

export type ShipmentStatus = (typeof ShipmentStatus)[keyof typeof ShipmentStatus]


export const ShipmentEventType: {
  CUSTOMS_CHECK: 'CUSTOMS_CHECK',
  DOCUMENT_VERIFIED: 'DOCUMENT_VERIFIED',
  RELEASED: 'RELEASED',
  DELAYED: 'DELAYED',
  ARRIVED: 'ARRIVED'
};

export type ShipmentEventType = (typeof ShipmentEventType)[keyof typeof ShipmentEventType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

export type LCStatus = $Enums.LCStatus

export const LCStatus: typeof $Enums.LCStatus

export type ShipmentStatus = $Enums.ShipmentStatus

export const ShipmentStatus: typeof $Enums.ShipmentStatus

export type ShipmentEventType = $Enums.ShipmentEventType

export const ShipmentEventType: typeof $Enums.ShipmentEventType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quoteRequest`: Exposes CRUD operations for the **QuoteRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuoteRequests
    * const quoteRequests = await prisma.quoteRequest.findMany()
    * ```
    */
  get quoteRequest(): Prisma.QuoteRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quoteResponse`: Exposes CRUD operations for the **QuoteResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuoteResponses
    * const quoteResponses = await prisma.quoteResponse.findMany()
    * ```
    */
  get quoteResponse(): Prisma.QuoteResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lC`: Exposes CRUD operations for the **LC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LCS
    * const lCS = await prisma.lC.findMany()
    * ```
    */
  get lC(): Prisma.LCDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentEvent`: Exposes CRUD operations for the **ShipmentEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentEvents
    * const shipmentEvents = await prisma.shipmentEvent.findMany()
    * ```
    */
  get shipmentEvent(): Prisma.ShipmentEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.0.1
   * Query Engine version: f09f2815f091dbba658cdcd2264306d88bb5bda6
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Service: 'Service',
    QuoteRequest: 'QuoteRequest',
    QuoteResponse: 'QuoteResponse',
    LC: 'LC',
    Shipment: 'Shipment',
    ShipmentEvent: 'ShipmentEvent',
    Document: 'Document',
    Notification: 'Notification',
    RefreshToken: 'RefreshToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "service" | "quoteRequest" | "quoteResponse" | "lC" | "shipment" | "shipmentEvent" | "document" | "notification" | "refreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      QuoteRequest: {
        payload: Prisma.$QuoteRequestPayload<ExtArgs>
        fields: Prisma.QuoteRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          findFirst: {
            args: Prisma.QuoteRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          findMany: {
            args: Prisma.QuoteRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>[]
          }
          create: {
            args: Prisma.QuoteRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          createMany: {
            args: Prisma.QuoteRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuoteRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>[]
          }
          delete: {
            args: Prisma.QuoteRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          update: {
            args: Prisma.QuoteRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          deleteMany: {
            args: Prisma.QuoteRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuoteRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>[]
          }
          upsert: {
            args: Prisma.QuoteRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteRequestPayload>
          }
          aggregate: {
            args: Prisma.QuoteRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuoteRequest>
          }
          groupBy: {
            args: Prisma.QuoteRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteRequestCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteRequestCountAggregateOutputType> | number
          }
        }
      }
      QuoteResponse: {
        payload: Prisma.$QuoteResponsePayload<ExtArgs>
        fields: Prisma.QuoteResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuoteResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuoteResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteResponsePayload>
          }
          findFirst: {
            args: Prisma.QuoteResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuoteResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteResponsePayload>
          }
          findMany: {
            args: Prisma.QuoteResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteResponsePayload>[]
          }
          create: {
            args: Prisma.QuoteResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteResponsePayload>
          }
          createMany: {
            args: Prisma.QuoteResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuoteResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteResponsePayload>[]
          }
          delete: {
            args: Prisma.QuoteResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteResponsePayload>
          }
          update: {
            args: Prisma.QuoteResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteResponsePayload>
          }
          deleteMany: {
            args: Prisma.QuoteResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuoteResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuoteResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteResponsePayload>[]
          }
          upsert: {
            args: Prisma.QuoteResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuoteResponsePayload>
          }
          aggregate: {
            args: Prisma.QuoteResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuoteResponse>
          }
          groupBy: {
            args: Prisma.QuoteResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuoteResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuoteResponseCountArgs<ExtArgs>
            result: $Utils.Optional<QuoteResponseCountAggregateOutputType> | number
          }
        }
      }
      LC: {
        payload: Prisma.$LCPayload<ExtArgs>
        fields: Prisma.LCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LCPayload>
          }
          findFirst: {
            args: Prisma.LCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LCPayload>
          }
          findMany: {
            args: Prisma.LCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LCPayload>[]
          }
          create: {
            args: Prisma.LCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LCPayload>
          }
          createMany: {
            args: Prisma.LCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LCCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LCPayload>[]
          }
          delete: {
            args: Prisma.LCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LCPayload>
          }
          update: {
            args: Prisma.LCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LCPayload>
          }
          deleteMany: {
            args: Prisma.LCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LCUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LCPayload>[]
          }
          upsert: {
            args: Prisma.LCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LCPayload>
          }
          aggregate: {
            args: Prisma.LCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLC>
          }
          groupBy: {
            args: Prisma.LCGroupByArgs<ExtArgs>
            result: $Utils.Optional<LCGroupByOutputType>[]
          }
          count: {
            args: Prisma.LCCountArgs<ExtArgs>
            result: $Utils.Optional<LCCountAggregateOutputType> | number
          }
        }
      }
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      ShipmentEvent: {
        payload: Prisma.$ShipmentEventPayload<ExtArgs>
        fields: Prisma.ShipmentEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>
          }
          findFirst: {
            args: Prisma.ShipmentEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>
          }
          findMany: {
            args: Prisma.ShipmentEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>[]
          }
          create: {
            args: Prisma.ShipmentEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>
          }
          createMany: {
            args: Prisma.ShipmentEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>[]
          }
          delete: {
            args: Prisma.ShipmentEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>
          }
          update: {
            args: Prisma.ShipmentEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentEventPayload>
          }
          aggregate: {
            args: Prisma.ShipmentEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentEvent>
          }
          groupBy: {
            args: Prisma.ShipmentEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentEventCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentEventCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    service?: ServiceOmit
    quoteRequest?: QuoteRequestOmit
    quoteResponse?: QuoteResponseOmit
    lC?: LCOmit
    shipment?: ShipmentOmit
    shipmentEvent?: ShipmentEventOmit
    document?: DocumentOmit
    notification?: NotificationOmit
    refreshToken?: RefreshTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    uploadedDocuments: number
    verifiedDocuments: number
    services: number
    quoteRequests: number
    quoteResponses: number
    lettersOfCreditAsImporter: number
    lettersOfCreditAsExporter: number
    lettersOfCreditAsBank: number
    shipmentsAsImporter: number
    shipmentsAsExporter: number
    shipmentsAsBroker: number
    shipmentEvents: number
    notifications: number
    refreshTokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedDocuments?: boolean | UserCountOutputTypeCountUploadedDocumentsArgs
    verifiedDocuments?: boolean | UserCountOutputTypeCountVerifiedDocumentsArgs
    services?: boolean | UserCountOutputTypeCountServicesArgs
    quoteRequests?: boolean | UserCountOutputTypeCountQuoteRequestsArgs
    quoteResponses?: boolean | UserCountOutputTypeCountQuoteResponsesArgs
    lettersOfCreditAsImporter?: boolean | UserCountOutputTypeCountLettersOfCreditAsImporterArgs
    lettersOfCreditAsExporter?: boolean | UserCountOutputTypeCountLettersOfCreditAsExporterArgs
    lettersOfCreditAsBank?: boolean | UserCountOutputTypeCountLettersOfCreditAsBankArgs
    shipmentsAsImporter?: boolean | UserCountOutputTypeCountShipmentsAsImporterArgs
    shipmentsAsExporter?: boolean | UserCountOutputTypeCountShipmentsAsExporterArgs
    shipmentsAsBroker?: boolean | UserCountOutputTypeCountShipmentsAsBrokerArgs
    shipmentEvents?: boolean | UserCountOutputTypeCountShipmentEventsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUploadedDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVerifiedDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuoteRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuoteResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteResponseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLettersOfCreditAsImporterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LCWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLettersOfCreditAsExporterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LCWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLettersOfCreditAsBankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LCWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShipmentsAsImporterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShipmentsAsExporterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShipmentsAsBrokerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountShipmentEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    shipments: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | ServiceCountOutputTypeCountShipmentsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }


  /**
   * Count Type QuoteRequestCountOutputType
   */

  export type QuoteRequestCountOutputType = {
    responses: number
  }

  export type QuoteRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | QuoteRequestCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * QuoteRequestCountOutputType without action
   */
  export type QuoteRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequestCountOutputType
     */
    select?: QuoteRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuoteRequestCountOutputType without action
   */
  export type QuoteRequestCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteResponseWhereInput
  }


  /**
   * Count Type LCCountOutputType
   */

  export type LCCountOutputType = {
    documents: number
  }

  export type LCCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | LCCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * LCCountOutputType without action
   */
  export type LCCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LCCountOutputType
     */
    select?: LCCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LCCountOutputType without action
   */
  export type LCCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Count Type ShipmentCountOutputType
   */

  export type ShipmentCountOutputType = {
    documents: number
    events: number
  }

  export type ShipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | ShipmentCountOutputTypeCountDocumentsArgs
    events?: boolean | ShipmentCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCountOutputType
     */
    select?: ShipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    role: $Enums.UserRole | null
    email: string | null
    passwordHash: string | null
    companyName: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    role: $Enums.UserRole | null
    email: string | null
    passwordHash: string | null
    companyName: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    email: number
    passwordHash: number
    companyName: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    role?: true
    email?: true
    passwordHash?: true
    companyName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    email?: true
    passwordHash?: true
    companyName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    email?: true
    passwordHash?: true
    companyName?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    email?: boolean
    passwordHash?: boolean
    companyName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uploadedDocuments?: boolean | User$uploadedDocumentsArgs<ExtArgs>
    verifiedDocuments?: boolean | User$verifiedDocumentsArgs<ExtArgs>
    services?: boolean | User$servicesArgs<ExtArgs>
    quoteRequests?: boolean | User$quoteRequestsArgs<ExtArgs>
    quoteResponses?: boolean | User$quoteResponsesArgs<ExtArgs>
    lettersOfCreditAsImporter?: boolean | User$lettersOfCreditAsImporterArgs<ExtArgs>
    lettersOfCreditAsExporter?: boolean | User$lettersOfCreditAsExporterArgs<ExtArgs>
    lettersOfCreditAsBank?: boolean | User$lettersOfCreditAsBankArgs<ExtArgs>
    shipmentsAsImporter?: boolean | User$shipmentsAsImporterArgs<ExtArgs>
    shipmentsAsExporter?: boolean | User$shipmentsAsExporterArgs<ExtArgs>
    shipmentsAsBroker?: boolean | User$shipmentsAsBrokerArgs<ExtArgs>
    shipmentEvents?: boolean | User$shipmentEventsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    email?: boolean
    passwordHash?: boolean
    companyName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    email?: boolean
    passwordHash?: boolean
    companyName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    email?: boolean
    passwordHash?: boolean
    companyName?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "email" | "passwordHash" | "companyName" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedDocuments?: boolean | User$uploadedDocumentsArgs<ExtArgs>
    verifiedDocuments?: boolean | User$verifiedDocumentsArgs<ExtArgs>
    services?: boolean | User$servicesArgs<ExtArgs>
    quoteRequests?: boolean | User$quoteRequestsArgs<ExtArgs>
    quoteResponses?: boolean | User$quoteResponsesArgs<ExtArgs>
    lettersOfCreditAsImporter?: boolean | User$lettersOfCreditAsImporterArgs<ExtArgs>
    lettersOfCreditAsExporter?: boolean | User$lettersOfCreditAsExporterArgs<ExtArgs>
    lettersOfCreditAsBank?: boolean | User$lettersOfCreditAsBankArgs<ExtArgs>
    shipmentsAsImporter?: boolean | User$shipmentsAsImporterArgs<ExtArgs>
    shipmentsAsExporter?: boolean | User$shipmentsAsExporterArgs<ExtArgs>
    shipmentsAsBroker?: boolean | User$shipmentsAsBrokerArgs<ExtArgs>
    shipmentEvents?: boolean | User$shipmentEventsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      uploadedDocuments: Prisma.$DocumentPayload<ExtArgs>[]
      verifiedDocuments: Prisma.$DocumentPayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
      quoteRequests: Prisma.$QuoteRequestPayload<ExtArgs>[]
      quoteResponses: Prisma.$QuoteResponsePayload<ExtArgs>[]
      lettersOfCreditAsImporter: Prisma.$LCPayload<ExtArgs>[]
      lettersOfCreditAsExporter: Prisma.$LCPayload<ExtArgs>[]
      lettersOfCreditAsBank: Prisma.$LCPayload<ExtArgs>[]
      shipmentsAsImporter: Prisma.$ShipmentPayload<ExtArgs>[]
      shipmentsAsExporter: Prisma.$ShipmentPayload<ExtArgs>[]
      shipmentsAsBroker: Prisma.$ShipmentPayload<ExtArgs>[]
      shipmentEvents: Prisma.$ShipmentEventPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.UserRole
      email: string
      passwordHash: string
      companyName: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploadedDocuments<T extends User$uploadedDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, User$uploadedDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    verifiedDocuments<T extends User$verifiedDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, User$verifiedDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends User$servicesArgs<ExtArgs> = {}>(args?: Subset<T, User$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quoteRequests<T extends User$quoteRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$quoteRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quoteResponses<T extends User$quoteResponsesArgs<ExtArgs> = {}>(args?: Subset<T, User$quoteResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lettersOfCreditAsImporter<T extends User$lettersOfCreditAsImporterArgs<ExtArgs> = {}>(args?: Subset<T, User$lettersOfCreditAsImporterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lettersOfCreditAsExporter<T extends User$lettersOfCreditAsExporterArgs<ExtArgs> = {}>(args?: Subset<T, User$lettersOfCreditAsExporterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lettersOfCreditAsBank<T extends User$lettersOfCreditAsBankArgs<ExtArgs> = {}>(args?: Subset<T, User$lettersOfCreditAsBankArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipmentsAsImporter<T extends User$shipmentsAsImporterArgs<ExtArgs> = {}>(args?: Subset<T, User$shipmentsAsImporterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipmentsAsExporter<T extends User$shipmentsAsExporterArgs<ExtArgs> = {}>(args?: Subset<T, User$shipmentsAsExporterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipmentsAsBroker<T extends User$shipmentsAsBrokerArgs<ExtArgs> = {}>(args?: Subset<T, User$shipmentsAsBrokerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipmentEvents<T extends User$shipmentEventsArgs<ExtArgs> = {}>(args?: Subset<T, User$shipmentEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.uploadedDocuments
   */
  export type User$uploadedDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User.verifiedDocuments
   */
  export type User$verifiedDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * User.services
   */
  export type User$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * User.quoteRequests
   */
  export type User$quoteRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestInclude<ExtArgs> | null
    where?: QuoteRequestWhereInput
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    cursor?: QuoteRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteRequestScalarFieldEnum | QuoteRequestScalarFieldEnum[]
  }

  /**
   * User.quoteResponses
   */
  export type User$quoteResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseInclude<ExtArgs> | null
    where?: QuoteResponseWhereInput
    orderBy?: QuoteResponseOrderByWithRelationInput | QuoteResponseOrderByWithRelationInput[]
    cursor?: QuoteResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteResponseScalarFieldEnum | QuoteResponseScalarFieldEnum[]
  }

  /**
   * User.lettersOfCreditAsImporter
   */
  export type User$lettersOfCreditAsImporterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    where?: LCWhereInput
    orderBy?: LCOrderByWithRelationInput | LCOrderByWithRelationInput[]
    cursor?: LCWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LCScalarFieldEnum | LCScalarFieldEnum[]
  }

  /**
   * User.lettersOfCreditAsExporter
   */
  export type User$lettersOfCreditAsExporterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    where?: LCWhereInput
    orderBy?: LCOrderByWithRelationInput | LCOrderByWithRelationInput[]
    cursor?: LCWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LCScalarFieldEnum | LCScalarFieldEnum[]
  }

  /**
   * User.lettersOfCreditAsBank
   */
  export type User$lettersOfCreditAsBankArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    where?: LCWhereInput
    orderBy?: LCOrderByWithRelationInput | LCOrderByWithRelationInput[]
    cursor?: LCWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LCScalarFieldEnum | LCScalarFieldEnum[]
  }

  /**
   * User.shipmentsAsImporter
   */
  export type User$shipmentsAsImporterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * User.shipmentsAsExporter
   */
  export type User$shipmentsAsExporterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * User.shipmentsAsBroker
   */
  export type User$shipmentsAsBrokerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * User.shipmentEvents
   */
  export type User$shipmentEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    where?: ShipmentEventWhereInput
    orderBy?: ShipmentEventOrderByWithRelationInput | ShipmentEventOrderByWithRelationInput[]
    cursor?: ShipmentEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentEventScalarFieldEnum | ShipmentEventScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    price: number | null
  }

  export type ServiceSumAggregateOutputType = {
    price: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    providerId: string | null
    createdAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    providerId: string | null
    createdAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    providerId: number
    createdAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    price?: true
  }

  export type ServiceSumAggregateInputType = {
    price?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    providerId?: true
    createdAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    providerId?: true
    createdAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    providerId?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: number
    providerId: string
    createdAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    providerId?: boolean
    createdAt?: boolean
    provider?: boolean | UserDefaultArgs<ExtArgs>
    shipments?: boolean | Service$shipmentsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    providerId?: boolean
    createdAt?: boolean
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    providerId?: boolean
    createdAt?: boolean
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    providerId?: boolean
    createdAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "providerId" | "createdAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | UserDefaultArgs<ExtArgs>
    shipments?: boolean | Service$shipmentsArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      provider: Prisma.$UserPayload<ExtArgs>
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: number
      providerId: string
      createdAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shipments<T extends Service$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Service$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly providerId: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.shipments
   */
  export type Service$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model QuoteRequest
   */

  export type AggregateQuoteRequest = {
    _count: QuoteRequestCountAggregateOutputType | null
    _avg: QuoteRequestAvgAggregateOutputType | null
    _sum: QuoteRequestSumAggregateOutputType | null
    _min: QuoteRequestMinAggregateOutputType | null
    _max: QuoteRequestMaxAggregateOutputType | null
  }

  export type QuoteRequestAvgAggregateOutputType = {
    quantity: number | null
  }

  export type QuoteRequestSumAggregateOutputType = {
    quantity: number | null
  }

  export type QuoteRequestMinAggregateOutputType = {
    id: string | null
    importerId: string | null
    productName: string | null
    quantity: number | null
    unit: string | null
    incoterm: string | null
    originCountry: string | null
    destCountry: string | null
    createdAt: Date | null
  }

  export type QuoteRequestMaxAggregateOutputType = {
    id: string | null
    importerId: string | null
    productName: string | null
    quantity: number | null
    unit: string | null
    incoterm: string | null
    originCountry: string | null
    destCountry: string | null
    createdAt: Date | null
  }

  export type QuoteRequestCountAggregateOutputType = {
    id: number
    importerId: number
    productName: number
    quantity: number
    unit: number
    incoterm: number
    originCountry: number
    destCountry: number
    createdAt: number
    _all: number
  }


  export type QuoteRequestAvgAggregateInputType = {
    quantity?: true
  }

  export type QuoteRequestSumAggregateInputType = {
    quantity?: true
  }

  export type QuoteRequestMinAggregateInputType = {
    id?: true
    importerId?: true
    productName?: true
    quantity?: true
    unit?: true
    incoterm?: true
    originCountry?: true
    destCountry?: true
    createdAt?: true
  }

  export type QuoteRequestMaxAggregateInputType = {
    id?: true
    importerId?: true
    productName?: true
    quantity?: true
    unit?: true
    incoterm?: true
    originCountry?: true
    destCountry?: true
    createdAt?: true
  }

  export type QuoteRequestCountAggregateInputType = {
    id?: true
    importerId?: true
    productName?: true
    quantity?: true
    unit?: true
    incoterm?: true
    originCountry?: true
    destCountry?: true
    createdAt?: true
    _all?: true
  }

  export type QuoteRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteRequest to aggregate.
     */
    where?: QuoteRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteRequests to fetch.
     */
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuoteRequests
    **/
    _count?: true | QuoteRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuoteRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuoteRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteRequestMaxAggregateInputType
  }

  export type GetQuoteRequestAggregateType<T extends QuoteRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateQuoteRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuoteRequest[P]>
      : GetScalarType<T[P], AggregateQuoteRequest[P]>
  }




  export type QuoteRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteRequestWhereInput
    orderBy?: QuoteRequestOrderByWithAggregationInput | QuoteRequestOrderByWithAggregationInput[]
    by: QuoteRequestScalarFieldEnum[] | QuoteRequestScalarFieldEnum
    having?: QuoteRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteRequestCountAggregateInputType | true
    _avg?: QuoteRequestAvgAggregateInputType
    _sum?: QuoteRequestSumAggregateInputType
    _min?: QuoteRequestMinAggregateInputType
    _max?: QuoteRequestMaxAggregateInputType
  }

  export type QuoteRequestGroupByOutputType = {
    id: string
    importerId: string
    productName: string
    quantity: number
    unit: string | null
    incoterm: string | null
    originCountry: string | null
    destCountry: string | null
    createdAt: Date
    _count: QuoteRequestCountAggregateOutputType | null
    _avg: QuoteRequestAvgAggregateOutputType | null
    _sum: QuoteRequestSumAggregateOutputType | null
    _min: QuoteRequestMinAggregateOutputType | null
    _max: QuoteRequestMaxAggregateOutputType | null
  }

  type GetQuoteRequestGroupByPayload<T extends QuoteRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteRequestGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteRequestGroupByOutputType[P]>
        }
      >
    >


  export type QuoteRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    importerId?: boolean
    productName?: boolean
    quantity?: boolean
    unit?: boolean
    incoterm?: boolean
    originCountry?: boolean
    destCountry?: boolean
    createdAt?: boolean
    importer?: boolean | UserDefaultArgs<ExtArgs>
    responses?: boolean | QuoteRequest$responsesArgs<ExtArgs>
    _count?: boolean | QuoteRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteRequest"]>

  export type QuoteRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    importerId?: boolean
    productName?: boolean
    quantity?: boolean
    unit?: boolean
    incoterm?: boolean
    originCountry?: boolean
    destCountry?: boolean
    createdAt?: boolean
    importer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteRequest"]>

  export type QuoteRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    importerId?: boolean
    productName?: boolean
    quantity?: boolean
    unit?: boolean
    incoterm?: boolean
    originCountry?: boolean
    destCountry?: boolean
    createdAt?: boolean
    importer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteRequest"]>

  export type QuoteRequestSelectScalar = {
    id?: boolean
    importerId?: boolean
    productName?: boolean
    quantity?: boolean
    unit?: boolean
    incoterm?: boolean
    originCountry?: boolean
    destCountry?: boolean
    createdAt?: boolean
  }

  export type QuoteRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "importerId" | "productName" | "quantity" | "unit" | "incoterm" | "originCountry" | "destCountry" | "createdAt", ExtArgs["result"]["quoteRequest"]>
  export type QuoteRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importer?: boolean | UserDefaultArgs<ExtArgs>
    responses?: boolean | QuoteRequest$responsesArgs<ExtArgs>
    _count?: boolean | QuoteRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuoteRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuoteRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuoteRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuoteRequest"
    objects: {
      importer: Prisma.$UserPayload<ExtArgs>
      responses: Prisma.$QuoteResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      importerId: string
      productName: string
      quantity: number
      unit: string | null
      incoterm: string | null
      originCountry: string | null
      destCountry: string | null
      createdAt: Date
    }, ExtArgs["result"]["quoteRequest"]>
    composites: {}
  }

  type QuoteRequestGetPayload<S extends boolean | null | undefined | QuoteRequestDefaultArgs> = $Result.GetResult<Prisma.$QuoteRequestPayload, S>

  type QuoteRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuoteRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuoteRequestCountAggregateInputType | true
    }

  export interface QuoteRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuoteRequest'], meta: { name: 'QuoteRequest' } }
    /**
     * Find zero or one QuoteRequest that matches the filter.
     * @param {QuoteRequestFindUniqueArgs} args - Arguments to find a QuoteRequest
     * @example
     * // Get one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteRequestFindUniqueArgs>(args: SelectSubset<T, QuoteRequestFindUniqueArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuoteRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteRequestFindUniqueOrThrowArgs} args - Arguments to find a QuoteRequest
     * @example
     * // Get one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestFindFirstArgs} args - Arguments to find a QuoteRequest
     * @example
     * // Get one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteRequestFindFirstArgs>(args?: SelectSubset<T, QuoteRequestFindFirstArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestFindFirstOrThrowArgs} args - Arguments to find a QuoteRequest
     * @example
     * // Get one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuoteRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuoteRequests
     * const quoteRequests = await prisma.quoteRequest.findMany()
     * 
     * // Get first 10 QuoteRequests
     * const quoteRequests = await prisma.quoteRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteRequestWithIdOnly = await prisma.quoteRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteRequestFindManyArgs>(args?: SelectSubset<T, QuoteRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuoteRequest.
     * @param {QuoteRequestCreateArgs} args - Arguments to create a QuoteRequest.
     * @example
     * // Create one QuoteRequest
     * const QuoteRequest = await prisma.quoteRequest.create({
     *   data: {
     *     // ... data to create a QuoteRequest
     *   }
     * })
     * 
     */
    create<T extends QuoteRequestCreateArgs>(args: SelectSubset<T, QuoteRequestCreateArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuoteRequests.
     * @param {QuoteRequestCreateManyArgs} args - Arguments to create many QuoteRequests.
     * @example
     * // Create many QuoteRequests
     * const quoteRequest = await prisma.quoteRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteRequestCreateManyArgs>(args?: SelectSubset<T, QuoteRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuoteRequests and returns the data saved in the database.
     * @param {QuoteRequestCreateManyAndReturnArgs} args - Arguments to create many QuoteRequests.
     * @example
     * // Create many QuoteRequests
     * const quoteRequest = await prisma.quoteRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuoteRequests and only return the `id`
     * const quoteRequestWithIdOnly = await prisma.quoteRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuoteRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, QuoteRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuoteRequest.
     * @param {QuoteRequestDeleteArgs} args - Arguments to delete one QuoteRequest.
     * @example
     * // Delete one QuoteRequest
     * const QuoteRequest = await prisma.quoteRequest.delete({
     *   where: {
     *     // ... filter to delete one QuoteRequest
     *   }
     * })
     * 
     */
    delete<T extends QuoteRequestDeleteArgs>(args: SelectSubset<T, QuoteRequestDeleteArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuoteRequest.
     * @param {QuoteRequestUpdateArgs} args - Arguments to update one QuoteRequest.
     * @example
     * // Update one QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteRequestUpdateArgs>(args: SelectSubset<T, QuoteRequestUpdateArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuoteRequests.
     * @param {QuoteRequestDeleteManyArgs} args - Arguments to filter QuoteRequests to delete.
     * @example
     * // Delete a few QuoteRequests
     * const { count } = await prisma.quoteRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteRequestDeleteManyArgs>(args?: SelectSubset<T, QuoteRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuoteRequests
     * const quoteRequest = await prisma.quoteRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteRequestUpdateManyArgs>(args: SelectSubset<T, QuoteRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteRequests and returns the data updated in the database.
     * @param {QuoteRequestUpdateManyAndReturnArgs} args - Arguments to update many QuoteRequests.
     * @example
     * // Update many QuoteRequests
     * const quoteRequest = await prisma.quoteRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuoteRequests and only return the `id`
     * const quoteRequestWithIdOnly = await prisma.quoteRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuoteRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, QuoteRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuoteRequest.
     * @param {QuoteRequestUpsertArgs} args - Arguments to update or create a QuoteRequest.
     * @example
     * // Update or create a QuoteRequest
     * const quoteRequest = await prisma.quoteRequest.upsert({
     *   create: {
     *     // ... data to create a QuoteRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuoteRequest we want to update
     *   }
     * })
     */
    upsert<T extends QuoteRequestUpsertArgs>(args: SelectSubset<T, QuoteRequestUpsertArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuoteRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestCountArgs} args - Arguments to filter QuoteRequests to count.
     * @example
     * // Count the number of QuoteRequests
     * const count = await prisma.quoteRequest.count({
     *   where: {
     *     // ... the filter for the QuoteRequests we want to count
     *   }
     * })
    **/
    count<T extends QuoteRequestCountArgs>(
      args?: Subset<T, QuoteRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuoteRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuoteRequestAggregateArgs>(args: Subset<T, QuoteRequestAggregateArgs>): Prisma.PrismaPromise<GetQuoteRequestAggregateType<T>>

    /**
     * Group by QuoteRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuoteRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteRequestGroupByArgs['orderBy'] }
        : { orderBy?: QuoteRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuoteRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuoteRequest model
   */
  readonly fields: QuoteRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuoteRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    importer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responses<T extends QuoteRequest$responsesArgs<ExtArgs> = {}>(args?: Subset<T, QuoteRequest$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuoteRequest model
   */
  interface QuoteRequestFieldRefs {
    readonly id: FieldRef<"QuoteRequest", 'String'>
    readonly importerId: FieldRef<"QuoteRequest", 'String'>
    readonly productName: FieldRef<"QuoteRequest", 'String'>
    readonly quantity: FieldRef<"QuoteRequest", 'Int'>
    readonly unit: FieldRef<"QuoteRequest", 'String'>
    readonly incoterm: FieldRef<"QuoteRequest", 'String'>
    readonly originCountry: FieldRef<"QuoteRequest", 'String'>
    readonly destCountry: FieldRef<"QuoteRequest", 'String'>
    readonly createdAt: FieldRef<"QuoteRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuoteRequest findUnique
   */
  export type QuoteRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestInclude<ExtArgs> | null
    /**
     * Filter, which QuoteRequest to fetch.
     */
    where: QuoteRequestWhereUniqueInput
  }

  /**
   * QuoteRequest findUniqueOrThrow
   */
  export type QuoteRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestInclude<ExtArgs> | null
    /**
     * Filter, which QuoteRequest to fetch.
     */
    where: QuoteRequestWhereUniqueInput
  }

  /**
   * QuoteRequest findFirst
   */
  export type QuoteRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestInclude<ExtArgs> | null
    /**
     * Filter, which QuoteRequest to fetch.
     */
    where?: QuoteRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteRequests to fetch.
     */
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteRequests.
     */
    cursor?: QuoteRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteRequests.
     */
    distinct?: QuoteRequestScalarFieldEnum | QuoteRequestScalarFieldEnum[]
  }

  /**
   * QuoteRequest findFirstOrThrow
   */
  export type QuoteRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestInclude<ExtArgs> | null
    /**
     * Filter, which QuoteRequest to fetch.
     */
    where?: QuoteRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteRequests to fetch.
     */
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteRequests.
     */
    cursor?: QuoteRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteRequests.
     */
    distinct?: QuoteRequestScalarFieldEnum | QuoteRequestScalarFieldEnum[]
  }

  /**
   * QuoteRequest findMany
   */
  export type QuoteRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestInclude<ExtArgs> | null
    /**
     * Filter, which QuoteRequests to fetch.
     */
    where?: QuoteRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteRequests to fetch.
     */
    orderBy?: QuoteRequestOrderByWithRelationInput | QuoteRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuoteRequests.
     */
    cursor?: QuoteRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteRequests.
     */
    skip?: number
    distinct?: QuoteRequestScalarFieldEnum | QuoteRequestScalarFieldEnum[]
  }

  /**
   * QuoteRequest create
   */
  export type QuoteRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a QuoteRequest.
     */
    data: XOR<QuoteRequestCreateInput, QuoteRequestUncheckedCreateInput>
  }

  /**
   * QuoteRequest createMany
   */
  export type QuoteRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuoteRequests.
     */
    data: QuoteRequestCreateManyInput | QuoteRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuoteRequest createManyAndReturn
   */
  export type QuoteRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * The data used to create many QuoteRequests.
     */
    data: QuoteRequestCreateManyInput | QuoteRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuoteRequest update
   */
  export type QuoteRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a QuoteRequest.
     */
    data: XOR<QuoteRequestUpdateInput, QuoteRequestUncheckedUpdateInput>
    /**
     * Choose, which QuoteRequest to update.
     */
    where: QuoteRequestWhereUniqueInput
  }

  /**
   * QuoteRequest updateMany
   */
  export type QuoteRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuoteRequests.
     */
    data: XOR<QuoteRequestUpdateManyMutationInput, QuoteRequestUncheckedUpdateManyInput>
    /**
     * Filter which QuoteRequests to update
     */
    where?: QuoteRequestWhereInput
    /**
     * Limit how many QuoteRequests to update.
     */
    limit?: number
  }

  /**
   * QuoteRequest updateManyAndReturn
   */
  export type QuoteRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * The data used to update QuoteRequests.
     */
    data: XOR<QuoteRequestUpdateManyMutationInput, QuoteRequestUncheckedUpdateManyInput>
    /**
     * Filter which QuoteRequests to update
     */
    where?: QuoteRequestWhereInput
    /**
     * Limit how many QuoteRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuoteRequest upsert
   */
  export type QuoteRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the QuoteRequest to update in case it exists.
     */
    where: QuoteRequestWhereUniqueInput
    /**
     * In case the QuoteRequest found by the `where` argument doesn't exist, create a new QuoteRequest with this data.
     */
    create: XOR<QuoteRequestCreateInput, QuoteRequestUncheckedCreateInput>
    /**
     * In case the QuoteRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteRequestUpdateInput, QuoteRequestUncheckedUpdateInput>
  }

  /**
   * QuoteRequest delete
   */
  export type QuoteRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestInclude<ExtArgs> | null
    /**
     * Filter which QuoteRequest to delete.
     */
    where: QuoteRequestWhereUniqueInput
  }

  /**
   * QuoteRequest deleteMany
   */
  export type QuoteRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteRequests to delete
     */
    where?: QuoteRequestWhereInput
    /**
     * Limit how many QuoteRequests to delete.
     */
    limit?: number
  }

  /**
   * QuoteRequest.responses
   */
  export type QuoteRequest$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseInclude<ExtArgs> | null
    where?: QuoteResponseWhereInput
    orderBy?: QuoteResponseOrderByWithRelationInput | QuoteResponseOrderByWithRelationInput[]
    cursor?: QuoteResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuoteResponseScalarFieldEnum | QuoteResponseScalarFieldEnum[]
  }

  /**
   * QuoteRequest without action
   */
  export type QuoteRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteRequest
     */
    select?: QuoteRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteRequest
     */
    omit?: QuoteRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteRequestInclude<ExtArgs> | null
  }


  /**
   * Model QuoteResponse
   */

  export type AggregateQuoteResponse = {
    _count: QuoteResponseCountAggregateOutputType | null
    _avg: QuoteResponseAvgAggregateOutputType | null
    _sum: QuoteResponseSumAggregateOutputType | null
    _min: QuoteResponseMinAggregateOutputType | null
    _max: QuoteResponseMaxAggregateOutputType | null
  }

  export type QuoteResponseAvgAggregateOutputType = {
    price: number | null
    validityDays: number | null
  }

  export type QuoteResponseSumAggregateOutputType = {
    price: number | null
    validityDays: number | null
  }

  export type QuoteResponseMinAggregateOutputType = {
    id: string | null
    quoteRequestId: string | null
    exporterId: string | null
    price: number | null
    validityDays: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type QuoteResponseMaxAggregateOutputType = {
    id: string | null
    quoteRequestId: string | null
    exporterId: string | null
    price: number | null
    validityDays: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type QuoteResponseCountAggregateOutputType = {
    id: number
    quoteRequestId: number
    exporterId: number
    price: number
    validityDays: number
    notes: number
    createdAt: number
    _all: number
  }


  export type QuoteResponseAvgAggregateInputType = {
    price?: true
    validityDays?: true
  }

  export type QuoteResponseSumAggregateInputType = {
    price?: true
    validityDays?: true
  }

  export type QuoteResponseMinAggregateInputType = {
    id?: true
    quoteRequestId?: true
    exporterId?: true
    price?: true
    validityDays?: true
    notes?: true
    createdAt?: true
  }

  export type QuoteResponseMaxAggregateInputType = {
    id?: true
    quoteRequestId?: true
    exporterId?: true
    price?: true
    validityDays?: true
    notes?: true
    createdAt?: true
  }

  export type QuoteResponseCountAggregateInputType = {
    id?: true
    quoteRequestId?: true
    exporterId?: true
    price?: true
    validityDays?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type QuoteResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteResponse to aggregate.
     */
    where?: QuoteResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteResponses to fetch.
     */
    orderBy?: QuoteResponseOrderByWithRelationInput | QuoteResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuoteResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuoteResponses
    **/
    _count?: true | QuoteResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuoteResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuoteResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuoteResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuoteResponseMaxAggregateInputType
  }

  export type GetQuoteResponseAggregateType<T extends QuoteResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateQuoteResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuoteResponse[P]>
      : GetScalarType<T[P], AggregateQuoteResponse[P]>
  }




  export type QuoteResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuoteResponseWhereInput
    orderBy?: QuoteResponseOrderByWithAggregationInput | QuoteResponseOrderByWithAggregationInput[]
    by: QuoteResponseScalarFieldEnum[] | QuoteResponseScalarFieldEnum
    having?: QuoteResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuoteResponseCountAggregateInputType | true
    _avg?: QuoteResponseAvgAggregateInputType
    _sum?: QuoteResponseSumAggregateInputType
    _min?: QuoteResponseMinAggregateInputType
    _max?: QuoteResponseMaxAggregateInputType
  }

  export type QuoteResponseGroupByOutputType = {
    id: string
    quoteRequestId: string
    exporterId: string
    price: number
    validityDays: number | null
    notes: string | null
    createdAt: Date
    _count: QuoteResponseCountAggregateOutputType | null
    _avg: QuoteResponseAvgAggregateOutputType | null
    _sum: QuoteResponseSumAggregateOutputType | null
    _min: QuoteResponseMinAggregateOutputType | null
    _max: QuoteResponseMaxAggregateOutputType | null
  }

  type GetQuoteResponseGroupByPayload<T extends QuoteResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuoteResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuoteResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuoteResponseGroupByOutputType[P]>
            : GetScalarType<T[P], QuoteResponseGroupByOutputType[P]>
        }
      >
    >


  export type QuoteResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quoteRequestId?: boolean
    exporterId?: boolean
    price?: boolean
    validityDays?: boolean
    notes?: boolean
    createdAt?: boolean
    quoteRequest?: boolean | QuoteRequestDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteResponse"]>

  export type QuoteResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quoteRequestId?: boolean
    exporterId?: boolean
    price?: boolean
    validityDays?: boolean
    notes?: boolean
    createdAt?: boolean
    quoteRequest?: boolean | QuoteRequestDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteResponse"]>

  export type QuoteResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quoteRequestId?: boolean
    exporterId?: boolean
    price?: boolean
    validityDays?: boolean
    notes?: boolean
    createdAt?: boolean
    quoteRequest?: boolean | QuoteRequestDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quoteResponse"]>

  export type QuoteResponseSelectScalar = {
    id?: boolean
    quoteRequestId?: boolean
    exporterId?: boolean
    price?: boolean
    validityDays?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type QuoteResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quoteRequestId" | "exporterId" | "price" | "validityDays" | "notes" | "createdAt", ExtArgs["result"]["quoteResponse"]>
  export type QuoteResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quoteRequest?: boolean | QuoteRequestDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuoteResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quoteRequest?: boolean | QuoteRequestDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuoteResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quoteRequest?: boolean | QuoteRequestDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuoteResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuoteResponse"
    objects: {
      quoteRequest: Prisma.$QuoteRequestPayload<ExtArgs>
      exporter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quoteRequestId: string
      exporterId: string
      price: number
      validityDays: number | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["quoteResponse"]>
    composites: {}
  }

  type QuoteResponseGetPayload<S extends boolean | null | undefined | QuoteResponseDefaultArgs> = $Result.GetResult<Prisma.$QuoteResponsePayload, S>

  type QuoteResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuoteResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuoteResponseCountAggregateInputType | true
    }

  export interface QuoteResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuoteResponse'], meta: { name: 'QuoteResponse' } }
    /**
     * Find zero or one QuoteResponse that matches the filter.
     * @param {QuoteResponseFindUniqueArgs} args - Arguments to find a QuoteResponse
     * @example
     * // Get one QuoteResponse
     * const quoteResponse = await prisma.quoteResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuoteResponseFindUniqueArgs>(args: SelectSubset<T, QuoteResponseFindUniqueArgs<ExtArgs>>): Prisma__QuoteResponseClient<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuoteResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuoteResponseFindUniqueOrThrowArgs} args - Arguments to find a QuoteResponse
     * @example
     * // Get one QuoteResponse
     * const quoteResponse = await prisma.quoteResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuoteResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, QuoteResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuoteResponseClient<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteResponseFindFirstArgs} args - Arguments to find a QuoteResponse
     * @example
     * // Get one QuoteResponse
     * const quoteResponse = await prisma.quoteResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuoteResponseFindFirstArgs>(args?: SelectSubset<T, QuoteResponseFindFirstArgs<ExtArgs>>): Prisma__QuoteResponseClient<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuoteResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteResponseFindFirstOrThrowArgs} args - Arguments to find a QuoteResponse
     * @example
     * // Get one QuoteResponse
     * const quoteResponse = await prisma.quoteResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuoteResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, QuoteResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuoteResponseClient<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuoteResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuoteResponses
     * const quoteResponses = await prisma.quoteResponse.findMany()
     * 
     * // Get first 10 QuoteResponses
     * const quoteResponses = await prisma.quoteResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quoteResponseWithIdOnly = await prisma.quoteResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuoteResponseFindManyArgs>(args?: SelectSubset<T, QuoteResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuoteResponse.
     * @param {QuoteResponseCreateArgs} args - Arguments to create a QuoteResponse.
     * @example
     * // Create one QuoteResponse
     * const QuoteResponse = await prisma.quoteResponse.create({
     *   data: {
     *     // ... data to create a QuoteResponse
     *   }
     * })
     * 
     */
    create<T extends QuoteResponseCreateArgs>(args: SelectSubset<T, QuoteResponseCreateArgs<ExtArgs>>): Prisma__QuoteResponseClient<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuoteResponses.
     * @param {QuoteResponseCreateManyArgs} args - Arguments to create many QuoteResponses.
     * @example
     * // Create many QuoteResponses
     * const quoteResponse = await prisma.quoteResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuoteResponseCreateManyArgs>(args?: SelectSubset<T, QuoteResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuoteResponses and returns the data saved in the database.
     * @param {QuoteResponseCreateManyAndReturnArgs} args - Arguments to create many QuoteResponses.
     * @example
     * // Create many QuoteResponses
     * const quoteResponse = await prisma.quoteResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuoteResponses and only return the `id`
     * const quoteResponseWithIdOnly = await prisma.quoteResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuoteResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, QuoteResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuoteResponse.
     * @param {QuoteResponseDeleteArgs} args - Arguments to delete one QuoteResponse.
     * @example
     * // Delete one QuoteResponse
     * const QuoteResponse = await prisma.quoteResponse.delete({
     *   where: {
     *     // ... filter to delete one QuoteResponse
     *   }
     * })
     * 
     */
    delete<T extends QuoteResponseDeleteArgs>(args: SelectSubset<T, QuoteResponseDeleteArgs<ExtArgs>>): Prisma__QuoteResponseClient<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuoteResponse.
     * @param {QuoteResponseUpdateArgs} args - Arguments to update one QuoteResponse.
     * @example
     * // Update one QuoteResponse
     * const quoteResponse = await prisma.quoteResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuoteResponseUpdateArgs>(args: SelectSubset<T, QuoteResponseUpdateArgs<ExtArgs>>): Prisma__QuoteResponseClient<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuoteResponses.
     * @param {QuoteResponseDeleteManyArgs} args - Arguments to filter QuoteResponses to delete.
     * @example
     * // Delete a few QuoteResponses
     * const { count } = await prisma.quoteResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuoteResponseDeleteManyArgs>(args?: SelectSubset<T, QuoteResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuoteResponses
     * const quoteResponse = await prisma.quoteResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuoteResponseUpdateManyArgs>(args: SelectSubset<T, QuoteResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuoteResponses and returns the data updated in the database.
     * @param {QuoteResponseUpdateManyAndReturnArgs} args - Arguments to update many QuoteResponses.
     * @example
     * // Update many QuoteResponses
     * const quoteResponse = await prisma.quoteResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuoteResponses and only return the `id`
     * const quoteResponseWithIdOnly = await prisma.quoteResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuoteResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, QuoteResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuoteResponse.
     * @param {QuoteResponseUpsertArgs} args - Arguments to update or create a QuoteResponse.
     * @example
     * // Update or create a QuoteResponse
     * const quoteResponse = await prisma.quoteResponse.upsert({
     *   create: {
     *     // ... data to create a QuoteResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuoteResponse we want to update
     *   }
     * })
     */
    upsert<T extends QuoteResponseUpsertArgs>(args: SelectSubset<T, QuoteResponseUpsertArgs<ExtArgs>>): Prisma__QuoteResponseClient<$Result.GetResult<Prisma.$QuoteResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuoteResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteResponseCountArgs} args - Arguments to filter QuoteResponses to count.
     * @example
     * // Count the number of QuoteResponses
     * const count = await prisma.quoteResponse.count({
     *   where: {
     *     // ... the filter for the QuoteResponses we want to count
     *   }
     * })
    **/
    count<T extends QuoteResponseCountArgs>(
      args?: Subset<T, QuoteResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuoteResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuoteResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuoteResponseAggregateArgs>(args: Subset<T, QuoteResponseAggregateArgs>): Prisma.PrismaPromise<GetQuoteResponseAggregateType<T>>

    /**
     * Group by QuoteResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuoteResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuoteResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuoteResponseGroupByArgs['orderBy'] }
        : { orderBy?: QuoteResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuoteResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuoteResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuoteResponse model
   */
  readonly fields: QuoteResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuoteResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuoteResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quoteRequest<T extends QuoteRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuoteRequestDefaultArgs<ExtArgs>>): Prisma__QuoteRequestClient<$Result.GetResult<Prisma.$QuoteRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exporter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuoteResponse model
   */
  interface QuoteResponseFieldRefs {
    readonly id: FieldRef<"QuoteResponse", 'String'>
    readonly quoteRequestId: FieldRef<"QuoteResponse", 'String'>
    readonly exporterId: FieldRef<"QuoteResponse", 'String'>
    readonly price: FieldRef<"QuoteResponse", 'Float'>
    readonly validityDays: FieldRef<"QuoteResponse", 'Int'>
    readonly notes: FieldRef<"QuoteResponse", 'String'>
    readonly createdAt: FieldRef<"QuoteResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuoteResponse findUnique
   */
  export type QuoteResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuoteResponse to fetch.
     */
    where: QuoteResponseWhereUniqueInput
  }

  /**
   * QuoteResponse findUniqueOrThrow
   */
  export type QuoteResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuoteResponse to fetch.
     */
    where: QuoteResponseWhereUniqueInput
  }

  /**
   * QuoteResponse findFirst
   */
  export type QuoteResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuoteResponse to fetch.
     */
    where?: QuoteResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteResponses to fetch.
     */
    orderBy?: QuoteResponseOrderByWithRelationInput | QuoteResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteResponses.
     */
    cursor?: QuoteResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteResponses.
     */
    distinct?: QuoteResponseScalarFieldEnum | QuoteResponseScalarFieldEnum[]
  }

  /**
   * QuoteResponse findFirstOrThrow
   */
  export type QuoteResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuoteResponse to fetch.
     */
    where?: QuoteResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteResponses to fetch.
     */
    orderBy?: QuoteResponseOrderByWithRelationInput | QuoteResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuoteResponses.
     */
    cursor?: QuoteResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuoteResponses.
     */
    distinct?: QuoteResponseScalarFieldEnum | QuoteResponseScalarFieldEnum[]
  }

  /**
   * QuoteResponse findMany
   */
  export type QuoteResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuoteResponses to fetch.
     */
    where?: QuoteResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuoteResponses to fetch.
     */
    orderBy?: QuoteResponseOrderByWithRelationInput | QuoteResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuoteResponses.
     */
    cursor?: QuoteResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuoteResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuoteResponses.
     */
    skip?: number
    distinct?: QuoteResponseScalarFieldEnum | QuoteResponseScalarFieldEnum[]
  }

  /**
   * QuoteResponse create
   */
  export type QuoteResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a QuoteResponse.
     */
    data: XOR<QuoteResponseCreateInput, QuoteResponseUncheckedCreateInput>
  }

  /**
   * QuoteResponse createMany
   */
  export type QuoteResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuoteResponses.
     */
    data: QuoteResponseCreateManyInput | QuoteResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuoteResponse createManyAndReturn
   */
  export type QuoteResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * The data used to create many QuoteResponses.
     */
    data: QuoteResponseCreateManyInput | QuoteResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuoteResponse update
   */
  export type QuoteResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a QuoteResponse.
     */
    data: XOR<QuoteResponseUpdateInput, QuoteResponseUncheckedUpdateInput>
    /**
     * Choose, which QuoteResponse to update.
     */
    where: QuoteResponseWhereUniqueInput
  }

  /**
   * QuoteResponse updateMany
   */
  export type QuoteResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuoteResponses.
     */
    data: XOR<QuoteResponseUpdateManyMutationInput, QuoteResponseUncheckedUpdateManyInput>
    /**
     * Filter which QuoteResponses to update
     */
    where?: QuoteResponseWhereInput
    /**
     * Limit how many QuoteResponses to update.
     */
    limit?: number
  }

  /**
   * QuoteResponse updateManyAndReturn
   */
  export type QuoteResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * The data used to update QuoteResponses.
     */
    data: XOR<QuoteResponseUpdateManyMutationInput, QuoteResponseUncheckedUpdateManyInput>
    /**
     * Filter which QuoteResponses to update
     */
    where?: QuoteResponseWhereInput
    /**
     * Limit how many QuoteResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuoteResponse upsert
   */
  export type QuoteResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the QuoteResponse to update in case it exists.
     */
    where: QuoteResponseWhereUniqueInput
    /**
     * In case the QuoteResponse found by the `where` argument doesn't exist, create a new QuoteResponse with this data.
     */
    create: XOR<QuoteResponseCreateInput, QuoteResponseUncheckedCreateInput>
    /**
     * In case the QuoteResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuoteResponseUpdateInput, QuoteResponseUncheckedUpdateInput>
  }

  /**
   * QuoteResponse delete
   */
  export type QuoteResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseInclude<ExtArgs> | null
    /**
     * Filter which QuoteResponse to delete.
     */
    where: QuoteResponseWhereUniqueInput
  }

  /**
   * QuoteResponse deleteMany
   */
  export type QuoteResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuoteResponses to delete
     */
    where?: QuoteResponseWhereInput
    /**
     * Limit how many QuoteResponses to delete.
     */
    limit?: number
  }

  /**
   * QuoteResponse without action
   */
  export type QuoteResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuoteResponse
     */
    select?: QuoteResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuoteResponse
     */
    omit?: QuoteResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuoteResponseInclude<ExtArgs> | null
  }


  /**
   * Model LC
   */

  export type AggregateLC = {
    _count: LCCountAggregateOutputType | null
    _avg: LCAvgAggregateOutputType | null
    _sum: LCSumAggregateOutputType | null
    _min: LCMinAggregateOutputType | null
    _max: LCMaxAggregateOutputType | null
  }

  export type LCAvgAggregateOutputType = {
    amount: number | null
  }

  export type LCSumAggregateOutputType = {
    amount: number | null
  }

  export type LCMinAggregateOutputType = {
    id: string | null
    lcNumber: string | null
    amount: number | null
    currency: string | null
    status: $Enums.LCStatus | null
    createdAt: Date | null
    importerId: string | null
    exporterId: string | null
    bankId: string | null
  }

  export type LCMaxAggregateOutputType = {
    id: string | null
    lcNumber: string | null
    amount: number | null
    currency: string | null
    status: $Enums.LCStatus | null
    createdAt: Date | null
    importerId: string | null
    exporterId: string | null
    bankId: string | null
  }

  export type LCCountAggregateOutputType = {
    id: number
    lcNumber: number
    amount: number
    currency: number
    status: number
    createdAt: number
    importerId: number
    exporterId: number
    bankId: number
    _all: number
  }


  export type LCAvgAggregateInputType = {
    amount?: true
  }

  export type LCSumAggregateInputType = {
    amount?: true
  }

  export type LCMinAggregateInputType = {
    id?: true
    lcNumber?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
    importerId?: true
    exporterId?: true
    bankId?: true
  }

  export type LCMaxAggregateInputType = {
    id?: true
    lcNumber?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
    importerId?: true
    exporterId?: true
    bankId?: true
  }

  export type LCCountAggregateInputType = {
    id?: true
    lcNumber?: true
    amount?: true
    currency?: true
    status?: true
    createdAt?: true
    importerId?: true
    exporterId?: true
    bankId?: true
    _all?: true
  }

  export type LCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LC to aggregate.
     */
    where?: LCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LCS to fetch.
     */
    orderBy?: LCOrderByWithRelationInput | LCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LCS
    **/
    _count?: true | LCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LCAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LCSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LCMaxAggregateInputType
  }

  export type GetLCAggregateType<T extends LCAggregateArgs> = {
        [P in keyof T & keyof AggregateLC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLC[P]>
      : GetScalarType<T[P], AggregateLC[P]>
  }




  export type LCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LCWhereInput
    orderBy?: LCOrderByWithAggregationInput | LCOrderByWithAggregationInput[]
    by: LCScalarFieldEnum[] | LCScalarFieldEnum
    having?: LCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LCCountAggregateInputType | true
    _avg?: LCAvgAggregateInputType
    _sum?: LCSumAggregateInputType
    _min?: LCMinAggregateInputType
    _max?: LCMaxAggregateInputType
  }

  export type LCGroupByOutputType = {
    id: string
    lcNumber: string
    amount: number
    currency: string
    status: $Enums.LCStatus
    createdAt: Date
    importerId: string
    exporterId: string
    bankId: string
    _count: LCCountAggregateOutputType | null
    _avg: LCAvgAggregateOutputType | null
    _sum: LCSumAggregateOutputType | null
    _min: LCMinAggregateOutputType | null
    _max: LCMaxAggregateOutputType | null
  }

  type GetLCGroupByPayload<T extends LCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LCGroupByOutputType[P]>
            : GetScalarType<T[P], LCGroupByOutputType[P]>
        }
      >
    >


  export type LCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcNumber?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    importerId?: boolean
    exporterId?: boolean
    bankId?: boolean
    importer?: boolean | UserDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
    bank?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | LC$documentsArgs<ExtArgs>
    _count?: boolean | LCCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lC"]>

  export type LCSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcNumber?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    importerId?: boolean
    exporterId?: boolean
    bankId?: boolean
    importer?: boolean | UserDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
    bank?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lC"]>

  export type LCSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lcNumber?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    importerId?: boolean
    exporterId?: boolean
    bankId?: boolean
    importer?: boolean | UserDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
    bank?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lC"]>

  export type LCSelectScalar = {
    id?: boolean
    lcNumber?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    createdAt?: boolean
    importerId?: boolean
    exporterId?: boolean
    bankId?: boolean
  }

  export type LCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "lcNumber" | "amount" | "currency" | "status" | "createdAt" | "importerId" | "exporterId" | "bankId", ExtArgs["result"]["lC"]>
  export type LCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importer?: boolean | UserDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
    bank?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | LC$documentsArgs<ExtArgs>
    _count?: boolean | LCCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LCIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importer?: boolean | UserDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
    bank?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LCIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importer?: boolean | UserDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
    bank?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LC"
    objects: {
      importer: Prisma.$UserPayload<ExtArgs>
      exporter: Prisma.$UserPayload<ExtArgs>
      bank: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lcNumber: string
      amount: number
      currency: string
      status: $Enums.LCStatus
      createdAt: Date
      importerId: string
      exporterId: string
      bankId: string
    }, ExtArgs["result"]["lC"]>
    composites: {}
  }

  type LCGetPayload<S extends boolean | null | undefined | LCDefaultArgs> = $Result.GetResult<Prisma.$LCPayload, S>

  type LCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LCCountAggregateInputType | true
    }

  export interface LCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LC'], meta: { name: 'LC' } }
    /**
     * Find zero or one LC that matches the filter.
     * @param {LCFindUniqueArgs} args - Arguments to find a LC
     * @example
     * // Get one LC
     * const lC = await prisma.lC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LCFindUniqueArgs>(args: SelectSubset<T, LCFindUniqueArgs<ExtArgs>>): Prisma__LCClient<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LCFindUniqueOrThrowArgs} args - Arguments to find a LC
     * @example
     * // Get one LC
     * const lC = await prisma.lC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LCFindUniqueOrThrowArgs>(args: SelectSubset<T, LCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LCClient<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LCFindFirstArgs} args - Arguments to find a LC
     * @example
     * // Get one LC
     * const lC = await prisma.lC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LCFindFirstArgs>(args?: SelectSubset<T, LCFindFirstArgs<ExtArgs>>): Prisma__LCClient<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LCFindFirstOrThrowArgs} args - Arguments to find a LC
     * @example
     * // Get one LC
     * const lC = await prisma.lC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LCFindFirstOrThrowArgs>(args?: SelectSubset<T, LCFindFirstOrThrowArgs<ExtArgs>>): Prisma__LCClient<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LCS
     * const lCS = await prisma.lC.findMany()
     * 
     * // Get first 10 LCS
     * const lCS = await prisma.lC.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lCWithIdOnly = await prisma.lC.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LCFindManyArgs>(args?: SelectSubset<T, LCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LC.
     * @param {LCCreateArgs} args - Arguments to create a LC.
     * @example
     * // Create one LC
     * const LC = await prisma.lC.create({
     *   data: {
     *     // ... data to create a LC
     *   }
     * })
     * 
     */
    create<T extends LCCreateArgs>(args: SelectSubset<T, LCCreateArgs<ExtArgs>>): Prisma__LCClient<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LCS.
     * @param {LCCreateManyArgs} args - Arguments to create many LCS.
     * @example
     * // Create many LCS
     * const lC = await prisma.lC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LCCreateManyArgs>(args?: SelectSubset<T, LCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LCS and returns the data saved in the database.
     * @param {LCCreateManyAndReturnArgs} args - Arguments to create many LCS.
     * @example
     * // Create many LCS
     * const lC = await prisma.lC.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LCS and only return the `id`
     * const lCWithIdOnly = await prisma.lC.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LCCreateManyAndReturnArgs>(args?: SelectSubset<T, LCCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LC.
     * @param {LCDeleteArgs} args - Arguments to delete one LC.
     * @example
     * // Delete one LC
     * const LC = await prisma.lC.delete({
     *   where: {
     *     // ... filter to delete one LC
     *   }
     * })
     * 
     */
    delete<T extends LCDeleteArgs>(args: SelectSubset<T, LCDeleteArgs<ExtArgs>>): Prisma__LCClient<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LC.
     * @param {LCUpdateArgs} args - Arguments to update one LC.
     * @example
     * // Update one LC
     * const lC = await prisma.lC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LCUpdateArgs>(args: SelectSubset<T, LCUpdateArgs<ExtArgs>>): Prisma__LCClient<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LCS.
     * @param {LCDeleteManyArgs} args - Arguments to filter LCS to delete.
     * @example
     * // Delete a few LCS
     * const { count } = await prisma.lC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LCDeleteManyArgs>(args?: SelectSubset<T, LCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LCS
     * const lC = await prisma.lC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LCUpdateManyArgs>(args: SelectSubset<T, LCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LCS and returns the data updated in the database.
     * @param {LCUpdateManyAndReturnArgs} args - Arguments to update many LCS.
     * @example
     * // Update many LCS
     * const lC = await prisma.lC.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LCS and only return the `id`
     * const lCWithIdOnly = await prisma.lC.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LCUpdateManyAndReturnArgs>(args: SelectSubset<T, LCUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LC.
     * @param {LCUpsertArgs} args - Arguments to update or create a LC.
     * @example
     * // Update or create a LC
     * const lC = await prisma.lC.upsert({
     *   create: {
     *     // ... data to create a LC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LC we want to update
     *   }
     * })
     */
    upsert<T extends LCUpsertArgs>(args: SelectSubset<T, LCUpsertArgs<ExtArgs>>): Prisma__LCClient<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LCCountArgs} args - Arguments to filter LCS to count.
     * @example
     * // Count the number of LCS
     * const count = await prisma.lC.count({
     *   where: {
     *     // ... the filter for the LCS we want to count
     *   }
     * })
    **/
    count<T extends LCCountArgs>(
      args?: Subset<T, LCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LCAggregateArgs>(args: Subset<T, LCAggregateArgs>): Prisma.PrismaPromise<GetLCAggregateType<T>>

    /**
     * Group by LC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LCGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LCGroupByArgs['orderBy'] }
        : { orderBy?: LCGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LC model
   */
  readonly fields: LCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    importer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exporter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bank<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends LC$documentsArgs<ExtArgs> = {}>(args?: Subset<T, LC$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LC model
   */
  interface LCFieldRefs {
    readonly id: FieldRef<"LC", 'String'>
    readonly lcNumber: FieldRef<"LC", 'String'>
    readonly amount: FieldRef<"LC", 'Float'>
    readonly currency: FieldRef<"LC", 'String'>
    readonly status: FieldRef<"LC", 'LCStatus'>
    readonly createdAt: FieldRef<"LC", 'DateTime'>
    readonly importerId: FieldRef<"LC", 'String'>
    readonly exporterId: FieldRef<"LC", 'String'>
    readonly bankId: FieldRef<"LC", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LC findUnique
   */
  export type LCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    /**
     * Filter, which LC to fetch.
     */
    where: LCWhereUniqueInput
  }

  /**
   * LC findUniqueOrThrow
   */
  export type LCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    /**
     * Filter, which LC to fetch.
     */
    where: LCWhereUniqueInput
  }

  /**
   * LC findFirst
   */
  export type LCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    /**
     * Filter, which LC to fetch.
     */
    where?: LCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LCS to fetch.
     */
    orderBy?: LCOrderByWithRelationInput | LCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LCS.
     */
    cursor?: LCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LCS.
     */
    distinct?: LCScalarFieldEnum | LCScalarFieldEnum[]
  }

  /**
   * LC findFirstOrThrow
   */
  export type LCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    /**
     * Filter, which LC to fetch.
     */
    where?: LCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LCS to fetch.
     */
    orderBy?: LCOrderByWithRelationInput | LCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LCS.
     */
    cursor?: LCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LCS.
     */
    distinct?: LCScalarFieldEnum | LCScalarFieldEnum[]
  }

  /**
   * LC findMany
   */
  export type LCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    /**
     * Filter, which LCS to fetch.
     */
    where?: LCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LCS to fetch.
     */
    orderBy?: LCOrderByWithRelationInput | LCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LCS.
     */
    cursor?: LCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LCS.
     */
    skip?: number
    distinct?: LCScalarFieldEnum | LCScalarFieldEnum[]
  }

  /**
   * LC create
   */
  export type LCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    /**
     * The data needed to create a LC.
     */
    data: XOR<LCCreateInput, LCUncheckedCreateInput>
  }

  /**
   * LC createMany
   */
  export type LCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LCS.
     */
    data: LCCreateManyInput | LCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LC createManyAndReturn
   */
  export type LCCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * The data used to create many LCS.
     */
    data: LCCreateManyInput | LCCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LC update
   */
  export type LCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    /**
     * The data needed to update a LC.
     */
    data: XOR<LCUpdateInput, LCUncheckedUpdateInput>
    /**
     * Choose, which LC to update.
     */
    where: LCWhereUniqueInput
  }

  /**
   * LC updateMany
   */
  export type LCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LCS.
     */
    data: XOR<LCUpdateManyMutationInput, LCUncheckedUpdateManyInput>
    /**
     * Filter which LCS to update
     */
    where?: LCWhereInput
    /**
     * Limit how many LCS to update.
     */
    limit?: number
  }

  /**
   * LC updateManyAndReturn
   */
  export type LCUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * The data used to update LCS.
     */
    data: XOR<LCUpdateManyMutationInput, LCUncheckedUpdateManyInput>
    /**
     * Filter which LCS to update
     */
    where?: LCWhereInput
    /**
     * Limit how many LCS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LC upsert
   */
  export type LCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    /**
     * The filter to search for the LC to update in case it exists.
     */
    where: LCWhereUniqueInput
    /**
     * In case the LC found by the `where` argument doesn't exist, create a new LC with this data.
     */
    create: XOR<LCCreateInput, LCUncheckedCreateInput>
    /**
     * In case the LC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LCUpdateInput, LCUncheckedUpdateInput>
  }

  /**
   * LC delete
   */
  export type LCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    /**
     * Filter which LC to delete.
     */
    where: LCWhereUniqueInput
  }

  /**
   * LC deleteMany
   */
  export type LCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LCS to delete
     */
    where?: LCWhereInput
    /**
     * Limit how many LCS to delete.
     */
    limit?: number
  }

  /**
   * LC.documents
   */
  export type LC$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * LC without action
   */
  export type LCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
  }


  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentMinAggregateOutputType = {
    id: string | null
    status: $Enums.ShipmentStatus | null
    vesselName: string | null
    airwayBill: string | null
    etd: Date | null
    eta: Date | null
    createdAt: Date | null
    importerId: string | null
    exporterId: string | null
    brokerId: string | null
    serviceId: string | null
  }

  export type ShipmentMaxAggregateOutputType = {
    id: string | null
    status: $Enums.ShipmentStatus | null
    vesselName: string | null
    airwayBill: string | null
    etd: Date | null
    eta: Date | null
    createdAt: Date | null
    importerId: string | null
    exporterId: string | null
    brokerId: string | null
    serviceId: string | null
  }

  export type ShipmentCountAggregateOutputType = {
    id: number
    status: number
    vesselName: number
    airwayBill: number
    etd: number
    eta: number
    createdAt: number
    importerId: number
    exporterId: number
    brokerId: number
    serviceId: number
    _all: number
  }


  export type ShipmentMinAggregateInputType = {
    id?: true
    status?: true
    vesselName?: true
    airwayBill?: true
    etd?: true
    eta?: true
    createdAt?: true
    importerId?: true
    exporterId?: true
    brokerId?: true
    serviceId?: true
  }

  export type ShipmentMaxAggregateInputType = {
    id?: true
    status?: true
    vesselName?: true
    airwayBill?: true
    etd?: true
    eta?: true
    createdAt?: true
    importerId?: true
    exporterId?: true
    brokerId?: true
    serviceId?: true
  }

  export type ShipmentCountAggregateInputType = {
    id?: true
    status?: true
    vesselName?: true
    airwayBill?: true
    etd?: true
    eta?: true
    createdAt?: true
    importerId?: true
    exporterId?: true
    brokerId?: true
    serviceId?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    id: string
    status: $Enums.ShipmentStatus
    vesselName: string | null
    airwayBill: string | null
    etd: Date | null
    eta: Date | null
    createdAt: Date
    importerId: string
    exporterId: string
    brokerId: string | null
    serviceId: string | null
    _count: ShipmentCountAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    vesselName?: boolean
    airwayBill?: boolean
    etd?: boolean
    eta?: boolean
    createdAt?: boolean
    importerId?: boolean
    exporterId?: boolean
    brokerId?: boolean
    serviceId?: boolean
    importer?: boolean | UserDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | Shipment$brokerArgs<ExtArgs>
    service?: boolean | Shipment$serviceArgs<ExtArgs>
    documents?: boolean | Shipment$documentsArgs<ExtArgs>
    events?: boolean | Shipment$eventsArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    vesselName?: boolean
    airwayBill?: boolean
    etd?: boolean
    eta?: boolean
    createdAt?: boolean
    importerId?: boolean
    exporterId?: boolean
    brokerId?: boolean
    serviceId?: boolean
    importer?: boolean | UserDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | Shipment$brokerArgs<ExtArgs>
    service?: boolean | Shipment$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    vesselName?: boolean
    airwayBill?: boolean
    etd?: boolean
    eta?: boolean
    createdAt?: boolean
    importerId?: boolean
    exporterId?: boolean
    brokerId?: boolean
    serviceId?: boolean
    importer?: boolean | UserDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | Shipment$brokerArgs<ExtArgs>
    service?: boolean | Shipment$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectScalar = {
    id?: boolean
    status?: boolean
    vesselName?: boolean
    airwayBill?: boolean
    etd?: boolean
    eta?: boolean
    createdAt?: boolean
    importerId?: boolean
    exporterId?: boolean
    brokerId?: boolean
    serviceId?: boolean
  }

  export type ShipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "vesselName" | "airwayBill" | "etd" | "eta" | "createdAt" | "importerId" | "exporterId" | "brokerId" | "serviceId", ExtArgs["result"]["shipment"]>
  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importer?: boolean | UserDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | Shipment$brokerArgs<ExtArgs>
    service?: boolean | Shipment$serviceArgs<ExtArgs>
    documents?: boolean | Shipment$documentsArgs<ExtArgs>
    events?: boolean | Shipment$eventsArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importer?: boolean | UserDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | Shipment$brokerArgs<ExtArgs>
    service?: boolean | Shipment$serviceArgs<ExtArgs>
  }
  export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    importer?: boolean | UserDefaultArgs<ExtArgs>
    exporter?: boolean | UserDefaultArgs<ExtArgs>
    broker?: boolean | Shipment$brokerArgs<ExtArgs>
    service?: boolean | Shipment$serviceArgs<ExtArgs>
  }

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      importer: Prisma.$UserPayload<ExtArgs>
      exporter: Prisma.$UserPayload<ExtArgs>
      broker: Prisma.$UserPayload<ExtArgs> | null
      service: Prisma.$ServicePayload<ExtArgs> | null
      documents: Prisma.$DocumentPayload<ExtArgs>[]
      events: Prisma.$ShipmentEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.ShipmentStatus
      vesselName: string | null
      airwayBill: string | null
      etd: Date | null
      eta: Date | null
      createdAt: Date
      importerId: string
      exporterId: string
      brokerId: string | null
      serviceId: string | null
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentWithIdOnly = await prisma.shipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipments and returns the data saved in the database.
     * @param {ShipmentCreateManyAndReturnArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments and returns the data updated in the database.
     * @param {ShipmentUpdateManyAndReturnArgs} args - Arguments to update many Shipments.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    importer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    exporter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    broker<T extends Shipment$brokerArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$brokerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    service<T extends Shipment$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    documents<T extends Shipment$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends Shipment$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shipment model
   */
  interface ShipmentFieldRefs {
    readonly id: FieldRef<"Shipment", 'String'>
    readonly status: FieldRef<"Shipment", 'ShipmentStatus'>
    readonly vesselName: FieldRef<"Shipment", 'String'>
    readonly airwayBill: FieldRef<"Shipment", 'String'>
    readonly etd: FieldRef<"Shipment", 'DateTime'>
    readonly eta: FieldRef<"Shipment", 'DateTime'>
    readonly createdAt: FieldRef<"Shipment", 'DateTime'>
    readonly importerId: FieldRef<"Shipment", 'String'>
    readonly exporterId: FieldRef<"Shipment", 'String'>
    readonly brokerId: FieldRef<"Shipment", 'String'>
    readonly serviceId: FieldRef<"Shipment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipment createManyAndReturn
   */
  export type ShipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
  }

  /**
   * Shipment updateManyAndReturn
   */
  export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to delete.
     */
    limit?: number
  }

  /**
   * Shipment.broker
   */
  export type Shipment$brokerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Shipment.service
   */
  export type Shipment$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * Shipment.documents
   */
  export type Shipment$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Shipment.events
   */
  export type Shipment$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    where?: ShipmentEventWhereInput
    orderBy?: ShipmentEventOrderByWithRelationInput | ShipmentEventOrderByWithRelationInput[]
    cursor?: ShipmentEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentEventScalarFieldEnum | ShipmentEventScalarFieldEnum[]
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentEvent
   */

  export type AggregateShipmentEvent = {
    _count: ShipmentEventCountAggregateOutputType | null
    _min: ShipmentEventMinAggregateOutputType | null
    _max: ShipmentEventMaxAggregateOutputType | null
  }

  export type ShipmentEventMinAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    userId: string | null
    type: $Enums.ShipmentEventType | null
    message: string | null
    createdAt: Date | null
  }

  export type ShipmentEventMaxAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    userId: string | null
    type: $Enums.ShipmentEventType | null
    message: string | null
    createdAt: Date | null
  }

  export type ShipmentEventCountAggregateOutputType = {
    id: number
    shipmentId: number
    userId: number
    type: number
    message: number
    createdAt: number
    _all: number
  }


  export type ShipmentEventMinAggregateInputType = {
    id?: true
    shipmentId?: true
    userId?: true
    type?: true
    message?: true
    createdAt?: true
  }

  export type ShipmentEventMaxAggregateInputType = {
    id?: true
    shipmentId?: true
    userId?: true
    type?: true
    message?: true
    createdAt?: true
  }

  export type ShipmentEventCountAggregateInputType = {
    id?: true
    shipmentId?: true
    userId?: true
    type?: true
    message?: true
    createdAt?: true
    _all?: true
  }

  export type ShipmentEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentEvent to aggregate.
     */
    where?: ShipmentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentEvents to fetch.
     */
    orderBy?: ShipmentEventOrderByWithRelationInput | ShipmentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentEvents
    **/
    _count?: true | ShipmentEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentEventMaxAggregateInputType
  }

  export type GetShipmentEventAggregateType<T extends ShipmentEventAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentEvent[P]>
      : GetScalarType<T[P], AggregateShipmentEvent[P]>
  }




  export type ShipmentEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentEventWhereInput
    orderBy?: ShipmentEventOrderByWithAggregationInput | ShipmentEventOrderByWithAggregationInput[]
    by: ShipmentEventScalarFieldEnum[] | ShipmentEventScalarFieldEnum
    having?: ShipmentEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentEventCountAggregateInputType | true
    _min?: ShipmentEventMinAggregateInputType
    _max?: ShipmentEventMaxAggregateInputType
  }

  export type ShipmentEventGroupByOutputType = {
    id: string
    shipmentId: string
    userId: string | null
    type: $Enums.ShipmentEventType
    message: string | null
    createdAt: Date
    _count: ShipmentEventCountAggregateOutputType | null
    _min: ShipmentEventMinAggregateOutputType | null
    _max: ShipmentEventMaxAggregateOutputType | null
  }

  type GetShipmentEventGroupByPayload<T extends ShipmentEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentEventGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentEventGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    user?: boolean | ShipmentEvent$userArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentEvent"]>

  export type ShipmentEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    user?: boolean | ShipmentEvent$userArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentEvent"]>

  export type ShipmentEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    user?: boolean | ShipmentEvent$userArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentEvent"]>

  export type ShipmentEventSelectScalar = {
    id?: boolean
    shipmentId?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    createdAt?: boolean
  }

  export type ShipmentEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shipmentId" | "userId" | "type" | "message" | "createdAt", ExtArgs["result"]["shipmentEvent"]>
  export type ShipmentEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    user?: boolean | ShipmentEvent$userArgs<ExtArgs>
  }
  export type ShipmentEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    user?: boolean | ShipmentEvent$userArgs<ExtArgs>
  }
  export type ShipmentEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    user?: boolean | ShipmentEvent$userArgs<ExtArgs>
  }

  export type $ShipmentEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentEvent"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shipmentId: string
      userId: string | null
      type: $Enums.ShipmentEventType
      message: string | null
      createdAt: Date
    }, ExtArgs["result"]["shipmentEvent"]>
    composites: {}
  }

  type ShipmentEventGetPayload<S extends boolean | null | undefined | ShipmentEventDefaultArgs> = $Result.GetResult<Prisma.$ShipmentEventPayload, S>

  type ShipmentEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentEventCountAggregateInputType | true
    }

  export interface ShipmentEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentEvent'], meta: { name: 'ShipmentEvent' } }
    /**
     * Find zero or one ShipmentEvent that matches the filter.
     * @param {ShipmentEventFindUniqueArgs} args - Arguments to find a ShipmentEvent
     * @example
     * // Get one ShipmentEvent
     * const shipmentEvent = await prisma.shipmentEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentEventFindUniqueArgs>(args: SelectSubset<T, ShipmentEventFindUniqueArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentEventFindUniqueOrThrowArgs} args - Arguments to find a ShipmentEvent
     * @example
     * // Get one ShipmentEvent
     * const shipmentEvent = await prisma.shipmentEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentEventFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventFindFirstArgs} args - Arguments to find a ShipmentEvent
     * @example
     * // Get one ShipmentEvent
     * const shipmentEvent = await prisma.shipmentEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentEventFindFirstArgs>(args?: SelectSubset<T, ShipmentEventFindFirstArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventFindFirstOrThrowArgs} args - Arguments to find a ShipmentEvent
     * @example
     * // Get one ShipmentEvent
     * const shipmentEvent = await prisma.shipmentEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentEventFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentEvents
     * const shipmentEvents = await prisma.shipmentEvent.findMany()
     * 
     * // Get first 10 ShipmentEvents
     * const shipmentEvents = await prisma.shipmentEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentEventWithIdOnly = await prisma.shipmentEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentEventFindManyArgs>(args?: SelectSubset<T, ShipmentEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentEvent.
     * @param {ShipmentEventCreateArgs} args - Arguments to create a ShipmentEvent.
     * @example
     * // Create one ShipmentEvent
     * const ShipmentEvent = await prisma.shipmentEvent.create({
     *   data: {
     *     // ... data to create a ShipmentEvent
     *   }
     * })
     * 
     */
    create<T extends ShipmentEventCreateArgs>(args: SelectSubset<T, ShipmentEventCreateArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentEvents.
     * @param {ShipmentEventCreateManyArgs} args - Arguments to create many ShipmentEvents.
     * @example
     * // Create many ShipmentEvents
     * const shipmentEvent = await prisma.shipmentEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentEventCreateManyArgs>(args?: SelectSubset<T, ShipmentEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShipmentEvents and returns the data saved in the database.
     * @param {ShipmentEventCreateManyAndReturnArgs} args - Arguments to create many ShipmentEvents.
     * @example
     * // Create many ShipmentEvents
     * const shipmentEvent = await prisma.shipmentEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShipmentEvents and only return the `id`
     * const shipmentEventWithIdOnly = await prisma.shipmentEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentEventCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShipmentEvent.
     * @param {ShipmentEventDeleteArgs} args - Arguments to delete one ShipmentEvent.
     * @example
     * // Delete one ShipmentEvent
     * const ShipmentEvent = await prisma.shipmentEvent.delete({
     *   where: {
     *     // ... filter to delete one ShipmentEvent
     *   }
     * })
     * 
     */
    delete<T extends ShipmentEventDeleteArgs>(args: SelectSubset<T, ShipmentEventDeleteArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentEvent.
     * @param {ShipmentEventUpdateArgs} args - Arguments to update one ShipmentEvent.
     * @example
     * // Update one ShipmentEvent
     * const shipmentEvent = await prisma.shipmentEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentEventUpdateArgs>(args: SelectSubset<T, ShipmentEventUpdateArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentEvents.
     * @param {ShipmentEventDeleteManyArgs} args - Arguments to filter ShipmentEvents to delete.
     * @example
     * // Delete a few ShipmentEvents
     * const { count } = await prisma.shipmentEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentEventDeleteManyArgs>(args?: SelectSubset<T, ShipmentEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentEvents
     * const shipmentEvent = await prisma.shipmentEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentEventUpdateManyArgs>(args: SelectSubset<T, ShipmentEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentEvents and returns the data updated in the database.
     * @param {ShipmentEventUpdateManyAndReturnArgs} args - Arguments to update many ShipmentEvents.
     * @example
     * // Update many ShipmentEvents
     * const shipmentEvent = await prisma.shipmentEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShipmentEvents and only return the `id`
     * const shipmentEventWithIdOnly = await prisma.shipmentEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShipmentEventUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShipmentEvent.
     * @param {ShipmentEventUpsertArgs} args - Arguments to update or create a ShipmentEvent.
     * @example
     * // Update or create a ShipmentEvent
     * const shipmentEvent = await prisma.shipmentEvent.upsert({
     *   create: {
     *     // ... data to create a ShipmentEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentEvent we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentEventUpsertArgs>(args: SelectSubset<T, ShipmentEventUpsertArgs<ExtArgs>>): Prisma__ShipmentEventClient<$Result.GetResult<Prisma.$ShipmentEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventCountArgs} args - Arguments to filter ShipmentEvents to count.
     * @example
     * // Count the number of ShipmentEvents
     * const count = await prisma.shipmentEvent.count({
     *   where: {
     *     // ... the filter for the ShipmentEvents we want to count
     *   }
     * })
    **/
    count<T extends ShipmentEventCountArgs>(
      args?: Subset<T, ShipmentEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentEventAggregateArgs>(args: Subset<T, ShipmentEventAggregateArgs>): Prisma.PrismaPromise<GetShipmentEventAggregateType<T>>

    /**
     * Group by ShipmentEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentEventGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentEvent model
   */
  readonly fields: ShipmentEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends ShipmentEvent$userArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentEvent$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShipmentEvent model
   */
  interface ShipmentEventFieldRefs {
    readonly id: FieldRef<"ShipmentEvent", 'String'>
    readonly shipmentId: FieldRef<"ShipmentEvent", 'String'>
    readonly userId: FieldRef<"ShipmentEvent", 'String'>
    readonly type: FieldRef<"ShipmentEvent", 'ShipmentEventType'>
    readonly message: FieldRef<"ShipmentEvent", 'String'>
    readonly createdAt: FieldRef<"ShipmentEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentEvent findUnique
   */
  export type ShipmentEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentEvent to fetch.
     */
    where: ShipmentEventWhereUniqueInput
  }

  /**
   * ShipmentEvent findUniqueOrThrow
   */
  export type ShipmentEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentEvent to fetch.
     */
    where: ShipmentEventWhereUniqueInput
  }

  /**
   * ShipmentEvent findFirst
   */
  export type ShipmentEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentEvent to fetch.
     */
    where?: ShipmentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentEvents to fetch.
     */
    orderBy?: ShipmentEventOrderByWithRelationInput | ShipmentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentEvents.
     */
    cursor?: ShipmentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentEvents.
     */
    distinct?: ShipmentEventScalarFieldEnum | ShipmentEventScalarFieldEnum[]
  }

  /**
   * ShipmentEvent findFirstOrThrow
   */
  export type ShipmentEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentEvent to fetch.
     */
    where?: ShipmentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentEvents to fetch.
     */
    orderBy?: ShipmentEventOrderByWithRelationInput | ShipmentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentEvents.
     */
    cursor?: ShipmentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentEvents.
     */
    distinct?: ShipmentEventScalarFieldEnum | ShipmentEventScalarFieldEnum[]
  }

  /**
   * ShipmentEvent findMany
   */
  export type ShipmentEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentEvents to fetch.
     */
    where?: ShipmentEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentEvents to fetch.
     */
    orderBy?: ShipmentEventOrderByWithRelationInput | ShipmentEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentEvents.
     */
    cursor?: ShipmentEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentEvents.
     */
    skip?: number
    distinct?: ShipmentEventScalarFieldEnum | ShipmentEventScalarFieldEnum[]
  }

  /**
   * ShipmentEvent create
   */
  export type ShipmentEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentEvent.
     */
    data: XOR<ShipmentEventCreateInput, ShipmentEventUncheckedCreateInput>
  }

  /**
   * ShipmentEvent createMany
   */
  export type ShipmentEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentEvents.
     */
    data: ShipmentEventCreateManyInput | ShipmentEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShipmentEvent createManyAndReturn
   */
  export type ShipmentEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * The data used to create many ShipmentEvents.
     */
    data: ShipmentEventCreateManyInput | ShipmentEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShipmentEvent update
   */
  export type ShipmentEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentEvent.
     */
    data: XOR<ShipmentEventUpdateInput, ShipmentEventUncheckedUpdateInput>
    /**
     * Choose, which ShipmentEvent to update.
     */
    where: ShipmentEventWhereUniqueInput
  }

  /**
   * ShipmentEvent updateMany
   */
  export type ShipmentEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentEvents.
     */
    data: XOR<ShipmentEventUpdateManyMutationInput, ShipmentEventUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentEvents to update
     */
    where?: ShipmentEventWhereInput
    /**
     * Limit how many ShipmentEvents to update.
     */
    limit?: number
  }

  /**
   * ShipmentEvent updateManyAndReturn
   */
  export type ShipmentEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * The data used to update ShipmentEvents.
     */
    data: XOR<ShipmentEventUpdateManyMutationInput, ShipmentEventUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentEvents to update
     */
    where?: ShipmentEventWhereInput
    /**
     * Limit how many ShipmentEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShipmentEvent upsert
   */
  export type ShipmentEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentEvent to update in case it exists.
     */
    where: ShipmentEventWhereUniqueInput
    /**
     * In case the ShipmentEvent found by the `where` argument doesn't exist, create a new ShipmentEvent with this data.
     */
    create: XOR<ShipmentEventCreateInput, ShipmentEventUncheckedCreateInput>
    /**
     * In case the ShipmentEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentEventUpdateInput, ShipmentEventUncheckedUpdateInput>
  }

  /**
   * ShipmentEvent delete
   */
  export type ShipmentEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
    /**
     * Filter which ShipmentEvent to delete.
     */
    where: ShipmentEventWhereUniqueInput
  }

  /**
   * ShipmentEvent deleteMany
   */
  export type ShipmentEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentEvents to delete
     */
    where?: ShipmentEventWhereInput
    /**
     * Limit how many ShipmentEvents to delete.
     */
    limit?: number
  }

  /**
   * ShipmentEvent.user
   */
  export type ShipmentEvent$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ShipmentEvent without action
   */
  export type ShipmentEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentEvent
     */
    select?: ShipmentEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentEvent
     */
    omit?: ShipmentEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentEventInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    type: $Enums.DocumentType | null
    fileUrl: string | null
    verified: boolean | null
    createdAt: Date | null
    uploadedById: string | null
    verifiedById: string | null
    shipmentId: string | null
    lcId: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    type: $Enums.DocumentType | null
    fileUrl: string | null
    verified: boolean | null
    createdAt: Date | null
    uploadedById: string | null
    verifiedById: string | null
    shipmentId: string | null
    lcId: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    type: number
    fileUrl: number
    verified: number
    createdAt: number
    uploadedById: number
    verifiedById: number
    shipmentId: number
    lcId: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    type?: true
    fileUrl?: true
    verified?: true
    createdAt?: true
    uploadedById?: true
    verifiedById?: true
    shipmentId?: true
    lcId?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    type?: true
    fileUrl?: true
    verified?: true
    createdAt?: true
    uploadedById?: true
    verifiedById?: true
    shipmentId?: true
    lcId?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    type?: true
    fileUrl?: true
    verified?: true
    createdAt?: true
    uploadedById?: true
    verifiedById?: true
    shipmentId?: true
    lcId?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    type: $Enums.DocumentType
    fileUrl: string
    verified: boolean
    createdAt: Date
    uploadedById: string
    verifiedById: string | null
    shipmentId: string | null
    lcId: string | null
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    fileUrl?: boolean
    verified?: boolean
    createdAt?: boolean
    uploadedById?: boolean
    verifiedById?: boolean
    shipmentId?: boolean
    lcId?: boolean
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | Document$verifiedByArgs<ExtArgs>
    shipment?: boolean | Document$shipmentArgs<ExtArgs>
    lc?: boolean | Document$lcArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    fileUrl?: boolean
    verified?: boolean
    createdAt?: boolean
    uploadedById?: boolean
    verifiedById?: boolean
    shipmentId?: boolean
    lcId?: boolean
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | Document$verifiedByArgs<ExtArgs>
    shipment?: boolean | Document$shipmentArgs<ExtArgs>
    lc?: boolean | Document$lcArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    fileUrl?: boolean
    verified?: boolean
    createdAt?: boolean
    uploadedById?: boolean
    verifiedById?: boolean
    shipmentId?: boolean
    lcId?: boolean
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | Document$verifiedByArgs<ExtArgs>
    shipment?: boolean | Document$shipmentArgs<ExtArgs>
    lc?: boolean | Document$lcArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    type?: boolean
    fileUrl?: boolean
    verified?: boolean
    createdAt?: boolean
    uploadedById?: boolean
    verifiedById?: boolean
    shipmentId?: boolean
    lcId?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "fileUrl" | "verified" | "createdAt" | "uploadedById" | "verifiedById" | "shipmentId" | "lcId", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | Document$verifiedByArgs<ExtArgs>
    shipment?: boolean | Document$shipmentArgs<ExtArgs>
    lc?: boolean | Document$lcArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | Document$verifiedByArgs<ExtArgs>
    shipment?: boolean | Document$shipmentArgs<ExtArgs>
    lc?: boolean | Document$lcArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | UserDefaultArgs<ExtArgs>
    verifiedBy?: boolean | Document$verifiedByArgs<ExtArgs>
    shipment?: boolean | Document$shipmentArgs<ExtArgs>
    lc?: boolean | Document$lcArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      uploadedBy: Prisma.$UserPayload<ExtArgs>
      verifiedBy: Prisma.$UserPayload<ExtArgs> | null
      shipment: Prisma.$ShipmentPayload<ExtArgs> | null
      lc: Prisma.$LCPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.DocumentType
      fileUrl: string
      verified: boolean
      createdAt: Date
      uploadedById: string
      verifiedById: string | null
      shipmentId: string | null
      lcId: string | null
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploadedBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    verifiedBy<T extends Document$verifiedByArgs<ExtArgs> = {}>(args?: Subset<T, Document$verifiedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    shipment<T extends Document$shipmentArgs<ExtArgs> = {}>(args?: Subset<T, Document$shipmentArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lc<T extends Document$lcArgs<ExtArgs> = {}>(args?: Subset<T, Document$lcArgs<ExtArgs>>): Prisma__LCClient<$Result.GetResult<Prisma.$LCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly type: FieldRef<"Document", 'DocumentType'>
    readonly fileUrl: FieldRef<"Document", 'String'>
    readonly verified: FieldRef<"Document", 'Boolean'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly uploadedById: FieldRef<"Document", 'String'>
    readonly verifiedById: FieldRef<"Document", 'String'>
    readonly shipmentId: FieldRef<"Document", 'String'>
    readonly lcId: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.verifiedBy
   */
  export type Document$verifiedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Document.shipment
   */
  export type Document$shipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
  }

  /**
   * Document.lc
   */
  export type Document$lcArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LC
     */
    select?: LCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LC
     */
    omit?: LCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LCInclude<ExtArgs> | null
    where?: LCWhereInput
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    message: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    title: string
    message: string
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "message" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      message: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    userId: string
    token: string
    createdAt: Date
    expiresAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "createdAt" | "expiresAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    email: 'email',
    passwordHash: 'passwordHash',
    companyName: 'companyName',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    providerId: 'providerId',
    createdAt: 'createdAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const QuoteRequestScalarFieldEnum: {
    id: 'id',
    importerId: 'importerId',
    productName: 'productName',
    quantity: 'quantity',
    unit: 'unit',
    incoterm: 'incoterm',
    originCountry: 'originCountry',
    destCountry: 'destCountry',
    createdAt: 'createdAt'
  };

  export type QuoteRequestScalarFieldEnum = (typeof QuoteRequestScalarFieldEnum)[keyof typeof QuoteRequestScalarFieldEnum]


  export const QuoteResponseScalarFieldEnum: {
    id: 'id',
    quoteRequestId: 'quoteRequestId',
    exporterId: 'exporterId',
    price: 'price',
    validityDays: 'validityDays',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type QuoteResponseScalarFieldEnum = (typeof QuoteResponseScalarFieldEnum)[keyof typeof QuoteResponseScalarFieldEnum]


  export const LCScalarFieldEnum: {
    id: 'id',
    lcNumber: 'lcNumber',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    createdAt: 'createdAt',
    importerId: 'importerId',
    exporterId: 'exporterId',
    bankId: 'bankId'
  };

  export type LCScalarFieldEnum = (typeof LCScalarFieldEnum)[keyof typeof LCScalarFieldEnum]


  export const ShipmentScalarFieldEnum: {
    id: 'id',
    status: 'status',
    vesselName: 'vesselName',
    airwayBill: 'airwayBill',
    etd: 'etd',
    eta: 'eta',
    createdAt: 'createdAt',
    importerId: 'importerId',
    exporterId: 'exporterId',
    brokerId: 'brokerId',
    serviceId: 'serviceId'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const ShipmentEventScalarFieldEnum: {
    id: 'id',
    shipmentId: 'shipmentId',
    userId: 'userId',
    type: 'type',
    message: 'message',
    createdAt: 'createdAt'
  };

  export type ShipmentEventScalarFieldEnum = (typeof ShipmentEventScalarFieldEnum)[keyof typeof ShipmentEventScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    type: 'type',
    fileUrl: 'fileUrl',
    verified: 'verified',
    createdAt: 'createdAt',
    uploadedById: 'uploadedById',
    verifiedById: 'verifiedById',
    shipmentId: 'shipmentId',
    lcId: 'lcId'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LCStatus'
   */
  export type EnumLCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LCStatus'>
    


  /**
   * Reference to a field of type 'LCStatus[]'
   */
  export type ListEnumLCStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LCStatus[]'>
    


  /**
   * Reference to a field of type 'ShipmentStatus'
   */
  export type EnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus'>
    


  /**
   * Reference to a field of type 'ShipmentStatus[]'
   */
  export type ListEnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus[]'>
    


  /**
   * Reference to a field of type 'ShipmentEventType'
   */
  export type EnumShipmentEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentEventType'>
    


  /**
   * Reference to a field of type 'ShipmentEventType[]'
   */
  export type ListEnumShipmentEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentEventType[]'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'DocumentType[]'
   */
  export type ListEnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    companyName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    uploadedDocuments?: DocumentListRelationFilter
    verifiedDocuments?: DocumentListRelationFilter
    services?: ServiceListRelationFilter
    quoteRequests?: QuoteRequestListRelationFilter
    quoteResponses?: QuoteResponseListRelationFilter
    lettersOfCreditAsImporter?: LCListRelationFilter
    lettersOfCreditAsExporter?: LCListRelationFilter
    lettersOfCreditAsBank?: LCListRelationFilter
    shipmentsAsImporter?: ShipmentListRelationFilter
    shipmentsAsExporter?: ShipmentListRelationFilter
    shipmentsAsBroker?: ShipmentListRelationFilter
    shipmentEvents?: ShipmentEventListRelationFilter
    notifications?: NotificationListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    companyName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uploadedDocuments?: DocumentOrderByRelationAggregateInput
    verifiedDocuments?: DocumentOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
    quoteRequests?: QuoteRequestOrderByRelationAggregateInput
    quoteResponses?: QuoteResponseOrderByRelationAggregateInput
    lettersOfCreditAsImporter?: LCOrderByRelationAggregateInput
    lettersOfCreditAsExporter?: LCOrderByRelationAggregateInput
    lettersOfCreditAsBank?: LCOrderByRelationAggregateInput
    shipmentsAsImporter?: ShipmentOrderByRelationAggregateInput
    shipmentsAsExporter?: ShipmentOrderByRelationAggregateInput
    shipmentsAsBroker?: ShipmentOrderByRelationAggregateInput
    shipmentEvents?: ShipmentEventOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    passwordHash?: StringFilter<"User"> | string
    companyName?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    uploadedDocuments?: DocumentListRelationFilter
    verifiedDocuments?: DocumentListRelationFilter
    services?: ServiceListRelationFilter
    quoteRequests?: QuoteRequestListRelationFilter
    quoteResponses?: QuoteResponseListRelationFilter
    lettersOfCreditAsImporter?: LCListRelationFilter
    lettersOfCreditAsExporter?: LCListRelationFilter
    lettersOfCreditAsBank?: LCListRelationFilter
    shipmentsAsImporter?: ShipmentListRelationFilter
    shipmentsAsExporter?: ShipmentListRelationFilter
    shipmentsAsBroker?: ShipmentListRelationFilter
    shipmentEvents?: ShipmentEventListRelationFilter
    notifications?: NotificationListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    companyName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: FloatFilter<"Service"> | number
    providerId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
    shipments?: ShipmentListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    provider?: UserOrderByWithRelationInput
    shipments?: ShipmentOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: FloatFilter<"Service"> | number
    providerId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
    shipments?: ShipmentListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    price?: FloatWithAggregatesFilter<"Service"> | number
    providerId?: StringWithAggregatesFilter<"Service"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type QuoteRequestWhereInput = {
    AND?: QuoteRequestWhereInput | QuoteRequestWhereInput[]
    OR?: QuoteRequestWhereInput[]
    NOT?: QuoteRequestWhereInput | QuoteRequestWhereInput[]
    id?: StringFilter<"QuoteRequest"> | string
    importerId?: StringFilter<"QuoteRequest"> | string
    productName?: StringFilter<"QuoteRequest"> | string
    quantity?: IntFilter<"QuoteRequest"> | number
    unit?: StringNullableFilter<"QuoteRequest"> | string | null
    incoterm?: StringNullableFilter<"QuoteRequest"> | string | null
    originCountry?: StringNullableFilter<"QuoteRequest"> | string | null
    destCountry?: StringNullableFilter<"QuoteRequest"> | string | null
    createdAt?: DateTimeFilter<"QuoteRequest"> | Date | string
    importer?: XOR<UserScalarRelationFilter, UserWhereInput>
    responses?: QuoteResponseListRelationFilter
  }

  export type QuoteRequestOrderByWithRelationInput = {
    id?: SortOrder
    importerId?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrderInput | SortOrder
    incoterm?: SortOrderInput | SortOrder
    originCountry?: SortOrderInput | SortOrder
    destCountry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    importer?: UserOrderByWithRelationInput
    responses?: QuoteResponseOrderByRelationAggregateInput
  }

  export type QuoteRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuoteRequestWhereInput | QuoteRequestWhereInput[]
    OR?: QuoteRequestWhereInput[]
    NOT?: QuoteRequestWhereInput | QuoteRequestWhereInput[]
    importerId?: StringFilter<"QuoteRequest"> | string
    productName?: StringFilter<"QuoteRequest"> | string
    quantity?: IntFilter<"QuoteRequest"> | number
    unit?: StringNullableFilter<"QuoteRequest"> | string | null
    incoterm?: StringNullableFilter<"QuoteRequest"> | string | null
    originCountry?: StringNullableFilter<"QuoteRequest"> | string | null
    destCountry?: StringNullableFilter<"QuoteRequest"> | string | null
    createdAt?: DateTimeFilter<"QuoteRequest"> | Date | string
    importer?: XOR<UserScalarRelationFilter, UserWhereInput>
    responses?: QuoteResponseListRelationFilter
  }, "id">

  export type QuoteRequestOrderByWithAggregationInput = {
    id?: SortOrder
    importerId?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrderInput | SortOrder
    incoterm?: SortOrderInput | SortOrder
    originCountry?: SortOrderInput | SortOrder
    destCountry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuoteRequestCountOrderByAggregateInput
    _avg?: QuoteRequestAvgOrderByAggregateInput
    _max?: QuoteRequestMaxOrderByAggregateInput
    _min?: QuoteRequestMinOrderByAggregateInput
    _sum?: QuoteRequestSumOrderByAggregateInput
  }

  export type QuoteRequestScalarWhereWithAggregatesInput = {
    AND?: QuoteRequestScalarWhereWithAggregatesInput | QuoteRequestScalarWhereWithAggregatesInput[]
    OR?: QuoteRequestScalarWhereWithAggregatesInput[]
    NOT?: QuoteRequestScalarWhereWithAggregatesInput | QuoteRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuoteRequest"> | string
    importerId?: StringWithAggregatesFilter<"QuoteRequest"> | string
    productName?: StringWithAggregatesFilter<"QuoteRequest"> | string
    quantity?: IntWithAggregatesFilter<"QuoteRequest"> | number
    unit?: StringNullableWithAggregatesFilter<"QuoteRequest"> | string | null
    incoterm?: StringNullableWithAggregatesFilter<"QuoteRequest"> | string | null
    originCountry?: StringNullableWithAggregatesFilter<"QuoteRequest"> | string | null
    destCountry?: StringNullableWithAggregatesFilter<"QuoteRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuoteRequest"> | Date | string
  }

  export type QuoteResponseWhereInput = {
    AND?: QuoteResponseWhereInput | QuoteResponseWhereInput[]
    OR?: QuoteResponseWhereInput[]
    NOT?: QuoteResponseWhereInput | QuoteResponseWhereInput[]
    id?: StringFilter<"QuoteResponse"> | string
    quoteRequestId?: StringFilter<"QuoteResponse"> | string
    exporterId?: StringFilter<"QuoteResponse"> | string
    price?: FloatFilter<"QuoteResponse"> | number
    validityDays?: IntNullableFilter<"QuoteResponse"> | number | null
    notes?: StringNullableFilter<"QuoteResponse"> | string | null
    createdAt?: DateTimeFilter<"QuoteResponse"> | Date | string
    quoteRequest?: XOR<QuoteRequestScalarRelationFilter, QuoteRequestWhereInput>
    exporter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QuoteResponseOrderByWithRelationInput = {
    id?: SortOrder
    quoteRequestId?: SortOrder
    exporterId?: SortOrder
    price?: SortOrder
    validityDays?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    quoteRequest?: QuoteRequestOrderByWithRelationInput
    exporter?: UserOrderByWithRelationInput
  }

  export type QuoteResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuoteResponseWhereInput | QuoteResponseWhereInput[]
    OR?: QuoteResponseWhereInput[]
    NOT?: QuoteResponseWhereInput | QuoteResponseWhereInput[]
    quoteRequestId?: StringFilter<"QuoteResponse"> | string
    exporterId?: StringFilter<"QuoteResponse"> | string
    price?: FloatFilter<"QuoteResponse"> | number
    validityDays?: IntNullableFilter<"QuoteResponse"> | number | null
    notes?: StringNullableFilter<"QuoteResponse"> | string | null
    createdAt?: DateTimeFilter<"QuoteResponse"> | Date | string
    quoteRequest?: XOR<QuoteRequestScalarRelationFilter, QuoteRequestWhereInput>
    exporter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type QuoteResponseOrderByWithAggregationInput = {
    id?: SortOrder
    quoteRequestId?: SortOrder
    exporterId?: SortOrder
    price?: SortOrder
    validityDays?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: QuoteResponseCountOrderByAggregateInput
    _avg?: QuoteResponseAvgOrderByAggregateInput
    _max?: QuoteResponseMaxOrderByAggregateInput
    _min?: QuoteResponseMinOrderByAggregateInput
    _sum?: QuoteResponseSumOrderByAggregateInput
  }

  export type QuoteResponseScalarWhereWithAggregatesInput = {
    AND?: QuoteResponseScalarWhereWithAggregatesInput | QuoteResponseScalarWhereWithAggregatesInput[]
    OR?: QuoteResponseScalarWhereWithAggregatesInput[]
    NOT?: QuoteResponseScalarWhereWithAggregatesInput | QuoteResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuoteResponse"> | string
    quoteRequestId?: StringWithAggregatesFilter<"QuoteResponse"> | string
    exporterId?: StringWithAggregatesFilter<"QuoteResponse"> | string
    price?: FloatWithAggregatesFilter<"QuoteResponse"> | number
    validityDays?: IntNullableWithAggregatesFilter<"QuoteResponse"> | number | null
    notes?: StringNullableWithAggregatesFilter<"QuoteResponse"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"QuoteResponse"> | Date | string
  }

  export type LCWhereInput = {
    AND?: LCWhereInput | LCWhereInput[]
    OR?: LCWhereInput[]
    NOT?: LCWhereInput | LCWhereInput[]
    id?: StringFilter<"LC"> | string
    lcNumber?: StringFilter<"LC"> | string
    amount?: FloatFilter<"LC"> | number
    currency?: StringFilter<"LC"> | string
    status?: EnumLCStatusFilter<"LC"> | $Enums.LCStatus
    createdAt?: DateTimeFilter<"LC"> | Date | string
    importerId?: StringFilter<"LC"> | string
    exporterId?: StringFilter<"LC"> | string
    bankId?: StringFilter<"LC"> | string
    importer?: XOR<UserScalarRelationFilter, UserWhereInput>
    exporter?: XOR<UserScalarRelationFilter, UserWhereInput>
    bank?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
  }

  export type LCOrderByWithRelationInput = {
    id?: SortOrder
    lcNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    importerId?: SortOrder
    exporterId?: SortOrder
    bankId?: SortOrder
    importer?: UserOrderByWithRelationInput
    exporter?: UserOrderByWithRelationInput
    bank?: UserOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type LCWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lcNumber?: string
    AND?: LCWhereInput | LCWhereInput[]
    OR?: LCWhereInput[]
    NOT?: LCWhereInput | LCWhereInput[]
    amount?: FloatFilter<"LC"> | number
    currency?: StringFilter<"LC"> | string
    status?: EnumLCStatusFilter<"LC"> | $Enums.LCStatus
    createdAt?: DateTimeFilter<"LC"> | Date | string
    importerId?: StringFilter<"LC"> | string
    exporterId?: StringFilter<"LC"> | string
    bankId?: StringFilter<"LC"> | string
    importer?: XOR<UserScalarRelationFilter, UserWhereInput>
    exporter?: XOR<UserScalarRelationFilter, UserWhereInput>
    bank?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
  }, "id" | "lcNumber">

  export type LCOrderByWithAggregationInput = {
    id?: SortOrder
    lcNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    importerId?: SortOrder
    exporterId?: SortOrder
    bankId?: SortOrder
    _count?: LCCountOrderByAggregateInput
    _avg?: LCAvgOrderByAggregateInput
    _max?: LCMaxOrderByAggregateInput
    _min?: LCMinOrderByAggregateInput
    _sum?: LCSumOrderByAggregateInput
  }

  export type LCScalarWhereWithAggregatesInput = {
    AND?: LCScalarWhereWithAggregatesInput | LCScalarWhereWithAggregatesInput[]
    OR?: LCScalarWhereWithAggregatesInput[]
    NOT?: LCScalarWhereWithAggregatesInput | LCScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LC"> | string
    lcNumber?: StringWithAggregatesFilter<"LC"> | string
    amount?: FloatWithAggregatesFilter<"LC"> | number
    currency?: StringWithAggregatesFilter<"LC"> | string
    status?: EnumLCStatusWithAggregatesFilter<"LC"> | $Enums.LCStatus
    createdAt?: DateTimeWithAggregatesFilter<"LC"> | Date | string
    importerId?: StringWithAggregatesFilter<"LC"> | string
    exporterId?: StringWithAggregatesFilter<"LC"> | string
    bankId?: StringWithAggregatesFilter<"LC"> | string
  }

  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    id?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    vesselName?: StringNullableFilter<"Shipment"> | string | null
    airwayBill?: StringNullableFilter<"Shipment"> | string | null
    etd?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    eta?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    importerId?: StringFilter<"Shipment"> | string
    exporterId?: StringFilter<"Shipment"> | string
    brokerId?: StringNullableFilter<"Shipment"> | string | null
    serviceId?: StringNullableFilter<"Shipment"> | string | null
    importer?: XOR<UserScalarRelationFilter, UserWhereInput>
    exporter?: XOR<UserScalarRelationFilter, UserWhereInput>
    broker?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
    documents?: DocumentListRelationFilter
    events?: ShipmentEventListRelationFilter
  }

  export type ShipmentOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    vesselName?: SortOrderInput | SortOrder
    airwayBill?: SortOrderInput | SortOrder
    etd?: SortOrderInput | SortOrder
    eta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    importerId?: SortOrder
    exporterId?: SortOrder
    brokerId?: SortOrderInput | SortOrder
    serviceId?: SortOrderInput | SortOrder
    importer?: UserOrderByWithRelationInput
    exporter?: UserOrderByWithRelationInput
    broker?: UserOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
    events?: ShipmentEventOrderByRelationAggregateInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    vesselName?: StringNullableFilter<"Shipment"> | string | null
    airwayBill?: StringNullableFilter<"Shipment"> | string | null
    etd?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    eta?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    importerId?: StringFilter<"Shipment"> | string
    exporterId?: StringFilter<"Shipment"> | string
    brokerId?: StringNullableFilter<"Shipment"> | string | null
    serviceId?: StringNullableFilter<"Shipment"> | string | null
    importer?: XOR<UserScalarRelationFilter, UserWhereInput>
    exporter?: XOR<UserScalarRelationFilter, UserWhereInput>
    broker?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
    documents?: DocumentListRelationFilter
    events?: ShipmentEventListRelationFilter
  }, "id">

  export type ShipmentOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    vesselName?: SortOrderInput | SortOrder
    airwayBill?: SortOrderInput | SortOrder
    etd?: SortOrderInput | SortOrder
    eta?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    importerId?: SortOrder
    exporterId?: SortOrder
    brokerId?: SortOrderInput | SortOrder
    serviceId?: SortOrderInput | SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shipment"> | string
    status?: EnumShipmentStatusWithAggregatesFilter<"Shipment"> | $Enums.ShipmentStatus
    vesselName?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
    airwayBill?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
    etd?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    eta?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    importerId?: StringWithAggregatesFilter<"Shipment"> | string
    exporterId?: StringWithAggregatesFilter<"Shipment"> | string
    brokerId?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
    serviceId?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
  }

  export type ShipmentEventWhereInput = {
    AND?: ShipmentEventWhereInput | ShipmentEventWhereInput[]
    OR?: ShipmentEventWhereInput[]
    NOT?: ShipmentEventWhereInput | ShipmentEventWhereInput[]
    id?: StringFilter<"ShipmentEvent"> | string
    shipmentId?: StringFilter<"ShipmentEvent"> | string
    userId?: StringNullableFilter<"ShipmentEvent"> | string | null
    type?: EnumShipmentEventTypeFilter<"ShipmentEvent"> | $Enums.ShipmentEventType
    message?: StringNullableFilter<"ShipmentEvent"> | string | null
    createdAt?: DateTimeFilter<"ShipmentEvent"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ShipmentEventOrderByWithRelationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    shipment?: ShipmentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ShipmentEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShipmentEventWhereInput | ShipmentEventWhereInput[]
    OR?: ShipmentEventWhereInput[]
    NOT?: ShipmentEventWhereInput | ShipmentEventWhereInput[]
    shipmentId?: StringFilter<"ShipmentEvent"> | string
    userId?: StringNullableFilter<"ShipmentEvent"> | string | null
    type?: EnumShipmentEventTypeFilter<"ShipmentEvent"> | $Enums.ShipmentEventType
    message?: StringNullableFilter<"ShipmentEvent"> | string | null
    createdAt?: DateTimeFilter<"ShipmentEvent"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type ShipmentEventOrderByWithAggregationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    userId?: SortOrderInput | SortOrder
    type?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ShipmentEventCountOrderByAggregateInput
    _max?: ShipmentEventMaxOrderByAggregateInput
    _min?: ShipmentEventMinOrderByAggregateInput
  }

  export type ShipmentEventScalarWhereWithAggregatesInput = {
    AND?: ShipmentEventScalarWhereWithAggregatesInput | ShipmentEventScalarWhereWithAggregatesInput[]
    OR?: ShipmentEventScalarWhereWithAggregatesInput[]
    NOT?: ShipmentEventScalarWhereWithAggregatesInput | ShipmentEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShipmentEvent"> | string
    shipmentId?: StringWithAggregatesFilter<"ShipmentEvent"> | string
    userId?: StringNullableWithAggregatesFilter<"ShipmentEvent"> | string | null
    type?: EnumShipmentEventTypeWithAggregatesFilter<"ShipmentEvent"> | $Enums.ShipmentEventType
    message?: StringNullableWithAggregatesFilter<"ShipmentEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ShipmentEvent"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    fileUrl?: StringFilter<"Document"> | string
    verified?: BoolFilter<"Document"> | boolean
    createdAt?: DateTimeFilter<"Document"> | Date | string
    uploadedById?: StringFilter<"Document"> | string
    verifiedById?: StringNullableFilter<"Document"> | string | null
    shipmentId?: StringNullableFilter<"Document"> | string | null
    lcId?: StringNullableFilter<"Document"> | string | null
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    verifiedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    shipment?: XOR<ShipmentNullableScalarRelationFilter, ShipmentWhereInput> | null
    lc?: XOR<LCNullableScalarRelationFilter, LCWhereInput> | null
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    uploadedById?: SortOrder
    verifiedById?: SortOrderInput | SortOrder
    shipmentId?: SortOrderInput | SortOrder
    lcId?: SortOrderInput | SortOrder
    uploadedBy?: UserOrderByWithRelationInput
    verifiedBy?: UserOrderByWithRelationInput
    shipment?: ShipmentOrderByWithRelationInput
    lc?: LCOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    fileUrl?: StringFilter<"Document"> | string
    verified?: BoolFilter<"Document"> | boolean
    createdAt?: DateTimeFilter<"Document"> | Date | string
    uploadedById?: StringFilter<"Document"> | string
    verifiedById?: StringNullableFilter<"Document"> | string | null
    shipmentId?: StringNullableFilter<"Document"> | string | null
    lcId?: StringNullableFilter<"Document"> | string | null
    uploadedBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    verifiedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    shipment?: XOR<ShipmentNullableScalarRelationFilter, ShipmentWhereInput> | null
    lc?: XOR<LCNullableScalarRelationFilter, LCWhereInput> | null
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    uploadedById?: SortOrder
    verifiedById?: SortOrderInput | SortOrder
    shipmentId?: SortOrderInput | SortOrder
    lcId?: SortOrderInput | SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    type?: EnumDocumentTypeWithAggregatesFilter<"Document"> | $Enums.DocumentType
    fileUrl?: StringWithAggregatesFilter<"Document"> | string
    verified?: BoolWithAggregatesFilter<"Document"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    uploadedById?: StringWithAggregatesFilter<"Document"> | string
    verifiedById?: StringNullableWithAggregatesFilter<"Document"> | string | null
    shipmentId?: StringNullableWithAggregatesFilter<"Document"> | string | null
    lcId?: StringNullableWithAggregatesFilter<"Document"> | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    createdAt?: Date | string
    provider: UserCreateNestedOneWithoutServicesInput
    shipments?: ShipmentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    providerId: string
    createdAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: UserUpdateOneRequiredWithoutServicesNestedInput
    shipments?: ShipmentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    providerId: string
    createdAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteRequestCreateInput = {
    id?: string
    productName: string
    quantity: number
    unit?: string | null
    incoterm?: string | null
    originCountry?: string | null
    destCountry?: string | null
    createdAt?: Date | string
    importer: UserCreateNestedOneWithoutQuoteRequestsInput
    responses?: QuoteResponseCreateNestedManyWithoutQuoteRequestInput
  }

  export type QuoteRequestUncheckedCreateInput = {
    id?: string
    importerId: string
    productName: string
    quantity: number
    unit?: string | null
    incoterm?: string | null
    originCountry?: string | null
    destCountry?: string | null
    createdAt?: Date | string
    responses?: QuoteResponseUncheckedCreateNestedManyWithoutQuoteRequestInput
  }

  export type QuoteRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    incoterm?: NullableStringFieldUpdateOperationsInput | string | null
    originCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destCountry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importer?: UserUpdateOneRequiredWithoutQuoteRequestsNestedInput
    responses?: QuoteResponseUpdateManyWithoutQuoteRequestNestedInput
  }

  export type QuoteRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    importerId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    incoterm?: NullableStringFieldUpdateOperationsInput | string | null
    originCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destCountry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: QuoteResponseUncheckedUpdateManyWithoutQuoteRequestNestedInput
  }

  export type QuoteRequestCreateManyInput = {
    id?: string
    importerId: string
    productName: string
    quantity: number
    unit?: string | null
    incoterm?: string | null
    originCountry?: string | null
    destCountry?: string | null
    createdAt?: Date | string
  }

  export type QuoteRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    incoterm?: NullableStringFieldUpdateOperationsInput | string | null
    originCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destCountry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    importerId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    incoterm?: NullableStringFieldUpdateOperationsInput | string | null
    originCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destCountry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteResponseCreateInput = {
    id?: string
    price: number
    validityDays?: number | null
    notes?: string | null
    createdAt?: Date | string
    quoteRequest: QuoteRequestCreateNestedOneWithoutResponsesInput
    exporter: UserCreateNestedOneWithoutQuoteResponsesInput
  }

  export type QuoteResponseUncheckedCreateInput = {
    id?: string
    quoteRequestId: string
    exporterId: string
    price: number
    validityDays?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type QuoteResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quoteRequest?: QuoteRequestUpdateOneRequiredWithoutResponsesNestedInput
    exporter?: UserUpdateOneRequiredWithoutQuoteResponsesNestedInput
  }

  export type QuoteResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quoteRequestId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteResponseCreateManyInput = {
    id?: string
    quoteRequestId: string
    exporterId: string
    price: number
    validityDays?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type QuoteResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quoteRequestId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LCCreateInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    importer: UserCreateNestedOneWithoutLettersOfCreditAsImporterInput
    exporter: UserCreateNestedOneWithoutLettersOfCreditAsExporterInput
    bank: UserCreateNestedOneWithoutLettersOfCreditAsBankInput
    documents?: DocumentCreateNestedManyWithoutLcInput
  }

  export type LCUncheckedCreateInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    importerId: string
    exporterId: string
    bankId: string
    documents?: DocumentUncheckedCreateNestedManyWithoutLcInput
  }

  export type LCUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importer?: UserUpdateOneRequiredWithoutLettersOfCreditAsImporterNestedInput
    exporter?: UserUpdateOneRequiredWithoutLettersOfCreditAsExporterNestedInput
    bank?: UserUpdateOneRequiredWithoutLettersOfCreditAsBankNestedInput
    documents?: DocumentUpdateManyWithoutLcNestedInput
  }

  export type LCUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    documents?: DocumentUncheckedUpdateManyWithoutLcNestedInput
  }

  export type LCCreateManyInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    importerId: string
    exporterId: string
    bankId: string
  }

  export type LCUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LCUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentCreateInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importer: UserCreateNestedOneWithoutShipmentsAsImporterInput
    exporter: UserCreateNestedOneWithoutShipmentsAsExporterInput
    broker?: UserCreateNestedOneWithoutShipmentsAsBrokerInput
    service?: ServiceCreateNestedOneWithoutShipmentsInput
    documents?: DocumentCreateNestedManyWithoutShipmentInput
    events?: ShipmentEventCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importerId: string
    exporterId: string
    brokerId?: string | null
    serviceId?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutShipmentInput
    events?: ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importer?: UserUpdateOneRequiredWithoutShipmentsAsImporterNestedInput
    exporter?: UserUpdateOneRequiredWithoutShipmentsAsExporterNestedInput
    broker?: UserUpdateOneWithoutShipmentsAsBrokerNestedInput
    service?: ServiceUpdateOneWithoutShipmentsNestedInput
    documents?: DocumentUpdateManyWithoutShipmentNestedInput
    events?: ShipmentEventUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutShipmentNestedInput
    events?: ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentCreateManyInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importerId: string
    exporterId: string
    brokerId?: string | null
    serviceId?: string | null
  }

  export type ShipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShipmentEventCreateInput = {
    id?: string
    type: $Enums.ShipmentEventType
    message?: string | null
    createdAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutEventsInput
    user?: UserCreateNestedOneWithoutShipmentEventsInput
  }

  export type ShipmentEventUncheckedCreateInput = {
    id?: string
    shipmentId: string
    userId?: string | null
    type: $Enums.ShipmentEventType
    message?: string | null
    createdAt?: Date | string
  }

  export type ShipmentEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumShipmentEventTypeFieldUpdateOperationsInput | $Enums.ShipmentEventType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutEventsNestedInput
    user?: UserUpdateOneWithoutShipmentEventsNestedInput
  }

  export type ShipmentEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumShipmentEventTypeFieldUpdateOperationsInput | $Enums.ShipmentEventType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentEventCreateManyInput = {
    id?: string
    shipmentId: string
    userId?: string | null
    type: $Enums.ShipmentEventType
    message?: string | null
    createdAt?: Date | string
  }

  export type ShipmentEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumShipmentEventTypeFieldUpdateOperationsInput | $Enums.ShipmentEventType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumShipmentEventTypeFieldUpdateOperationsInput | $Enums.ShipmentEventType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutUploadedDocumentsInput
    verifiedBy?: UserCreateNestedOneWithoutVerifiedDocumentsInput
    shipment?: ShipmentCreateNestedOneWithoutDocumentsInput
    lc?: LCCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    uploadedById: string
    verifiedById?: string | null
    shipmentId?: string | null
    lcId?: string | null
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutUploadedDocumentsNestedInput
    verifiedBy?: UserUpdateOneWithoutVerifiedDocumentsNestedInput
    shipment?: ShipmentUpdateOneWithoutDocumentsNestedInput
    lc?: LCUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lcId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentCreateManyInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    uploadedById: string
    verifiedById?: string | null
    shipmentId?: string | null
    lcId?: string | null
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lcId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    userId: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type QuoteRequestListRelationFilter = {
    every?: QuoteRequestWhereInput
    some?: QuoteRequestWhereInput
    none?: QuoteRequestWhereInput
  }

  export type QuoteResponseListRelationFilter = {
    every?: QuoteResponseWhereInput
    some?: QuoteResponseWhereInput
    none?: QuoteResponseWhereInput
  }

  export type LCListRelationFilter = {
    every?: LCWhereInput
    some?: LCWhereInput
    none?: LCWhereInput
  }

  export type ShipmentListRelationFilter = {
    every?: ShipmentWhereInput
    some?: ShipmentWhereInput
    none?: ShipmentWhereInput
  }

  export type ShipmentEventListRelationFilter = {
    every?: ShipmentEventWhereInput
    some?: ShipmentEventWhereInput
    none?: ShipmentEventWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuoteRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuoteResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LCOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    companyName?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type QuoteRequestCountOrderByAggregateInput = {
    id?: SortOrder
    importerId?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    incoterm?: SortOrder
    originCountry?: SortOrder
    destCountry?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteRequestAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type QuoteRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    importerId?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    incoterm?: SortOrder
    originCountry?: SortOrder
    destCountry?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteRequestMinOrderByAggregateInput = {
    id?: SortOrder
    importerId?: SortOrder
    productName?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    incoterm?: SortOrder
    originCountry?: SortOrder
    destCountry?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteRequestSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type QuoteRequestScalarRelationFilter = {
    is?: QuoteRequestWhereInput
    isNot?: QuoteRequestWhereInput
  }

  export type QuoteResponseCountOrderByAggregateInput = {
    id?: SortOrder
    quoteRequestId?: SortOrder
    exporterId?: SortOrder
    price?: SortOrder
    validityDays?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteResponseAvgOrderByAggregateInput = {
    price?: SortOrder
    validityDays?: SortOrder
  }

  export type QuoteResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    quoteRequestId?: SortOrder
    exporterId?: SortOrder
    price?: SortOrder
    validityDays?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteResponseMinOrderByAggregateInput = {
    id?: SortOrder
    quoteRequestId?: SortOrder
    exporterId?: SortOrder
    price?: SortOrder
    validityDays?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type QuoteResponseSumOrderByAggregateInput = {
    price?: SortOrder
    validityDays?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumLCStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LCStatus | EnumLCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LCStatus[] | ListEnumLCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LCStatus[] | ListEnumLCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLCStatusFilter<$PrismaModel> | $Enums.LCStatus
  }

  export type LCCountOrderByAggregateInput = {
    id?: SortOrder
    lcNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    importerId?: SortOrder
    exporterId?: SortOrder
    bankId?: SortOrder
  }

  export type LCAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type LCMaxOrderByAggregateInput = {
    id?: SortOrder
    lcNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    importerId?: SortOrder
    exporterId?: SortOrder
    bankId?: SortOrder
  }

  export type LCMinOrderByAggregateInput = {
    id?: SortOrder
    lcNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    importerId?: SortOrder
    exporterId?: SortOrder
    bankId?: SortOrder
  }

  export type LCSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumLCStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LCStatus | EnumLCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LCStatus[] | ListEnumLCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LCStatus[] | ListEnumLCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLCStatusWithAggregatesFilter<$PrismaModel> | $Enums.LCStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLCStatusFilter<$PrismaModel>
    _max?: NestedEnumLCStatusFilter<$PrismaModel>
  }

  export type EnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ServiceNullableScalarRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type ShipmentCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    vesselName?: SortOrder
    airwayBill?: SortOrder
    etd?: SortOrder
    eta?: SortOrder
    createdAt?: SortOrder
    importerId?: SortOrder
    exporterId?: SortOrder
    brokerId?: SortOrder
    serviceId?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    vesselName?: SortOrder
    airwayBill?: SortOrder
    etd?: SortOrder
    eta?: SortOrder
    createdAt?: SortOrder
    importerId?: SortOrder
    exporterId?: SortOrder
    brokerId?: SortOrder
    serviceId?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    vesselName?: SortOrder
    airwayBill?: SortOrder
    etd?: SortOrder
    eta?: SortOrder
    createdAt?: SortOrder
    importerId?: SortOrder
    exporterId?: SortOrder
    brokerId?: SortOrder
    serviceId?: SortOrder
  }

  export type EnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumShipmentEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentEventType | EnumShipmentEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentEventType[] | ListEnumShipmentEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentEventType[] | ListEnumShipmentEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentEventTypeFilter<$PrismaModel> | $Enums.ShipmentEventType
  }

  export type ShipmentScalarRelationFilter = {
    is?: ShipmentWhereInput
    isNot?: ShipmentWhereInput
  }

  export type ShipmentEventCountOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ShipmentEventMaxOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type ShipmentEventMinOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumShipmentEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentEventType | EnumShipmentEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentEventType[] | ListEnumShipmentEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentEventType[] | ListEnumShipmentEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentEventTypeFilter<$PrismaModel>
    _max?: NestedEnumShipmentEventTypeFilter<$PrismaModel>
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ShipmentNullableScalarRelationFilter = {
    is?: ShipmentWhereInput | null
    isNot?: ShipmentWhereInput | null
  }

  export type LCNullableScalarRelationFilter = {
    is?: LCWhereInput | null
    isNot?: LCWhereInput | null
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    uploadedById?: SortOrder
    verifiedById?: SortOrder
    shipmentId?: SortOrder
    lcId?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    uploadedById?: SortOrder
    verifiedById?: SortOrder
    shipmentId?: SortOrder
    lcId?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    fileUrl?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    uploadedById?: SortOrder
    verifiedById?: SortOrder
    shipmentId?: SortOrder
    lcId?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type DocumentCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<DocumentCreateWithoutUploadedByInput, DocumentUncheckedCreateWithoutUploadedByInput> | DocumentCreateWithoutUploadedByInput[] | DocumentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUploadedByInput | DocumentCreateOrConnectWithoutUploadedByInput[]
    createMany?: DocumentCreateManyUploadedByInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentCreateNestedManyWithoutVerifiedByInput = {
    create?: XOR<DocumentCreateWithoutVerifiedByInput, DocumentUncheckedCreateWithoutVerifiedByInput> | DocumentCreateWithoutVerifiedByInput[] | DocumentUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutVerifiedByInput | DocumentCreateOrConnectWithoutVerifiedByInput[]
    createMany?: DocumentCreateManyVerifiedByInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutProviderInput = {
    create?: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput> | ServiceCreateWithoutProviderInput[] | ServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderInput | ServiceCreateOrConnectWithoutProviderInput[]
    createMany?: ServiceCreateManyProviderInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type QuoteRequestCreateNestedManyWithoutImporterInput = {
    create?: XOR<QuoteRequestCreateWithoutImporterInput, QuoteRequestUncheckedCreateWithoutImporterInput> | QuoteRequestCreateWithoutImporterInput[] | QuoteRequestUncheckedCreateWithoutImporterInput[]
    connectOrCreate?: QuoteRequestCreateOrConnectWithoutImporterInput | QuoteRequestCreateOrConnectWithoutImporterInput[]
    createMany?: QuoteRequestCreateManyImporterInputEnvelope
    connect?: QuoteRequestWhereUniqueInput | QuoteRequestWhereUniqueInput[]
  }

  export type QuoteResponseCreateNestedManyWithoutExporterInput = {
    create?: XOR<QuoteResponseCreateWithoutExporterInput, QuoteResponseUncheckedCreateWithoutExporterInput> | QuoteResponseCreateWithoutExporterInput[] | QuoteResponseUncheckedCreateWithoutExporterInput[]
    connectOrCreate?: QuoteResponseCreateOrConnectWithoutExporterInput | QuoteResponseCreateOrConnectWithoutExporterInput[]
    createMany?: QuoteResponseCreateManyExporterInputEnvelope
    connect?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
  }

  export type LCCreateNestedManyWithoutImporterInput = {
    create?: XOR<LCCreateWithoutImporterInput, LCUncheckedCreateWithoutImporterInput> | LCCreateWithoutImporterInput[] | LCUncheckedCreateWithoutImporterInput[]
    connectOrCreate?: LCCreateOrConnectWithoutImporterInput | LCCreateOrConnectWithoutImporterInput[]
    createMany?: LCCreateManyImporterInputEnvelope
    connect?: LCWhereUniqueInput | LCWhereUniqueInput[]
  }

  export type LCCreateNestedManyWithoutExporterInput = {
    create?: XOR<LCCreateWithoutExporterInput, LCUncheckedCreateWithoutExporterInput> | LCCreateWithoutExporterInput[] | LCUncheckedCreateWithoutExporterInput[]
    connectOrCreate?: LCCreateOrConnectWithoutExporterInput | LCCreateOrConnectWithoutExporterInput[]
    createMany?: LCCreateManyExporterInputEnvelope
    connect?: LCWhereUniqueInput | LCWhereUniqueInput[]
  }

  export type LCCreateNestedManyWithoutBankInput = {
    create?: XOR<LCCreateWithoutBankInput, LCUncheckedCreateWithoutBankInput> | LCCreateWithoutBankInput[] | LCUncheckedCreateWithoutBankInput[]
    connectOrCreate?: LCCreateOrConnectWithoutBankInput | LCCreateOrConnectWithoutBankInput[]
    createMany?: LCCreateManyBankInputEnvelope
    connect?: LCWhereUniqueInput | LCWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutImporterInput = {
    create?: XOR<ShipmentCreateWithoutImporterInput, ShipmentUncheckedCreateWithoutImporterInput> | ShipmentCreateWithoutImporterInput[] | ShipmentUncheckedCreateWithoutImporterInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutImporterInput | ShipmentCreateOrConnectWithoutImporterInput[]
    createMany?: ShipmentCreateManyImporterInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutExporterInput = {
    create?: XOR<ShipmentCreateWithoutExporterInput, ShipmentUncheckedCreateWithoutExporterInput> | ShipmentCreateWithoutExporterInput[] | ShipmentUncheckedCreateWithoutExporterInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutExporterInput | ShipmentCreateOrConnectWithoutExporterInput[]
    createMany?: ShipmentCreateManyExporterInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutBrokerInput = {
    create?: XOR<ShipmentCreateWithoutBrokerInput, ShipmentUncheckedCreateWithoutBrokerInput> | ShipmentCreateWithoutBrokerInput[] | ShipmentUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutBrokerInput | ShipmentCreateOrConnectWithoutBrokerInput[]
    createMany?: ShipmentCreateManyBrokerInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentEventCreateNestedManyWithoutUserInput = {
    create?: XOR<ShipmentEventCreateWithoutUserInput, ShipmentEventUncheckedCreateWithoutUserInput> | ShipmentEventCreateWithoutUserInput[] | ShipmentEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShipmentEventCreateOrConnectWithoutUserInput | ShipmentEventCreateOrConnectWithoutUserInput[]
    createMany?: ShipmentEventCreateManyUserInputEnvelope
    connect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<DocumentCreateWithoutUploadedByInput, DocumentUncheckedCreateWithoutUploadedByInput> | DocumentCreateWithoutUploadedByInput[] | DocumentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUploadedByInput | DocumentCreateOrConnectWithoutUploadedByInput[]
    createMany?: DocumentCreateManyUploadedByInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutVerifiedByInput = {
    create?: XOR<DocumentCreateWithoutVerifiedByInput, DocumentUncheckedCreateWithoutVerifiedByInput> | DocumentCreateWithoutVerifiedByInput[] | DocumentUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutVerifiedByInput | DocumentCreateOrConnectWithoutVerifiedByInput[]
    createMany?: DocumentCreateManyVerifiedByInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput> | ServiceCreateWithoutProviderInput[] | ServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderInput | ServiceCreateOrConnectWithoutProviderInput[]
    createMany?: ServiceCreateManyProviderInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type QuoteRequestUncheckedCreateNestedManyWithoutImporterInput = {
    create?: XOR<QuoteRequestCreateWithoutImporterInput, QuoteRequestUncheckedCreateWithoutImporterInput> | QuoteRequestCreateWithoutImporterInput[] | QuoteRequestUncheckedCreateWithoutImporterInput[]
    connectOrCreate?: QuoteRequestCreateOrConnectWithoutImporterInput | QuoteRequestCreateOrConnectWithoutImporterInput[]
    createMany?: QuoteRequestCreateManyImporterInputEnvelope
    connect?: QuoteRequestWhereUniqueInput | QuoteRequestWhereUniqueInput[]
  }

  export type QuoteResponseUncheckedCreateNestedManyWithoutExporterInput = {
    create?: XOR<QuoteResponseCreateWithoutExporterInput, QuoteResponseUncheckedCreateWithoutExporterInput> | QuoteResponseCreateWithoutExporterInput[] | QuoteResponseUncheckedCreateWithoutExporterInput[]
    connectOrCreate?: QuoteResponseCreateOrConnectWithoutExporterInput | QuoteResponseCreateOrConnectWithoutExporterInput[]
    createMany?: QuoteResponseCreateManyExporterInputEnvelope
    connect?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
  }

  export type LCUncheckedCreateNestedManyWithoutImporterInput = {
    create?: XOR<LCCreateWithoutImporterInput, LCUncheckedCreateWithoutImporterInput> | LCCreateWithoutImporterInput[] | LCUncheckedCreateWithoutImporterInput[]
    connectOrCreate?: LCCreateOrConnectWithoutImporterInput | LCCreateOrConnectWithoutImporterInput[]
    createMany?: LCCreateManyImporterInputEnvelope
    connect?: LCWhereUniqueInput | LCWhereUniqueInput[]
  }

  export type LCUncheckedCreateNestedManyWithoutExporterInput = {
    create?: XOR<LCCreateWithoutExporterInput, LCUncheckedCreateWithoutExporterInput> | LCCreateWithoutExporterInput[] | LCUncheckedCreateWithoutExporterInput[]
    connectOrCreate?: LCCreateOrConnectWithoutExporterInput | LCCreateOrConnectWithoutExporterInput[]
    createMany?: LCCreateManyExporterInputEnvelope
    connect?: LCWhereUniqueInput | LCWhereUniqueInput[]
  }

  export type LCUncheckedCreateNestedManyWithoutBankInput = {
    create?: XOR<LCCreateWithoutBankInput, LCUncheckedCreateWithoutBankInput> | LCCreateWithoutBankInput[] | LCUncheckedCreateWithoutBankInput[]
    connectOrCreate?: LCCreateOrConnectWithoutBankInput | LCCreateOrConnectWithoutBankInput[]
    createMany?: LCCreateManyBankInputEnvelope
    connect?: LCWhereUniqueInput | LCWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutImporterInput = {
    create?: XOR<ShipmentCreateWithoutImporterInput, ShipmentUncheckedCreateWithoutImporterInput> | ShipmentCreateWithoutImporterInput[] | ShipmentUncheckedCreateWithoutImporterInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutImporterInput | ShipmentCreateOrConnectWithoutImporterInput[]
    createMany?: ShipmentCreateManyImporterInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutExporterInput = {
    create?: XOR<ShipmentCreateWithoutExporterInput, ShipmentUncheckedCreateWithoutExporterInput> | ShipmentCreateWithoutExporterInput[] | ShipmentUncheckedCreateWithoutExporterInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutExporterInput | ShipmentCreateOrConnectWithoutExporterInput[]
    createMany?: ShipmentCreateManyExporterInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutBrokerInput = {
    create?: XOR<ShipmentCreateWithoutBrokerInput, ShipmentUncheckedCreateWithoutBrokerInput> | ShipmentCreateWithoutBrokerInput[] | ShipmentUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutBrokerInput | ShipmentCreateOrConnectWithoutBrokerInput[]
    createMany?: ShipmentCreateManyBrokerInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShipmentEventCreateWithoutUserInput, ShipmentEventUncheckedCreateWithoutUserInput> | ShipmentEventCreateWithoutUserInput[] | ShipmentEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShipmentEventCreateOrConnectWithoutUserInput | ShipmentEventCreateOrConnectWithoutUserInput[]
    createMany?: ShipmentEventCreateManyUserInputEnvelope
    connect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DocumentUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<DocumentCreateWithoutUploadedByInput, DocumentUncheckedCreateWithoutUploadedByInput> | DocumentCreateWithoutUploadedByInput[] | DocumentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUploadedByInput | DocumentCreateOrConnectWithoutUploadedByInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUploadedByInput | DocumentUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: DocumentCreateManyUploadedByInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUploadedByInput | DocumentUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUploadedByInput | DocumentUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DocumentUpdateManyWithoutVerifiedByNestedInput = {
    create?: XOR<DocumentCreateWithoutVerifiedByInput, DocumentUncheckedCreateWithoutVerifiedByInput> | DocumentCreateWithoutVerifiedByInput[] | DocumentUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutVerifiedByInput | DocumentCreateOrConnectWithoutVerifiedByInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutVerifiedByInput | DocumentUpsertWithWhereUniqueWithoutVerifiedByInput[]
    createMany?: DocumentCreateManyVerifiedByInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutVerifiedByInput | DocumentUpdateWithWhereUniqueWithoutVerifiedByInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutVerifiedByInput | DocumentUpdateManyWithWhereWithoutVerifiedByInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput> | ServiceCreateWithoutProviderInput[] | ServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderInput | ServiceCreateOrConnectWithoutProviderInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutProviderInput | ServiceUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ServiceCreateManyProviderInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutProviderInput | ServiceUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutProviderInput | ServiceUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type QuoteRequestUpdateManyWithoutImporterNestedInput = {
    create?: XOR<QuoteRequestCreateWithoutImporterInput, QuoteRequestUncheckedCreateWithoutImporterInput> | QuoteRequestCreateWithoutImporterInput[] | QuoteRequestUncheckedCreateWithoutImporterInput[]
    connectOrCreate?: QuoteRequestCreateOrConnectWithoutImporterInput | QuoteRequestCreateOrConnectWithoutImporterInput[]
    upsert?: QuoteRequestUpsertWithWhereUniqueWithoutImporterInput | QuoteRequestUpsertWithWhereUniqueWithoutImporterInput[]
    createMany?: QuoteRequestCreateManyImporterInputEnvelope
    set?: QuoteRequestWhereUniqueInput | QuoteRequestWhereUniqueInput[]
    disconnect?: QuoteRequestWhereUniqueInput | QuoteRequestWhereUniqueInput[]
    delete?: QuoteRequestWhereUniqueInput | QuoteRequestWhereUniqueInput[]
    connect?: QuoteRequestWhereUniqueInput | QuoteRequestWhereUniqueInput[]
    update?: QuoteRequestUpdateWithWhereUniqueWithoutImporterInput | QuoteRequestUpdateWithWhereUniqueWithoutImporterInput[]
    updateMany?: QuoteRequestUpdateManyWithWhereWithoutImporterInput | QuoteRequestUpdateManyWithWhereWithoutImporterInput[]
    deleteMany?: QuoteRequestScalarWhereInput | QuoteRequestScalarWhereInput[]
  }

  export type QuoteResponseUpdateManyWithoutExporterNestedInput = {
    create?: XOR<QuoteResponseCreateWithoutExporterInput, QuoteResponseUncheckedCreateWithoutExporterInput> | QuoteResponseCreateWithoutExporterInput[] | QuoteResponseUncheckedCreateWithoutExporterInput[]
    connectOrCreate?: QuoteResponseCreateOrConnectWithoutExporterInput | QuoteResponseCreateOrConnectWithoutExporterInput[]
    upsert?: QuoteResponseUpsertWithWhereUniqueWithoutExporterInput | QuoteResponseUpsertWithWhereUniqueWithoutExporterInput[]
    createMany?: QuoteResponseCreateManyExporterInputEnvelope
    set?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    disconnect?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    delete?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    connect?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    update?: QuoteResponseUpdateWithWhereUniqueWithoutExporterInput | QuoteResponseUpdateWithWhereUniqueWithoutExporterInput[]
    updateMany?: QuoteResponseUpdateManyWithWhereWithoutExporterInput | QuoteResponseUpdateManyWithWhereWithoutExporterInput[]
    deleteMany?: QuoteResponseScalarWhereInput | QuoteResponseScalarWhereInput[]
  }

  export type LCUpdateManyWithoutImporterNestedInput = {
    create?: XOR<LCCreateWithoutImporterInput, LCUncheckedCreateWithoutImporterInput> | LCCreateWithoutImporterInput[] | LCUncheckedCreateWithoutImporterInput[]
    connectOrCreate?: LCCreateOrConnectWithoutImporterInput | LCCreateOrConnectWithoutImporterInput[]
    upsert?: LCUpsertWithWhereUniqueWithoutImporterInput | LCUpsertWithWhereUniqueWithoutImporterInput[]
    createMany?: LCCreateManyImporterInputEnvelope
    set?: LCWhereUniqueInput | LCWhereUniqueInput[]
    disconnect?: LCWhereUniqueInput | LCWhereUniqueInput[]
    delete?: LCWhereUniqueInput | LCWhereUniqueInput[]
    connect?: LCWhereUniqueInput | LCWhereUniqueInput[]
    update?: LCUpdateWithWhereUniqueWithoutImporterInput | LCUpdateWithWhereUniqueWithoutImporterInput[]
    updateMany?: LCUpdateManyWithWhereWithoutImporterInput | LCUpdateManyWithWhereWithoutImporterInput[]
    deleteMany?: LCScalarWhereInput | LCScalarWhereInput[]
  }

  export type LCUpdateManyWithoutExporterNestedInput = {
    create?: XOR<LCCreateWithoutExporterInput, LCUncheckedCreateWithoutExporterInput> | LCCreateWithoutExporterInput[] | LCUncheckedCreateWithoutExporterInput[]
    connectOrCreate?: LCCreateOrConnectWithoutExporterInput | LCCreateOrConnectWithoutExporterInput[]
    upsert?: LCUpsertWithWhereUniqueWithoutExporterInput | LCUpsertWithWhereUniqueWithoutExporterInput[]
    createMany?: LCCreateManyExporterInputEnvelope
    set?: LCWhereUniqueInput | LCWhereUniqueInput[]
    disconnect?: LCWhereUniqueInput | LCWhereUniqueInput[]
    delete?: LCWhereUniqueInput | LCWhereUniqueInput[]
    connect?: LCWhereUniqueInput | LCWhereUniqueInput[]
    update?: LCUpdateWithWhereUniqueWithoutExporterInput | LCUpdateWithWhereUniqueWithoutExporterInput[]
    updateMany?: LCUpdateManyWithWhereWithoutExporterInput | LCUpdateManyWithWhereWithoutExporterInput[]
    deleteMany?: LCScalarWhereInput | LCScalarWhereInput[]
  }

  export type LCUpdateManyWithoutBankNestedInput = {
    create?: XOR<LCCreateWithoutBankInput, LCUncheckedCreateWithoutBankInput> | LCCreateWithoutBankInput[] | LCUncheckedCreateWithoutBankInput[]
    connectOrCreate?: LCCreateOrConnectWithoutBankInput | LCCreateOrConnectWithoutBankInput[]
    upsert?: LCUpsertWithWhereUniqueWithoutBankInput | LCUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: LCCreateManyBankInputEnvelope
    set?: LCWhereUniqueInput | LCWhereUniqueInput[]
    disconnect?: LCWhereUniqueInput | LCWhereUniqueInput[]
    delete?: LCWhereUniqueInput | LCWhereUniqueInput[]
    connect?: LCWhereUniqueInput | LCWhereUniqueInput[]
    update?: LCUpdateWithWhereUniqueWithoutBankInput | LCUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: LCUpdateManyWithWhereWithoutBankInput | LCUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: LCScalarWhereInput | LCScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutImporterNestedInput = {
    create?: XOR<ShipmentCreateWithoutImporterInput, ShipmentUncheckedCreateWithoutImporterInput> | ShipmentCreateWithoutImporterInput[] | ShipmentUncheckedCreateWithoutImporterInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutImporterInput | ShipmentCreateOrConnectWithoutImporterInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutImporterInput | ShipmentUpsertWithWhereUniqueWithoutImporterInput[]
    createMany?: ShipmentCreateManyImporterInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutImporterInput | ShipmentUpdateWithWhereUniqueWithoutImporterInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutImporterInput | ShipmentUpdateManyWithWhereWithoutImporterInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutExporterNestedInput = {
    create?: XOR<ShipmentCreateWithoutExporterInput, ShipmentUncheckedCreateWithoutExporterInput> | ShipmentCreateWithoutExporterInput[] | ShipmentUncheckedCreateWithoutExporterInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutExporterInput | ShipmentCreateOrConnectWithoutExporterInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutExporterInput | ShipmentUpsertWithWhereUniqueWithoutExporterInput[]
    createMany?: ShipmentCreateManyExporterInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutExporterInput | ShipmentUpdateWithWhereUniqueWithoutExporterInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutExporterInput | ShipmentUpdateManyWithWhereWithoutExporterInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<ShipmentCreateWithoutBrokerInput, ShipmentUncheckedCreateWithoutBrokerInput> | ShipmentCreateWithoutBrokerInput[] | ShipmentUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutBrokerInput | ShipmentCreateOrConnectWithoutBrokerInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutBrokerInput | ShipmentUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: ShipmentCreateManyBrokerInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutBrokerInput | ShipmentUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutBrokerInput | ShipmentUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShipmentEventCreateWithoutUserInput, ShipmentEventUncheckedCreateWithoutUserInput> | ShipmentEventCreateWithoutUserInput[] | ShipmentEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShipmentEventCreateOrConnectWithoutUserInput | ShipmentEventCreateOrConnectWithoutUserInput[]
    upsert?: ShipmentEventUpsertWithWhereUniqueWithoutUserInput | ShipmentEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShipmentEventCreateManyUserInputEnvelope
    set?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    disconnect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    delete?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    connect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    update?: ShipmentEventUpdateWithWhereUniqueWithoutUserInput | ShipmentEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShipmentEventUpdateManyWithWhereWithoutUserInput | ShipmentEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShipmentEventScalarWhereInput | ShipmentEventScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<DocumentCreateWithoutUploadedByInput, DocumentUncheckedCreateWithoutUploadedByInput> | DocumentCreateWithoutUploadedByInput[] | DocumentUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutUploadedByInput | DocumentCreateOrConnectWithoutUploadedByInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutUploadedByInput | DocumentUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: DocumentCreateManyUploadedByInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutUploadedByInput | DocumentUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutUploadedByInput | DocumentUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput = {
    create?: XOR<DocumentCreateWithoutVerifiedByInput, DocumentUncheckedCreateWithoutVerifiedByInput> | DocumentCreateWithoutVerifiedByInput[] | DocumentUncheckedCreateWithoutVerifiedByInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutVerifiedByInput | DocumentCreateOrConnectWithoutVerifiedByInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutVerifiedByInput | DocumentUpsertWithWhereUniqueWithoutVerifiedByInput[]
    createMany?: DocumentCreateManyVerifiedByInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutVerifiedByInput | DocumentUpdateWithWhereUniqueWithoutVerifiedByInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutVerifiedByInput | DocumentUpdateManyWithWhereWithoutVerifiedByInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput> | ServiceCreateWithoutProviderInput[] | ServiceUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutProviderInput | ServiceCreateOrConnectWithoutProviderInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutProviderInput | ServiceUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ServiceCreateManyProviderInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutProviderInput | ServiceUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutProviderInput | ServiceUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput = {
    create?: XOR<QuoteRequestCreateWithoutImporterInput, QuoteRequestUncheckedCreateWithoutImporterInput> | QuoteRequestCreateWithoutImporterInput[] | QuoteRequestUncheckedCreateWithoutImporterInput[]
    connectOrCreate?: QuoteRequestCreateOrConnectWithoutImporterInput | QuoteRequestCreateOrConnectWithoutImporterInput[]
    upsert?: QuoteRequestUpsertWithWhereUniqueWithoutImporterInput | QuoteRequestUpsertWithWhereUniqueWithoutImporterInput[]
    createMany?: QuoteRequestCreateManyImporterInputEnvelope
    set?: QuoteRequestWhereUniqueInput | QuoteRequestWhereUniqueInput[]
    disconnect?: QuoteRequestWhereUniqueInput | QuoteRequestWhereUniqueInput[]
    delete?: QuoteRequestWhereUniqueInput | QuoteRequestWhereUniqueInput[]
    connect?: QuoteRequestWhereUniqueInput | QuoteRequestWhereUniqueInput[]
    update?: QuoteRequestUpdateWithWhereUniqueWithoutImporterInput | QuoteRequestUpdateWithWhereUniqueWithoutImporterInput[]
    updateMany?: QuoteRequestUpdateManyWithWhereWithoutImporterInput | QuoteRequestUpdateManyWithWhereWithoutImporterInput[]
    deleteMany?: QuoteRequestScalarWhereInput | QuoteRequestScalarWhereInput[]
  }

  export type QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput = {
    create?: XOR<QuoteResponseCreateWithoutExporterInput, QuoteResponseUncheckedCreateWithoutExporterInput> | QuoteResponseCreateWithoutExporterInput[] | QuoteResponseUncheckedCreateWithoutExporterInput[]
    connectOrCreate?: QuoteResponseCreateOrConnectWithoutExporterInput | QuoteResponseCreateOrConnectWithoutExporterInput[]
    upsert?: QuoteResponseUpsertWithWhereUniqueWithoutExporterInput | QuoteResponseUpsertWithWhereUniqueWithoutExporterInput[]
    createMany?: QuoteResponseCreateManyExporterInputEnvelope
    set?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    disconnect?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    delete?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    connect?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    update?: QuoteResponseUpdateWithWhereUniqueWithoutExporterInput | QuoteResponseUpdateWithWhereUniqueWithoutExporterInput[]
    updateMany?: QuoteResponseUpdateManyWithWhereWithoutExporterInput | QuoteResponseUpdateManyWithWhereWithoutExporterInput[]
    deleteMany?: QuoteResponseScalarWhereInput | QuoteResponseScalarWhereInput[]
  }

  export type LCUncheckedUpdateManyWithoutImporterNestedInput = {
    create?: XOR<LCCreateWithoutImporterInput, LCUncheckedCreateWithoutImporterInput> | LCCreateWithoutImporterInput[] | LCUncheckedCreateWithoutImporterInput[]
    connectOrCreate?: LCCreateOrConnectWithoutImporterInput | LCCreateOrConnectWithoutImporterInput[]
    upsert?: LCUpsertWithWhereUniqueWithoutImporterInput | LCUpsertWithWhereUniqueWithoutImporterInput[]
    createMany?: LCCreateManyImporterInputEnvelope
    set?: LCWhereUniqueInput | LCWhereUniqueInput[]
    disconnect?: LCWhereUniqueInput | LCWhereUniqueInput[]
    delete?: LCWhereUniqueInput | LCWhereUniqueInput[]
    connect?: LCWhereUniqueInput | LCWhereUniqueInput[]
    update?: LCUpdateWithWhereUniqueWithoutImporterInput | LCUpdateWithWhereUniqueWithoutImporterInput[]
    updateMany?: LCUpdateManyWithWhereWithoutImporterInput | LCUpdateManyWithWhereWithoutImporterInput[]
    deleteMany?: LCScalarWhereInput | LCScalarWhereInput[]
  }

  export type LCUncheckedUpdateManyWithoutExporterNestedInput = {
    create?: XOR<LCCreateWithoutExporterInput, LCUncheckedCreateWithoutExporterInput> | LCCreateWithoutExporterInput[] | LCUncheckedCreateWithoutExporterInput[]
    connectOrCreate?: LCCreateOrConnectWithoutExporterInput | LCCreateOrConnectWithoutExporterInput[]
    upsert?: LCUpsertWithWhereUniqueWithoutExporterInput | LCUpsertWithWhereUniqueWithoutExporterInput[]
    createMany?: LCCreateManyExporterInputEnvelope
    set?: LCWhereUniqueInput | LCWhereUniqueInput[]
    disconnect?: LCWhereUniqueInput | LCWhereUniqueInput[]
    delete?: LCWhereUniqueInput | LCWhereUniqueInput[]
    connect?: LCWhereUniqueInput | LCWhereUniqueInput[]
    update?: LCUpdateWithWhereUniqueWithoutExporterInput | LCUpdateWithWhereUniqueWithoutExporterInput[]
    updateMany?: LCUpdateManyWithWhereWithoutExporterInput | LCUpdateManyWithWhereWithoutExporterInput[]
    deleteMany?: LCScalarWhereInput | LCScalarWhereInput[]
  }

  export type LCUncheckedUpdateManyWithoutBankNestedInput = {
    create?: XOR<LCCreateWithoutBankInput, LCUncheckedCreateWithoutBankInput> | LCCreateWithoutBankInput[] | LCUncheckedCreateWithoutBankInput[]
    connectOrCreate?: LCCreateOrConnectWithoutBankInput | LCCreateOrConnectWithoutBankInput[]
    upsert?: LCUpsertWithWhereUniqueWithoutBankInput | LCUpsertWithWhereUniqueWithoutBankInput[]
    createMany?: LCCreateManyBankInputEnvelope
    set?: LCWhereUniqueInput | LCWhereUniqueInput[]
    disconnect?: LCWhereUniqueInput | LCWhereUniqueInput[]
    delete?: LCWhereUniqueInput | LCWhereUniqueInput[]
    connect?: LCWhereUniqueInput | LCWhereUniqueInput[]
    update?: LCUpdateWithWhereUniqueWithoutBankInput | LCUpdateWithWhereUniqueWithoutBankInput[]
    updateMany?: LCUpdateManyWithWhereWithoutBankInput | LCUpdateManyWithWhereWithoutBankInput[]
    deleteMany?: LCScalarWhereInput | LCScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutImporterNestedInput = {
    create?: XOR<ShipmentCreateWithoutImporterInput, ShipmentUncheckedCreateWithoutImporterInput> | ShipmentCreateWithoutImporterInput[] | ShipmentUncheckedCreateWithoutImporterInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutImporterInput | ShipmentCreateOrConnectWithoutImporterInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutImporterInput | ShipmentUpsertWithWhereUniqueWithoutImporterInput[]
    createMany?: ShipmentCreateManyImporterInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutImporterInput | ShipmentUpdateWithWhereUniqueWithoutImporterInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutImporterInput | ShipmentUpdateManyWithWhereWithoutImporterInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutExporterNestedInput = {
    create?: XOR<ShipmentCreateWithoutExporterInput, ShipmentUncheckedCreateWithoutExporterInput> | ShipmentCreateWithoutExporterInput[] | ShipmentUncheckedCreateWithoutExporterInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutExporterInput | ShipmentCreateOrConnectWithoutExporterInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutExporterInput | ShipmentUpsertWithWhereUniqueWithoutExporterInput[]
    createMany?: ShipmentCreateManyExporterInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutExporterInput | ShipmentUpdateWithWhereUniqueWithoutExporterInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutExporterInput | ShipmentUpdateManyWithWhereWithoutExporterInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<ShipmentCreateWithoutBrokerInput, ShipmentUncheckedCreateWithoutBrokerInput> | ShipmentCreateWithoutBrokerInput[] | ShipmentUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutBrokerInput | ShipmentCreateOrConnectWithoutBrokerInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutBrokerInput | ShipmentUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: ShipmentCreateManyBrokerInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutBrokerInput | ShipmentUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutBrokerInput | ShipmentUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShipmentEventCreateWithoutUserInput, ShipmentEventUncheckedCreateWithoutUserInput> | ShipmentEventCreateWithoutUserInput[] | ShipmentEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShipmentEventCreateOrConnectWithoutUserInput | ShipmentEventCreateOrConnectWithoutUserInput[]
    upsert?: ShipmentEventUpsertWithWhereUniqueWithoutUserInput | ShipmentEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ShipmentEventCreateManyUserInputEnvelope
    set?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    disconnect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    delete?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    connect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    update?: ShipmentEventUpdateWithWhereUniqueWithoutUserInput | ShipmentEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShipmentEventUpdateManyWithWhereWithoutUserInput | ShipmentEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShipmentEventScalarWhereInput | ShipmentEventScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutServicesInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    connect?: UserWhereUniqueInput
  }

  export type ShipmentCreateNestedManyWithoutServiceInput = {
    create?: XOR<ShipmentCreateWithoutServiceInput, ShipmentUncheckedCreateWithoutServiceInput> | ShipmentCreateWithoutServiceInput[] | ShipmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutServiceInput | ShipmentCreateOrConnectWithoutServiceInput[]
    createMany?: ShipmentCreateManyServiceInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ShipmentCreateWithoutServiceInput, ShipmentUncheckedCreateWithoutServiceInput> | ShipmentCreateWithoutServiceInput[] | ShipmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutServiceInput | ShipmentCreateOrConnectWithoutServiceInput[]
    createMany?: ShipmentCreateManyServiceInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    upsert?: UserUpsertWithoutServicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServicesInput, UserUpdateWithoutServicesInput>, UserUncheckedUpdateWithoutServicesInput>
  }

  export type ShipmentUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ShipmentCreateWithoutServiceInput, ShipmentUncheckedCreateWithoutServiceInput> | ShipmentCreateWithoutServiceInput[] | ShipmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutServiceInput | ShipmentCreateOrConnectWithoutServiceInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutServiceInput | ShipmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ShipmentCreateManyServiceInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutServiceInput | ShipmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutServiceInput | ShipmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ShipmentCreateWithoutServiceInput, ShipmentUncheckedCreateWithoutServiceInput> | ShipmentCreateWithoutServiceInput[] | ShipmentUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutServiceInput | ShipmentCreateOrConnectWithoutServiceInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutServiceInput | ShipmentUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ShipmentCreateManyServiceInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutServiceInput | ShipmentUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutServiceInput | ShipmentUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutQuoteRequestsInput = {
    create?: XOR<UserCreateWithoutQuoteRequestsInput, UserUncheckedCreateWithoutQuoteRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuoteRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type QuoteResponseCreateNestedManyWithoutQuoteRequestInput = {
    create?: XOR<QuoteResponseCreateWithoutQuoteRequestInput, QuoteResponseUncheckedCreateWithoutQuoteRequestInput> | QuoteResponseCreateWithoutQuoteRequestInput[] | QuoteResponseUncheckedCreateWithoutQuoteRequestInput[]
    connectOrCreate?: QuoteResponseCreateOrConnectWithoutQuoteRequestInput | QuoteResponseCreateOrConnectWithoutQuoteRequestInput[]
    createMany?: QuoteResponseCreateManyQuoteRequestInputEnvelope
    connect?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
  }

  export type QuoteResponseUncheckedCreateNestedManyWithoutQuoteRequestInput = {
    create?: XOR<QuoteResponseCreateWithoutQuoteRequestInput, QuoteResponseUncheckedCreateWithoutQuoteRequestInput> | QuoteResponseCreateWithoutQuoteRequestInput[] | QuoteResponseUncheckedCreateWithoutQuoteRequestInput[]
    connectOrCreate?: QuoteResponseCreateOrConnectWithoutQuoteRequestInput | QuoteResponseCreateOrConnectWithoutQuoteRequestInput[]
    createMany?: QuoteResponseCreateManyQuoteRequestInputEnvelope
    connect?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutQuoteRequestsNestedInput = {
    create?: XOR<UserCreateWithoutQuoteRequestsInput, UserUncheckedCreateWithoutQuoteRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuoteRequestsInput
    upsert?: UserUpsertWithoutQuoteRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuoteRequestsInput, UserUpdateWithoutQuoteRequestsInput>, UserUncheckedUpdateWithoutQuoteRequestsInput>
  }

  export type QuoteResponseUpdateManyWithoutQuoteRequestNestedInput = {
    create?: XOR<QuoteResponseCreateWithoutQuoteRequestInput, QuoteResponseUncheckedCreateWithoutQuoteRequestInput> | QuoteResponseCreateWithoutQuoteRequestInput[] | QuoteResponseUncheckedCreateWithoutQuoteRequestInput[]
    connectOrCreate?: QuoteResponseCreateOrConnectWithoutQuoteRequestInput | QuoteResponseCreateOrConnectWithoutQuoteRequestInput[]
    upsert?: QuoteResponseUpsertWithWhereUniqueWithoutQuoteRequestInput | QuoteResponseUpsertWithWhereUniqueWithoutQuoteRequestInput[]
    createMany?: QuoteResponseCreateManyQuoteRequestInputEnvelope
    set?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    disconnect?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    delete?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    connect?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    update?: QuoteResponseUpdateWithWhereUniqueWithoutQuoteRequestInput | QuoteResponseUpdateWithWhereUniqueWithoutQuoteRequestInput[]
    updateMany?: QuoteResponseUpdateManyWithWhereWithoutQuoteRequestInput | QuoteResponseUpdateManyWithWhereWithoutQuoteRequestInput[]
    deleteMany?: QuoteResponseScalarWhereInput | QuoteResponseScalarWhereInput[]
  }

  export type QuoteResponseUncheckedUpdateManyWithoutQuoteRequestNestedInput = {
    create?: XOR<QuoteResponseCreateWithoutQuoteRequestInput, QuoteResponseUncheckedCreateWithoutQuoteRequestInput> | QuoteResponseCreateWithoutQuoteRequestInput[] | QuoteResponseUncheckedCreateWithoutQuoteRequestInput[]
    connectOrCreate?: QuoteResponseCreateOrConnectWithoutQuoteRequestInput | QuoteResponseCreateOrConnectWithoutQuoteRequestInput[]
    upsert?: QuoteResponseUpsertWithWhereUniqueWithoutQuoteRequestInput | QuoteResponseUpsertWithWhereUniqueWithoutQuoteRequestInput[]
    createMany?: QuoteResponseCreateManyQuoteRequestInputEnvelope
    set?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    disconnect?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    delete?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    connect?: QuoteResponseWhereUniqueInput | QuoteResponseWhereUniqueInput[]
    update?: QuoteResponseUpdateWithWhereUniqueWithoutQuoteRequestInput | QuoteResponseUpdateWithWhereUniqueWithoutQuoteRequestInput[]
    updateMany?: QuoteResponseUpdateManyWithWhereWithoutQuoteRequestInput | QuoteResponseUpdateManyWithWhereWithoutQuoteRequestInput[]
    deleteMany?: QuoteResponseScalarWhereInput | QuoteResponseScalarWhereInput[]
  }

  export type QuoteRequestCreateNestedOneWithoutResponsesInput = {
    create?: XOR<QuoteRequestCreateWithoutResponsesInput, QuoteRequestUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuoteRequestCreateOrConnectWithoutResponsesInput
    connect?: QuoteRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuoteResponsesInput = {
    create?: XOR<UserCreateWithoutQuoteResponsesInput, UserUncheckedCreateWithoutQuoteResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuoteResponsesInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuoteRequestUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<QuoteRequestCreateWithoutResponsesInput, QuoteRequestUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: QuoteRequestCreateOrConnectWithoutResponsesInput
    upsert?: QuoteRequestUpsertWithoutResponsesInput
    connect?: QuoteRequestWhereUniqueInput
    update?: XOR<XOR<QuoteRequestUpdateToOneWithWhereWithoutResponsesInput, QuoteRequestUpdateWithoutResponsesInput>, QuoteRequestUncheckedUpdateWithoutResponsesInput>
  }

  export type UserUpdateOneRequiredWithoutQuoteResponsesNestedInput = {
    create?: XOR<UserCreateWithoutQuoteResponsesInput, UserUncheckedCreateWithoutQuoteResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuoteResponsesInput
    upsert?: UserUpsertWithoutQuoteResponsesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuoteResponsesInput, UserUpdateWithoutQuoteResponsesInput>, UserUncheckedUpdateWithoutQuoteResponsesInput>
  }

  export type UserCreateNestedOneWithoutLettersOfCreditAsImporterInput = {
    create?: XOR<UserCreateWithoutLettersOfCreditAsImporterInput, UserUncheckedCreateWithoutLettersOfCreditAsImporterInput>
    connectOrCreate?: UserCreateOrConnectWithoutLettersOfCreditAsImporterInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLettersOfCreditAsExporterInput = {
    create?: XOR<UserCreateWithoutLettersOfCreditAsExporterInput, UserUncheckedCreateWithoutLettersOfCreditAsExporterInput>
    connectOrCreate?: UserCreateOrConnectWithoutLettersOfCreditAsExporterInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLettersOfCreditAsBankInput = {
    create?: XOR<UserCreateWithoutLettersOfCreditAsBankInput, UserUncheckedCreateWithoutLettersOfCreditAsBankInput>
    connectOrCreate?: UserCreateOrConnectWithoutLettersOfCreditAsBankInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutLcInput = {
    create?: XOR<DocumentCreateWithoutLcInput, DocumentUncheckedCreateWithoutLcInput> | DocumentCreateWithoutLcInput[] | DocumentUncheckedCreateWithoutLcInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutLcInput | DocumentCreateOrConnectWithoutLcInput[]
    createMany?: DocumentCreateManyLcInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutLcInput = {
    create?: XOR<DocumentCreateWithoutLcInput, DocumentUncheckedCreateWithoutLcInput> | DocumentCreateWithoutLcInput[] | DocumentUncheckedCreateWithoutLcInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutLcInput | DocumentCreateOrConnectWithoutLcInput[]
    createMany?: DocumentCreateManyLcInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type EnumLCStatusFieldUpdateOperationsInput = {
    set?: $Enums.LCStatus
  }

  export type UserUpdateOneRequiredWithoutLettersOfCreditAsImporterNestedInput = {
    create?: XOR<UserCreateWithoutLettersOfCreditAsImporterInput, UserUncheckedCreateWithoutLettersOfCreditAsImporterInput>
    connectOrCreate?: UserCreateOrConnectWithoutLettersOfCreditAsImporterInput
    upsert?: UserUpsertWithoutLettersOfCreditAsImporterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLettersOfCreditAsImporterInput, UserUpdateWithoutLettersOfCreditAsImporterInput>, UserUncheckedUpdateWithoutLettersOfCreditAsImporterInput>
  }

  export type UserUpdateOneRequiredWithoutLettersOfCreditAsExporterNestedInput = {
    create?: XOR<UserCreateWithoutLettersOfCreditAsExporterInput, UserUncheckedCreateWithoutLettersOfCreditAsExporterInput>
    connectOrCreate?: UserCreateOrConnectWithoutLettersOfCreditAsExporterInput
    upsert?: UserUpsertWithoutLettersOfCreditAsExporterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLettersOfCreditAsExporterInput, UserUpdateWithoutLettersOfCreditAsExporterInput>, UserUncheckedUpdateWithoutLettersOfCreditAsExporterInput>
  }

  export type UserUpdateOneRequiredWithoutLettersOfCreditAsBankNestedInput = {
    create?: XOR<UserCreateWithoutLettersOfCreditAsBankInput, UserUncheckedCreateWithoutLettersOfCreditAsBankInput>
    connectOrCreate?: UserCreateOrConnectWithoutLettersOfCreditAsBankInput
    upsert?: UserUpsertWithoutLettersOfCreditAsBankInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLettersOfCreditAsBankInput, UserUpdateWithoutLettersOfCreditAsBankInput>, UserUncheckedUpdateWithoutLettersOfCreditAsBankInput>
  }

  export type DocumentUpdateManyWithoutLcNestedInput = {
    create?: XOR<DocumentCreateWithoutLcInput, DocumentUncheckedCreateWithoutLcInput> | DocumentCreateWithoutLcInput[] | DocumentUncheckedCreateWithoutLcInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutLcInput | DocumentCreateOrConnectWithoutLcInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutLcInput | DocumentUpsertWithWhereUniqueWithoutLcInput[]
    createMany?: DocumentCreateManyLcInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutLcInput | DocumentUpdateWithWhereUniqueWithoutLcInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutLcInput | DocumentUpdateManyWithWhereWithoutLcInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutLcNestedInput = {
    create?: XOR<DocumentCreateWithoutLcInput, DocumentUncheckedCreateWithoutLcInput> | DocumentCreateWithoutLcInput[] | DocumentUncheckedCreateWithoutLcInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutLcInput | DocumentCreateOrConnectWithoutLcInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutLcInput | DocumentUpsertWithWhereUniqueWithoutLcInput[]
    createMany?: DocumentCreateManyLcInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutLcInput | DocumentUpdateWithWhereUniqueWithoutLcInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutLcInput | DocumentUpdateManyWithWhereWithoutLcInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutShipmentsAsImporterInput = {
    create?: XOR<UserCreateWithoutShipmentsAsImporterInput, UserUncheckedCreateWithoutShipmentsAsImporterInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentsAsImporterInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutShipmentsAsExporterInput = {
    create?: XOR<UserCreateWithoutShipmentsAsExporterInput, UserUncheckedCreateWithoutShipmentsAsExporterInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentsAsExporterInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutShipmentsAsBrokerInput = {
    create?: XOR<UserCreateWithoutShipmentsAsBrokerInput, UserUncheckedCreateWithoutShipmentsAsBrokerInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentsAsBrokerInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<ServiceCreateWithoutShipmentsInput, ServiceUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutShipmentsInput
    connect?: ServiceWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutShipmentInput = {
    create?: XOR<DocumentCreateWithoutShipmentInput, DocumentUncheckedCreateWithoutShipmentInput> | DocumentCreateWithoutShipmentInput[] | DocumentUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutShipmentInput | DocumentCreateOrConnectWithoutShipmentInput[]
    createMany?: DocumentCreateManyShipmentInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ShipmentEventCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ShipmentEventCreateWithoutShipmentInput, ShipmentEventUncheckedCreateWithoutShipmentInput> | ShipmentEventCreateWithoutShipmentInput[] | ShipmentEventUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentEventCreateOrConnectWithoutShipmentInput | ShipmentEventCreateOrConnectWithoutShipmentInput[]
    createMany?: ShipmentEventCreateManyShipmentInputEnvelope
    connect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<DocumentCreateWithoutShipmentInput, DocumentUncheckedCreateWithoutShipmentInput> | DocumentCreateWithoutShipmentInput[] | DocumentUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutShipmentInput | DocumentCreateOrConnectWithoutShipmentInput[]
    createMany?: DocumentCreateManyShipmentInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ShipmentEventCreateWithoutShipmentInput, ShipmentEventUncheckedCreateWithoutShipmentInput> | ShipmentEventCreateWithoutShipmentInput[] | ShipmentEventUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentEventCreateOrConnectWithoutShipmentInput | ShipmentEventCreateOrConnectWithoutShipmentInput[]
    createMany?: ShipmentEventCreateManyShipmentInputEnvelope
    connect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
  }

  export type EnumShipmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShipmentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutShipmentsAsImporterNestedInput = {
    create?: XOR<UserCreateWithoutShipmentsAsImporterInput, UserUncheckedCreateWithoutShipmentsAsImporterInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentsAsImporterInput
    upsert?: UserUpsertWithoutShipmentsAsImporterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShipmentsAsImporterInput, UserUpdateWithoutShipmentsAsImporterInput>, UserUncheckedUpdateWithoutShipmentsAsImporterInput>
  }

  export type UserUpdateOneRequiredWithoutShipmentsAsExporterNestedInput = {
    create?: XOR<UserCreateWithoutShipmentsAsExporterInput, UserUncheckedCreateWithoutShipmentsAsExporterInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentsAsExporterInput
    upsert?: UserUpsertWithoutShipmentsAsExporterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShipmentsAsExporterInput, UserUpdateWithoutShipmentsAsExporterInput>, UserUncheckedUpdateWithoutShipmentsAsExporterInput>
  }

  export type UserUpdateOneWithoutShipmentsAsBrokerNestedInput = {
    create?: XOR<UserCreateWithoutShipmentsAsBrokerInput, UserUncheckedCreateWithoutShipmentsAsBrokerInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentsAsBrokerInput
    upsert?: UserUpsertWithoutShipmentsAsBrokerInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShipmentsAsBrokerInput, UserUpdateWithoutShipmentsAsBrokerInput>, UserUncheckedUpdateWithoutShipmentsAsBrokerInput>
  }

  export type ServiceUpdateOneWithoutShipmentsNestedInput = {
    create?: XOR<ServiceCreateWithoutShipmentsInput, ServiceUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutShipmentsInput
    upsert?: ServiceUpsertWithoutShipmentsInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutShipmentsInput, ServiceUpdateWithoutShipmentsInput>, ServiceUncheckedUpdateWithoutShipmentsInput>
  }

  export type DocumentUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<DocumentCreateWithoutShipmentInput, DocumentUncheckedCreateWithoutShipmentInput> | DocumentCreateWithoutShipmentInput[] | DocumentUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutShipmentInput | DocumentCreateOrConnectWithoutShipmentInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutShipmentInput | DocumentUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: DocumentCreateManyShipmentInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutShipmentInput | DocumentUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutShipmentInput | DocumentUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ShipmentEventUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ShipmentEventCreateWithoutShipmentInput, ShipmentEventUncheckedCreateWithoutShipmentInput> | ShipmentEventCreateWithoutShipmentInput[] | ShipmentEventUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentEventCreateOrConnectWithoutShipmentInput | ShipmentEventCreateOrConnectWithoutShipmentInput[]
    upsert?: ShipmentEventUpsertWithWhereUniqueWithoutShipmentInput | ShipmentEventUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ShipmentEventCreateManyShipmentInputEnvelope
    set?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    disconnect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    delete?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    connect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    update?: ShipmentEventUpdateWithWhereUniqueWithoutShipmentInput | ShipmentEventUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ShipmentEventUpdateManyWithWhereWithoutShipmentInput | ShipmentEventUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ShipmentEventScalarWhereInput | ShipmentEventScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<DocumentCreateWithoutShipmentInput, DocumentUncheckedCreateWithoutShipmentInput> | DocumentCreateWithoutShipmentInput[] | DocumentUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutShipmentInput | DocumentCreateOrConnectWithoutShipmentInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutShipmentInput | DocumentUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: DocumentCreateManyShipmentInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutShipmentInput | DocumentUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutShipmentInput | DocumentUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ShipmentEventCreateWithoutShipmentInput, ShipmentEventUncheckedCreateWithoutShipmentInput> | ShipmentEventCreateWithoutShipmentInput[] | ShipmentEventUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentEventCreateOrConnectWithoutShipmentInput | ShipmentEventCreateOrConnectWithoutShipmentInput[]
    upsert?: ShipmentEventUpsertWithWhereUniqueWithoutShipmentInput | ShipmentEventUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ShipmentEventCreateManyShipmentInputEnvelope
    set?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    disconnect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    delete?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    connect?: ShipmentEventWhereUniqueInput | ShipmentEventWhereUniqueInput[]
    update?: ShipmentEventUpdateWithWhereUniqueWithoutShipmentInput | ShipmentEventUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ShipmentEventUpdateManyWithWhereWithoutShipmentInput | ShipmentEventUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ShipmentEventScalarWhereInput | ShipmentEventScalarWhereInput[]
  }

  export type ShipmentCreateNestedOneWithoutEventsInput = {
    create?: XOR<ShipmentCreateWithoutEventsInput, ShipmentUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutEventsInput
    connect?: ShipmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutShipmentEventsInput = {
    create?: XOR<UserCreateWithoutShipmentEventsInput, UserUncheckedCreateWithoutShipmentEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumShipmentEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.ShipmentEventType
  }

  export type ShipmentUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<ShipmentCreateWithoutEventsInput, ShipmentUncheckedCreateWithoutEventsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutEventsInput
    upsert?: ShipmentUpsertWithoutEventsInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutEventsInput, ShipmentUpdateWithoutEventsInput>, ShipmentUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateOneWithoutShipmentEventsNestedInput = {
    create?: XOR<UserCreateWithoutShipmentEventsInput, UserUncheckedCreateWithoutShipmentEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutShipmentEventsInput
    upsert?: UserUpsertWithoutShipmentEventsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutShipmentEventsInput, UserUpdateWithoutShipmentEventsInput>, UserUncheckedUpdateWithoutShipmentEventsInput>
  }

  export type UserCreateNestedOneWithoutUploadedDocumentsInput = {
    create?: XOR<UserCreateWithoutUploadedDocumentsInput, UserUncheckedCreateWithoutUploadedDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutVerifiedDocumentsInput = {
    create?: XOR<UserCreateWithoutVerifiedDocumentsInput, UserUncheckedCreateWithoutVerifiedDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type ShipmentCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<ShipmentCreateWithoutDocumentsInput, ShipmentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutDocumentsInput
    connect?: ShipmentWhereUniqueInput
  }

  export type LCCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<LCCreateWithoutDocumentsInput, LCUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: LCCreateOrConnectWithoutDocumentsInput
    connect?: LCWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUploadedDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutUploadedDocumentsInput, UserUncheckedCreateWithoutUploadedDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUploadedDocumentsInput
    upsert?: UserUpsertWithoutUploadedDocumentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUploadedDocumentsInput, UserUpdateWithoutUploadedDocumentsInput>, UserUncheckedUpdateWithoutUploadedDocumentsInput>
  }

  export type UserUpdateOneWithoutVerifiedDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutVerifiedDocumentsInput, UserUncheckedCreateWithoutVerifiedDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutVerifiedDocumentsInput
    upsert?: UserUpsertWithoutVerifiedDocumentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVerifiedDocumentsInput, UserUpdateWithoutVerifiedDocumentsInput>, UserUncheckedUpdateWithoutVerifiedDocumentsInput>
  }

  export type ShipmentUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<ShipmentCreateWithoutDocumentsInput, ShipmentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutDocumentsInput
    upsert?: ShipmentUpsertWithoutDocumentsInput
    disconnect?: ShipmentWhereInput | boolean
    delete?: ShipmentWhereInput | boolean
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutDocumentsInput, ShipmentUpdateWithoutDocumentsInput>, ShipmentUncheckedUpdateWithoutDocumentsInput>
  }

  export type LCUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<LCCreateWithoutDocumentsInput, LCUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: LCCreateOrConnectWithoutDocumentsInput
    upsert?: LCUpsertWithoutDocumentsInput
    disconnect?: LCWhereInput | boolean
    delete?: LCWhereInput | boolean
    connect?: LCWhereUniqueInput
    update?: XOR<XOR<LCUpdateToOneWithWhereWithoutDocumentsInput, LCUpdateWithoutDocumentsInput>, LCUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLCStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LCStatus | EnumLCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LCStatus[] | ListEnumLCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LCStatus[] | ListEnumLCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLCStatusFilter<$PrismaModel> | $Enums.LCStatus
  }

  export type NestedEnumLCStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LCStatus | EnumLCStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LCStatus[] | ListEnumLCStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LCStatus[] | ListEnumLCStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLCStatusWithAggregatesFilter<$PrismaModel> | $Enums.LCStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLCStatusFilter<$PrismaModel>
    _max?: NestedEnumLCStatusFilter<$PrismaModel>
  }

  export type NestedEnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumShipmentEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentEventType | EnumShipmentEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentEventType[] | ListEnumShipmentEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentEventType[] | ListEnumShipmentEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentEventTypeFilter<$PrismaModel> | $Enums.ShipmentEventType
  }

  export type NestedEnumShipmentEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentEventType | EnumShipmentEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentEventType[] | ListEnumShipmentEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentEventType[] | ListEnumShipmentEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentEventTypeFilter<$PrismaModel>
    _max?: NestedEnumShipmentEventTypeFilter<$PrismaModel>
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DocumentType[] | ListEnumDocumentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DocumentCreateWithoutUploadedByInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    verifiedBy?: UserCreateNestedOneWithoutVerifiedDocumentsInput
    shipment?: ShipmentCreateNestedOneWithoutDocumentsInput
    lc?: LCCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutUploadedByInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    verifiedById?: string | null
    shipmentId?: string | null
    lcId?: string | null
  }

  export type DocumentCreateOrConnectWithoutUploadedByInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutUploadedByInput, DocumentUncheckedCreateWithoutUploadedByInput>
  }

  export type DocumentCreateManyUploadedByInputEnvelope = {
    data: DocumentCreateManyUploadedByInput | DocumentCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type DocumentCreateWithoutVerifiedByInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutUploadedDocumentsInput
    shipment?: ShipmentCreateNestedOneWithoutDocumentsInput
    lc?: LCCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutVerifiedByInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    uploadedById: string
    shipmentId?: string | null
    lcId?: string | null
  }

  export type DocumentCreateOrConnectWithoutVerifiedByInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutVerifiedByInput, DocumentUncheckedCreateWithoutVerifiedByInput>
  }

  export type DocumentCreateManyVerifiedByInputEnvelope = {
    data: DocumentCreateManyVerifiedByInput | DocumentCreateManyVerifiedByInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutProviderInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    createdAt?: Date | string
    shipments?: ShipmentCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutProviderInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    createdAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutProviderInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput>
  }

  export type ServiceCreateManyProviderInputEnvelope = {
    data: ServiceCreateManyProviderInput | ServiceCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type QuoteRequestCreateWithoutImporterInput = {
    id?: string
    productName: string
    quantity: number
    unit?: string | null
    incoterm?: string | null
    originCountry?: string | null
    destCountry?: string | null
    createdAt?: Date | string
    responses?: QuoteResponseCreateNestedManyWithoutQuoteRequestInput
  }

  export type QuoteRequestUncheckedCreateWithoutImporterInput = {
    id?: string
    productName: string
    quantity: number
    unit?: string | null
    incoterm?: string | null
    originCountry?: string | null
    destCountry?: string | null
    createdAt?: Date | string
    responses?: QuoteResponseUncheckedCreateNestedManyWithoutQuoteRequestInput
  }

  export type QuoteRequestCreateOrConnectWithoutImporterInput = {
    where: QuoteRequestWhereUniqueInput
    create: XOR<QuoteRequestCreateWithoutImporterInput, QuoteRequestUncheckedCreateWithoutImporterInput>
  }

  export type QuoteRequestCreateManyImporterInputEnvelope = {
    data: QuoteRequestCreateManyImporterInput | QuoteRequestCreateManyImporterInput[]
    skipDuplicates?: boolean
  }

  export type QuoteResponseCreateWithoutExporterInput = {
    id?: string
    price: number
    validityDays?: number | null
    notes?: string | null
    createdAt?: Date | string
    quoteRequest: QuoteRequestCreateNestedOneWithoutResponsesInput
  }

  export type QuoteResponseUncheckedCreateWithoutExporterInput = {
    id?: string
    quoteRequestId: string
    price: number
    validityDays?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type QuoteResponseCreateOrConnectWithoutExporterInput = {
    where: QuoteResponseWhereUniqueInput
    create: XOR<QuoteResponseCreateWithoutExporterInput, QuoteResponseUncheckedCreateWithoutExporterInput>
  }

  export type QuoteResponseCreateManyExporterInputEnvelope = {
    data: QuoteResponseCreateManyExporterInput | QuoteResponseCreateManyExporterInput[]
    skipDuplicates?: boolean
  }

  export type LCCreateWithoutImporterInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    exporter: UserCreateNestedOneWithoutLettersOfCreditAsExporterInput
    bank: UserCreateNestedOneWithoutLettersOfCreditAsBankInput
    documents?: DocumentCreateNestedManyWithoutLcInput
  }

  export type LCUncheckedCreateWithoutImporterInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    exporterId: string
    bankId: string
    documents?: DocumentUncheckedCreateNestedManyWithoutLcInput
  }

  export type LCCreateOrConnectWithoutImporterInput = {
    where: LCWhereUniqueInput
    create: XOR<LCCreateWithoutImporterInput, LCUncheckedCreateWithoutImporterInput>
  }

  export type LCCreateManyImporterInputEnvelope = {
    data: LCCreateManyImporterInput | LCCreateManyImporterInput[]
    skipDuplicates?: boolean
  }

  export type LCCreateWithoutExporterInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    importer: UserCreateNestedOneWithoutLettersOfCreditAsImporterInput
    bank: UserCreateNestedOneWithoutLettersOfCreditAsBankInput
    documents?: DocumentCreateNestedManyWithoutLcInput
  }

  export type LCUncheckedCreateWithoutExporterInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    importerId: string
    bankId: string
    documents?: DocumentUncheckedCreateNestedManyWithoutLcInput
  }

  export type LCCreateOrConnectWithoutExporterInput = {
    where: LCWhereUniqueInput
    create: XOR<LCCreateWithoutExporterInput, LCUncheckedCreateWithoutExporterInput>
  }

  export type LCCreateManyExporterInputEnvelope = {
    data: LCCreateManyExporterInput | LCCreateManyExporterInput[]
    skipDuplicates?: boolean
  }

  export type LCCreateWithoutBankInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    importer: UserCreateNestedOneWithoutLettersOfCreditAsImporterInput
    exporter: UserCreateNestedOneWithoutLettersOfCreditAsExporterInput
    documents?: DocumentCreateNestedManyWithoutLcInput
  }

  export type LCUncheckedCreateWithoutBankInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    importerId: string
    exporterId: string
    documents?: DocumentUncheckedCreateNestedManyWithoutLcInput
  }

  export type LCCreateOrConnectWithoutBankInput = {
    where: LCWhereUniqueInput
    create: XOR<LCCreateWithoutBankInput, LCUncheckedCreateWithoutBankInput>
  }

  export type LCCreateManyBankInputEnvelope = {
    data: LCCreateManyBankInput | LCCreateManyBankInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutImporterInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    exporter: UserCreateNestedOneWithoutShipmentsAsExporterInput
    broker?: UserCreateNestedOneWithoutShipmentsAsBrokerInput
    service?: ServiceCreateNestedOneWithoutShipmentsInput
    documents?: DocumentCreateNestedManyWithoutShipmentInput
    events?: ShipmentEventCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutImporterInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    exporterId: string
    brokerId?: string | null
    serviceId?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutShipmentInput
    events?: ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutImporterInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutImporterInput, ShipmentUncheckedCreateWithoutImporterInput>
  }

  export type ShipmentCreateManyImporterInputEnvelope = {
    data: ShipmentCreateManyImporterInput | ShipmentCreateManyImporterInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutExporterInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importer: UserCreateNestedOneWithoutShipmentsAsImporterInput
    broker?: UserCreateNestedOneWithoutShipmentsAsBrokerInput
    service?: ServiceCreateNestedOneWithoutShipmentsInput
    documents?: DocumentCreateNestedManyWithoutShipmentInput
    events?: ShipmentEventCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutExporterInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importerId: string
    brokerId?: string | null
    serviceId?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutShipmentInput
    events?: ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutExporterInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutExporterInput, ShipmentUncheckedCreateWithoutExporterInput>
  }

  export type ShipmentCreateManyExporterInputEnvelope = {
    data: ShipmentCreateManyExporterInput | ShipmentCreateManyExporterInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutBrokerInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importer: UserCreateNestedOneWithoutShipmentsAsImporterInput
    exporter: UserCreateNestedOneWithoutShipmentsAsExporterInput
    service?: ServiceCreateNestedOneWithoutShipmentsInput
    documents?: DocumentCreateNestedManyWithoutShipmentInput
    events?: ShipmentEventCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutBrokerInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importerId: string
    exporterId: string
    serviceId?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutShipmentInput
    events?: ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutBrokerInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutBrokerInput, ShipmentUncheckedCreateWithoutBrokerInput>
  }

  export type ShipmentCreateManyBrokerInputEnvelope = {
    data: ShipmentCreateManyBrokerInput | ShipmentCreateManyBrokerInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentEventCreateWithoutUserInput = {
    id?: string
    type: $Enums.ShipmentEventType
    message?: string | null
    createdAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutEventsInput
  }

  export type ShipmentEventUncheckedCreateWithoutUserInput = {
    id?: string
    shipmentId: string
    type: $Enums.ShipmentEventType
    message?: string | null
    createdAt?: Date | string
  }

  export type ShipmentEventCreateOrConnectWithoutUserInput = {
    where: ShipmentEventWhereUniqueInput
    create: XOR<ShipmentEventCreateWithoutUserInput, ShipmentEventUncheckedCreateWithoutUserInput>
  }

  export type ShipmentEventCreateManyUserInputEnvelope = {
    data: ShipmentEventCreateManyUserInput | ShipmentEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DocumentUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutUploadedByInput, DocumentUncheckedUpdateWithoutUploadedByInput>
    create: XOR<DocumentCreateWithoutUploadedByInput, DocumentUncheckedCreateWithoutUploadedByInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutUploadedByInput, DocumentUncheckedUpdateWithoutUploadedByInput>
  }

  export type DocumentUpdateManyWithWhereWithoutUploadedByInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    type?: EnumDocumentTypeFilter<"Document"> | $Enums.DocumentType
    fileUrl?: StringFilter<"Document"> | string
    verified?: BoolFilter<"Document"> | boolean
    createdAt?: DateTimeFilter<"Document"> | Date | string
    uploadedById?: StringFilter<"Document"> | string
    verifiedById?: StringNullableFilter<"Document"> | string | null
    shipmentId?: StringNullableFilter<"Document"> | string | null
    lcId?: StringNullableFilter<"Document"> | string | null
  }

  export type DocumentUpsertWithWhereUniqueWithoutVerifiedByInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutVerifiedByInput, DocumentUncheckedUpdateWithoutVerifiedByInput>
    create: XOR<DocumentCreateWithoutVerifiedByInput, DocumentUncheckedCreateWithoutVerifiedByInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutVerifiedByInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutVerifiedByInput, DocumentUncheckedUpdateWithoutVerifiedByInput>
  }

  export type DocumentUpdateManyWithWhereWithoutVerifiedByInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutVerifiedByInput>
  }

  export type ServiceUpsertWithWhereUniqueWithoutProviderInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutProviderInput, ServiceUncheckedUpdateWithoutProviderInput>
    create: XOR<ServiceCreateWithoutProviderInput, ServiceUncheckedCreateWithoutProviderInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutProviderInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutProviderInput, ServiceUncheckedUpdateWithoutProviderInput>
  }

  export type ServiceUpdateManyWithWhereWithoutProviderInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutProviderInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    price?: FloatFilter<"Service"> | number
    providerId?: StringFilter<"Service"> | string
    createdAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type QuoteRequestUpsertWithWhereUniqueWithoutImporterInput = {
    where: QuoteRequestWhereUniqueInput
    update: XOR<QuoteRequestUpdateWithoutImporterInput, QuoteRequestUncheckedUpdateWithoutImporterInput>
    create: XOR<QuoteRequestCreateWithoutImporterInput, QuoteRequestUncheckedCreateWithoutImporterInput>
  }

  export type QuoteRequestUpdateWithWhereUniqueWithoutImporterInput = {
    where: QuoteRequestWhereUniqueInput
    data: XOR<QuoteRequestUpdateWithoutImporterInput, QuoteRequestUncheckedUpdateWithoutImporterInput>
  }

  export type QuoteRequestUpdateManyWithWhereWithoutImporterInput = {
    where: QuoteRequestScalarWhereInput
    data: XOR<QuoteRequestUpdateManyMutationInput, QuoteRequestUncheckedUpdateManyWithoutImporterInput>
  }

  export type QuoteRequestScalarWhereInput = {
    AND?: QuoteRequestScalarWhereInput | QuoteRequestScalarWhereInput[]
    OR?: QuoteRequestScalarWhereInput[]
    NOT?: QuoteRequestScalarWhereInput | QuoteRequestScalarWhereInput[]
    id?: StringFilter<"QuoteRequest"> | string
    importerId?: StringFilter<"QuoteRequest"> | string
    productName?: StringFilter<"QuoteRequest"> | string
    quantity?: IntFilter<"QuoteRequest"> | number
    unit?: StringNullableFilter<"QuoteRequest"> | string | null
    incoterm?: StringNullableFilter<"QuoteRequest"> | string | null
    originCountry?: StringNullableFilter<"QuoteRequest"> | string | null
    destCountry?: StringNullableFilter<"QuoteRequest"> | string | null
    createdAt?: DateTimeFilter<"QuoteRequest"> | Date | string
  }

  export type QuoteResponseUpsertWithWhereUniqueWithoutExporterInput = {
    where: QuoteResponseWhereUniqueInput
    update: XOR<QuoteResponseUpdateWithoutExporterInput, QuoteResponseUncheckedUpdateWithoutExporterInput>
    create: XOR<QuoteResponseCreateWithoutExporterInput, QuoteResponseUncheckedCreateWithoutExporterInput>
  }

  export type QuoteResponseUpdateWithWhereUniqueWithoutExporterInput = {
    where: QuoteResponseWhereUniqueInput
    data: XOR<QuoteResponseUpdateWithoutExporterInput, QuoteResponseUncheckedUpdateWithoutExporterInput>
  }

  export type QuoteResponseUpdateManyWithWhereWithoutExporterInput = {
    where: QuoteResponseScalarWhereInput
    data: XOR<QuoteResponseUpdateManyMutationInput, QuoteResponseUncheckedUpdateManyWithoutExporterInput>
  }

  export type QuoteResponseScalarWhereInput = {
    AND?: QuoteResponseScalarWhereInput | QuoteResponseScalarWhereInput[]
    OR?: QuoteResponseScalarWhereInput[]
    NOT?: QuoteResponseScalarWhereInput | QuoteResponseScalarWhereInput[]
    id?: StringFilter<"QuoteResponse"> | string
    quoteRequestId?: StringFilter<"QuoteResponse"> | string
    exporterId?: StringFilter<"QuoteResponse"> | string
    price?: FloatFilter<"QuoteResponse"> | number
    validityDays?: IntNullableFilter<"QuoteResponse"> | number | null
    notes?: StringNullableFilter<"QuoteResponse"> | string | null
    createdAt?: DateTimeFilter<"QuoteResponse"> | Date | string
  }

  export type LCUpsertWithWhereUniqueWithoutImporterInput = {
    where: LCWhereUniqueInput
    update: XOR<LCUpdateWithoutImporterInput, LCUncheckedUpdateWithoutImporterInput>
    create: XOR<LCCreateWithoutImporterInput, LCUncheckedCreateWithoutImporterInput>
  }

  export type LCUpdateWithWhereUniqueWithoutImporterInput = {
    where: LCWhereUniqueInput
    data: XOR<LCUpdateWithoutImporterInput, LCUncheckedUpdateWithoutImporterInput>
  }

  export type LCUpdateManyWithWhereWithoutImporterInput = {
    where: LCScalarWhereInput
    data: XOR<LCUpdateManyMutationInput, LCUncheckedUpdateManyWithoutImporterInput>
  }

  export type LCScalarWhereInput = {
    AND?: LCScalarWhereInput | LCScalarWhereInput[]
    OR?: LCScalarWhereInput[]
    NOT?: LCScalarWhereInput | LCScalarWhereInput[]
    id?: StringFilter<"LC"> | string
    lcNumber?: StringFilter<"LC"> | string
    amount?: FloatFilter<"LC"> | number
    currency?: StringFilter<"LC"> | string
    status?: EnumLCStatusFilter<"LC"> | $Enums.LCStatus
    createdAt?: DateTimeFilter<"LC"> | Date | string
    importerId?: StringFilter<"LC"> | string
    exporterId?: StringFilter<"LC"> | string
    bankId?: StringFilter<"LC"> | string
  }

  export type LCUpsertWithWhereUniqueWithoutExporterInput = {
    where: LCWhereUniqueInput
    update: XOR<LCUpdateWithoutExporterInput, LCUncheckedUpdateWithoutExporterInput>
    create: XOR<LCCreateWithoutExporterInput, LCUncheckedCreateWithoutExporterInput>
  }

  export type LCUpdateWithWhereUniqueWithoutExporterInput = {
    where: LCWhereUniqueInput
    data: XOR<LCUpdateWithoutExporterInput, LCUncheckedUpdateWithoutExporterInput>
  }

  export type LCUpdateManyWithWhereWithoutExporterInput = {
    where: LCScalarWhereInput
    data: XOR<LCUpdateManyMutationInput, LCUncheckedUpdateManyWithoutExporterInput>
  }

  export type LCUpsertWithWhereUniqueWithoutBankInput = {
    where: LCWhereUniqueInput
    update: XOR<LCUpdateWithoutBankInput, LCUncheckedUpdateWithoutBankInput>
    create: XOR<LCCreateWithoutBankInput, LCUncheckedCreateWithoutBankInput>
  }

  export type LCUpdateWithWhereUniqueWithoutBankInput = {
    where: LCWhereUniqueInput
    data: XOR<LCUpdateWithoutBankInput, LCUncheckedUpdateWithoutBankInput>
  }

  export type LCUpdateManyWithWhereWithoutBankInput = {
    where: LCScalarWhereInput
    data: XOR<LCUpdateManyMutationInput, LCUncheckedUpdateManyWithoutBankInput>
  }

  export type ShipmentUpsertWithWhereUniqueWithoutImporterInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutImporterInput, ShipmentUncheckedUpdateWithoutImporterInput>
    create: XOR<ShipmentCreateWithoutImporterInput, ShipmentUncheckedCreateWithoutImporterInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutImporterInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutImporterInput, ShipmentUncheckedUpdateWithoutImporterInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutImporterInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutImporterInput>
  }

  export type ShipmentScalarWhereInput = {
    AND?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    OR?: ShipmentScalarWhereInput[]
    NOT?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    id?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    vesselName?: StringNullableFilter<"Shipment"> | string | null
    airwayBill?: StringNullableFilter<"Shipment"> | string | null
    etd?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    eta?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    importerId?: StringFilter<"Shipment"> | string
    exporterId?: StringFilter<"Shipment"> | string
    brokerId?: StringNullableFilter<"Shipment"> | string | null
    serviceId?: StringNullableFilter<"Shipment"> | string | null
  }

  export type ShipmentUpsertWithWhereUniqueWithoutExporterInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutExporterInput, ShipmentUncheckedUpdateWithoutExporterInput>
    create: XOR<ShipmentCreateWithoutExporterInput, ShipmentUncheckedCreateWithoutExporterInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutExporterInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutExporterInput, ShipmentUncheckedUpdateWithoutExporterInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutExporterInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutExporterInput>
  }

  export type ShipmentUpsertWithWhereUniqueWithoutBrokerInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutBrokerInput, ShipmentUncheckedUpdateWithoutBrokerInput>
    create: XOR<ShipmentCreateWithoutBrokerInput, ShipmentUncheckedCreateWithoutBrokerInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutBrokerInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutBrokerInput, ShipmentUncheckedUpdateWithoutBrokerInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutBrokerInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutBrokerInput>
  }

  export type ShipmentEventUpsertWithWhereUniqueWithoutUserInput = {
    where: ShipmentEventWhereUniqueInput
    update: XOR<ShipmentEventUpdateWithoutUserInput, ShipmentEventUncheckedUpdateWithoutUserInput>
    create: XOR<ShipmentEventCreateWithoutUserInput, ShipmentEventUncheckedCreateWithoutUserInput>
  }

  export type ShipmentEventUpdateWithWhereUniqueWithoutUserInput = {
    where: ShipmentEventWhereUniqueInput
    data: XOR<ShipmentEventUpdateWithoutUserInput, ShipmentEventUncheckedUpdateWithoutUserInput>
  }

  export type ShipmentEventUpdateManyWithWhereWithoutUserInput = {
    where: ShipmentEventScalarWhereInput
    data: XOR<ShipmentEventUpdateManyMutationInput, ShipmentEventUncheckedUpdateManyWithoutUserInput>
  }

  export type ShipmentEventScalarWhereInput = {
    AND?: ShipmentEventScalarWhereInput | ShipmentEventScalarWhereInput[]
    OR?: ShipmentEventScalarWhereInput[]
    NOT?: ShipmentEventScalarWhereInput | ShipmentEventScalarWhereInput[]
    id?: StringFilter<"ShipmentEvent"> | string
    shipmentId?: StringFilter<"ShipmentEvent"> | string
    userId?: StringNullableFilter<"ShipmentEvent"> | string | null
    type?: EnumShipmentEventTypeFilter<"ShipmentEvent"> | $Enums.ShipmentEventType
    message?: StringNullableFilter<"ShipmentEvent"> | string | null
    createdAt?: DateTimeFilter<"ShipmentEvent"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type UserCreateWithoutServicesInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutServicesInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutServicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
  }

  export type ShipmentCreateWithoutServiceInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importer: UserCreateNestedOneWithoutShipmentsAsImporterInput
    exporter: UserCreateNestedOneWithoutShipmentsAsExporterInput
    broker?: UserCreateNestedOneWithoutShipmentsAsBrokerInput
    documents?: DocumentCreateNestedManyWithoutShipmentInput
    events?: ShipmentEventCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutServiceInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importerId: string
    exporterId: string
    brokerId?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutShipmentInput
    events?: ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutServiceInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutServiceInput, ShipmentUncheckedCreateWithoutServiceInput>
  }

  export type ShipmentCreateManyServiceInputEnvelope = {
    data: ShipmentCreateManyServiceInput | ShipmentCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutServicesInput = {
    update: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
  }

  export type UserUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShipmentUpsertWithWhereUniqueWithoutServiceInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutServiceInput, ShipmentUncheckedUpdateWithoutServiceInput>
    create: XOR<ShipmentCreateWithoutServiceInput, ShipmentUncheckedCreateWithoutServiceInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutServiceInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutServiceInput, ShipmentUncheckedUpdateWithoutServiceInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutServiceInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutServiceInput>
  }

  export type UserCreateWithoutQuoteRequestsInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuoteRequestsInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuoteRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuoteRequestsInput, UserUncheckedCreateWithoutQuoteRequestsInput>
  }

  export type QuoteResponseCreateWithoutQuoteRequestInput = {
    id?: string
    price: number
    validityDays?: number | null
    notes?: string | null
    createdAt?: Date | string
    exporter: UserCreateNestedOneWithoutQuoteResponsesInput
  }

  export type QuoteResponseUncheckedCreateWithoutQuoteRequestInput = {
    id?: string
    exporterId: string
    price: number
    validityDays?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type QuoteResponseCreateOrConnectWithoutQuoteRequestInput = {
    where: QuoteResponseWhereUniqueInput
    create: XOR<QuoteResponseCreateWithoutQuoteRequestInput, QuoteResponseUncheckedCreateWithoutQuoteRequestInput>
  }

  export type QuoteResponseCreateManyQuoteRequestInputEnvelope = {
    data: QuoteResponseCreateManyQuoteRequestInput | QuoteResponseCreateManyQuoteRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutQuoteRequestsInput = {
    update: XOR<UserUpdateWithoutQuoteRequestsInput, UserUncheckedUpdateWithoutQuoteRequestsInput>
    create: XOR<UserCreateWithoutQuoteRequestsInput, UserUncheckedCreateWithoutQuoteRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuoteRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuoteRequestsInput, UserUncheckedUpdateWithoutQuoteRequestsInput>
  }

  export type UserUpdateWithoutQuoteRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuoteRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type QuoteResponseUpsertWithWhereUniqueWithoutQuoteRequestInput = {
    where: QuoteResponseWhereUniqueInput
    update: XOR<QuoteResponseUpdateWithoutQuoteRequestInput, QuoteResponseUncheckedUpdateWithoutQuoteRequestInput>
    create: XOR<QuoteResponseCreateWithoutQuoteRequestInput, QuoteResponseUncheckedCreateWithoutQuoteRequestInput>
  }

  export type QuoteResponseUpdateWithWhereUniqueWithoutQuoteRequestInput = {
    where: QuoteResponseWhereUniqueInput
    data: XOR<QuoteResponseUpdateWithoutQuoteRequestInput, QuoteResponseUncheckedUpdateWithoutQuoteRequestInput>
  }

  export type QuoteResponseUpdateManyWithWhereWithoutQuoteRequestInput = {
    where: QuoteResponseScalarWhereInput
    data: XOR<QuoteResponseUpdateManyMutationInput, QuoteResponseUncheckedUpdateManyWithoutQuoteRequestInput>
  }

  export type QuoteRequestCreateWithoutResponsesInput = {
    id?: string
    productName: string
    quantity: number
    unit?: string | null
    incoterm?: string | null
    originCountry?: string | null
    destCountry?: string | null
    createdAt?: Date | string
    importer: UserCreateNestedOneWithoutQuoteRequestsInput
  }

  export type QuoteRequestUncheckedCreateWithoutResponsesInput = {
    id?: string
    importerId: string
    productName: string
    quantity: number
    unit?: string | null
    incoterm?: string | null
    originCountry?: string | null
    destCountry?: string | null
    createdAt?: Date | string
  }

  export type QuoteRequestCreateOrConnectWithoutResponsesInput = {
    where: QuoteRequestWhereUniqueInput
    create: XOR<QuoteRequestCreateWithoutResponsesInput, QuoteRequestUncheckedCreateWithoutResponsesInput>
  }

  export type UserCreateWithoutQuoteResponsesInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuoteResponsesInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuoteResponsesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuoteResponsesInput, UserUncheckedCreateWithoutQuoteResponsesInput>
  }

  export type QuoteRequestUpsertWithoutResponsesInput = {
    update: XOR<QuoteRequestUpdateWithoutResponsesInput, QuoteRequestUncheckedUpdateWithoutResponsesInput>
    create: XOR<QuoteRequestCreateWithoutResponsesInput, QuoteRequestUncheckedCreateWithoutResponsesInput>
    where?: QuoteRequestWhereInput
  }

  export type QuoteRequestUpdateToOneWithWhereWithoutResponsesInput = {
    where?: QuoteRequestWhereInput
    data: XOR<QuoteRequestUpdateWithoutResponsesInput, QuoteRequestUncheckedUpdateWithoutResponsesInput>
  }

  export type QuoteRequestUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    incoterm?: NullableStringFieldUpdateOperationsInput | string | null
    originCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destCountry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importer?: UserUpdateOneRequiredWithoutQuoteRequestsNestedInput
  }

  export type QuoteRequestUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    importerId?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    incoterm?: NullableStringFieldUpdateOperationsInput | string | null
    originCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destCountry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutQuoteResponsesInput = {
    update: XOR<UserUpdateWithoutQuoteResponsesInput, UserUncheckedUpdateWithoutQuoteResponsesInput>
    create: XOR<UserCreateWithoutQuoteResponsesInput, UserUncheckedCreateWithoutQuoteResponsesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuoteResponsesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuoteResponsesInput, UserUncheckedUpdateWithoutQuoteResponsesInput>
  }

  export type UserUpdateWithoutQuoteResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuoteResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLettersOfCreditAsImporterInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLettersOfCreditAsImporterInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLettersOfCreditAsImporterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLettersOfCreditAsImporterInput, UserUncheckedCreateWithoutLettersOfCreditAsImporterInput>
  }

  export type UserCreateWithoutLettersOfCreditAsExporterInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLettersOfCreditAsExporterInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLettersOfCreditAsExporterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLettersOfCreditAsExporterInput, UserUncheckedCreateWithoutLettersOfCreditAsExporterInput>
  }

  export type UserCreateWithoutLettersOfCreditAsBankInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLettersOfCreditAsBankInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLettersOfCreditAsBankInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLettersOfCreditAsBankInput, UserUncheckedCreateWithoutLettersOfCreditAsBankInput>
  }

  export type DocumentCreateWithoutLcInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutUploadedDocumentsInput
    verifiedBy?: UserCreateNestedOneWithoutVerifiedDocumentsInput
    shipment?: ShipmentCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutLcInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    uploadedById: string
    verifiedById?: string | null
    shipmentId?: string | null
  }

  export type DocumentCreateOrConnectWithoutLcInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutLcInput, DocumentUncheckedCreateWithoutLcInput>
  }

  export type DocumentCreateManyLcInputEnvelope = {
    data: DocumentCreateManyLcInput | DocumentCreateManyLcInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLettersOfCreditAsImporterInput = {
    update: XOR<UserUpdateWithoutLettersOfCreditAsImporterInput, UserUncheckedUpdateWithoutLettersOfCreditAsImporterInput>
    create: XOR<UserCreateWithoutLettersOfCreditAsImporterInput, UserUncheckedCreateWithoutLettersOfCreditAsImporterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLettersOfCreditAsImporterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLettersOfCreditAsImporterInput, UserUncheckedUpdateWithoutLettersOfCreditAsImporterInput>
  }

  export type UserUpdateWithoutLettersOfCreditAsImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLettersOfCreditAsImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutLettersOfCreditAsExporterInput = {
    update: XOR<UserUpdateWithoutLettersOfCreditAsExporterInput, UserUncheckedUpdateWithoutLettersOfCreditAsExporterInput>
    create: XOR<UserCreateWithoutLettersOfCreditAsExporterInput, UserUncheckedCreateWithoutLettersOfCreditAsExporterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLettersOfCreditAsExporterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLettersOfCreditAsExporterInput, UserUncheckedUpdateWithoutLettersOfCreditAsExporterInput>
  }

  export type UserUpdateWithoutLettersOfCreditAsExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLettersOfCreditAsExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutLettersOfCreditAsBankInput = {
    update: XOR<UserUpdateWithoutLettersOfCreditAsBankInput, UserUncheckedUpdateWithoutLettersOfCreditAsBankInput>
    create: XOR<UserCreateWithoutLettersOfCreditAsBankInput, UserUncheckedCreateWithoutLettersOfCreditAsBankInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLettersOfCreditAsBankInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLettersOfCreditAsBankInput, UserUncheckedUpdateWithoutLettersOfCreditAsBankInput>
  }

  export type UserUpdateWithoutLettersOfCreditAsBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLettersOfCreditAsBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentUpsertWithWhereUniqueWithoutLcInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutLcInput, DocumentUncheckedUpdateWithoutLcInput>
    create: XOR<DocumentCreateWithoutLcInput, DocumentUncheckedCreateWithoutLcInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutLcInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutLcInput, DocumentUncheckedUpdateWithoutLcInput>
  }

  export type DocumentUpdateManyWithWhereWithoutLcInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutLcInput>
  }

  export type UserCreateWithoutShipmentsAsImporterInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShipmentsAsImporterInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShipmentsAsImporterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShipmentsAsImporterInput, UserUncheckedCreateWithoutShipmentsAsImporterInput>
  }

  export type UserCreateWithoutShipmentsAsExporterInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShipmentsAsExporterInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShipmentsAsExporterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShipmentsAsExporterInput, UserUncheckedCreateWithoutShipmentsAsExporterInput>
  }

  export type UserCreateWithoutShipmentsAsBrokerInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShipmentsAsBrokerInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShipmentsAsBrokerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShipmentsAsBrokerInput, UserUncheckedCreateWithoutShipmentsAsBrokerInput>
  }

  export type ServiceCreateWithoutShipmentsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    createdAt?: Date | string
    provider: UserCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutShipmentsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    providerId: string
    createdAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutShipmentsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutShipmentsInput, ServiceUncheckedCreateWithoutShipmentsInput>
  }

  export type DocumentCreateWithoutShipmentInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    uploadedBy: UserCreateNestedOneWithoutUploadedDocumentsInput
    verifiedBy?: UserCreateNestedOneWithoutVerifiedDocumentsInput
    lc?: LCCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateWithoutShipmentInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    uploadedById: string
    verifiedById?: string | null
    lcId?: string | null
  }

  export type DocumentCreateOrConnectWithoutShipmentInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutShipmentInput, DocumentUncheckedCreateWithoutShipmentInput>
  }

  export type DocumentCreateManyShipmentInputEnvelope = {
    data: DocumentCreateManyShipmentInput | DocumentCreateManyShipmentInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentEventCreateWithoutShipmentInput = {
    id?: string
    type: $Enums.ShipmentEventType
    message?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutShipmentEventsInput
  }

  export type ShipmentEventUncheckedCreateWithoutShipmentInput = {
    id?: string
    userId?: string | null
    type: $Enums.ShipmentEventType
    message?: string | null
    createdAt?: Date | string
  }

  export type ShipmentEventCreateOrConnectWithoutShipmentInput = {
    where: ShipmentEventWhereUniqueInput
    create: XOR<ShipmentEventCreateWithoutShipmentInput, ShipmentEventUncheckedCreateWithoutShipmentInput>
  }

  export type ShipmentEventCreateManyShipmentInputEnvelope = {
    data: ShipmentEventCreateManyShipmentInput | ShipmentEventCreateManyShipmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutShipmentsAsImporterInput = {
    update: XOR<UserUpdateWithoutShipmentsAsImporterInput, UserUncheckedUpdateWithoutShipmentsAsImporterInput>
    create: XOR<UserCreateWithoutShipmentsAsImporterInput, UserUncheckedCreateWithoutShipmentsAsImporterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShipmentsAsImporterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShipmentsAsImporterInput, UserUncheckedUpdateWithoutShipmentsAsImporterInput>
  }

  export type UserUpdateWithoutShipmentsAsImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShipmentsAsImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutShipmentsAsExporterInput = {
    update: XOR<UserUpdateWithoutShipmentsAsExporterInput, UserUncheckedUpdateWithoutShipmentsAsExporterInput>
    create: XOR<UserCreateWithoutShipmentsAsExporterInput, UserUncheckedCreateWithoutShipmentsAsExporterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShipmentsAsExporterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShipmentsAsExporterInput, UserUncheckedUpdateWithoutShipmentsAsExporterInput>
  }

  export type UserUpdateWithoutShipmentsAsExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShipmentsAsExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutShipmentsAsBrokerInput = {
    update: XOR<UserUpdateWithoutShipmentsAsBrokerInput, UserUncheckedUpdateWithoutShipmentsAsBrokerInput>
    create: XOR<UserCreateWithoutShipmentsAsBrokerInput, UserUncheckedCreateWithoutShipmentsAsBrokerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShipmentsAsBrokerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShipmentsAsBrokerInput, UserUncheckedUpdateWithoutShipmentsAsBrokerInput>
  }

  export type UserUpdateWithoutShipmentsAsBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShipmentsAsBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ServiceUpsertWithoutShipmentsInput = {
    update: XOR<ServiceUpdateWithoutShipmentsInput, ServiceUncheckedUpdateWithoutShipmentsInput>
    create: XOR<ServiceCreateWithoutShipmentsInput, ServiceUncheckedCreateWithoutShipmentsInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutShipmentsInput, ServiceUncheckedUpdateWithoutShipmentsInput>
  }

  export type ServiceUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: UserUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutShipmentInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutShipmentInput, DocumentUncheckedUpdateWithoutShipmentInput>
    create: XOR<DocumentCreateWithoutShipmentInput, DocumentUncheckedCreateWithoutShipmentInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutShipmentInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutShipmentInput, DocumentUncheckedUpdateWithoutShipmentInput>
  }

  export type DocumentUpdateManyWithWhereWithoutShipmentInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutShipmentInput>
  }

  export type ShipmentEventUpsertWithWhereUniqueWithoutShipmentInput = {
    where: ShipmentEventWhereUniqueInput
    update: XOR<ShipmentEventUpdateWithoutShipmentInput, ShipmentEventUncheckedUpdateWithoutShipmentInput>
    create: XOR<ShipmentEventCreateWithoutShipmentInput, ShipmentEventUncheckedCreateWithoutShipmentInput>
  }

  export type ShipmentEventUpdateWithWhereUniqueWithoutShipmentInput = {
    where: ShipmentEventWhereUniqueInput
    data: XOR<ShipmentEventUpdateWithoutShipmentInput, ShipmentEventUncheckedUpdateWithoutShipmentInput>
  }

  export type ShipmentEventUpdateManyWithWhereWithoutShipmentInput = {
    where: ShipmentEventScalarWhereInput
    data: XOR<ShipmentEventUpdateManyMutationInput, ShipmentEventUncheckedUpdateManyWithoutShipmentInput>
  }

  export type ShipmentCreateWithoutEventsInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importer: UserCreateNestedOneWithoutShipmentsAsImporterInput
    exporter: UserCreateNestedOneWithoutShipmentsAsExporterInput
    broker?: UserCreateNestedOneWithoutShipmentsAsBrokerInput
    service?: ServiceCreateNestedOneWithoutShipmentsInput
    documents?: DocumentCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutEventsInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importerId: string
    exporterId: string
    brokerId?: string | null
    serviceId?: string | null
    documents?: DocumentUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutEventsInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutEventsInput, ShipmentUncheckedCreateWithoutEventsInput>
  }

  export type UserCreateWithoutShipmentEventsInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutShipmentEventsInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutShipmentEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutShipmentEventsInput, UserUncheckedCreateWithoutShipmentEventsInput>
  }

  export type ShipmentUpsertWithoutEventsInput = {
    update: XOR<ShipmentUpdateWithoutEventsInput, ShipmentUncheckedUpdateWithoutEventsInput>
    create: XOR<ShipmentCreateWithoutEventsInput, ShipmentUncheckedCreateWithoutEventsInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutEventsInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutEventsInput, ShipmentUncheckedUpdateWithoutEventsInput>
  }

  export type ShipmentUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importer?: UserUpdateOneRequiredWithoutShipmentsAsImporterNestedInput
    exporter?: UserUpdateOneRequiredWithoutShipmentsAsExporterNestedInput
    broker?: UserUpdateOneWithoutShipmentsAsBrokerNestedInput
    service?: ServiceUpdateOneWithoutShipmentsNestedInput
    documents?: DocumentUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type UserUpsertWithoutShipmentEventsInput = {
    update: XOR<UserUpdateWithoutShipmentEventsInput, UserUncheckedUpdateWithoutShipmentEventsInput>
    create: XOR<UserCreateWithoutShipmentEventsInput, UserUncheckedCreateWithoutShipmentEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutShipmentEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutShipmentEventsInput, UserUncheckedUpdateWithoutShipmentEventsInput>
  }

  export type UserUpdateWithoutShipmentEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutShipmentEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUploadedDocumentsInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUploadedDocumentsInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUploadedDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUploadedDocumentsInput, UserUncheckedCreateWithoutUploadedDocumentsInput>
  }

  export type UserCreateWithoutVerifiedDocumentsInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVerifiedDocumentsInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVerifiedDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVerifiedDocumentsInput, UserUncheckedCreateWithoutVerifiedDocumentsInput>
  }

  export type ShipmentCreateWithoutDocumentsInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importer: UserCreateNestedOneWithoutShipmentsAsImporterInput
    exporter: UserCreateNestedOneWithoutShipmentsAsExporterInput
    broker?: UserCreateNestedOneWithoutShipmentsAsBrokerInput
    service?: ServiceCreateNestedOneWithoutShipmentsInput
    events?: ShipmentEventCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutDocumentsInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importerId: string
    exporterId: string
    brokerId?: string | null
    serviceId?: string | null
    events?: ShipmentEventUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutDocumentsInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutDocumentsInput, ShipmentUncheckedCreateWithoutDocumentsInput>
  }

  export type LCCreateWithoutDocumentsInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    importer: UserCreateNestedOneWithoutLettersOfCreditAsImporterInput
    exporter: UserCreateNestedOneWithoutLettersOfCreditAsExporterInput
    bank: UserCreateNestedOneWithoutLettersOfCreditAsBankInput
  }

  export type LCUncheckedCreateWithoutDocumentsInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    importerId: string
    exporterId: string
    bankId: string
  }

  export type LCCreateOrConnectWithoutDocumentsInput = {
    where: LCWhereUniqueInput
    create: XOR<LCCreateWithoutDocumentsInput, LCUncheckedCreateWithoutDocumentsInput>
  }

  export type UserUpsertWithoutUploadedDocumentsInput = {
    update: XOR<UserUpdateWithoutUploadedDocumentsInput, UserUncheckedUpdateWithoutUploadedDocumentsInput>
    create: XOR<UserCreateWithoutUploadedDocumentsInput, UserUncheckedCreateWithoutUploadedDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUploadedDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUploadedDocumentsInput, UserUncheckedUpdateWithoutUploadedDocumentsInput>
  }

  export type UserUpdateWithoutUploadedDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUploadedDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutVerifiedDocumentsInput = {
    update: XOR<UserUpdateWithoutVerifiedDocumentsInput, UserUncheckedUpdateWithoutVerifiedDocumentsInput>
    create: XOR<UserCreateWithoutVerifiedDocumentsInput, UserUncheckedCreateWithoutVerifiedDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVerifiedDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVerifiedDocumentsInput, UserUncheckedUpdateWithoutVerifiedDocumentsInput>
  }

  export type UserUpdateWithoutVerifiedDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVerifiedDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ShipmentUpsertWithoutDocumentsInput = {
    update: XOR<ShipmentUpdateWithoutDocumentsInput, ShipmentUncheckedUpdateWithoutDocumentsInput>
    create: XOR<ShipmentCreateWithoutDocumentsInput, ShipmentUncheckedCreateWithoutDocumentsInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutDocumentsInput, ShipmentUncheckedUpdateWithoutDocumentsInput>
  }

  export type ShipmentUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importer?: UserUpdateOneRequiredWithoutShipmentsAsImporterNestedInput
    exporter?: UserUpdateOneRequiredWithoutShipmentsAsExporterNestedInput
    broker?: UserUpdateOneWithoutShipmentsAsBrokerNestedInput
    service?: ServiceUpdateOneWithoutShipmentsNestedInput
    events?: ShipmentEventUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    events?: ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type LCUpsertWithoutDocumentsInput = {
    update: XOR<LCUpdateWithoutDocumentsInput, LCUncheckedUpdateWithoutDocumentsInput>
    create: XOR<LCCreateWithoutDocumentsInput, LCUncheckedCreateWithoutDocumentsInput>
    where?: LCWhereInput
  }

  export type LCUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: LCWhereInput
    data: XOR<LCUpdateWithoutDocumentsInput, LCUncheckedUpdateWithoutDocumentsInput>
  }

  export type LCUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importer?: UserUpdateOneRequiredWithoutLettersOfCreditAsImporterNestedInput
    exporter?: UserUpdateOneRequiredWithoutLettersOfCreditAsExporterNestedInput
    bank?: UserUpdateOneRequiredWithoutLettersOfCreditAsBankNestedInput
  }

  export type LCUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentCreateNestedManyWithoutVerifiedByInput
    services?: ServiceCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    role: $Enums.UserRole
    email: string
    passwordHash: string
    companyName?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    uploadedDocuments?: DocumentUncheckedCreateNestedManyWithoutUploadedByInput
    verifiedDocuments?: DocumentUncheckedCreateNestedManyWithoutVerifiedByInput
    services?: ServiceUncheckedCreateNestedManyWithoutProviderInput
    quoteRequests?: QuoteRequestUncheckedCreateNestedManyWithoutImporterInput
    quoteResponses?: QuoteResponseUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsImporter?: LCUncheckedCreateNestedManyWithoutImporterInput
    lettersOfCreditAsExporter?: LCUncheckedCreateNestedManyWithoutExporterInput
    lettersOfCreditAsBank?: LCUncheckedCreateNestedManyWithoutBankInput
    shipmentsAsImporter?: ShipmentUncheckedCreateNestedManyWithoutImporterInput
    shipmentsAsExporter?: ShipmentUncheckedCreateNestedManyWithoutExporterInput
    shipmentsAsBroker?: ShipmentUncheckedCreateNestedManyWithoutBrokerInput
    shipmentEvents?: ShipmentEventUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedDocuments?: DocumentUncheckedUpdateManyWithoutUploadedByNestedInput
    verifiedDocuments?: DocumentUncheckedUpdateManyWithoutVerifiedByNestedInput
    services?: ServiceUncheckedUpdateManyWithoutProviderNestedInput
    quoteRequests?: QuoteRequestUncheckedUpdateManyWithoutImporterNestedInput
    quoteResponses?: QuoteResponseUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsImporter?: LCUncheckedUpdateManyWithoutImporterNestedInput
    lettersOfCreditAsExporter?: LCUncheckedUpdateManyWithoutExporterNestedInput
    lettersOfCreditAsBank?: LCUncheckedUpdateManyWithoutBankNestedInput
    shipmentsAsImporter?: ShipmentUncheckedUpdateManyWithoutImporterNestedInput
    shipmentsAsExporter?: ShipmentUncheckedUpdateManyWithoutExporterNestedInput
    shipmentsAsBroker?: ShipmentUncheckedUpdateManyWithoutBrokerNestedInput
    shipmentEvents?: ShipmentEventUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DocumentCreateManyUploadedByInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    verifiedById?: string | null
    shipmentId?: string | null
    lcId?: string | null
  }

  export type DocumentCreateManyVerifiedByInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    uploadedById: string
    shipmentId?: string | null
    lcId?: string | null
  }

  export type ServiceCreateManyProviderInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    createdAt?: Date | string
  }

  export type QuoteRequestCreateManyImporterInput = {
    id?: string
    productName: string
    quantity: number
    unit?: string | null
    incoterm?: string | null
    originCountry?: string | null
    destCountry?: string | null
    createdAt?: Date | string
  }

  export type QuoteResponseCreateManyExporterInput = {
    id?: string
    quoteRequestId: string
    price: number
    validityDays?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type LCCreateManyImporterInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    exporterId: string
    bankId: string
  }

  export type LCCreateManyExporterInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    importerId: string
    bankId: string
  }

  export type LCCreateManyBankInput = {
    id?: string
    lcNumber: string
    amount: number
    currency: string
    status?: $Enums.LCStatus
    createdAt?: Date | string
    importerId: string
    exporterId: string
  }

  export type ShipmentCreateManyImporterInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    exporterId: string
    brokerId?: string | null
    serviceId?: string | null
  }

  export type ShipmentCreateManyExporterInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importerId: string
    brokerId?: string | null
    serviceId?: string | null
  }

  export type ShipmentCreateManyBrokerInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importerId: string
    exporterId: string
    serviceId?: string | null
  }

  export type ShipmentEventCreateManyUserInput = {
    id?: string
    shipmentId: string
    type: $Enums.ShipmentEventType
    message?: string | null
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type DocumentUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedBy?: UserUpdateOneWithoutVerifiedDocumentsNestedInput
    shipment?: ShipmentUpdateOneWithoutDocumentsNestedInput
    lc?: LCUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lcId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lcId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUpdateWithoutVerifiedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutUploadedDocumentsNestedInput
    shipment?: ShipmentUpdateOneWithoutDocumentsNestedInput
    lc?: LCUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutVerifiedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lcId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutVerifiedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lcId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteRequestUpdateWithoutImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    incoterm?: NullableStringFieldUpdateOperationsInput | string | null
    originCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destCountry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: QuoteResponseUpdateManyWithoutQuoteRequestNestedInput
  }

  export type QuoteRequestUncheckedUpdateWithoutImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    incoterm?: NullableStringFieldUpdateOperationsInput | string | null
    originCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destCountry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: QuoteResponseUncheckedUpdateManyWithoutQuoteRequestNestedInput
  }

  export type QuoteRequestUncheckedUpdateManyWithoutImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    productName?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    incoterm?: NullableStringFieldUpdateOperationsInput | string | null
    originCountry?: NullableStringFieldUpdateOperationsInput | string | null
    destCountry?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteResponseUpdateWithoutExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quoteRequest?: QuoteRequestUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type QuoteResponseUncheckedUpdateWithoutExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    quoteRequestId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteResponseUncheckedUpdateManyWithoutExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    quoteRequestId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LCUpdateWithoutImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exporter?: UserUpdateOneRequiredWithoutLettersOfCreditAsExporterNestedInput
    bank?: UserUpdateOneRequiredWithoutLettersOfCreditAsBankNestedInput
    documents?: DocumentUpdateManyWithoutLcNestedInput
  }

  export type LCUncheckedUpdateWithoutImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exporterId?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    documents?: DocumentUncheckedUpdateManyWithoutLcNestedInput
  }

  export type LCUncheckedUpdateManyWithoutImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exporterId?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
  }

  export type LCUpdateWithoutExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importer?: UserUpdateOneRequiredWithoutLettersOfCreditAsImporterNestedInput
    bank?: UserUpdateOneRequiredWithoutLettersOfCreditAsBankNestedInput
    documents?: DocumentUpdateManyWithoutLcNestedInput
  }

  export type LCUncheckedUpdateWithoutExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
    documents?: DocumentUncheckedUpdateManyWithoutLcNestedInput
  }

  export type LCUncheckedUpdateManyWithoutExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    bankId?: StringFieldUpdateOperationsInput | string
  }

  export type LCUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importer?: UserUpdateOneRequiredWithoutLettersOfCreditAsImporterNestedInput
    exporter?: UserUpdateOneRequiredWithoutLettersOfCreditAsExporterNestedInput
    documents?: DocumentUpdateManyWithoutLcNestedInput
  }

  export type LCUncheckedUpdateWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    documents?: DocumentUncheckedUpdateManyWithoutLcNestedInput
  }

  export type LCUncheckedUpdateManyWithoutBankInput = {
    id?: StringFieldUpdateOperationsInput | string
    lcNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumLCStatusFieldUpdateOperationsInput | $Enums.LCStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentUpdateWithoutImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exporter?: UserUpdateOneRequiredWithoutShipmentsAsExporterNestedInput
    broker?: UserUpdateOneWithoutShipmentsAsBrokerNestedInput
    service?: ServiceUpdateOneWithoutShipmentsNestedInput
    documents?: DocumentUpdateManyWithoutShipmentNestedInput
    events?: ShipmentEventUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exporterId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutShipmentNestedInput
    events?: ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutImporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exporterId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShipmentUpdateWithoutExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importer?: UserUpdateOneRequiredWithoutShipmentsAsImporterNestedInput
    broker?: UserUpdateOneWithoutShipmentsAsBrokerNestedInput
    service?: ServiceUpdateOneWithoutShipmentsNestedInput
    documents?: DocumentUpdateManyWithoutShipmentNestedInput
    events?: ShipmentEventUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutShipmentNestedInput
    events?: ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutExporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShipmentUpdateWithoutBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importer?: UserUpdateOneRequiredWithoutShipmentsAsImporterNestedInput
    exporter?: UserUpdateOneRequiredWithoutShipmentsAsExporterNestedInput
    service?: ServiceUpdateOneWithoutShipmentsNestedInput
    documents?: DocumentUpdateManyWithoutShipmentNestedInput
    events?: ShipmentEventUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutShipmentNestedInput
    events?: ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShipmentEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumShipmentEventTypeFieldUpdateOperationsInput | $Enums.ShipmentEventType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutEventsNestedInput
  }

  export type ShipmentEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    type?: EnumShipmentEventTypeFieldUpdateOperationsInput | $Enums.ShipmentEventType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    type?: EnumShipmentEventTypeFieldUpdateOperationsInput | $Enums.ShipmentEventType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentCreateManyServiceInput = {
    id?: string
    status?: $Enums.ShipmentStatus
    vesselName?: string | null
    airwayBill?: string | null
    etd?: Date | string | null
    eta?: Date | string | null
    createdAt?: Date | string
    importerId: string
    exporterId: string
    brokerId?: string | null
  }

  export type ShipmentUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importer?: UserUpdateOneRequiredWithoutShipmentsAsImporterNestedInput
    exporter?: UserUpdateOneRequiredWithoutShipmentsAsExporterNestedInput
    broker?: UserUpdateOneWithoutShipmentsAsBrokerNestedInput
    documents?: DocumentUpdateManyWithoutShipmentNestedInput
    events?: ShipmentEventUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    documents?: DocumentUncheckedUpdateManyWithoutShipmentNestedInput
    events?: ShipmentEventUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    vesselName?: NullableStringFieldUpdateOperationsInput | string | null
    airwayBill?: NullableStringFieldUpdateOperationsInput | string | null
    etd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    eta?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    importerId?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QuoteResponseCreateManyQuoteRequestInput = {
    id?: string
    exporterId: string
    price: number
    validityDays?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type QuoteResponseUpdateWithoutQuoteRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exporter?: UserUpdateOneRequiredWithoutQuoteResponsesNestedInput
  }

  export type QuoteResponseUncheckedUpdateWithoutQuoteRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuoteResponseUncheckedUpdateManyWithoutQuoteRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    exporterId?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    validityDays?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyLcInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    uploadedById: string
    verifiedById?: string | null
    shipmentId?: string | null
  }

  export type DocumentUpdateWithoutLcInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutUploadedDocumentsNestedInput
    verifiedBy?: UserUpdateOneWithoutVerifiedDocumentsNestedInput
    shipment?: ShipmentUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutLcInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutLcInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    shipmentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentCreateManyShipmentInput = {
    id?: string
    type: $Enums.DocumentType
    fileUrl: string
    verified?: boolean
    createdAt?: Date | string
    uploadedById: string
    verifiedById?: string | null
    lcId?: string | null
  }

  export type ShipmentEventCreateManyShipmentInput = {
    id?: string
    userId?: string | null
    type: $Enums.ShipmentEventType
    message?: string | null
    createdAt?: Date | string
  }

  export type DocumentUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneRequiredWithoutUploadedDocumentsNestedInput
    verifiedBy?: UserUpdateOneWithoutVerifiedDocumentsNestedInput
    lc?: LCUpdateOneWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    lcId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentUncheckedUpdateManyWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedById?: StringFieldUpdateOperationsInput | string
    verifiedById?: NullableStringFieldUpdateOperationsInput | string | null
    lcId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShipmentEventUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumShipmentEventTypeFieldUpdateOperationsInput | $Enums.ShipmentEventType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutShipmentEventsNestedInput
  }

  export type ShipmentEventUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumShipmentEventTypeFieldUpdateOperationsInput | $Enums.ShipmentEventType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentEventUncheckedUpdateManyWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumShipmentEventTypeFieldUpdateOperationsInput | $Enums.ShipmentEventType
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}