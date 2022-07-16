/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context as Context } from "./context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateOrganizationInput: { // input type
    address?: string | null; // String
    address_2?: string | null; // String
    city?: string | null; // String
    country?: string | null; // String
    email?: string | null; // String
    name?: string | null; // String
    primary_phone_number?: string | null; // String
    state?: string | null; // String
    zip?: string | null; // String
  }
  CreatePropertyInput: { // input type
    address?: string | null; // String
    address_2?: string | null; // String
    city?: string | null; // String
    country?: string | null; // String
    name?: string | null; // String
    primary_phone_number?: string | null; // String
    state?: string | null; // String
    zip?: string | null; // String
  }
  CreateUserInput: { // input type
    email?: string | null; // String
    first_name?: string | null; // String
    last_name?: string | null; // String
    password?: string | null; // String
    residence?: string | null; // String
    role: NexusGenEnums['Role']; // Role!
  }
  CreateUserLogin: { // input type
    email?: string | null; // String
    password?: string | null; // String
  }
  UserWhereUniqueInput: { // input type
    id: string; // ID!
  }
  UserWhereUniqueInputEmail: { // input type
    email?: string | null; // String
  }
}

export interface NexusGenEnums {
  Role: "Owner" | "Superintendent" | "Tenant"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Organization: { // root type
    address: string; // String!
    address_2: string; // String!
    city: string; // String!
    country: string; // String!
    id: string; // ID!
    name: string; // String!
    primary_phone_number: string; // String!
    state: string; // String!
    zip: string; // String!
  }
  Property: { // root type
    address: string; // String!
    address_2: string; // String!
    city: string; // String!
    country: string; // String!
    id: string; // ID!
    name: string; // String!
    primary_phone_number: string; // String!
    state: string; // String!
    zip: string; // String!
  }
  Query: {};
  User: { // root type
    email: string; // String!
    first_name: string; // String!
    id: string; // ID!
    last_name: string; // String!
    role: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    changePassword: NexusGenRootTypes['User']; // User!
    createProperty: NexusGenRootTypes['Property']; // Property!
    deleteUser: NexusGenRootTypes['User']; // User!
    forgotPassword: boolean; // Boolean!
    login: NexusGenRootTypes['User']; // User!
    logout: boolean; // Boolean!
    register: NexusGenRootTypes['User']; // User!
    updateUser: NexusGenRootTypes['User'] | null; // User
  }
  Organization: { // field return type
    address: string; // String!
    address_2: string; // String!
    city: string; // String!
    country: string; // String!
    id: string; // ID!
    name: string; // String!
    owned_properties: NexusGenRootTypes['Property'][]; // [Property!]!
    primary_phone_number: string; // String!
    state: string; // String!
    zip: string; // String!
  }
  Property: { // field return type
    address: string; // String!
    address_2: string; // String!
    city: string; // String!
    country: string; // String!
    id: string; // ID!
    name: string; // String!
    primary_phone_number: string; // String!
    state: string; // String!
    zip: string; // String!
  }
  Query: { // field return type
    getSelf: NexusGenRootTypes['User'] | null; // User
    getUser: NexusGenRootTypes['User'] | null; // User
    getUserByEmail: NexusGenRootTypes['User'] | null; // User
    getUsers: Array<NexusGenRootTypes['User'] | null>; // [User]!
  }
  User: { // field return type
    email: string; // String!
    first_name: string; // String!
    id: string; // ID!
    last_name: string; // String!
    organizations: NexusGenRootTypes['Organization']; // Organization!
    residence: NexusGenRootTypes['Property']; // Property!
    role: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    changePassword: 'User'
    createProperty: 'Property'
    deleteUser: 'User'
    forgotPassword: 'Boolean'
    login: 'User'
    logout: 'Boolean'
    register: 'User'
    updateUser: 'User'
  }
  Organization: { // field return type name
    address: 'String'
    address_2: 'String'
    city: 'String'
    country: 'String'
    id: 'ID'
    name: 'String'
    owned_properties: 'Property'
    primary_phone_number: 'String'
    state: 'String'
    zip: 'String'
  }
  Property: { // field return type name
    address: 'String'
    address_2: 'String'
    city: 'String'
    country: 'String'
    id: 'ID'
    name: 'String'
    primary_phone_number: 'String'
    state: 'String'
    zip: 'String'
  }
  Query: { // field return type name
    getSelf: 'User'
    getUser: 'User'
    getUserByEmail: 'User'
    getUsers: 'User'
  }
  User: { // field return type name
    email: 'String'
    first_name: 'String'
    id: 'ID'
    last_name: 'String'
    organizations: 'Organization'
    residence: 'Property'
    role: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    changePassword: { // args
      password?: string | null; // String
      token?: string | null; // String
    }
    createProperty: { // args
      property: NexusGenInputs['CreatePropertyInput']; // CreatePropertyInput!
    }
    deleteUser: { // args
      user: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    forgotPassword: { // args
      email?: string | null; // String
    }
    login: { // args
      user: NexusGenInputs['CreateUserLogin']; // CreateUserLogin!
    }
    register: { // args
      initial_org: NexusGenInputs['CreateOrganizationInput']; // CreateOrganizationInput!
      user: NexusGenInputs['CreateUserInput']; // CreateUserInput!
    }
    updateUser: { // args
      user: NexusGenInputs['CreateUserInput']; // CreateUserInput!
      user_id: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    getUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    getUserByEmail: { // args
      user: NexusGenInputs['UserWhereUniqueInputEmail']; // UserWhereUniqueInputEmail!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}