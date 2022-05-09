import Blockly from 'blockly/core.js'

Blockly.Blocks['io_input_number'] = {
  init: function() {
    this.jsonInit({
      "message0": 'leia número',
      "output": null,
      "colour": '%{BKY_COLOUR_HUE}',
      "tooltip": "Lê um número inteiro da entrada.",
    });
  }
}

const Python = Blockly['Python']
Python['io_input_number'] = function() {
  var code = `int(input())`;
  return [code, Python.ORDER_NONE];
}

const Js = Blockly['JavaScript']
Js['io_input_number'] = function() {
  const getline = '(__input.shift())?.trim()'
  const code = `parseInt(${getline}, 10)`;
  return [code, Js.ORDER_NONE];
}
