/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context as Context } from "./context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateUserInput: { // input type
    email?: string | null; // String
    password?: string | null; // String
  }
  CreateUserInputTemp: { // input type
    email?: string | null; // String
    password?: string | null; // String
  }
  OrganizationWhereUniqueInput: { // input type
    id: string; // ID!
  }
  UserWhereUniqueInput: { // input type
    id: string; // ID!
  }
}

export interface NexusGenEnums {
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
    first_name: string; // String!
    id: string; // ID!
    last_name: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createOrganization: NexusGenRootTypes['Organization'] | null; // Organization
    createProperty: NexusGenRootTypes['Property'] | null; // Property
    createUser: NexusGenRootTypes['User'] | null; // User
    deleteOrganization: NexusGenRootTypes['User'] | null; // User
    deleteProperty: NexusGenRootTypes['User'] | null; // User
    deleteUser: NexusGenRootTypes['User']; // User!
    login: NexusGenRootTypes['User']; // User!
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
    getOrganization: NexusGenRootTypes['Organization'] | null; // Organization
    getOrganizations: NexusGenRootTypes['Organization'][] | null; // [Organization!]
    getSelf: NexusGenRootTypes['User'] | null; // User
    getUser: NexusGenRootTypes['User'] | null; // User
    getUsers: Array<NexusGenRootTypes['User'] | null>; // [User]!
  }
  User: { // field return type
    first_name: string; // String!
    id: string; // ID!
    last_name: string; // String!
    owned_properties: NexusGenRootTypes['Organization'][]; // [Organization!]!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createOrganization: 'Organization'
    createProperty: 'Property'
    createUser: 'User'
    deleteOrganization: 'User'
    deleteProperty: 'User'
    deleteUser: 'User'
    login: 'User'
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
    getOrganization: 'Organization'
    getOrganizations: 'Organization'
    getSelf: 'User'
    getUser: 'User'
    getUsers: 'User'
  }
  User: { // field return type name
    first_name: 'String'
    id: 'ID'
    last_name: 'String'
    owned_properties: 'Organization'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createUser: { // args
      user: NexusGenInputs['CreateUserInput']; // CreateUserInput!
    }
    deleteUser: { // args
      user: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    login: { // args
      user: NexusGenInputs['CreateUserInputTemp']; // CreateUserInputTemp!
    }
    register: { // args
      user: NexusGenInputs['CreateUserInputTemp']; // CreateUserInputTemp!
    }
    updateUser: { // args
      user: NexusGenInputs['CreateUserInput']; // CreateUserInput!
      user_id: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    getOrganization: { // args
      where: NexusGenInputs['OrganizationWhereUniqueInput']; // OrganizationWhereUniqueInput!
    }
    getUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

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