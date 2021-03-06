window["##BUDIBASE_APPDEFINITION##"] = {
  hierarchy: {
    name: "root",
    type: "root",
    children: [
      {
        name: "customer",
        type: "record",
        fields: [
          {
            name: "name",
            type: "string",
            typeOptions: {
              maxLength: null,
              values: null,
              allowDeclaredValuesOnly: false,
            },
            label: "Name",
            getInitialValue: "default",
            getUndefinedValue: "default",
          },
          {
            name: "enquiry",
            type: "string",
            typeOptions: {
              maxLength: null,
              values: ["Google", "Facebook", "Word of Mouth"],
              allowDeclaredValuesOnly: true,
            },
            label: "Enquiry Source",
            getInitialValue: "default",
            getUndefinedValue: "default",
          },
        ],
        children: [],
        validationRules: [],
        nodeId: 1,
        indexes: [],
        allidsShardFactor: 64,
        collectionName: "customers",
        isSingle: false,
      },
      {
        name: "Contact",
        type: "record",
        fields: [
          {
            name: "name",
            type: "string",
            typeOptions: {
              maxLength: null,
              values: null,
              allowDeclaredValuesOnly: false,
            },
            label: "Name",
            getInitialValue: "default",
            getUndefinedValue: "default",
          },
          {
            name: "contacted",
            type: "bool",
            typeOptions: { allowNulls: false },
            label: "Has Been Contacted",
            getInitialValue: "default",
            getUndefinedValue: "default",
          },
        ],
        children: [],
        validationRules: [],
        nodeId: 3,
        indexes: [],
        allidsShardFactor: 64,
        collectionName: "contacts",
        isSingle: false,
      },
      {
        name: "naw",
        type: "record",
        fields: [
          {
            name: "s",
            type: "string",
            typeOptions: {
              maxLength: null,
              values: null,
              allowDeclaredValuesOnly: false,
            },
            label: "s",
            getInitialValue: "default",
            getUndefinedValue: "default",
          },
        ],
        children: [],
        validationRules: [],
        nodeId: 5,
        indexes: [],
        allidsShardFactor: 64,
        collectionName: "nas",
        isSingle: false,
      },
      {
        name: "jon",
        type: "record",
        fields: [
          {
            name: "j",
            type: "string",
            typeOptions: {
              maxLength: null,
              values: null,
              allowDeclaredValuesOnly: false,
            },
            label: "j",
            getInitialValue: "default",
            getUndefinedValue: "default",
          },
        ],
        children: [],
        validationRules: [],
        nodeId: 6,
        indexes: [],
        allidsShardFactor: 64,
        collectionName: "jos",
        isSingle: false,
      },
      {
        name: "Hello",
        type: "record",
        fields: [
          {
            name: "yes",
            type: "string",
            typeOptions: {
              maxLength: null,
              values: null,
              allowDeclaredValuesOnly: false,
            },
            label: "Yea",
            getInitialValue: "default",
            getUndefinedValue: "default",
          },
        ],
        children: [],
        validationRules: [],
        nodeId: 7,
        indexes: [],
        allidsShardFactor: 64,
        collectionName: "",
        isSingle: false,
      },
    ],
    pathMaps: [],
    indexes: [
      {
        name: "all_customers",
        type: "index",
        map: "return {...record};",
        filter: "",
        indexType: "ancestor",
        getShardName: "",
        getSortKey: "record.id",
        aggregateGroups: [],
        allowedRecordNodeIds: [1],
        nodeId: 2,
      },
      {
        name: "all_contacts",
        type: "index",
        map: "return {...record};",
        filter: "",
        indexType: "ancestor",
        getShardName: "",
        getSortKey: "record.id",
        aggregateGroups: [],
        allowedRecordNodeIds: [3],
        nodeId: 4,
      },
      {
        name: "all_",
        type: "index",
        map: "return {...record};",
        filter: "",
        indexType: "ancestor",
        getShardName: "",
        getSortKey: "record.id",
        aggregateGroups: [],
        allowedRecordNodeIds: [7],
        nodeId: 8,
      },
    ],
    nodeId: 0,
  },
  componentLibraries: [
    {
      importPath:
        "/lib/node_modules/@budibase/standard-components/dist/index.js",
      libName: "@budibase/standard-components",
    },
    {
      importPath:
        "/lib/node_modules/@budibase/bootstrap-components/dist/index.js",
      libName: "@budibase/bootstrap-components",
    },
  ],
  appRootPath: "/testApp2",
  props: {
    _component: "@budibase/standard-components/login",
    logo: "",
    loginRedirect: "",
    usernameLabel: "Username",
    passwordLabel: "Password",
    loginButtonLabel: "Login",
    buttonClass: "",
    inputClass: "",
  },
}
