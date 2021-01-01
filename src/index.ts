// import or export が1つもなければ空定義を入れておく
export {}

declare const global: {
  [x: string]: any;
}

global.doGet = () => {};
global.doPost = () => {};
