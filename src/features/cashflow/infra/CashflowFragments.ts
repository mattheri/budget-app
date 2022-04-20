import { gql } from "@apollo/client";

export const INCOME_FIELDS = gql`
  fragment IncomeFields on CashflowIncome {
    _id
    name
    amount
    frequency {
      _id
      createdAt
      updatedAt
      value {
        label
        value
      }
    }
    category {
      label
      value
    }
    date
    oneTime
  }
`;

export const EXPENSE_FIELDS = gql`
  fragment ExpenseFields on CashflowExpense {
    _id
    name
    amount
    frequency {
      _id
      createdAt
      updatedAt
      value {
        label
        value
      }
    }
    category {
      label
      value
    }
    date
    skippable
  }
`;

export const CASHFLOW_FIELDS = gql`
  fragment CashflowFields on Cashflow {
    _id
    createdAt
    updatedAt
    incomes {
      ...IncomeFields
    }
    expenses {
      ...ExpenseFields
    }
  }
  ${INCOME_FIELDS}
  ${EXPENSE_FIELDS}
`;
