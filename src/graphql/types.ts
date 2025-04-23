import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ConnectionCursor: { input: any; output: any; }
  ConnectionLimitInt: { input: any; output: any; }
  DateTime: { input: any; output: any; }
};

export type Address = Node & {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  line1: Scalars['String']['output'];
  line2?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  zipCode: Scalars['String']['output'];
};

export type Apartment = Node & {
  __typename?: 'Apartment';
  building: Building;
  code: Scalars['String']['output'];
  floor: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  model: Model;
  orientation?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  status: ApartmentStatus;
  view?: Maybe<Scalars['String']['output']>;
};

export type ApartmentConnection = Connection & {
  __typename?: 'ApartmentConnection';
  edges: Array<ApartmentEdge>;
  pageInfo: PageInfo;
};

export type ApartmentEdge = Edge & {
  __typename?: 'ApartmentEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: Apartment;
};

export type ApartmentInput = {
  code: Scalars['String']['input'];
  floor: Scalars['Int']['input'];
  modelId: Scalars['ID']['input'];
  orientation?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  status: ApartmentStatus;
  view?: InputMaybe<Scalars['String']['input']>;
};

export enum ApartmentStatus {
  Available = 'AVAILABLE',
  Reserved = 'RESERVED',
  Sold = 'SOLD'
}

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user?: Maybe<User>;
};

export type Building = Node & {
  __typename?: 'Building';
  address?: Maybe<Address>;
  apartments: Array<Apartment>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  models: Array<Model>;
  name: Scalars['String']['output'];
  organization: Organization;
  paymentPlans: Array<PaymentPlan>;
};

export type BuildingConnection = Connection & {
  __typename?: 'BuildingConnection';
  edges: Array<BuildingEdge>;
  pageInfo: PageInfo;
};

export type BuildingEdge = Edge & {
  __typename?: 'BuildingEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: Building;
};

export type BuildingInput = {
  name: Scalars['String']['input'];
};

export type Connection = {
  edges: Array<Edge>;
  pageInfo: PageInfo;
};

export type Edge = {
  cursor: Scalars['ConnectionCursor']['output'];
  node: Node;
};

export type Model = Node & {
  __typename?: 'Model';
  area: Scalars['Float']['output'];
  bathrooms: Scalars['Int']['output'];
  bedrooms: Scalars['Int']['output'];
  building: Building;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parkingSpots?: Maybe<Scalars['Int']['output']>;
};

export type ModelConnection = Connection & {
  __typename?: 'ModelConnection';
  edges: Array<ModelEdge>;
  pageInfo: PageInfo;
};

export type ModelEdge = Edge & {
  __typename?: 'ModelEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: Model;
};

export type ModelInput = {
  area: Scalars['Float']['input'];
  bathrooms: Scalars['Int']['input'];
  bedrooms: Scalars['Int']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parkingSpots?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPaymentPlan: PaymentPlan;
  createApartment: Apartment;
  createBuilding: Building;
  createModel: Model;
  deleteApartment: Scalars['Boolean']['output'];
  deleteBuilding: Scalars['Boolean']['output'];
  deleteModel: Scalars['Boolean']['output'];
  deletePaymentPlan: Scalars['Boolean']['output'];
  requestLogin?: Maybe<Scalars['Boolean']['output']>;
  updateApartment: Apartment;
  updateBuilding: Building;
  updateModel: Model;
  updatePaymentPlan: PaymentPlan;
  verifyLogin?: Maybe<AuthPayload>;
};


export type MutationAddPaymentPlanArgs = {
  buildingId: Scalars['ID']['input'];
  input: PaymentPlanInput;
};


export type MutationCreateApartmentArgs = {
  buildingId: Scalars['ID']['input'];
  input: ApartmentInput;
};


export type MutationCreateBuildingArgs = {
  input: BuildingInput;
};


export type MutationCreateModelArgs = {
  buildingId: Scalars['ID']['input'];
  input: ModelInput;
};


export type MutationDeleteApartmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBuildingArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteModelArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentPlanArgs = {
  paylmentPlanId: Scalars['ID']['input'];
};


export type MutationRequestLoginArgs = {
  phoneNumber: Scalars['String']['input'];
};


