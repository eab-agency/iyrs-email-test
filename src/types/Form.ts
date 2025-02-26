export interface FormFieldProperties {
  placeholder: string | null;
  [key: string]: any;
}

export interface FormField {
  id: number;
  label: string;
  showLabel: boolean;
  alias: string;
  type: string;
  defaultValue: any;
  isRequired: boolean;
  validationMessage: string | null;
  helpMessage: string | null;
  order: number;
  properties: FormFieldProperties;
  validation: any[];
  parent: number | null;
  conditions: any[];
  labelAttributes: any;
  inputAttributes: any;
  containerAttributes: any;
  leadField: string | null;
  saveResult: boolean;
  isAutoFill: boolean;
  mappedObject: string | null;
  mappedField: string | null;
}

export interface FormData {
  isPublished: boolean;
  dateAdded: string;
  dateModified: string;
  createdBy: number;
  createdByUser: string;
  modifiedBy: number;
  modifiedByUser: string;
  id: number;
  name: string;
  alias: string;
  category: string | null;
  description: string | null;
  cachedHtml: string;
  publishUp: string | null;
  publishDown: string | null;
  fields: FormField[];
  actions: any[];
  template: any;
  inKioskMode: boolean;
  renderStyle: boolean;
  formType: string;
  postAction: string;
  postActionProperty: string;
  noIndex: boolean;
  formAttributes: any;
}
