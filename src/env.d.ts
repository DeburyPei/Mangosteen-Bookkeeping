/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
type Tag = {
  id: number;
  user_id: number;
  name: string;
  sign: string;
  kind: expenses | income;
};
type JSONValue =
  | null
  | boolean
  | string
  | number
  | JSONValue[]
  | Record<string, JSONValue>;
type Resources<T = any> = {
  resources: T[];
  pager: {
    page: number;
    per_page: number;
    count: number;
  };
};

declare module "*.scss" {
  const content: Record<string, any> = {};
  export default content;
}
type User = {
  id:number,
  email:string
}
type Item = {
  id: number;
  user_id: number;
  amount: number;
  tags_id: number[];
  tags?: Tag[];
  happen_at: string;
  kind: expenses | income;
};

type Resource<T> = {
  resource: T;
};

type ResourceError = {
  errors: Record<string, string[]>;
};
