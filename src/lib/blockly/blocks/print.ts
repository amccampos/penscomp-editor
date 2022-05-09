import Blockly from 'blockly/core.js'

Blockly.Blocks['io_print'] = {
  init: function() {
    this.jsonInit({
      "message0": 'imprima %1',
      "args0": [
        {
          "type": "input_value",
          "name": "VALUE"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": '%{BKY_COLOUR_HUE}',
      "tooltip": "Imprime na saída o especificado.",
    });
  }
}

const blPy = Blockly['Python']
blPy['io_print'] = function(block) {
  var value_name = blPy.valueToCode(block, 'VALUE', blPy.ORDER_ATOMIC);
  var code = `print(${value_name})\n`;
  return code;
}

const Js = Blockly['JavaScript']
Js['io_print'] = function(block) {
  var value_name = Js.valueToCode(block, 'VALUE', Js.ORDER_ATOMIC);
  var code = `__output.push(${value_name});\n`;
  return code;
}
