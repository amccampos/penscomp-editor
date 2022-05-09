import Blockly from 'blockly/core.js'

Blockly.Blocks['io_input_line'] = {
  init: function() {
    this.jsonInit({
      "message0": 'leia linha',
      "output": null,
      "colour": '%{BKY_COLOUR_HUE}',
      "tooltip": "Lê uma linha inteira da entrada.",
    });
  }
}

const blPy = Blockly['Python']
blPy['io_input_line'] = function() {
  var code = `input()`;
  return [code, blPy.ORDER_NONE];
}

const Js = Blockly['JavaScript']
Js['io_input_line'] = function() {
  const code = '(__input.shift())?.trim()'
  return [code, Js.ORDER_NONE];
}
