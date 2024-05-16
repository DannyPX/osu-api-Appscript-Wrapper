interface HttpOptions_ {
  method: any;
  contentType: string;
  headers?: any;
  payload?: any;
}

interface HttpParameter_ {
  key: string;
  value?: string | number | boolean | any[];
}

interface StringConstructor {
  Empty: string;
}

String.Empty = "";

interface ArrayConstructor {
  Empty: Array<any>
}

Array.Empty = []