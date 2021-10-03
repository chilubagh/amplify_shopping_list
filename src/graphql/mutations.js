/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createShoppingListItem = /* GraphQL */ `
  mutation CreateShoppingListItem(
    $input: CreateShoppingListItemInput!
    $condition: ModelshoppingListItemConditionInput
  ) {
    createShoppingListItem(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateShoppingListItem = /* GraphQL */ `
  mutation UpdateShoppingListItem(
    $input: UpdateShoppingListItemInput!
    $condition: ModelshoppingListItemConditionInput
  ) {
    updateShoppingListItem(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteShoppingListItem = /* GraphQL */ `
  mutation DeleteShoppingListItem(
    $input: DeleteShoppingListItemInput!
    $condition: ModelshoppingListItemConditionInput
  ) {
    deleteShoppingListItem(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      owner
    }
  }
`;
