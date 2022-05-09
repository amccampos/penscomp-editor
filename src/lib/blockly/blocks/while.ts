import Blockly from 'blockly/core.js'
import 'blockly/javascript.js'

Blockly.Blocks['controls_while2'] = {
  init: function() {
    this.jsonInit({
      "message0": "enquanto %1",
      "args0": [
        {
          "type": "input_value",
          "name": "BOOL",
          "check": "Boolean"
        }
      ],
      "message1": "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
      "args1": [{
        "type": "input_statement",
        "name": "DO"
      }],
      "previousStatement": null,
      "nextStatement": null,
      "style": "loop_blocks",
    });
  }
}

const Python = Blockly['Python']

Python['controls_while2'] = function(block) {
  var argument0 = Python.valueToCode(block, 'BOOL', Python.ORDER_NONE) || 'False';
  var branch = Python.statementToCode(block, 'DO');
  branch = Python.addLoopTrap(branch, block) || Python.PASS;
  return 'while ' + argument0 + ':\n' + branch;
}

const Js = Blockly['JavaScript']
Js['controls_while2'] = function(block) {
  var argument0 = Js.valueToCode(block, 'BOOL', Js.ORDER_NONE) || 'false';
  var branch = Js.statementToCode(block, 'DO');
  branch = Js.addLoopTrap(branch, block);
  return 'while (' + argument0 + ') {\n' + branch + '}\n';
}
