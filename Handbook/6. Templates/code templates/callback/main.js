/*************************************************************************
 * Module Description
 *************************************************************************/

/*************************************************************************
 * Function Description
 *************************************************************************/
function supportingFunction1() {}

/*************************************************************************
 * Function Description
 *************************************************************************/
function supportingFunction2() {}

/*************************************************************************
 * Function Description
 *************************************************************************/
function supportingFunction3() {}

/*************************************************************************
 * Main Function Description
 *************************************************************************/
function main(data, callback) {
  supportingFunction1();
  supportingFunction2();
  supportingFunction3();
  return callback(null, data);
}

module.exports = {main};
