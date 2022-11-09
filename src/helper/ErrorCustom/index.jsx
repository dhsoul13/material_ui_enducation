export default class ErrorCustom extends Error {
  constructor({ name = 'Error', messange = "you didn't write", result }) {
    super();
    this.name = name;
    this.message = messange;
    this.result = result;
  }
}
