interface HttpOptions_ {
  method: any;
  contentType: string;
  headers?: any;
  payload?: any;
}

interface HttpParameter_ {
  key: string;
  value?: string;
}

interface StringConstructor { 
  Empty: string;
}

String.Empty = "";