export type MutationUpdateApartmentArgs = {
  id: Scalars['ID']['input'];
  input: ApartmentInput;
};


export type MutationUpdateBuildingArgs = {
  id: Scalars['ID']['input'];
  input: BuildingInput;
};


export type MutationUpdateModelArgs = {
  id: Scalars['ID']['input'];
  input: ModelInput;
};


export type MutationUpdatePaymentPlanArgs = {
  input: PaymentPlanInput;
  paymentPlanId: Scalars['ID']['input'];
};


export type MutationVerifyLoginArgs = {
  otp: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Organization = Node & {
  __typename?: 'Organization';
  buildings: Array<Building>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  seatLimit?: Maybe<Scalars['Int']['output']>;
  users: Array<User>;
};

export type OrganizationConnection = Connection & {
  __typename?: 'OrganizationConnection';
  edges: Array<OrganizationEdge>;
  pageInfo: PageInfo;
};

export type OrganizationEdge = Edge & {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: Organization;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
};

export type PaginationFilter = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
  last?: InputMaybe<Scalars['ConnectionLimitInt']['input']>;
};

export type PaymentMilestone = {
  __typename?: 'PaymentMilestone';
  dueAt?: Maybe<Scalars['DateTime']['output']>;
  label: Scalars['String']['output'];
  percentage: Scalars['Float']['output'];
};

export type PaymentMilestoneInput = {
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  label: Scalars['String']['input'];
  percentage: Scalars['Float']['input'];
};

export type PaymentPlan = Node & {
  __typename?: 'PaymentPlan';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  structure: Array<PaymentMilestone>;
  type: PaymentPlanType;
};

export type PaymentPlanConnection = Connection & {
  __typename?: 'PaymentPlanConnection';
  edges: Array<PaymentPlanEdge>;
  pageInfo: PageInfo;
};

export type PaymentPlanEdge = Edge & {
  __typename?: 'PaymentPlanEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: PaymentPlan;
};

export type PaymentPlanInput = {
  name: Scalars['String']['input'];
  structure: Array<PaymentMilestoneInput>;
  type: PaymentPlanType;
};

export enum PaymentPlanType {
  FixedSchedule = 'FIXED_SCHEDULE',
  Milestone = 'MILESTONE'
}

export type Query = {
  __typename?: 'Query';
  apartment?: Maybe<Apartment>;
  apartments: ApartmentConnection;
  building?: Maybe<Building>;
  buildings: BuildingConnection;
  me: User;
  model?: Maybe<Model>;
  models: ModelConnection;
  organizations: OrganizationConnection;
  paymentPlan?: Maybe<PaymentPlan>;
  paymentPlans: PaymentPlanConnection;
  users: UserConnection;
};


export type QueryApartmentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryApartmentsArgs = {
  pagination?: InputMaybe<PaginationFilter>;
};


export type QueryBuildingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBuildingsArgs = {
  pagination?: InputMaybe<PaginationFilter>;
};


export type QueryModelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryModelsArgs = {
  pagination?: InputMaybe<PaginationFilter>;
};


export type QueryOrganizationsArgs = {
  pagination?: InputMaybe<PaginationFilter>;
};


export type QueryPaymentPlanArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentPlansArgs = {
  pagination?: InputMaybe<PaginationFilter>;
};


export type QueryUsersArgs = {
  pagination?: InputMaybe<PaginationFilter>;
};

export type User = Node & {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  phoneNumber: Scalars['String']['output'];
  role: UserRole;
  tenant?: Maybe<Organization>;
};

