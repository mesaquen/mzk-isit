/**
 * @author Mesaque Francisco <mesaquenf@gmail.com>
 */
function isIt() {
  /**
   * Given a value, returns its type
   * @param {Any} value
   * @return {string}
   */
  this.typeOf = function(value) {
    return typeof value;
  };
  /**
   * Check if is number
   * @param {Any} value
   * @return {Boolean}
   */
  this.number = function(value) {
    return typeOf(value) === typeOf(1);
  };
  /**
   * Check if is string
   * @param {Any} value
   * @return {Boolean}
   */
  this.string = function(value) {
    return typeOf(value) === 'string';
  };
  /**
   * Check if is boolean
   * @param {Any} value
   * @return {Boolean}
   */
  this.boolean = function(value) {
    return typeOf(value) === 'boolean';
  };
  /**
   * Check if is undefined
   * @param {Any} value
   * @return {Boolean}
   */
  this.undefined = function(value) {
    return typeOf(value) === 'undefined';
  };
  /**
   * Check if is null
   * @param {Any} value
   * @return {Boolean}
   */
  this.null = function(value) {
    return value === null;
  };
  /**
   * Check if is undefined or null
   * @param {Any} value
   * @return {Boolean}
   */
  this.undefinedOrNull = function(value) {
    return this.undefined(value) || null(value);
  };

  return this;
}

module.exports = isIt();