export type UserConnection = Connection & {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserEdge = Edge & {
  __typename?: 'UserEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: User;
};

export enum UserRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Owner = 'OWNER',
  Viewer = 'VIEWER'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Connection: ( ApartmentConnection ) | ( BuildingConnection ) | ( ModelConnection ) | ( OrganizationConnection ) | ( PaymentPlanConnection ) | ( UserConnection );
  Edge: ( ApartmentEdge ) | ( BuildingEdge ) | ( ModelEdge ) | ( OrganizationEdge ) | ( PaymentPlanEdge ) | ( UserEdge );
  Node: ( Address ) | ( Apartment ) | ( Building ) | ( Model ) | ( Organization ) | ( PaymentPlan ) | ( User );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Address>;
  Apartment: ResolverTypeWrapper<Apartment>;
  ApartmentConnection: ResolverTypeWrapper<ApartmentConnection>;
  ApartmentEdge: ResolverTypeWrapper<ApartmentEdge>;
  ApartmentInput: ApartmentInput;
  ApartmentStatus: ApartmentStatus;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Building: ResolverTypeWrapper<Building>;
  BuildingConnection: ResolverTypeWrapper<BuildingConnection>;
  BuildingEdge: ResolverTypeWrapper<BuildingEdge>;
  BuildingInput: BuildingInput;
  Connection: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Connection']>;
  ConnectionCursor: ResolverTypeWrapper<Scalars['ConnectionCursor']['output']>;
  ConnectionLimitInt: ResolverTypeWrapper<Scalars['ConnectionLimitInt']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Edge: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Edge']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Model: ResolverTypeWrapper<Model>;
  ModelConnection: ResolverTypeWrapper<ModelConnection>;
  ModelEdge: ResolverTypeWrapper<ModelEdge>;
  ModelInput: ModelInput;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Node']>;
  Organization: ResolverTypeWrapper<Organization>;
  OrganizationConnection: ResolverTypeWrapper<OrganizationConnection>;
  OrganizationEdge: ResolverTypeWrapper<OrganizationEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginationFilter: PaginationFilter;
  PaymentMilestone: ResolverTypeWrapper<PaymentMilestone>;
  PaymentMilestoneInput: PaymentMilestoneInput;
  PaymentPlan: ResolverTypeWrapper<PaymentPlan>;
  PaymentPlanConnection: ResolverTypeWrapper<PaymentPlanConnection>;
  PaymentPlanEdge: ResolverTypeWrapper<PaymentPlanEdge>;
  PaymentPlanInput: PaymentPlanInput;
  PaymentPlanType: PaymentPlanType;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserConnection: ResolverTypeWrapper<UserConnection>;
  UserEdge: ResolverTypeWrapper<UserEdge>;
  UserRole: UserRole;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  Apartment: Apartment;
  ApartmentConnection: ApartmentConnection;
  ApartmentEdge: ApartmentEdge;
  ApartmentInput: ApartmentInput;
  AuthPayload: AuthPayload;
  Boolean: Scalars['Boolean']['output'];
  Building: Building;
  BuildingConnection: BuildingConnection;
  BuildingEdge: BuildingEdge;
  BuildingInput: BuildingInput;
  Connection: ResolversInterfaceTypes<ResolversParentTypes>['Connection'];
  ConnectionCursor: Scalars['ConnectionCursor']['output'];
  ConnectionLimitInt: Scalars['ConnectionLimitInt']['output'];
  DateTime: Scalars['DateTime']['output'];
  Edge: ResolversInterfaceTypes<ResolversParentTypes>['Edge'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Model: Model;
  ModelConnection: ModelConnection;
  ModelEdge: ModelEdge;
  ModelInput: ModelInput;
  Mutation: {};
  Node: ResolversInterfaceTypes<ResolversParentTypes>['Node'];
  Organization: Organization;
  OrganizationConnection: OrganizationConnection;
  OrganizationEdge: OrganizationEdge;
  PageInfo: PageInfo;
  PaginationFilter: PaginationFilter;
  PaymentMilestone: PaymentMilestone;
  PaymentMilestoneInput: PaymentMilestoneInput;
  PaymentPlan: PaymentPlan;
  PaymentPlanConnection: PaymentPlanConnection;
  PaymentPlanEdge: PaymentPlanEdge;
  PaymentPlanInput: PaymentPlanInput;
  Query: {};
  String: Scalars['String']['output'];
  User: User;
  UserConnection: UserConnection;
  UserEdge: UserEdge;
};

export type AddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  line1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  line2?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipCode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApartmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Apartment'] = ResolversParentTypes['Apartment']> = {
  building?: Resolver<ResolversTypes['Building'], ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  floor?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  model?: Resolver<ResolversTypes['Model'], ParentType, ContextType>;
  orientation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ApartmentStatus'], ParentType, ContextType>;
  view?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApartmentConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApartmentConnection'] = ResolversParentTypes['ApartmentConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ApartmentEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ApartmentEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ApartmentEdge'] = ResolversParentTypes['ApartmentEdge']> = {
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Apartment'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BuildingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Building'] = ResolversParentTypes['Building']> = {
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  apartments?: Resolver<Array<ResolversTypes['Apartment']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  models?: Resolver<Array<ResolversTypes['Model']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organization?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  paymentPlans?: Resolver<Array<ResolversTypes['PaymentPlan']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BuildingConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['BuildingConnection'] = ResolversParentTypes['BuildingConnection']> = {
  edges?: Resolver<Array<ResolversTypes['BuildingEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BuildingEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BuildingEdge'] = ResolversParentTypes['BuildingEdge']> = {
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Building'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Connection'] = ResolversParentTypes['Connection']> = {
  __resolveType: TypeResolveFn<'ApartmentConnection' | 'BuildingConnection' | 'ModelConnection' | 'OrganizationConnection' | 'PaymentPlanConnection' | 'UserConnection', ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['Edge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
};

export interface ConnectionCursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ConnectionCursor'], any> {
  name: 'ConnectionCursor';
}

export interface ConnectionLimitIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ConnectionLimitInt'], any> {
  name: 'ConnectionLimitInt';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Edge'] = ResolversParentTypes['Edge']> = {
  __resolveType: TypeResolveFn<'ApartmentEdge' | 'BuildingEdge' | 'ModelEdge' | 'OrganizationEdge' | 'PaymentPlanEdge' | 'UserEdge', ParentType, ContextType>;
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Node'], ParentType, ContextType>;
};

export type ModelResolvers<ContextType = any, ParentType extends ResolversParentTypes['Model'] = ResolversParentTypes['Model']> = {
  area?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  bathrooms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bedrooms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  building?: Resolver<ResolversTypes['Building'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  parkingSpots?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModelConnection'] = ResolversParentTypes['ModelConnection']> = {
  edges?: Resolver<Array<ResolversTypes['ModelEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ModelEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ModelEdge'] = ResolversParentTypes['ModelEdge']> = {
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Model'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addPaymentPlan?: Resolver<ResolversTypes['PaymentPlan'], ParentType, ContextType, RequireFields<MutationAddPaymentPlanArgs, 'buildingId' | 'input'>>;
  createApartment?: Resolver<ResolversTypes['Apartment'], ParentType, ContextType, RequireFields<MutationCreateApartmentArgs, 'buildingId' | 'input'>>;
  createBuilding?: Resolver<ResolversTypes['Building'], ParentType, ContextType, RequireFields<MutationCreateBuildingArgs, 'input'>>;
  createModel?: Resolver<ResolversTypes['Model'], ParentType, ContextType, RequireFields<MutationCreateModelArgs, 'buildingId' | 'input'>>;
  deleteApartment?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteApartmentArgs, 'id'>>;
  deleteBuilding?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteBuildingArgs, 'id'>>;
  deleteModel?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteModelArgs, 'id'>>;
  deletePaymentPlan?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeletePaymentPlanArgs, 'paylmentPlanId'>>;
  requestLogin?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationRequestLoginArgs, 'phoneNumber'>>;
  updateApartment?: Resolver<ResolversTypes['Apartment'], ParentType, ContextType, RequireFields<MutationUpdateApartmentArgs, 'id' | 'input'>>;
  updateBuilding?: Resolver<ResolversTypes['Building'], ParentType, ContextType, RequireFields<MutationUpdateBuildingArgs, 'id' | 'input'>>;
  updateModel?: Resolver<ResolversTypes['Model'], ParentType, ContextType, RequireFields<MutationUpdateModelArgs, 'id' | 'input'>>;
  updatePaymentPlan?: Resolver<ResolversTypes['PaymentPlan'], ParentType, ContextType, RequireFields<MutationUpdatePaymentPlanArgs, 'input' | 'paymentPlanId'>>;
  verifyLogin?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<MutationVerifyLoginArgs, 'otp' | 'phoneNumber'>>;
};

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'Address' | 'Apartment' | 'Building' | 'Model' | 'Organization' | 'PaymentPlan' | 'User', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type OrganizationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Organization'] = ResolversParentTypes['Organization']> = {
  buildings?: Resolver<Array<ResolversTypes['Building']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  seatLimit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationConnection'] = ResolversParentTypes['OrganizationConnection']> = {
  edges?: Resolver<Array<ResolversTypes['OrganizationEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizationEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizationEdge'] = ResolversParentTypes['OrganizationEdge']> = {
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Organization'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['ConnectionCursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['ConnectionCursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentMilestoneResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentMilestone'] = ResolversParentTypes['PaymentMilestone']> = {
  dueAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  percentage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentPlanResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentPlan'] = ResolversParentTypes['PaymentPlan']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  structure?: Resolver<Array<ResolversTypes['PaymentMilestone']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['PaymentPlanType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentPlanConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentPlanConnection'] = ResolversParentTypes['PaymentPlanConnection']> = {
  edges?: Resolver<Array<ResolversTypes['PaymentPlanEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaymentPlanEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaymentPlanEdge'] = ResolversParentTypes['PaymentPlanEdge']> = {
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['PaymentPlan'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  apartment?: Resolver<Maybe<ResolversTypes['Apartment']>, ParentType, ContextType, RequireFields<QueryApartmentArgs, 'id'>>;
  apartments?: Resolver<ResolversTypes['ApartmentConnection'], ParentType, ContextType, Partial<QueryApartmentsArgs>>;
  building?: Resolver<Maybe<ResolversTypes['Building']>, ParentType, ContextType, RequireFields<QueryBuildingArgs, 'id'>>;
  buildings?: Resolver<ResolversTypes['BuildingConnection'], ParentType, ContextType, Partial<QueryBuildingsArgs>>;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  model?: Resolver<Maybe<ResolversTypes['Model']>, ParentType, ContextType, RequireFields<QueryModelArgs, 'id'>>;
  models?: Resolver<ResolversTypes['ModelConnection'], ParentType, ContextType, Partial<QueryModelsArgs>>;
  organizations?: Resolver<ResolversTypes['OrganizationConnection'], ParentType, ContextType, Partial<QueryOrganizationsArgs>>;
  paymentPlan?: Resolver<Maybe<ResolversTypes['PaymentPlan']>, ParentType, ContextType, RequireFields<QueryPaymentPlanArgs, 'id'>>;
  paymentPlans?: Resolver<ResolversTypes['PaymentPlanConnection'], ParentType, ContextType, Partial<QueryPaymentPlansArgs>>;
  users?: Resolver<ResolversTypes['UserConnection'], ParentType, ContextType, Partial<QueryUsersArgs>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  phoneNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRole'], ParentType, ContextType>;
  tenant?: Resolver<Maybe<ResolversTypes['Organization']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserConnection'] = ResolversParentTypes['UserConnection']> = {
  edges?: Resolver<Array<ResolversTypes['UserEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserEdge'] = ResolversParentTypes['UserEdge']> = {
  cursor?: Resolver<ResolversTypes['ConnectionCursor'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  Apartment?: ApartmentResolvers<ContextType>;
  ApartmentConnection?: ApartmentConnectionResolvers<ContextType>;
  ApartmentEdge?: ApartmentEdgeResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Building?: BuildingResolvers<ContextType>;
  BuildingConnection?: BuildingConnectionResolvers<ContextType>;
  BuildingEdge?: BuildingEdgeResolvers<ContextType>;
  Connection?: ConnectionResolvers<ContextType>;
  ConnectionCursor?: GraphQLScalarType;
  ConnectionLimitInt?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Edge?: EdgeResolvers<ContextType>;
  Model?: ModelResolvers<ContextType>;
  ModelConnection?: ModelConnectionResolvers<ContextType>;
  ModelEdge?: ModelEdgeResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Organization?: OrganizationResolvers<ContextType>;
  OrganizationConnection?: OrganizationConnectionResolvers<ContextType>;
  OrganizationEdge?: OrganizationEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PaymentMilestone?: PaymentMilestoneResolvers<ContextType>;
  PaymentPlan?: PaymentPlanResolvers<ContextType>;
  PaymentPlanConnection?: PaymentPlanConnectionResolvers<ContextType>;
  PaymentPlanEdge?: PaymentPlanEdgeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserConnection?: UserConnectionResolvers<ContextType>;
  UserEdge?: UserEdgeResolvers<ContextType>;
};

